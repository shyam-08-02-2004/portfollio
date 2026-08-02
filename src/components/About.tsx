import React from 'react';
import { GraduationCap, Users, Brain, Code, Camera } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={32} style={{ color: 'var(--color-cyan)' }} />,
      title: 'Full Stack MERN Development',
      description: 'Experience in developing scalable web applications using React.js, Node.js, Express.js, and MongoDB with secure REST APIs.',
    },
    {
      icon: <Brain size={32} style={{ color: 'var(--color-purple)' }} />,
      title: 'Problem Solving & DSA',
      description: 'Solid foundation in Data Structures, Algorithms using Java, Object-Oriented Programming, and clean MVC Architecture.',
    },
    {
      icon: <Users size={32} style={{ color: 'var(--color-indigo)' }} />,
      title: 'Git Workflow & API Integration',
      description: 'Adept at version control with Git/GitHub, integrating third-party APIs (Google Maps, Razorpay, Cloudinary), and Vercel deployment.',
    },
    {
      icon: <Camera size={32} style={{ color: '#ec4899' }} />,
      title: 'Interests & Photography',
      description: 'Passionate about building full-stack applications, exploring emerging tech stack, problem-solving, and visual photography.',
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
            Full Stack MERN Developer passionate about building production-ready software, secure REST APIs, and continuously learning modern technologies.
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
          {/* Summary / Profile */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Professional Summary</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Full Stack MERN Developer with hands-on experience building scalable web applications using React.js, Node.js, Express.js, MongoDB and JavaScript. Developed secure REST APIs, JWT authentication and responsive user interfaces through multiple end-to-end projects. Passionate about building production-ready software and continuously learning modern technologies.
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
                "Building robust, high-performance web applications with clean architecture and modern user experiences."
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
              <h4 style={{ fontSize: '1.35rem', color: 'var(--text-main)', fontWeight: 700 }}>
                Bachelor of Technology (B.Tech)
              </h4>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-cyan)', fontWeight: 600 }}>
                Sagar Institute of Research & Technology (SIRT), Bhopal
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                Computer Science and Engineering • Bhopal (MP)
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 500 }}>2022 – 2026</span>
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
                  7.69 / 10 CGPA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '32px' }}>
            Core <span className="gradient-text">Competencies & Interests</span>
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {highlights.map((item, index) => (
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
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.3rem', color: 'var(--text-main)', fontWeight: 600 }}>{item.title}</h4>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.description}</p>
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
