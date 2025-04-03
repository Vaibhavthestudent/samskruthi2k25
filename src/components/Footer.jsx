import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  max-width: 800px;
  gap: 2rem;
  flex-wrap: wrap;
  
  img {
    height: 60px;
    width: auto;
    object-fit: contain;
    
    @media (max-width: 768px) {
      height: 50px;
    }
    
    @media (max-width: 480px) {
      height: 40px;
    }
  }
  
  .college-logo {
    height: 100px;
    
    @media (max-width: 768px) {
      height: 80px;
    }
    
    @media (max-width: 480px) {
      height: 60px;
    }
  }
`;

const FooterContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-blue text-white pt-12 pb-6 relative overflow-hidden">
      {/* Decorative Bubbles - Hidden on mobile */}
      <div className="absolute top-10 left-10 w-16 h-16 bubble opacity-20 hidden md:block"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bubble opacity-30 hidden md:block"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bubble opacity-25 hidden md:block"></div>
      
      <FooterContent>
        <LogoContainer>
          <img 
            src="/src/Resources/logos/samskruthilogo.png" 
            alt="Samskruthi 2025 Logo" 
            className="transition-all duration-300 hover:scale-105"
          />
          <img 
            src="/src/Resources/logos/EPGI_LOGO.png" 
            alt="EPGI Logo" 
            className="college-logo transition-all duration-300 hover:scale-105"
            style={{ 
              filter: 'brightness(0) invert(1)',
            }}
          />
        </LogoContainer>
        <p className="text-light-blue/80 mb-8 text-sm md:text-base">
          The annual cultural fest of East Point Group of Institutions, celebrating talent, creativity, and cultural diversity.
        </p>
        
        {/* Copyright section */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-xs md:text-sm text-white/60">
            © Samskruthi {currentYear} - East Point Group of Institutions. All rights reserved.
          </p>
        </div>
      </FooterContent>
    </footer>
  );
};

export default Footer;