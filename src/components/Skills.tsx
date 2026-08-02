import React from 'react';
import { Code, Globe, Database, Server, Cloud, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={28} style={{ color: 'var(--color-cyan)' }} />,
      skills: ['Java', 'JavaScript', 'HTML5', 'CSS3'],
      color: 'var(--color-cyan)',
    },
    {
      title: 'Frontend',
      icon: <Globe size={28} style={{ color: 'var(--color-purple)' }} />,
      skills: ['React.js', 'React Router', 'Context API', 'Tailwind CSS', 'Bootstrap', 'Vite'],
      color: 'var(--color-purple)',
    },
    {
      title: 'Backend',
      icon: <Server size={28} style={{ color: '#ec4899' }} />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Role-Based Auth', 'MVC Architecture'],
      color: '#ec4899',
    },
    {
      title: 'Database',
      icon: <Database size={28} style={{ color: 'var(--color-indigo)' }} />,
      skills: ['MongoDB', 'Mongoose', 'MySQL'],
      color: 'var(--color-indigo)',
    },
    {
      title: 'Tools & Cloud',
      icon: <Cloud size={28} style={{ color: '#10b981' }} />,
      skills: ['Git', 'GitHub', 'VS Code', 'npm', 'Vercel', 'Render', 'MongoDB Cloud'],
      color: '#10b981',
    },
    {
      title: 'Concepts & Architecture',
      icon: <Cpu size={28} style={{ color: '#f59e0b' }} />,
      skills: ['Responsive Design', 'CRUD', 'OOP', 'DSA', 'API Integration', 'Git Workflow', 'MVC Architecture'],
      color: '#f59e0b',
    },
  ];

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px' }}>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            A comprehensive breakdown of my technical expertise across full-stack web development, backend engineering, cloud tools, and computer science fundamentals.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-panel"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                borderTop: `4px solid ${category.color}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    background: 'var(--bg-primary)',
                    padding: '14px',
                    borderRadius: '14px',
                    display: 'flex',
                    border: '1px solid var(--border-glass)',
                  }}
                >
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-glass)',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--text-main)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = category.color;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 4px 12px rgba(0,0,0,0.3)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-glass)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
