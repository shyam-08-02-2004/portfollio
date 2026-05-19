import React from 'react';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="section-padding"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '120px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <div className="animate-fade-in-left" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-glass)',
                padding: '8px 16px',
                borderRadius: '30px',
                width: 'fit-content',
              }}
            >
              <Sparkles size={18} style={{ color: 'var(--color-cyan)' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                B.Tech CSE Student & Full-Stack Developer
              </span>
            </div>

            <h1 style={{ fontSize: '4rem', fontWeight: 800, lineHeight: 1.1 }}>
              Hi, I'm <br />
              <span className="gradient-text">Shyam Babu Dangi</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '540px' }}>
              Passionate software developer from Bhopal, Madhya Pradesh. Specializing in Core Java, Data Structures & Algorithms, and building robust full-stack web applications with React and Node.js.
            </p>

            <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                Explore My Work <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Terminal size={20} /> Contact Me
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '32px',
                marginTop: '32px',
                paddingTop: '32px',
                borderTop: '1px solid var(--border-glass)',
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>7.60</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>B.Tech CGPA</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>100%+</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Dedication</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)' }}>3+</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Core Certifications</p>
              </div>
            </div>
          </div>

          {/* Right Image / Avatar */}
          <div className="animate-fade-in-right" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, var(--color-purple-glow) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(40px)',
                zIndex: 0,
              }}
              className="animate-pulse-glow"
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '30px',
                overflow: 'hidden',
                border: '1px solid var(--border-glass)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                background: 'var(--bg-glass)',
              }}
              className="animate-float hero-img-wrapper"
            >
              <img
                src="/shyam_profile.jpg"
                alt="Shyam Babu Dangi Portrait"
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

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; text-align: center; }
          .hero-grid .animate-fade-in-left { alignItems: center; }
          .hero-img-wrapper { maxWidth: 450px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
