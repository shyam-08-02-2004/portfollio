import React from 'react';
import { Award, Camera, Cpu, Code2, Lightbulb } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Data Structures & Algorithms using Java',
      issuer: 'Core Computer Science & Problem Solving Certification',
      icon: <Award size={32} style={{ color: 'var(--color-cyan)' }} />,
      color: 'var(--color-cyan)',
    },
    {
      title: 'Java Full Stack Web Development',
      issuer: 'Comprehensive Full Stack Engineering Certification',
      icon: <Award size={32} style={{ color: 'var(--color-purple)' }} />,
      color: 'var(--color-purple)',
    },
  ];

  const interests = [
    {
      title: 'Building Full-Stack Applications',
      description: 'Architecting scalable web solutions with modern React.js frontend and Node.js RESTful APIs.',
      icon: <Code2 size={32} style={{ color: 'var(--color-cyan)' }} />,
    },
    {
      title: 'Learning New Technologies',
      description: 'Constantly expanding knowledge of emerging frameworks, libraries, cloud platforms, and developer tooling.',
      icon: <Cpu size={32} style={{ color: 'var(--color-purple)' }} />,
    },
    {
      title: 'Problem Solving',
      description: 'Tackling complex algorithmic puzzles, optimizing code complexity, and designing clean database schemas.',
      icon: <Lightbulb size={32} style={{ color: '#f59e0b' }} />,
    },
    {
      title: 'Photography',
      description: 'Capturing moments, composition, visual storytelling, and aesthetic balance through the camera lens.',
      icon: <Camera size={32} style={{ color: '#ec4899' }} />,
    },
  ];

  return (
    <section id="certifications" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px' }}>
            Certifications & <span className="gradient-text">Interests</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Official professional certifications validating technical skills, alongside personal interests that fuel creativity.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{ marginBottom: '64px' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
            Official <span className="gradient-text">Certifications</span>
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  borderLeft: `4px solid ${cert.color}`,
                }}
              >
                <div
                  style={{
                    background: 'var(--bg-primary)',
                    padding: '18px',
                    borderRadius: '16px',
                    display: 'flex',
                    border: '1px solid var(--border-glass)',
                  }}
                >
                  {cert.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--text-main)', fontWeight: 700 }}>
                    {cert.title}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Grid */}
        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
            Personal <span className="gradient-text">Interests & Passions</span>
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {interests.map((item, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    background: 'var(--bg-primary)',
                    padding: '16px',
                    borderRadius: '16px',
                    display: 'flex',
                    width: 'fit-content',
                    border: '1px solid var(--border-glass)',
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
