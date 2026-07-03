import React from 'react';
import { Award, Compass, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Java Programming Language',
      issuer: 'Core Industry Certification',
      icon: <Award size={32} style={{ color: 'var(--color-cyan)' }} />,
      color: 'var(--color-cyan)',
    },
    {
      title: 'Data Structures & Algorithms in Java',
      issuer: 'Advanced Problem Solving',
      icon: <Award size={32} style={{ color: 'var(--color-purple)' }} />,
      color: 'var(--color-purple)',
    },
    {
      title: 'Full-Stack Web Development',
      issuer: 'Modern Web Technologies',
      icon: <Award size={32} style={{ color: 'var(--color-indigo)' }} />,
      color: 'var(--color-indigo)',
    },
  ];

  const hobbies = [
    {
      title: 'Travelling & Exploring Cultures',
      description: 'Passionate about discovering new destinations, experiencing diverse cultural paradigms, and broadening worldviews.',
      icon: <Compass size={32} style={{ color: '#ec4899' }} />,
    },
    {
      title: 'Playing Cricket',
      description: 'Enthusiastic team player who enjoys the strategic and physical dynamics of competitive cricket.',
      icon: <Trophy size={32} style={{ color: '#f59e0b' }} />,
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
            Official professional certifications validating my technical expertise, alongside personal passions that keep me inspired and energized.
          </p>
        </div>

        {/* Certifications Grid */}
        <div style={{ marginBottom: '64px' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
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
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Grid */}
        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center' }}>
            Hobbies & <span className="gradient-text">Interests</span>
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '32px',
            }}
          >
            {hobbies.map((hobby, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '36px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
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
                  {hobby.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', fontWeight: 700 }}>
                    {hobby.title}
                  </h4>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {hobby.description}
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
