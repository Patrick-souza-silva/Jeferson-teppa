import React from 'react';
import { motion } from 'framer-motion';

const servicosList = [
  {
    title: "Arquitetura Residencial",
    desc: "Projetos exclusivos desenvolvidos para transformar necessidades e desejos em residências funcionais, elegantes e atemporais, sempre respeitando o estilo de vida de cada cliente."
  },
  {
    title: "Arquitetura Corporativa",
    desc: "Ambientes corporativos planejados para unir identidade, funcionalidade e produtividade, criando espaços que fortalecem a imagem da empresa e proporcionam conforto para clientes e colaboradores."
  },
  {
    title: "Design de Interiores",
    desc: "Projetos completos de interiores que integram estética, conforto e funcionalidade por meio da definição de layout, iluminação, mobiliário, marcenaria, revestimentos, acabamentos e decoração."
  },
  {
    title: "Gerenciamento de Obras",
    desc: "Acompanhamento técnico da execução da obra, garantindo que cada etapa seja realizada conforme o projeto, com organização, controle de qualidade e atenção aos detalhes."
  },
  {
    title: "Consultoria em Arquitetura",
    desc: "Orientação especializada para auxiliar na tomada de decisões, oferecendo soluções personalizadas para projetos, reformas, distribuição dos ambientes, materiais e investimentos."
  },
  {
    title: "Projetos de Marcenaria",
    desc: "Desenvolvimento de mobiliário sob medida, pensado para otimizar espaços, agregar funcionalidade e valorizar a identidade de cada ambiente."
  },
  {
    title: "Curadoria de Materiais",
    desc: "Seleção criteriosa de revestimentos, louças, metais, iluminação, mobiliário e acabamentos, garantindo harmonia estética, qualidade e personalidade ao projeto."
  },
  {
    title: "Acompanhamento de Fornecedores",
    desc: "Assessoria durante a escolha e aquisição de materiais, móveis e acabamentos, acompanhando fornecedores e auxiliando o cliente para que todas as decisões estejam alinhadas ao conceito do projeto."
  }
];

const Servicos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '4rem' }}
      className="container"
    >
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
          fontWeight: 300, 
          letterSpacing: '8px', 
          textTransform: 'uppercase', 
          marginBottom: '4rem',
          textAlign: 'center',
          fontFamily: 'var(--font-heading)'
        }}
      >
        Serviços
      </motion.h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '3rem',
        marginTop: '2rem'
      }}>
        {servicosList.map((servico, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--color-bg-light)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              borderTop: '2px solid var(--color-accent)'
            }}
          >
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: 500, 
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--color-accent)'
            }}>
              {servico.title}
            </h3>
            <p style={{ 
              lineHeight: 1.8, 
              color: '#555',
              fontSize: '0.95rem'
            }}>
              {servico.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Servicos;
