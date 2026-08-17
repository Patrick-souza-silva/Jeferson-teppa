import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data.json';

const Feedbacks = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '120px', minHeight: '100vh', backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 200,
          textTransform: 'uppercase',
          letterSpacing: '4px',
          textAlign: 'center',
          marginBottom: '4rem',
          fontFamily: 'var(--font-heading)'
        }}>
          O que dizem<br/>nossos clientes
        </h2>

        <div style={{
          columnCount: 3,
          columnGap: '2rem',
          '@media (max-width: 1024px)': { columnCount: 2 },
          '@media (max-width: 768px)': { columnCount: 1 }
        }} className="masonry-grid">
          {data.feedbacks && data.feedbacks.map((fb, idx) => (
            <div key={idx} style={{ 
              breakInside: 'avoid',
              marginBottom: '2rem',
              backgroundColor: '#fff',
              padding: '2.5rem',
              borderRadius: '2px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#555',
                fontStyle: 'italic',
                marginBottom: '1.5rem'
              }}>
                "{fb.text}"
              </p>
              <h4 style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#111',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                {fb.author}
              </h4>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for Masonry fallback if needed */}
      <style>{`
        @media (max-width: 1024px) {
          .masonry-grid { column-count: 2 !important; }
        }
        @media (max-width: 768px) {
          .masonry-grid { column-count: 1 !important; }
        }
      `}</style>
    </motion.div>
  );
};

export default Feedbacks;
