import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PoliticaPrivacidade = () => {
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
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 200, letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '4rem', textAlign: 'center', color: 'inherit' }}
        >
          Política de Privacidade
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.8, color: 'inherit', fontWeight: 300 }}
        >
          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>1. Introdução</h2>
            <p>O escritório Jeferson Teppa Arquitetura valoriza a privacidade de seus clientes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as suas informações pessoais ao utilizar nosso site e nossos serviços, em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>2. Coleta de Dados</h2>
            <p>Coletamos informações que você nos fornece voluntariamente quando entra em contato conosco (seja via WhatsApp, e-mail ou redes sociais). Isso pode incluir seu nome, e-mail, número de telefone e informações sobre o seu projeto de arquitetura.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>3. Uso das Informações</h2>
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Responder às suas dúvidas e solicitações de orçamento.</li>
              <li>Fornecer propostas arquitetônicas e comerciais adequadas à sua necessidade.</li>
              <li>Manter comunicação sobre o andamento de projetos contratados.</li>
              <li>Melhorar a experiência do usuário em nosso site.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>4. Compartilhamento de Dados</h2>
            <p>A Jeferson Teppa Arquitetura compromete-se a não vender, alugar ou compartilhar suas informações pessoais com terceiros para fins de marketing. O compartilhamento de dados ocorrerá apenas quando estritamente necessário para a execução do contrato (ex: fornecedores envolvidos no seu projeto) ou mediante exigência legal.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>5. Segurança</h2>
            <p>Implementamos medidas de segurança técnicas e administrativas para proteger seus dados pessoais contra acessos não autorizados, perdas, destruição ou alterações. No entanto, ressaltamos que nenhuma transmissão de dados pela internet é 100% segura.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>6. Cookies</h2>
            <p>Nosso site pode utilizar cookies para melhorar a navegação e entender como os visitantes interagem com nossas páginas. Você pode configurar seu navegador para recusar cookies, embora isso possa limitar algumas funcionalidades do site.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>7. Seus Direitos</h2>
            <p>De acordo com a LGPD, você tem o direito de solicitar o acesso, a correção, a atualização ou a exclusão de seus dados pessoais armazenados por nós. Para exercer esses direitos, entre em contato através dos nossos canais de atendimento.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>8. Contato</h2>
            <p>Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco:</p>
            <p style={{ marginTop: '10px' }}><strong>E-mail:</strong> JEFERSONTEPPA.ARQ@GMAIL.COM</p>
            <p><strong>Telefone/WhatsApp:</strong> (46) 99139-7747</p>
          </section>
          
          <section style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PoliticaPrivacidade;
