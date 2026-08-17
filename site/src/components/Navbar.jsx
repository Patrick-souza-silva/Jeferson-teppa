import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../assets/data.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Define os logos
  const logoEscuro = data.logos.find(l => l.includes('Logotipo_Principal_BRANCO_MARCA')) || data.logos[0];
  const logoBranco = data.logos.find(l => l.includes('Logotipo_Principal_NEGATIVO_MARCA')) || logoEscuro;

  // Define se a página atual tem um fundo escuro no topo (Hero image/video)
  const isDarkHeroPage = location.pathname === '/' || location.pathname.startsWith('/projeto/') || location.pathname === '/sobre';
  // Se não for uma página com hero escuro, o header deve começar sólido para ser legível no fundo branco
  const isTransparent = isDarkHeroPage && !scrolled;

  const currentLogo = !isTransparent ? logoEscuro : logoBranco;

  const navStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
    transition: 'all 0.3s ease',
    backgroundColor: !isTransparent ? '#ffffff' : 'transparent',
    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
    height: !isTransparent ? '65px' : '95px', // Altura um pouco maior quando transparente para dar respiro
  };

  const linkStyles = {
    color: !isTransparent ? '#000000' : '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '0.85rem',
    fontWeight: 500,
    transition: 'color 0.3s',
  };

  const mobileLinkStyles = {
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    fontSize: '1.2rem',
    display: 'block',
    padding: '1.5rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  };

  return (
    <>
      <nav style={navStyles}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', zIndex: 101, height: '100%' }}>
            {currentLogo ? (
              <img 
                src={currentLogo} 
                alt="Jeferson Teppa Logo" 
                style={{ 
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain',
                  transition: 'all 0.3s ease',
                  transform: 'scale(2.2)',
                  transformOrigin: 'left center',
                  filter: !isTransparent ? 'brightness(0)' : 'none'
                }} 
              />
            ) : (
              <span style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '3px', color: !isTransparent ? '#000' : '#fff' }}>JEFERSON TEPPA</span>
            )}
          </Link>

          {/* Desktop Menu */}
          <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none' }} className="desktop-menu">
            <li>
              <Link to="/" style={linkStyles} className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/projetos" style={linkStyles} className="nav-link">Projetos</Link>
            </li>
            <li>
              <Link to="/feedbacks" style={linkStyles} className="nav-link">Clientes</Link>
            </li>
            <li>
              <Link to="/sobre" style={linkStyles} className="nav-link">Sobre</Link>
            </li>
            <li>
              <Link to="/servicos" style={linkStyles} className="nav-link">Serviços</Link>
            </li>
            <li>
              <Link to="/contato" style={linkStyles} className="nav-link">Contato</Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <div className="mobile-toggle" style={{ zIndex: 101 }}>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              style={{ background: 'none', border: 'none', color: !isTransparent ? '#000' : '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'color 0.3s' }}
            >
              {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        <style>{`
          .nav-link:hover { opacity: 0.7; }
          .mobile-toggle { display: none; }
          @media (max-width: 768px) {
            .desktop-menu { display: none !important; }
            .mobile-toggle { display: block; }
          }
        `}</style>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(10, 10, 10, 0.98)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              padding: '6rem 2rem 2rem',
            }}
          >
            <div style={{ flex: 1 }}>
              <Link to="/" style={mobileLinkStyles}>Home</Link>
              <Link to="/projetos" style={mobileLinkStyles}>Projetos</Link>
              <Link to="/sobre" style={mobileLinkStyles}>Sobre</Link>
              <Link to="/servicos" style={mobileLinkStyles}>Serviços</Link>
              <Link to="/contato" style={mobileLinkStyles}>Contato</Link>
            </div>
            
            <div style={{ marginTop: 'auto', textAlign: 'center', color: '#888', fontSize: '0.8rem' }}>
              &copy; {new Date().getFullYear()} Jeferson Teppa
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
