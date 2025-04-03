import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  justify-content: center; /* Center the logos horizontally */
  width: 100%; /* Take full width */
  
  img {
    height: 60px;
    width: auto;
    margin-right: 1rem;
  }
  
  .college-logo {
    height: 100px; /* Increased from 50px to 70px */
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-blue text-white pt-12 pb-6 relative overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute top-10 left-10 w-16 h-16 bubble opacity-20"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bubble opacity-30"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bubble opacity-25"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-4 text-center"> {/* Added text-center and span all columns */}
            
            <LogoContainer>
              <img src="/src/Resources/logos/samskruthilogo.png" alt="Samskruthi 2025 Logo" />
              <img src="/src/Resources/logos/EPGI_LOGO.png" alt="EPGI Logo" className="college-logo" style={{ maxWidth: '900px',
                  filter: 'brightness(0) invert(1)', }}/>
            </LogoContainer>
            <p className="text-light-blue/80 mb-4">
              The annual cultural fest of East Point Group of Institutions, celebrating talent, creativity, and cultural diversity.
            </p>
            <div className="flex space-x-8 justify-center"> {/* Changed space-x-4 to space-x-8 and added justify-center */}
              <a href="#" className="text-white hover:text-coral transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-coral transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/60">
          <p>©  Samskruthi {currentYear}- East Point Group of Institutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;