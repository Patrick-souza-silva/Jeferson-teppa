import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import data from '../assets/data.json';

const Projeto = () => {
  const { id } = useParams();
  const projectIndex = parseInt(id, 10);
  const project = data.projects[projectIndex];

  const { scrollY } = useScroll();
  
  // Efeito muito mais forte para garantir que seja notado
  const yImage = useTransform(scrollY, [0, 800], [0, 300]);
  const scaleImage = useTransform(scrollY, [0, 800], [1, 1.15]);
  
  const yText = useTransform(scrollY, [0, 600], [0, 400]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/projetos" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ paddingBottom: '4rem' }}
    >
      {/* Hero Header */}
      <div style={{ height: '70vh', position: 'relative', overflow: 'hidden' }}>
        <motion.img 
          src={project.images[0]} 
          alt={project.title} 
          style={{ 
            width: '100%', 
            height: '120%', 
            objectFit: 'cover', 
            filter: 'brightness(0.4)',
            y: yImage,
            scale: scaleImage,
            top: '-10%',
            position: 'absolute'
          }} 
        />
        <motion.div 
          style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', y: yText, opacity: opacityText }}
        >
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: 200, letterSpacing: '5px', textTransform: 'uppercase', color: '#fff' }}
          >
            {project.title}
          </motion.h1>
        </motion.div>
        <Link to="/projetos" style={{ position: 'absolute', top: '120px', left: '2rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#ccc', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', zIndex: 20 }}>
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        {/* Description Section */}
        {project.description && (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'var(--color-bg-light)', padding: '4rem', maxWidth: '800px', margin: '0 auto 4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', lineHeight: 1.8, color: 'inherit' }}
          >
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: "var(--font-heading)" }}>{project.title}</h2>
            {project.subtitle && <h3 style={{ fontSize: '1.2rem', fontWeight: '500', marginBottom: '2rem', color: '#555' }}>{project.subtitle}</h3>}
            <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
          </motion.div>
        )}

        {/* Flex Gallery (Centers odd last items) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {project.images.slice(1).map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              style={{ width: 'calc(50% - 0.5rem)' }}
              className="gallery-item"
            >
              <img src={img} alt={`${project.title} - ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '4px' }} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '2rem' }}>
          <a 
            href="https://wa.me/554691397747"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '18px 40px',
              backgroundColor: '#111111',
              color: '#fff',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontSize: '1rem',
              fontWeight: 400,
              transition: 'background-color 0.3s, opacity 0.3s'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#333333'}
            onMouseOut={e => e.target.style.backgroundColor = '#111111'}
          >
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .gallery-item { width: 100% !important; }
        }
      `}</style>
    </motion.div>
  );
};

export default Projeto;
