import React from 'react';
import { ExternalLink, Code, MapPin, Server, ShieldCheck, Smartphone, Lock, Gamepad2, Database, LayoutTemplate } from 'lucide-react';

const Projects: React.FC = () => {
  const wonderlustFeatures = [
    {
      icon: <Code size={22} style={{ color: 'var(--color-cyan)' }} />,
      text: 'Built a full-stack travel booking platform.',
    },
    {
      icon: <Server size={22} style={{ color: 'var(--color-purple)' }} />,
      text: 'Developed secure RESTful APIs using Node.js and Express.js.',
    },
    {
      icon: <Database size={22} style={{ color: 'var(--color-indigo)' }} />,
      text: 'Implemented CRUD operations for travel listings.',
    },
    {
      icon: <MapPin size={22} style={{ color: '#ec4899' }} />,
      text: 'Integrated Google Maps API for location and route planning.',
    },
    {
      icon: <ShieldCheck size={22} style={{ color: 'var(--color-cyan)' }} />,
      text: 'Added user authentication and authorization.',
    },
    {
      icon: <Smartphone size={22} style={{ color: 'var(--color-purple)' }} />,
      text: 'Designed responsive UI for desktop and mobile.',
    },
    {
      icon: <Database size={22} style={{ color: 'var(--color-indigo)' }} />,
      text: 'Managed data using MongoDB and Mongoose.',
    },
  ];

  const techStack = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'Google Maps API'];

  const dragonTigerFeatures = [
    {
      icon: <Gamepad2 size={22} style={{ color: 'var(--color-cyan)' }} />,
      text: 'Developed a responsive Dragon Tiger gaming application with real-time betting functionality.',
    },
    {
      icon: <Lock size={22} style={{ color: 'var(--color-purple)' }} />,
      text: 'Implemented secure user authentication and wallet management.',
    },
    {
      icon: <LayoutTemplate size={22} style={{ color: 'var(--color-indigo)' }} />,
      text: 'Designed a premium, mobile-friendly user interface.',
    },
  ];

  const dragonTigerTechStack = ['React.js', 'TypeScript', 'CSS3', 'Vite', 'Vercel', 'Local Storage'];

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

        {/* Dragon Tiger Project */}
        <div className="glass-panel" style={{ padding: '48px', overflow: 'hidden', marginTop: '48px' }}>
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
                  Dragon Tiger Casino
                </h3>
                <span
                  style={{
                    background: 'rgba(168, 85, 247, 0.15)',
                    color: 'var(--color-purple)',
                    border: '1px solid var(--color-purple)',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  Web Application
                </span>
              </div>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                A premium web-based online casino game featuring interactive Dragon vs Tiger betting mechanics, a secure user registration and sign-in system, and client-side account balance management.
              </p>

              {/* Key Features List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', fontWeight: 700 }}>Key Highlights:</h4>
                {dragonTigerFeatures.map((feat, idx) => (
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
                  {dragonTigerTechStack.map((tech, tIdx) => (
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
                  href="https://github.com/shyam-08-02-2004/dragon-tiger"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ gap: '8px', padding: '12px 28px', fontSize: '1rem' }}
                >
                  <Code size={20} /> View Source Code
                </a>
                <a
                  href="https://dragon-tiger-shyam-babu-s-projects.vercel.app/"
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
                    dragon-tiger.shyam.dev
                  </span>
                </div>
                <img
                  src="/dragon_tiger_project_mockup.jpg"
                  alt="Dragon Tiger Casino UI Mockup"
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
