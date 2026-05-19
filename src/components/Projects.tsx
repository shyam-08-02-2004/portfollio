import React from 'react';
import { ExternalLink, Code, MapPin, Server, ShieldCheck, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const wonderlustFeatures = [
    {
      icon: <Server size={22} style={{ color: 'var(--color-cyan)' }} />,
      text: 'Backend logic & RESTful APIs using Node.js for itinerary management.',
    },
    {
      icon: <MapPin size={22} style={{ color: 'var(--color-purple)' }} />,
      text: 'Google Maps API integration for interactive maps, distance, and route planning.',
    },
    {
      icon: <ShieldCheck size={22} style={{ color: 'var(--color-indigo)' }} />,
      text: 'Secure user authentication and personalized dashboards for trip tracking.',
    },
    {
      icon: <Smartphone size={22} style={{ color: '#ec4899' }} />,
      text: 'Fully responsive and intuitive UI ensuring a seamless multi-device experience.',
    },
  ];

  const techStack = ['React.js', 'Node.js', 'REST APIs', 'Google Maps API', 'MySQL', 'Express.js', 'CSS3'];

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            A showcase of my flagship full-stack web application, highlighting end-to-end development capabilities from database design to API integration and frontend aesthetics.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '48px', overflow: 'hidden' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '48px',
              alignItems: 'center',
            }}
            className="project-grid"
          >
            {/* Project Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  Wonderlust
                </h3>
                <span
                  style={{
                    background: 'rgba(6, 182, 212, 0.15)',
                    color: 'var(--color-cyan)',
                    border: '1px solid var(--color-cyan)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  Full-Stack Platform
                </span>
              </div>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                A comprehensive travel recommendation platform developed to help users discover, plan, and manage personalized travel itineraries based on their preferences, budget, and geographical location.
              </p>

              {/* Key Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 700 }}>Key Highlights:</h4>
                {wonderlustFeatures.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        background: 'var(--bg-primary)',
                        padding: '10px',
                        borderRadius: '10px',
                        display: 'flex',
                        border: '1px solid var(--border-glass)',
                      }}
                    >
                      {feat.icon}
                    </div>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>{feat.text}</p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 700, marginBottom: '12px' }}>
                  Technologies Used:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-main)',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flexWrap: 'wrap' }}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ gap: '8px', padding: '12px 28px', fontSize: '1rem' }}
                >
                  <Code size={20} /> View Source Code
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ gap: '8px', padding: '12px 28px', fontSize: '1rem' }}
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              </div>
            </div>

            {/* Project Mockup Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-glass)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  position: 'relative',
                  background: 'var(--bg-primary)',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    background: 'var(--border-glass)',
                    padding: '12px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderBottom: '1px solid var(--border-glass)',
                  }}
                >
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                  <span style={{ marginLeft: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    wonderlust-app.shyam.dev
                  </span>
                </div>
                <img
                  src="/wonderlust_project_mockup.png"
                  alt="Wonderlust Travel Platform UI Mockup"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .project-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
