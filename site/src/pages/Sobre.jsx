import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data.json';

const Sobre = () => {
  const images = data.sobre?.images || [];
  // Usa uma foto diferente da anterior (ex: 2490)
  const heroImg = images.find(img => img.includes('2490')) || images[1];
  const gridImages = images.filter(img => img !== heroImg);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-light"
      style={{ paddingBottom: '5rem', backgroundColor: '#fff', color: '#000' }}
    >
      {/* Hero Image Section */}
      <section style={{ width: '100%', height: '90vh', position: 'relative' }}>
        {heroImg ? (
          <img 
            src={heroImg} 
            alt="Jeferson Teppa" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#eee' }}></div>
        )}
      </section>

      {/* Main Intro / Quote */}
      <section className="container" style={{ padding: '6rem 5vw 4rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, lineHeight: 1.5, letterSpacing: '1px', marginBottom: '2rem' }}
        >
          "Acredito que a boa arquitetura não é medida apenas pela beleza de um projeto, mas pela forma como ela transforma a vida das pessoas."
        </motion.p>
        <div style={{ width: '40px', height: '1px', backgroundColor: '#000', margin: '0 auto' }}></div>
      </section>

      {/* Bio Section */}
      <section className="container sobre-grid" style={{ padding: '4rem 5vw', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 200, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '2rem' }}>Prazer, sou Jeferson Teppa.</h2>
          <div style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: '#333' }}>
            <p style={{ marginBottom: '1.5rem' }}>Sou arquiteto e fundador da Jeferson Teppa Arquitetura e Interiores.</p>
            <p style={{ marginBottom: '1.5rem' }}>Desde o início da minha trajetória, acredito que cada projeto deve contar uma história única. Por isso, faço questão de estar presente em todas as etapas do processo, acompanhando de perto cada decisão, cada detalhe e cada escolha que transforma uma ideia em realidade.</p>
            <p style={{ marginBottom: '1.5rem' }}>Mais do que desenvolver projetos, tenho o privilégio de participar da realização de sonhos. A arquitetura é a ferramenta que utilizo para transformar expectativas, memórias e desejos em espaços que serão vividos por muitos anos. Afinal, uma casa não é apenas um lugar para morar, mas o cenário onde a vida acontece.</p>
            <p>Meu compromisso é desenvolver projetos autorais, funcionais e atemporais, sempre alinhados ao estilo de vida de cada cliente. Acredito que uma residência deve transmitir personalidade, oferecer conforto e permanecer atual ao longo do tempo.</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {gridImages[0] && (
            <img src={gridImages[0]} alt="Arquiteto" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '2px', maxHeight: '80vh' }} />
          )}
        </motion.div>
      </section>

      {/* Second Text Block */}
      <section className="container sobre-grid-reverse" style={{ padding: '4rem 5vw', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ order: 1 }}
          className="reverse-img"
        >
          {gridImages[1] && (
            <img src={gridImages[1]} alt="Escritório" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '2px', maxHeight: '80vh' }} />
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ order: 2 }}
          className="reverse-text"
        >
          <div style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: '#333' }}>
            <p style={{ marginBottom: '1.5rem' }}>À frente do escritório, acompanho cada projeto de forma próxima, garantindo que cada etapa seja conduzida com excelência, transparência e atenção aos detalhes, do primeiro encontro até a entrega final.</p>
            <p>Mais do que criar espaços bonitos, meu objetivo é projetar ambientes que despertem emoções, valorizem o cotidiano e façam sentido para quem irá viver neles. Esse é o propósito que guia o nosso escritório todos os dias.</p>
          </div>
        </motion.div>
      </section>

      {/* Nacional Presence */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '6rem 5vw', marginTop: '4rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 200, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2rem' }}>Presença local. Atuação nacional.</h2>
          <div style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.8, color: '#444' }}>
            <p style={{ marginBottom: '1.5rem' }}>Com sede em Francisco Beltrão – PR, a Jeferson Teppa Arquitetura e Interiores desenvolve projetos residenciais e corporativos para clientes que buscam uma arquitetura exclusiva, atemporal e cuidadosamente planejada.</p>
            <p style={{ marginBottom: '1.5rem' }}>Além do atendimento em nossa sede, realizamos <strong>atendimentos presenciais em São Paulo</strong>, proporcionando acompanhamento próximo durante todas as etapas do projeto.</p>
            <p>Para clientes de outras regiões, oferecemos um processo totalmente estruturado para <strong>projetos online em todo o Brasil</strong>, mantendo o mesmo padrão de qualidade, personalização e atenção aos detalhes que fazem parte da identidade do nosso escritório. Independentemente da cidade, acreditamos que cada projeto merece um olhar exclusivo.</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      {gridImages.length > 2 && (
        <section className="container" style={{ padding: '6rem 0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {gridImages.slice(2).map((img, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <img src={img} alt="Galeria Escritório" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 768px) {
          .sobre-grid, .sobre-grid-reverse { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .reverse-img { order: 2 !important; }
          .reverse-text { order: 1 !important; }
        }
      `}</style>
    </motion.div>
  );
};

export default Sobre;
