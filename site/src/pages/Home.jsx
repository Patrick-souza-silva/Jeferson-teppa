import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';

const Home = () => {
  // Use the 'Principal' or 'Primeira Impressão' video for the hero section
  const heroVideo = data.videos.find(v => v.toLowerCase().includes('principal')) || data.videos.find(v => v.toLowerCase().includes('primeira')) || data.videos[0];

  const bannerRef = useRef(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Autoplay prevent fallback", e));
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });
  
  // O SVG vai descer conforme rolamos
  const yBg = useTransform(scrollYProgress, [0, 1], [-100, 200]);
  // A imagem vai subir levemente criando o efeito 3D
  const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Hero Section */}
      <section style={{ 
        width: '100%', 
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {heroVideo && (
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              pointerEvents: 'none' // Evita qualquer interação com o mouse no vídeo
            }}
          >
            <source src={heroVideo} />
          </video>
        )}
        
        {/* Text in the middle */}
        <div style={{ 
          zIndex: 1, 
          textAlign: 'center', 
          backgroundColor: 'rgba(0,0,0,0.4)', 
          padding: '3rem 5rem', 
          borderRadius: '2px', 
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{ 
            color: '#fff', 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
            fontWeight: 400, 
            letterSpacing: '10px', 
            textTransform: 'uppercase', 
            marginBottom: '1.5rem',
            textShadow: '0 4px 15px rgba(0,0,0,0.8)'
          }}>
            Jeferson Teppa
          </h1>
          <p style={{ 
            color: '#fff', 
            fontSize: '1.2rem', 
            letterSpacing: '6px', 
            textTransform: 'uppercase', 
            fontWeight: 300,
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            opacity: 0.9
          }}>
            Arquitetura de Essência
          </p>
        </div>
      </section>

      {/* Quote / Profile Banner */}
      <section ref={bannerRef} style={{ backgroundColor: '#111111', padding: '6rem 5vw', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract Background SVG with parallax */}
        <motion.svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '150%', opacity: 0.4, pointerEvents: 'none', y: yBg }} viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100 200 C 200 50, 400 350, 700 200 S 1100 50, 1500 200" stroke="#ffffff" strokeWidth="1" />
          <path d="M-200 250 C 300 0, 500 400, 800 250 S 1200 0, 1600 250" stroke="#ffffff" strokeWidth="1" />
          <path d="M-50 150 C 250 100, 350 300, 600 150 S 1000 100, 1400 150" stroke="#ffffff" strokeWidth="0.5" />
        </motion.svg>

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          
          {/* Quote Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ flex: '1', minWidth: '300px', textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}
          >
            <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, color: '#fff', marginBottom: '1rem', lineHeight: 1.4 }}>
              "Mais do que desenvolver projetos, tenho o privilégio de participar da realização de sonhos."
            </p>
            <span style={{ fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', color: '#fff', marginBottom: '2.5rem', fontWeight: 500 }}>
              JEFERSON TEPPA
            </span>
            <Link to="/sobre" style={{
              display: 'inline-block',
              padding: '14px 40px',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 500,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '0.85rem',
              transition: 'background-color 0.3s'
            }} onMouseOver={e => e.target.style.backgroundColor = '#eeeeee'} onMouseOut={e => e.target.style.backgroundColor = '#ffffff'}>
              SAIBA MAIS
            </Link>
          </motion.div>

          {/* Portrait Image with parallax */}
          <motion.div 
            style={{ flex: '0 1 420px', width: '100%', y: yImage }}
          >
            <img src={data.sobre.images[0]} alt="Jeferson Teppa" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} />
          </motion.div>

        </div>
      </section>

      {/* Featured Projects - Editorial Style */}
      <section className="bg-light" style={{ padding: '8rem 0' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 200, marginBottom: '6rem', textAlign: 'center', letterSpacing: '8px', textTransform: 'uppercase', color: 'inherit' }}>
          Projetos Destaque
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {data.projects.slice(0, 3).map((project, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '4rem',
              padding: '0 5vw'
            }} className="editorial-row">
              
              <Link to={`/projeto/${idx}`} style={{ flex: '1', display: 'block', overflow: 'hidden' }} className="project-editorial-img-wrapper">
                <motion.img 
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={project.images[0]} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    transition: 'transform 1s ease'
                  }}
                  className="project-editorial-img"
                />
              </Link>

              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ flex: '1' }}
                className="editorial-text"
              >
                <h3 style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 200,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  lineHeight: 1.1,
                  color: 'inherit'
                }}>
                  {project.title}
                </h3>
                <Link to={`/projeto/${idx}`} style={{ 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px', 
                  fontSize: '0.8rem', 
                  color: 'var(--color-accent)',
                  borderBottom: '1px solid var(--color-accent)',
                  paddingBottom: '5px',
                  transition: 'opacity 0.3s'
                }} className="explore-link">
                  Explorar Projeto
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '8rem' }}>
          <Link to="/projetos" style={{ color: 'inherit', letterSpacing: '4px', fontSize: '0.9rem', textTransform: 'uppercase', borderBottom: '1px solid', paddingBottom: '10px' }}>
            Ver Portfólio Completo
          </Link>
        </div>
      </section>

      {/* Videos Section - Minimal */}
      {data.videos.length > 1 && (
        <section className="bg-dark" style={{ padding: '8rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 200, marginBottom: '4rem', textAlign: 'center', letterSpacing: '8px', textTransform: 'uppercase', color: '#fff' }}>
              Audiovisual
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
              gap: '2rem'
            }} className="video-grid">
              {data.videos.map((vid, idx) => {
                if(vid === heroVideo) return null;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      aspectRatio: '16/9',
                      backgroundColor: '#111'
                    }}
                  >
                    <video 
                      controls
                      preload="metadata"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    >
                      <source src={vid} />
                      Seu navegador não suporta vídeos.
                    </video>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      
      <style>{`
        .project-editorial-img-wrapper:hover .project-editorial-img {
          transform: scale(1.05);
          filter: brightness(1) !important;
        }
        .explore-link:hover {
          color: #fff;
          border-bottom-color: #fff;
        }
        @media (max-width: 900px) {
          .editorial-row {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .editorial-text {
            text-align: center;
          }
          .video-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Home;
