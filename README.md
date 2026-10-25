# Chethan Kumar Reddy Lekkala — Developer Portfolio

An advanced, premium, cyber-futuristic portfolio built with **React 18**, **Vite**, and **Express.js**, designed to showcase real skills, verified academic foundations, and upcoming software projects to recruiters, college faculty, hackathon judges, and internship opportunities.

---

## 🚀 Key Features

- **Personal Brand & Architecture:**
  - Modern, dark aesthetic with deep obsidian/navy background and balanced violet, electric blue, and cyan accents.
  - Interactive typewriter introduction highlighting computer science student foundations.
  - Verified profile portrait (`/profile-photo.png`) in Hero and About sections.
  - Accessible, responsive navigation with scroll spy, mobile drawer menu, and top scroll progress bar.
- **Skills & Learning Dashboard:**
  - Categorized skill breakdown (Programming, Web Development, Backend/Data, Tools, Key Interests).
  - Transparent learning status badges (`Core`, `Learning & Building`, `Exploring`, `Foundational`).
  - Single-source configuration in `client/src/data/portfolioData.js`.
- **Project Showcase & Modal Details:**
  - Filterable project gallery (`All`, `Full Stack`, `Web Development`, `Python`).
  - Clear distinction between *In Progress* builds and *Planned Concepts*.
  - Deep-dive modal with problem statements, architecture, tech stack, and key planned features.
  - Custom branded SVG graphics (no broken images or placeholder templates).
- **Academic & Journey Timeline:**
  - Vertical timeline with glowing status nodes for B.Tech (NIAT at Annamacharya University, Batch 2026–2030), Intermediate (95.6%), Class X (95.0%), and target first-year engineering milestones.
- **Verified Credentials & Resume:**
  - Real, verified workshop certificate card for **Hands-on Gesture-Controlled Technology Workshop** with in-app preview modal, new tab viewer, and direct PDF download.
  - Functional **Download Resume** button linking directly to verified `client/public/resume.pdf`.
- **Full-Stack Contact API:**
  - Express.js backend with Helmet security headers, multi-origin CORS, and IP rate limiting (8 requests / 15 minutes).
  - Dual delivery modes: SMTP email delivery via Nodemailer or local JSON fallback (`server/data/messages.json`).
  - Frontend copy-email button with visual feedback and direct mailto fallback.

---

## 📂 Project Structure

```text
├── client/                               # Frontend React + Vite Application
│   ├── public/
│   │   ├── gesture-tech-workshop-certificate.pdf # Verified Workshop Certificate
│   │   ├── profile-photo.png             # User's uploaded portrait photo
│   │   ├── profile-photo-backup.png      # Original photo backup
│   │   └── resume.pdf                    # Verified Resume PDF
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx                 # Editorial introduction & academic metrics
│   │   │   ├── Certificates.jsx          # Workshop certificate showcase & modal preview
│   │   │   ├── Contact.jsx               # Contact form with copy button & feedback
│   │   │   ├── Footer.jsx                # Brand mark, quick links, copyright
│   │   │   ├── Hero.jsx                  # Opening hero, typewriter effect & portrait
│   │   │   ├── Navbar.jsx                # Responsive navbar, progress bar & mobile drawer
│   │   │   ├── ProjectModal.jsx          # Detailed project specification modal
│   │   │   ├── Projects.jsx              # Filterable project gallery with SVG previews
│   │   │   ├── Skills.jsx                # Filterable skills dashboard
│   │   │   └── Timeline.jsx              # Vertical education & milestones timeline
│   │   ├── data/
│   │   │   └── portfolioData.js          # Central single source of truth for all content
│   │   ├── App.jsx                       # Main assembly with scroll spy & ambient lights
│   │   ├── main.jsx                      # React entry point
│   │   └── styles.css                    # Design system with CSS variables & responsive rules
│   ├── index.html                        # SEO metadata, Open Graph tags & SVG favicon
│   ├── package.json
│   └── .env.example
├── server/                               # Backend Express API
│   ├── index.js                          # Express server, CORS, rate limiting, SMTP/local fallback
│   ├── package.json
│   └── .env.example
├── .gitignore                            # Thorough ignores for secrets, logs, build outputs
├── package.json                          # Root orchestration with concurrently
└── README.md
```

---

