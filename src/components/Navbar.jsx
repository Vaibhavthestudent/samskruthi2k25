import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

// Update the Logo container with glassmorphic effect
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 45px;
    width: auto;
    object-fit: contain;
  }
`;

// Enhanced glassmorphic navbar
const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 50;
  transition: all 0.4s ease;
  padding: ${props => props.scrolled ? '0.5rem 0' : '1rem 0'};
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.2)'};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'};
  left: 0;
  top: 0;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const DesktopMenu = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }
`;

// Enhanced glassmorphic nav link
const NavLink = styled(Link)`
  position: relative;
  font-weight: 500;
  transition: all 0.3s ease;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--deep-blue)'};
  padding: 0.5rem 0;
  
  &:hover {
    color: var(--primary-color);
  }

  &::after {
    content: '';
    position: absolute;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--coral);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: var(--deep-blue);
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

// Enhanced glassmorphic mobile menu
const MobileMenu = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  background: ${props => props.active ? 'rgba(144, 224, 239, 0.2)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--deep-blue)'};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 224, 239, 0.2);
    transform: translateX(5px);
  }
`;

// Glassmorphic button style
const GlassButton = styled.a`
  background: rgba(0, 119, 182, 0.7);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  display: inline-block;
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(3, 4, 94, 0.8);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavContent>
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LogoContainer>
              <img src="/src/Resources/logos/samskruthilogo.png" alt="Samskruthi 2025 Logo" />
            </LogoContainer>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <DesktopMenu>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              active={location.pathname === link.path ? 1 : 0}
            >
              {link.name}
            </NavLink>
          ))}
          <GlassButton href="#register">
            Register Now
          </GlassButton>
        </DesktopMenu>

        {/* Mobile Navigation Toggle */}
        <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </MobileMenuButton>
      </NavContent>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.name}
                  to={link.path}
                  active={location.pathname === link.path ? 1 : 0}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </MobileNavLink>
              ))}
              <GlassButton 
                href="#register" 
                style={{textAlign: 'center', marginTop: '0.5rem'}}
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </GlassButton>
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;