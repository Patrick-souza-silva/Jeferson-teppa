import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import data from '../assets/data.json';

const Projetos = () => {
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
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 200, letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '8rem', textAlign: 'center', color: 'inherit' }}
      >
        Projetos
      </motion.h1>

      <div style={{
        display: 'grid',
        gap: '4rem 2rem'
      }} className="projetos-grid">
        {data.projects.map((project, idx) => (
          <Link to={`/projeto/${idx}`} key={idx} className="project-card">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: (idx % 2) * 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'pointer'
              }}
            >
              <div style={{ overflow: 'hidden', aspectRatio: '4/5', width: '100%' }}>
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 1.5s ease'
                  }}
                  className="project-img"
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 300,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'inherit',
                  transition: 'opacity 0.5s ease'
                }} className="project-title">
                  {project.title}
                  {project.subtitle && (
                    <div style={{ fontSize: '0.8rem', letterSpacing: '1px', color: '#666', marginTop: '0.3rem', textTransform: 'none' }}>
                      {project.subtitle}
                    </div>
                  )}
                </h3>
                <span style={{ color: '#888', fontSize: '0.8rem', letterSpacing: '2px' }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <style>{`
        .project-card:hover .project-img {
          transform: scale(1.03);
        }
        .project-card:hover .project-title {
          opacity: 0.6;
        }
        /* Último card sozinho na linha fica centralizado */
        .projetos-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .projetos-grid > .project-card:last-child:nth-child(3n+1) {
          grid-column: 2;
        }
        @media (max-width: 1328px) {
          .projetos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .projetos-grid > .project-card:last-child:nth-child(3n+1) {
            grid-column: auto;
          }
          .projetos-grid > .project-card:last-child:nth-child(2n+1) {
            grid-column: 1 / -1;
            justify-self: center;
            width: calc((100% - 2rem) / 2);
          }
        }
        @media (max-width: 768px) {
          .projetos-grid > .project-card:last-child:nth-child(2n+1) {
            grid-column: auto;
            width: 100%;
          }
          .projetos-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Projetos;
