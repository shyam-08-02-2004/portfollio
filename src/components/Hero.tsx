import React, { useState } from 'react';
import { ArrowRight, MapPin, Copy, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shyamdangi084@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const techBadges = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Java', 'REST APIs'];

  return (
    <section
      id="hero"
      className="section-padding"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '130px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Live Status Pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div className="status-pill">
                <span className="pulse-dot" />
                <span>Open for Full Stack MERN Roles</span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                }}
              >
                <MapPin size={16} style={{ color: 'var(--color-cyan)' }} />
                <span>Indore, MP, India</span>
              </div>
            </div>

            <h1 style={{ fontSize: '4.2rem', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.03em' }}>
              Building Scalable <br />
              <span className="gradient-text">Full Stack Web Apps</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '600px' }}>
              I'm <strong style={{ color: 'var(--text-main)' }}>Shyam Babu Dangi</strong>, a Full Stack MERN Developer specializing in building production-grade web applications, secure REST APIs, role-based authentication, and modern user experiences.
            </p>

            {/* Quick Tech Stack Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
              {techBadges.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-glass)',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-cyan)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                View Featured Work <ArrowRight size={20} />
              </a>
              <button onClick={handleCopyEmail} className="btn-secondary" style={{ gap: '10px' }}>
                {copied ? <Check size={18} style={{ color: '#10b981' }} /> : <Copy size={18} />}
                {copied ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>

            {/* Key Metrics / Highlights */}
            <div
              className="hero-stats"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginTop: '32px',
                paddingTop: '32px',
                borderTop: '1px solid var(--border-glass)',
              }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--border-glass)' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }} className="gradient-text-cyan">7.69</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '4px' }}>B.Tech CGPA (SIRT)</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--border-glass)' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }} className="gradient-text-cyan">3+</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '4px' }}>MERN Projects</p>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--border-glass)' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }} className="gradient-text-cyan">2+</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '4px' }}>Certifications</p>
              </div>
            </div>
          </div>

          {/* Right Profile Image with Neon Ring Frame */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 75%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(50px)',
                zIndex: 0,
              }}
              className="animate-pulse-glow"
            />

            <div className="profile-border-wrapper animate-float" style={{ zIndex: 1, maxWidth: '420px', width: '100%' }}>
              <div
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  position: 'relative',
                }}
              >
                <img
                  src="/shyam_profile.jpg"
                  alt="Shyam Babu Dangi Professional Profile Portrait"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '520px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; text-align: center; }
          .hero-grid > div { align-items: center; }
          .hero-stats { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .hero-stats { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
