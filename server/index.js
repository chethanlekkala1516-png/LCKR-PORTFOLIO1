import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import { mkdir, appendFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const PORT = Number(process.env.PORT || 5000);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'data');
const messagesFile = path.join(dataDir, 'messages.json');

app.disable('x-powered-by');
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

const allowedOrigins = process.env.CLIENT_ORIGIN
  ? process.env.CLIENT_ORIGIN.split(',').map(value => value.trim())
  : [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'http://localhost:5174',
      'http://127.0.0.1:5174',
      'http://localhost:3000',
      'https://lckr-portfolio-1.vercel.app'
    ];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // Allow all vercel.app domains (production and preview URLs)
    try {
      const hostname = new URL(origin).hostname;
      if (hostname.endsWith('.vercel.app') || hostname === 'localhost' || hostname === '127.0.0.1') {
        return callback(null, true);
      }
    } catch {}
    // Allow preview deployments or local dev if matched
    const isLocal = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
    if (isLocal) {
      return callback(null, true);
    }
    return callback(null, false);
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json({ limit: '20kb' }));

// Health Check
app.get('/api/health', (_req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'portfolio-api', 
    timestamp: new Date().toISOString() 
  });
});

// Contact endpoint rate limiting: max 8 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { message: 'Too many messages sent from this IP. Please wait 15 minutes before trying again.' }
});

app.use('/api/contact', contactLimiter);

const clean = (value, maxLength) => String(value ?? '').trim().slice(0, maxLength);
const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

app.post('/api/contact', async (req, res) => {
  const name = clean(req.body?.name, 80);
  const email = clean(req.body?.email, 254);
  const subject = clean(req.body?.subject, 120);
  const message = clean(req.body?.message, 3000);

  if (name.length < 2 || !validEmail(email) || message.length < 10) {
    return res.status(400).json({ 
      message: 'Please provide a valid name (at least 2 chars), a valid email address, and a message (at least 10 chars).' 
    });
  }

  const submission = {
    name,
    email,
    subject: subject || 'Portfolio Contact Inquiry',
    message,
    receivedAt: new Date().toISOString()
  };

  const smtpConfigured = Boolean(
    process.env.SMTP_HOST && 
    process.env.SMTP_USER && 
    process.env.SMTP_PASS && 
    process.env.CONTACT_TO
  );

  try {
    if (smtpConfigured) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
        auth: { 
          user: process.env.SMTP_USER, 
          pass: process.env.SMTP_PASS 
        }
      });

      await transporter.sendMail({
        from: process.env.CONTACT_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO,
        replyTo: email,
        subject: `[Portfolio] ${submission.subject}`,
        text: `Name: ${name}\nEmail: ${email}\nReceived: ${submission.receivedAt}\n\nMessage:\n${message}`
      });

      return res.status(200).json({ 
        message: 'Message delivered successfully via email. Thanks for reaching out!' 
      });
    }

    // Local file fallback persistence
    await mkdir(dataDir, { recursive: true });
    await appendFile(messagesFile, `${JSON.stringify(submission)}\n`, { encoding: 'utf8', mode: 0o600 });
    
    return res.status(200).json({ 
      message: 'Message received and stored locally on the server. (Email delivery is in local development mode).' 
    });
  } catch (error) {
    console.error('Contact submission error:', error.message);
    return res.status(500).json({ 
      message: 'Unable to process your message at this moment. Please email me directly at CHETHANKUMARREDDYLEKKALA@GMAIL.COM.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
  console.log(process.env.SMTP_HOST 
    ? 'SMTP email delivery is active.' 
    : 'Running in local persistence mode (messages saved in server/data/messages.json).'
  );
});
