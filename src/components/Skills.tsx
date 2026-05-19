import React from 'react';
import { Code, Globe, Database, Wrench, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={28} style={{ color: 'var(--color-cyan)' }} />,
      skills: ['Java', 'Core Java', 'Object-Oriented Programming (OOPs)', 'Data Structures & Algorithms (DSA)'],
      color: 'var(--color-cyan)',
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={28} style={{ color: 'var(--color-purple)' }} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js'],
      color: 'var(--color-purple)',
    },
    {
      title: 'Databases',
      icon: <Database size={28} style={{ color: 'var(--color-indigo)' }} />,
      skills: ['MySQL', 'Relational Database Design', 'SQL Queries'],
      color: 'var(--color-indigo)',
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={28} style={{ color: '#ec4899' }} />,
      skills: ['Visual Studio Code', 'Git (Version Control)', 'GitHub', 'Vite', 'Postman'],
      color: '#ec4899',
    },
    {
      title: 'Core Concepts',
      icon: <Lightbulb size={28} style={{ color: '#f59e0b' }} />,
      skills: ['Problem Solving', 'RESTful APIs', 'Responsive Web Design', 'Client-Server Architecture'],
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
            A comprehensive overview of my technical toolkit, spanning backend programming, frontend web development, and foundational computer science concepts.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-glass)',
                      padding: '10px 18px',
                      borderRadius: '20px',
                      fontSize: '1rem',
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