## 💻 Local Windows Development Guide

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended, tested on Node.js v24)
- **npm** (comes bundled with Node.js)

### 2. First-Time Setup
Open PowerShell or Windows Terminal in the project root directory (`c:\Users\cheth\Downloads\LCKR MINI`):

```powershell
# 1. Install root dependencies (concurrently)
npm install

# 2. Install client dependencies
npm --prefix client install

# 3. Install server dependencies
npm --prefix server install
```

### 3. Start Both Frontend & Backend Concurrently
From the project root directory, run:

```powershell
npm run dev
```

This concurrently launches:
- **Client (Frontend):** `http://localhost:5173` (or `http://127.0.0.1:5173`)
- **Server (Backend API):** `http://localhost:5000`

Open `http://localhost:5173` in your browser.

### 4. Running Client or Server Individually (Optional)
If you wish to run them in separate terminal tabs:

**Terminal 1 (Backend):**
```powershell
npm run dev:server
```

**Terminal 2 (Frontend):**
```powershell
npm run dev:client
```

### 5. Production Build Verification
To test the production build of the React application:

```powershell
npm run build
```
The optimized production bundle will be generated in `client/dist/`.

---

## ⚙️ Environment Configuration

### Backend (`server/.env`)
Create `server/.env` by copying `server/.env.example`:

```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173,http://127.0.0.1:5173

# Optional: Real SMTP email delivery (e.g. Gmail App Password)
# Leave blank to safely store incoming messages locally in server/data/messages.json
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
CONTACT_TO=CHETHANKUMARREDDYLEKKALA@GMAIL.COM
CONTACT_FROM=
```

> **Note on Gmail:** If enabling SMTP, use a 16-character Google App Password (with 2-Step Verification enabled on your Google account), never your standard account password.

### Frontend (`client/.env`)
Create `client/.env` if you need to point to a custom API URL:

```env
VITE_API_URL=http://localhost:5000
```
For production deployments, change `VITE_API_URL` to your live backend domain (e.g., `https://your-portfolio-api.onrender.com`).

---

## ✏️ How to Update Your Content

You do not need to hunt through dozens of JSX files to change your details. All personal information, skills, projects, and milestones are neatly organized in a single file:

👉 `client/src/data/portfolioData.js`

- **Update Bio or Social Links:** Edit `personalInfo` or `aboutData`.
- **Add New Skills:** Add objects to `skillsData` under the appropriate category.
- **Update Projects / Add Repositories:** Modify `projectsData`. When you start a repository or deploy a live demo, simply paste the GitHub URL into the project's `github` property!
- **Add Milestones / Education:** Add entries to `journeyData`.
- **Update Resume / Certificate:** Place new PDF files in `client/public/` and update the file paths in `portfolioData.js`.

---

## 🌐 Deployment Instructions

### Frontend (Vercel or Netlify)
1. Push the repository to GitHub.
2. In Vercel / Netlify, import the repository.
3. Configure the build settings:
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Set Environment Variable:
   - `VITE_API_URL`: Your deployed backend URL (e.g. `https://chethan-portfolio-api.onrender.com`).

### Backend (Render or Railway)
1. In Render, create a new **Web Service** and connect your repository.
2. Configure service settings:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. Set Environment Variables:
   - `PORT`: `5000` (or leave default assigned by host)
   - `CLIENT_ORIGIN`: Your deployed Vercel frontend URL (e.g. `https://chethan-portfolio.vercel.app`)
   - (Optional) `SMTP_*` variables if you want direct email delivery.
4. Verify backend health:
   - Navigate to `https://your-backend-url.onrender.com/api/health`. You will receive `{"status":"ok","service":"portfolio-api"}`.

---

## 🛡️ Security & Accessibility Compliance

- **No Secrets in Source:** All sensitive credentials belong in `.env`, which is strictly ignored by `.gitignore`.
- **Reduced Motion Support:** Respects user's operating system preferences (`@media (prefers-reduced-motion: reduce)` disables heavy animations and transitions).
- **Keyboard Navigation:** High-contrast focus rings (`outline: 2px solid var(--cyan)`) and accessible ARIA attributes across all interactive components.
- **Rate-Limited API:** Backend limits spam submissions using `express-rate-limit`.

---

© 2026 Chethan Kumar Reddy Lekkala. All rights reserved.
