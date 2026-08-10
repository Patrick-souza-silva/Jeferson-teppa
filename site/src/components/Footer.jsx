import React from 'react';
import data from '../assets/data.json';

// Inline SVG Icons
const Instagram = ({ size = 20, color = "#fff", strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Phone = ({ size = 20, color = "#fff", strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail = ({ size = 20, color = "#fff", strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPin = ({ size = 20, color = "#fff", strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer style={{ padding: '3rem 0 1.5rem', backgroundColor: '#000000', color: '#ffffff', borderTop: '1px solid #222', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
        <div>
          <img 
            src={data.logos.find(l => l.includes('Logotipo_Principal_NEGATIVO_MARCA')) || data.logos[0]} 
            alt="Jeferson Teppa" 
            style={{ 
              height: 'clamp(70px, 12vw, 120px)', 
              width: 'auto', 
              objectFit: 'contain', 
              marginBottom: '1.5rem',
              transform: 'scale(2.5)', 
              transformOrigin: 'left center' 
            }} 
          />
          <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '300px' }}>
            Arquitetura que comunica sem precisar de excessos.
          </p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '1rem', fontWeight: 500, letterSpacing: '2px', marginBottom: '1.5rem', textTransform: 'uppercase', color: '#fff' }}>Contatos</h4>
          <div style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Instagram size={18} strokeWidth={1.5} color="#fff" />
              <a href="https://instagram.com/jefersont.arq" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#aaa'}>@JEFERSONT.ARQ</a>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={18} strokeWidth={1.5} color="#fff" />
              <div>
                <a href="tel:+5546991397747" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>(46) 99139-7747</a>
                <a href="tel:+5546991396178" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>(46) 99139-6178</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={18} strokeWidth={1.5} color="#fff" />
              <a href="mailto:JEFERSONTEPPA.ARQ@GMAIL.COM" style={{ color: 'inherit', textDecoration: 'none' }}>JEFERSONTEPPA.ARQ@GMAIL.COM</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginTop: '0.2rem' }}>
              <MapPin size={22} strokeWidth={1.5} color="#fff" style={{ marginTop: '2px' }} />
              <div style={{ lineHeight: 1.6 }}>
                <span style={{ display: 'block', color: '#fff', marginBottom: '2px' }}>Escritório:</span>
                R. Ten. Camargo, 1777 - Sl 64 - Centro<br/>
                Francisco Beltrão - PR, 85601-610<br/>
                Condomínio Empresarial Eldorado
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', color: '#555', fontSize: '0.85rem', borderTop: '1px solid #1a1a1a', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span>&copy; {new Date().getFullYear()} Jeferson Teppa. Todos os direitos reservados.</span>
        <a href="/politica-privacidade" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#888'}>
          Política de Privacidade
        </a>
      </div>
    </footer>
  );
};

export default Footer;
