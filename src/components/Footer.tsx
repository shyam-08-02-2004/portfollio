import React from 'react';
import { Code, Share2, Mail, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-glass)',
        padding: '64px 0 32px',
        marginTop: '64px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
            borderBottom: '1px solid var(--border-glass)',
            paddingBottom: '48px',
            marginBottom: '32px',
          }}
          className="footer-top"
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '350px' }}>
            <a
              href="#hero"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                fontSize: '1.5rem',
                fontWeight: 800,
                fontFamily: 'var(--font-heading)',
                color: 'var(--text-main)',
              }}
            >
              <Code2 style={{ color: 'var(--color-cyan)' }} size={28} />
              <span className="gradient-text">Shyam.dev</span>
            </a>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              B.Tech CSE Student & Full-Stack Web Developer building high-performance web applications and RESTful services.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <a href="#hero" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Home</a>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>About</a>
            <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Skills</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Projects</a>
            <a href="#certifications" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Certifications</a>
            <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cyan)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>Contact</a>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'var(--bg-primary)',
                padding: '12px',
                borderRadius: '12px',
                color: 'var(--text-main)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-cyan)'; e.currentTarget.style.color = 'var(--color-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Code size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'var(--bg-primary)',
                padding: '12px',
                borderRadius: '12px',
                color: 'var(--text-main)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-purple)'; e.currentTarget.style.color = 'var(--color-purple)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Share2 size={22} />
            </a>
            <a
              href="mailto:shyamdangi084@gmail.com"
              style={{
                background: 'var(--bg-primary)',
                padding: '12px',
                borderRadius: '12px',
                color: 'var(--text-main)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-indigo)'; e.currentTarget.style.color = 'var(--color-indigo)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          <p>© 2026 Shyam Babu Dangi. All rights reserved. Built with React & TypeScript.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top { flexDirection: column; alignItems: center; textAlign: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
