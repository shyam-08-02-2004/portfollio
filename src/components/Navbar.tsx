import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Code, Share2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontWeight: 900,
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-main)',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-cyan), var(--color-indigo))',
              padding: '8px',
              borderRadius: '12px',
              display: 'flex',
              boxShadow: '0 0 15px var(--color-cyan-glow)',
            }}
          >
            <Code2 style={{ color: '#ffffff' }} size={22} />
          </div>
          <span className="gradient-text" style={{ fontSize: '1.6rem', letterSpacing: '-0.03em' }}>Shyam.dev</span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}

          {/* Quick Header Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid var(--border-glass)', paddingLeft: '20px' }}>
            <a
              href="https://github.com/shyam-08-02-2004"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="GitHub Profile"
            >
              <Code size={18} />
            </a>
            <a
              href="https://linkedin.com/in/shyam-dangi"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              aria-label="LinkedIn Profile"
            >
              <Share2 size={18} />
            </a>
          </div>

          <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="mobile-menu-btn" style={{ display: 'none' }}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              borderRadius: '12px',
              padding: '8px',
              color: 'var(--text-main)',
              cursor: 'pointer',
              display: 'flex',
            }}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 15, 24, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: '1px solid var(--border-glass)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary"
            style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}
          >
            Hire Me
          </a>
        </div>
      )}

      {/* Mobile CSS Media Queries */}
      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
