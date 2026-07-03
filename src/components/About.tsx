import React from 'react';
import { GraduationCap, Users, Brain, Clock, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  const softSkills = [
    {
      icon: <Users size={32} style={{ color: 'var(--color-cyan)' }} />,
      title: 'Team Collaboration',
      description: 'Effective communicator who thrives in collaborative team environments and values collective success.',
    },
    {
      icon: <Brain size={32} style={{ color: 'var(--color-purple)' }} />,
      title: 'Analytical & Problem Solving',
      description: 'Strong analytical mindset with a passion for breaking down complex challenges into elegant, efficient solutions.',
    },
    {
      icon: <ShieldCheck size={32} style={{ color: 'var(--color-indigo)' }} />,
      title: 'Decision Making',
      description: 'Capable of making sound, reasoned decisions under pressure while balancing technical and project trade-offs.',
    },
    {
      icon: <Clock size={32} style={{ color: '#ec4899' }} />,
      title: 'Time Management',
      description: 'Highly organized and diligent, ensuring project milestones and strict deadlines are met consistently.',
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px' }}>
            About <span className="gradient-text">Me</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            A dedicated learner and aspiring software engineer with a comprehensive academic background and a passion for modern web technologies.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '48px',
            alignItems: 'start',
            marginBottom: '64px',
          }}
          className="about-grid"
        >
          {/* Objective & Philosophy */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Career Objective</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Motivated and detail-oriented B.Tech (CSE) student with a strong foundation in Java, Data Structures & Algorithms, and Full-Stack Web Development. Seeking an entry-level software development role where I can apply my problem-solving skills, build scalable applications, and grow as a professional while contributing to impactful projects.
            </p>
            <div
              style={{
                background: 'rgba(6, 182, 212, 0.1)',
                borderLeft: '4px solid var(--color-cyan)',
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
              }}
            >
              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-main)' }}>
                "I believe in writing clean, maintainable code and continuously challenging myself to learn emerging technologies and architectural best practices."
              </p>
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px', borderColor: 'var(--color-purple)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  background: 'var(--color-purple-glow)',
                  padding: '16px',
                  borderRadius: '16px',
                  display: 'flex',
                }}
              >
                <GraduationCap size={36} style={{ color: 'var(--color-purple)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Education</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Academic Qualification</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)', fontWeight: 600 }}>
                B.Tech in Computer Science & Engineering (CSE)
              </h4>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-cyan)', fontWeight: 500 }}>
                Sagar Institute of Research and Technology, Bhopal
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Graduation: 2026</span>
                <span
                  style={{
                    background: 'rgba(168, 85, 247, 0.15)',
                    color: 'var(--color-purple)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    border: '1px solid var(--color-purple)',
                  }}
                >
                  7.69 CGPA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Grid */}
        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>
            Soft <span className="gradient-text">Skills</span>
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {softSkills.map((skill, index) => (
              <div key={index} className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-glass)',
                  }}
                >
                  {skill.icon}
                </div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: 600 }}>{skill.title}</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
