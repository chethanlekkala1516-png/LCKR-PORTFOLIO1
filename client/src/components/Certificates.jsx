import React, { useState } from 'react';
import { certificateData } from '../data/portfolioData';

export default function Certificates() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="certificates" className="section-wrap content-section certificates-section">
      <div className="section-heading reveal">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          <span>VERIFIED CREDENTIALS</span>
        </div>
        <h2>
          Certificates & <span className="gradient-text">workshops.</span>
        </h2>
        <p>
          Verified documentation of completed technical workshops and hands-on training sessions.
        </p>
      </div>

      <div className="certificate-showcase-card reveal">
        <div className="certificate-card-inner">
          <div className="certificate-art-side">
            <div className="cert-preview-frame">
              <div className="cert-watermark">GESTURE TECH</div>
              <div className="cert-inner-border">
                <span className="cert-seal" aria-hidden="true">★</span>
                <div className="cert-title-preview">CERTIFICATE OF PARTICIPATION</div>
                <div className="cert-recipient-preview">LEKKALA CHETHAN KUMAR REDDY</div>
                <div className="cert-workshop-name">Hands-on Gesture-Controlled Technology Workshop</div>
                <div className="cert-meta-bottom">
                  <span>VERIFIED FILE</span>
                  <span>PDF FORMAT</span>
                </div>
              </div>
            </div>
          </div>

          <div className="certificate-info-side">
            <div className="cert-badge-row">
              <span className="cert-status-badge">VERIFIED PARTICIPATION</span>
              <span className="cert-type-badge">{certificateData.type}</span>
            </div>

            <h3 className="cert-card-title">{certificateData.title}</h3>

            <p className="cert-card-desc">
              {certificateData.description}
            </p>

            <div className="cert-spec-list">
              <div className="cert-spec-item">
                <span className="spec-label">File Name:</span>
                <span className="spec-val">gesture-tech-workshop-certificate.pdf</span>
              </div>
              <div className="cert-spec-item">
                <span className="spec-label">Verification:</span>
                <span className="spec-val text-bright">Document verified in project repository</span>
              </div>
            </div>

            <div className="cert-actions-row">
              <a 
                href={certificateData.pdfUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="button button-primary"
                aria-label="Open certificate PDF in a new browser tab"
              >
                <span>View Full Certificate</span> <span aria-hidden="true">↗</span>
              </a>

              <a 
                href={certificateData.pdfUrl} 
                download={certificateData.fileName}
                className="button button-secondary"
                aria-label="Download certificate PDF file"
              >
                <span>Download PDF</span> <span aria-hidden="true">↓</span>
              </a>

              <button 
                className="button button-ghost" 
                onClick={() => setShowPreviewModal(true)}
                aria-label="Preview certificate inside modal"
              >
                <span>Quick Preview</span> <span aria-hidden="true">👁</span>
              </button>
            </div>
          </div>
        </div>

        <div className="cert-footer-note">
          <span className="cert-note-icon" aria-hidden="true">ℹ</span>
          <span>
            Only verified achievements are listed. Future certifications, competitive programming ranks, and hackathon awards will be updated here upon completion.
          </span>
        </div>
      </div>

      {showPreviewModal && (
        <div 
          className="modal-backdrop" 
          onClick={() => setShowPreviewModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview Modal"
        >
          <div className="modal-card cert-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <h4 className="modal-title">{certificateData.title}</h4>
              <button 
                className="modal-close-btn" 
                onClick={() => setShowPreviewModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="modal-body cert-modal-body">
              <iframe 
                src={`${certificateData.pdfUrl}#toolbar=0`} 
                title="Certificate PDF Preview" 
                className="cert-iframe-preview" 
              />
              <div className="cert-modal-footer">
                <a 
                  href={certificateData.pdfUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="button button-primary"
                >
                  Open in New Tab ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
