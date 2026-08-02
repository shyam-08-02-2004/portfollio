import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitting(true);
      setError(null);
      try {
        const response = await fetch('https://formspree.io/f/xbdblbey', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          setError('Failed to send message. Please try again later.');
        }
      } catch (err) {
        setError('An error occurred. Please check your network connection and try again.');
      } finally {
        setSubmitting(false);
      }
    }
  };

  const contactDetails = [
    {
      icon: <Phone size={28} style={{ color: 'var(--color-cyan)' }} />,
      title: 'Call / WhatsApp',
      value: '+91 7509766655',
      href: 'tel:+917509766655',
    },
    {
      icon: <Mail size={28} style={{ color: 'var(--color-purple)' }} />,
      title: 'Email Me',
      value: 'shyamdangi084@gmail.com',
      href: 'mailto:shyamdangi084@gmail.com',
    },
    {
      icon: <MapPin size={28} style={{ color: 'var(--color-indigo)' }} />,
      title: 'Location',
      value: 'Indore, Madhya Pradesh, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Have a project in mind, looking for a dedicated full-stack developer, or just want to connect? Feel free to reach out via phone, email, or the contact form below.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Contact Details Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {contactDetails.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  textDecoration: 'none',
                  color: 'inherit',
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
                  {item.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{item.title}</p>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 700 }}>
                    {item.value}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          {/* Interactive Contact Form */}
          <div className="glass-panel" style={{ padding: '48px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <CheckCircle size={64} style={{ color: '#10b981' }} />
                <h3 style={{ fontSize: '2rem', color: 'var(--text-main)', fontWeight: 700 }}>Message Sent Successfully!</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                  Thank you for reaching out, Shyam Babu Dangi will get back to you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: 700, marginBottom: '8px' }}>
                  Send a Message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-glass)',
                        padding: '16px 20px',
                        borderRadius: '12px',
                        color: 'var(--text-main)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-cyan)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-glass)',
                        padding: '16px 20px',
                        borderRadius: '12px',
                        color: 'var(--text-main)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-cyan)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-glass)',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      color: 'var(--text-main)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-cyan)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 500 }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hello Shyam, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-glass)',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      color: 'var(--text-main)',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-cyan)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary submit-btn"
                  disabled={submitting}
                  style={{
                    width: 'fit-content',
                    padding: '16px 36px',
                    fontSize: '1.05rem',
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  <Send size={20} /> {submitting ? 'Sending...' : 'Send Message'}
                </button>
                {error && (
                  <p style={{ color: '#ef4444', fontSize: '0.95rem', marginTop: '8px' }}>
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .submit-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
