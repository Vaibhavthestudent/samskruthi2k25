import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  padding-top: 80px; /* Space for navbar */
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
`;

const ContactSection = styled.section`
  padding: 5rem 0;
`;

const ContactHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--deep-blue);
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: var(--coral);
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: #4b5563;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  
  h2 {
    font-size: 1.8rem;
    color: var(--deep-blue);
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background: var(--coral);
    }
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  .icon-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--deep-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: white;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .content {
    h3 {
      font-size: 1.2rem;
      color: var(--deep-blue);
      margin-bottom: 0.25rem;
    }
    
    p, a {
      color: #4b5563;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    a:hover {
      color: var(--coral);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
`;

const SocialIcon = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--deep-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--coral);
    transform: translateY(-5px);
  }
`;

const MapContainer = styled(motion.div)`
  position: relative;
  
  .map-circle {
    width: 100%;
    padding-bottom: 100%; /* Makes it a perfect circle */
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
  
  .map-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 119, 182, 0.8);
    color: white;
    padding: 1rem;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 0.8rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    
    svg {
      font-size: 1.5rem;
      margin-bottom: 0.25rem;
    }
    
    &:hover {
      background: var(--coral);
      width: 90px;
      height: 90px;
    }
  }
`;

const Contact = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps?q=13.0503,77.7147', '_blank');
  };
  
  return (
    <PageContainer>
      <ContactSection>
        <div className="container mx-auto">
          <ContactHeader
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Contact Us</h1>
            <p>
              Have questions about Samskruthi 2025? We're here to help!
              Reach out to us through any of the channels below.
            </p>
          </ContactHeader>
          
          <ContactGrid>
            <ContactInfo
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2>Get in Touch</h2>
              
              <ContactItem
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="icon-container">
                  <FaPhone />
                </div>
                <div className="content">
                  <h3>Phone</h3>
                  <p><a href="tel:+919876543210">+91 98765 43210</a></p>
                  <p><a href="tel:+919876543211">+91 98765 43211</a></p>
                </div>
              </ContactItem>
              
              <ContactItem
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="icon-container">
                  <FaEnvelope />
                </div>
                <div className="content">
                  <h3>Email</h3>
                  <p><a href="mailto:samskruthi@college.edu">samskruthi@college.edu</a></p>
                </div>
              </ContactItem>
              
              <ContactItem
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="icon-container">
                  <FaMapMarkerAlt />
                </div>
                <div className="content">
                  <h3>Address</h3>
                  <p>RNSIT Campus, Channasandra,</p>
                  <p>Bengaluru, Karnataka 560098</p>
                </div>
              </ContactItem>
              
              <SocialLinks>
                <SocialIcon 
                  href="https://www.instagram.com/samskruthi_official/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon 
                  href="mailto:samskruthi@college.edu"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope />
                </SocialIcon>
                <SocialIcon 
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaPhone />
                </SocialIcon>
              </SocialLinks>
            </ContactInfo>
            
            <MapContainer
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="map-circle">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4691411020407!2d77.71221!3d13.0503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAxLjEiTiA3N8KwNDInNTMuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  allowFullScreen="" 
                  loading="lazy"
                  title="College Location"
                ></iframe>
              </div>
              <motion.div 
                className="map-overlay"
                onClick={openGoogleMaps}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaMapMarkerAlt />
                <span>Open Map</span>
              </motion.div>
            </MapContainer>
          </ContactGrid>
        </div>
      </ContactSection>
    </PageContainer>
  );
};

export default Contact;