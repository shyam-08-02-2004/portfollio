import React, { useState } from 'react';
import { ExternalLink, Code, Server, ShieldCheck, Smartphone, ShoppingBag, MapPin, Activity, Gamepad2, Database, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'mern' | 'ecommerce' | 'gaming'>('all');

  const projectsList = [
    {
      id: 'zengwear',
      category: ['mern', 'ecommerce'],
      title: 'Zen-G Wear',
      subtitle: 'Full Stack E-Commerce Platform',
      tagColor: 'var(--color-cyan)',
      domain: 'zen-g-wear.vercel.app',
      image: '/zengwear_project_mockup.jpg',
      description: 'A premium full-stack e-commerce web application engineered for seamless online shopping, product catalog management, secure JWT user authentication, and role-based admin inventory controls.',
      liveUrl: 'https://zen-g-wear.vercel.app',
      githubUrl: 'https://github.com/shyam-08-02-2004',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Vite', 'Vercel'],
      highlights: [
        { icon: <ShoppingBag size={20} style={{ color: 'var(--color-cyan)' }} />, text: 'Developed full-stack shopping workflow using React.js and Node.js.' },
        { icon: <ShieldCheck size={20} style={{ color: 'var(--color-purple)' }} />, text: 'Implemented secure JWT authentication and role-based admin access control.' },
        { icon: <Server size={20} style={{ color: 'var(--color-indigo)' }} />, text: 'Built an interactive Admin Dashboard for product and inventory analytics.' },
        { icon: <Smartphone size={20} style={{ color: '#ec4899' }} />, text: 'Designed mobile-first UI with dark mode aesthetics and micro-animations.' },
      ],
    },
    {
      id: 'wonderlust',
      category: ['mern'],
      title: 'Wonderlust',
      subtitle: 'Travel Recommendation Platform',
      tagColor: 'var(--color-purple)',
      domain: 'wonderlust-eta.vercel.app/listings',
      image: '/wonderlust_project_mockup.png',
      description: 'A full-stack travel platform featuring complete CRUD functionality for listing, exploring, and reviewing vacation rentals and travel destinations with interactive Google Maps integration.',
      liveUrl: 'https://wonderlust-eta.vercel.app/listings',
      githubUrl: 'https://github.com/shyam-08-02-2004',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API', 'Bootstrap', 'REST APIs'],
      highlights: [
        { icon: <Code size={20} style={{ color: 'var(--color-cyan)' }} />, text: 'Built complete CRUD travel listing architecture with RESTful APIs.' },
        { icon: <MapPin size={20} style={{ color: '#ec4899' }} />, text: 'Integrated Google Maps API for interactive geolocation mapping.' },
        { icon: <ShieldCheck size={20} style={{ color: 'var(--color-indigo)' }} />, text: 'Implemented user authentication, authorization, and review systems.' },
      ],
    },
    {
      id: 'hospital',
      category: ['mern'],
      title: 'Hospital Management System',
      subtitle: 'Healthcare Web Application',
      tagColor: 'var(--color-indigo)',
      domain: 'hospital-management.shyam.dev',
      image: '/hospital_project_mockup.jpg',
      description: 'A multi-role healthcare system with dedicated portals for Admins, Doctors, and Patients, integrated with Razorpay online payments and Cloudinary encrypted document storage.',
      githubUrl: 'https://github.com/shyam-08-02-2004',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Tailwind CSS', 'Razorpay', 'Cloudinary'],
      highlights: [
        { icon: <Activity size={20} style={{ color: 'var(--color-cyan)' }} />, text: 'Created multi-role dashboards for Admin, Doctor, and Patient portals.' },
        { icon: <Server size={20} style={{ color: 'var(--color-purple)' }} />, text: 'Integrated Razorpay payment gateway for patient consultation fees.' },
        { icon: <Database size={20} style={{ color: '#ec4899' }} />, text: 'Used Cloudinary for secure medical document and prescription storage.' },
      ],
    },
    {
      id: 'dragon-tiger',
      category: ['gaming'],
      title: 'Dragon Tiger Casino',
      subtitle: 'Interactive Web Gaming App',
      tagColor: '#ec4899',
      domain: 'dragon-tiger.shyam.dev',
      image: '/dragon_tiger_project_mockup.png',
      description: 'An interactive online web casino game with real-time Dragon vs Tiger betting mechanics, user registration, and mobile-friendly gaming interface.',
      liveUrl: 'https://dragon-tiger-shyam-babu-s-projects.vercel.app/',
      githubUrl: 'https://github.com/shyam-08-02-2004/dragon-tiger',
      techStack: ['React.js', 'TypeScript', 'CSS3', 'Vite', 'Vercel'],
      highlights: [
        { icon: <Gamepad2 size={20} style={{ color: 'var(--color-cyan)' }} />, text: 'Developed real-time betting card deal simulation and game logic.' },
        { icon: <ShieldCheck size={20} style={{ color: 'var(--color-purple)' }} />, text: 'Implemented client-side wallet management and account state.' },
      ],
    },
  ];

  const filteredProjects = projectsList.filter(proj => {
    if (activeTab === 'all') return true;
    return proj.category.includes(activeTab);
  });

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--color-cyan)',
              marginBottom: '16px',
            }}
          >
            <Layers size={16} /> PORTFOLIO SHOWCASE
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '16px' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Explore my end-to-end full-stack web applications featuring modern UI design, robust REST APIs, secure databases, and production deployments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '64px' }}>
          <button
            className={`tab-pill ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Projects ({projectsList.length})
          </button>
          <button
            className={`tab-pill ${activeTab === 'mern' ? 'active' : ''}`}
            onClick={() => setActiveTab('mern')}
          >
            Full Stack MERN
          </button>
          <button
            className={`tab-pill ${activeTab === 'ecommerce' ? 'active' : ''}`}
            onClick={() => setActiveTab('ecommerce')}
          >
            E-Commerce & Platforms
          </button>
          <button
            className={`tab-pill ${activeTab === 'gaming' ? 'active' : ''}`}
            onClick={() => setActiveTab('gaming')}
          >
            Web Gaming Apps
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-panel" style={{ padding: '48px', overflow: 'hidden' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1fr',
                  gap: '48px',
                  alignItems: 'center',
                }}
                className="project-grid"
              >
                {/* Project Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-main)' }}>
                      {project.title}
                    </h3>
                    <span
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: project.tagColor,
                        border: `1px solid ${project.tagColor}`,
                        padding: '6px 16px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                      }}
                    >
                      {project.subtitle}
                    </span>
                  </div>

                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 700 }}>Key Highlights:</h4>
                    {project.highlights.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            padding: '8px',
                            borderRadius: '10px',
                            display: 'flex',
                            border: '1px solid var(--border-glass)',
                          }}
                        >
                          {feat.icon}
                        </div>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{feat.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 700, marginBottom: '12px' }}>
                      Technologies Used:
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--border-glass)',
                            color: 'var(--text-main)',
                            padding: '6px 14px',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ gap: '8px', padding: '12px 26px', fontSize: '0.95rem' }}
                      >
                        <Code size={18} /> View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                        style={{ gap: '8px', padding: '12px 26px', fontSize: '0.95rem' }}
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Screenshot Browser Frame Mockup */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(6, 182, 212, 0.15)',
                      position: 'relative',
                      background: 'var(--bg-primary)',
                      width: '100%',
                    }}
                  >
                    {/* Browser Header Bar */}
                    <div
                      style={{
                        background: 'rgba(20, 20, 32, 0.95)',
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
                      <span
                        style={{
                          marginLeft: '16px',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        https://{project.domain}
                      </span>
                    </div>

                    {/* Screenshot */}
                    <img
                      src={project.image}
                      alt={`${project.title} UI Screenshot`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .project-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
