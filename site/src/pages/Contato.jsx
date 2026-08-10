import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Inline SVG Icons
const Instagram = ({ size = 20, color = "currentColor", strokeWidth = 1.5, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Phone = ({ size = 20, color = "currentColor", strokeWidth = 1.5, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail = ({ size = 20, color = "currentColor", strokeWidth = 1.5, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPin = ({ size = 20, color = "currentColor", strokeWidth = 1.5, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Contato = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="container section bg-light"
      style={{ paddingTop: '150px', paddingBottom: '8rem', minHeight: '100vh' }}
    >
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 200, letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '6rem', textAlign: 'center', color: 'inherit' }}
      >
        Contato
      </motion.h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 300, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Vamos Conversar</h3>
            <p style={{ lineHeight: 1.8, color: '#666', fontWeight: 300 }}>
              Tem um projeto em mente? Entre em contato para discutirmos como podemos transformar sua visão em realidade através de uma arquitetura de essência.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'inherit', fontWeight: 300 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Instagram size={20} strokeWidth={1} />
              <a href="https://instagram.com/jefersont.arq" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 0.6} onMouseOut={e => e.target.style.opacity = 1}>
                @JEFERSONT.ARQ
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Phone size={20} strokeWidth={1} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="tel:+5546991397747" style={{ transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 0.6} onMouseOut={e => e.target.style.opacity = 1}>(46) 99139-7747</a>
                <a href="tel:+5546991396178" style={{ transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 0.6} onMouseOut={e => e.target.style.opacity = 1}>(46) 99139-6178</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail size={20} strokeWidth={1} />
              <a href="mailto:JEFERSONTEPPA.ARQ@GMAIL.COM" style={{ transition: 'opacity 0.3s' }} onMouseOver={e => e.target.style.opacity = 0.6} onMouseOut={e => e.target.style.opacity = 1}>
                JEFERSONTEPPA.ARQ@GMAIL.COM
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <MapPin size={20} strokeWidth={1} style={{ marginTop: '5px' }} />
              <div style={{ lineHeight: 1.6 }}>
                R. Ten. Camargo, 1777 - Sl 64 - Centro<br/>
                Francisco Beltrão - PR, 85601-610<br/>
                Condomínio Empresarial Eldorado
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <form 
            action="https://formsubmit.co/JEFERSONTEPPA.ARQ@GMAIL.COM" 
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* FormSubmit Configs */}
            <input type="hidden" name="_subject" value="Novo contato pelo site - Jeferson Teppa!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888' }}>Nome Completo</label>
              <input type="text" id="name" name="name" required style={{ border: 'none', borderBottom: '1px solid #ccc', padding: '10px 0', background: 'transparent', outline: 'none', fontSize: '1rem', color: 'inherit', fontFamily: 'inherit' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888' }}>E-mail</label>
              <input type="email" id="email" name="email" required style={{ border: 'none', borderBottom: '1px solid #ccc', padding: '10px 0', background: 'transparent', outline: 'none', fontSize: '1rem', color: 'inherit', fontFamily: 'inherit' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="phone" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888' }}>Telefone / WhatsApp</label>
              <input type="tel" id="phone" name="phone" required style={{ border: 'none', borderBottom: '1px solid #ccc', padding: '10px 0', background: 'transparent', outline: 'none', fontSize: '1rem', color: 'inherit', fontFamily: 'inherit' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888' }}>Mensagem ou Detalhes do Projeto</label>
              <textarea id="message" name="message" rows="4" required style={{ border: 'none', borderBottom: '1px solid #ccc', padding: '10px 0', background: 'transparent', outline: 'none', fontSize: '1rem', color: 'inherit', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" style={{ marginTop: '1rem', padding: '15px 30px', backgroundColor: '#111', color: '#fff', border: 'none', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', cursor: 'pointer', transition: 'background-color 0.3s' }} onMouseOver={e => e.target.style.backgroundColor = '#333'} onMouseOut={e => e.target.style.backgroundColor = '#111'}>
              Enviar Mensagem
            </button>
          </form>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Contato;
