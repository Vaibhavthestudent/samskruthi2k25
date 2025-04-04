import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import CountdownTimer from '../components/CountdownTimer';

import samskruthiLogo from '../assets/Resources/logos/samskruthilogo.png';
import epgiLogo from '../assets/Resources/logos/EPGI_LOGO.png';
import jonitha from '../assets/Resources/2k24/28.JPG';
import fashionShow from '../assets/Resources/Gallery/Fashion_Show.jpg';
import bands from '../assets/Resources/Gallery/Bands.JPG';
import dj from '../assets/Resources/Gallery/DJ.JPG';
import bannerReveal from '../assets/Resources/Gallery/BANNER_REVEAL.JPG';
import banner from '../assets/Resources/Gallery/banner.jpg';
import pdf from '../assets/Samskruthi2k25.pdf';    

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px; /* Add padding to account for navbar height */
  width: 100%;
  margin: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(3, 4, 94, 0.9), rgba(0, 119, 182, 0.7));
    z-index: 1;
    margin-top: 3.5rem; /* Add margin to account for navbar height */
  }
  
  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
    
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
  
  .theme-text {
    font-size: 1.25rem;
    color: var(--light-blue);
    margin-bottom: 1.5rem;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  .theme-title {
    font-size: 1.5rem;
    font-style: italic;
    color: white;
    margin-bottom: 2rem;
    
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .description {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    
    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
  
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    padding: 0 1rem;
    
    @media (min-width: 640px) {
      flex-direction: row;
      gap: 1.5rem;
      padding: 0;
    }
    
    a {
      min-width: auto;
      width: 100%;
      text-align: center;
      
      @media (min-width: 640px) {
        width: auto;
        min-width: 180px;
      }
    }
  }
`;

const AboutSection = styled.section`
  background: white;
  padding: 5rem 0;
  
  .section-title {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 5rem;
      height: 3px;
      background: var(--coral);
    }
  }
  
  .about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: center;
    
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  .about-content {
    h3 {
      font-size: 1.5rem;
      color: var(--deep-blue);
      margin-bottom: 1rem;
    }
    
    p {
      color: #4b5563;
      margin-bottom: 1.5rem;
    }
  }
  
  .about-image {
    position: relative;
    
    img {
      width: 100%;
      height: auto;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .circle-1, .circle-2 {
      position: absolute;
      border-radius: 50%;
      z-index: 0;
    }
    
    .circle-1 {
      bottom: -1.5rem;
      right: -1.5rem;
      width: 8rem;
      height: 8rem;
      background: rgba(255, 107, 107, 0.2);
    }
    
    .circle-2 {
      top: -1.5rem;
      left: -1.5rem;
      width: 6rem;
      height: 6rem;
      background: rgba(144, 224, 239, 0.3);
    }
  }
`;

const HighlightsSection = styled.section`
  background: rgba(144, 224, 239, 0.1);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  
  .wave-top, .wave-bottom {
    position: absolute;
    left: 0;
    width: 100%;
    height: 5rem;
    background-size: 100% 100%;
    opacity: 0.1;
  }
  
  .wave-top {
    top: 0;
  }
  
  .wave-bottom {
    bottom: 0;
    transform: rotate(180deg);
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 5rem;
      height: 3px;
      background: var(--coral);
    }
  }
  
  .section-description {
    text-align: center;
    color: #4b5563;
    max-width: 36rem;
    margin: 0 auto 4rem;
  }
  
  .highlights-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  .highlight-card {
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    
    &:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .icon-container {
      margin-bottom: 1rem;
      width: fit-content;
      padding: 0.75rem;
      border-radius: 50%;
      background: rgba(144, 224, 239, 0.2);
      margin: 0 auto 1rem;
    }
    
    h3 {
      font-size: 1.25rem;
      color: var(--deep-blue);
      margin-bottom: 0.75rem;
      text-align: center;
    }
    
    p {
      color: #4b5563;
      text-align: center;
    }
  }
`;

const FeaturedEventsSection = styled.section`
  background: white;
  padding: 5rem 0;
  
  .section-title {
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 5rem;
      height: 3px;
      background: var(--coral);
    }
  }
  
  .section-description {
    text-align: center;
    color: #4b5563;
    max-width: 36rem;
    margin: 0 auto 4rem;
  }
  
  .events-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr); /* Changed from 3 to 2 columns */
    }
  }
  
  .event-card {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 18rem;
    
    &:hover img {
      transform: scale(1.1);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(3, 4, 94, 0.8), transparent);
      opacity: 0.8;
    }
    
    .category {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--coral);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.5rem;
      color: white;
      
      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
      
      a {
        color: var(--light-blue);
        font-size: 0.875rem;
        display: inline-flex;
        align-items: center;
        
        &:hover {
          color: var(--coral);
        }
        
        svg {
          margin-left: 0.25rem;
        }
      }
    }
  }
  
  .view-all {
    text-align: center;
    margin-top: 3rem;
  }
`;

const CTASection = styled.section`
  background: var(--deep-blue);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  
  .bubble-1, .bubble-2 {
    position: absolute;
    border-radius: 50%;
  }
  
  .bubble-1 {
    top: 2.5rem;
    left: 2.5rem;
    width: 5rem;
    height: 5rem;
    background: rgba(255, 255, 255, 0.1);
    animation: float 3s ease-in-out infinite;
  }
  
  .bubble-2 {
    bottom: 2.5rem;
    right: 2.5rem;
    width: 8rem;
    height: 8rem;
    background: rgba(255, 255, 255, 0.15);
    animation: float 3s ease-in-out infinite;
    animation-delay: 1s;
  }
  
  .cta-content {
    max-width: 48rem;
    margin: 0 auto;
    text-align: center;
    
    h2 {
      font-size: 1.875rem;
      color: white;
      margin-bottom: 1.5rem;
      
      @media (min-width: 768px) {
        font-size: 2.25rem;
      }
    }
    
    p {
      color: rgba(144, 224, 239, 0.9);
      font-size: 1.125rem;
      margin-bottom: 2rem;
      max-width: 36rem;
      margin-left: auto;
      margin-right: auto;
    }
    
    .register-button {
      background: var(--coral);
      color: white;
      font-weight: 700;
      padding: 0.75rem 2rem;
      border-radius: 9999px;
      display: inline-flex;
      align-items: center;
      transition: background-color 0.3s ease;
      font-size: 1.125rem;
      
      &:hover {
        background: rgba(255, 107, 107, 0.8);
      }
      
      svg {
        margin-left: 0.5rem;
      }
    }
  }
`;

const galleryImages = [
  {
    src: fashionShow,
    title: 'Fashion Show',
    description: 'A spectacular showcase of style and creativity'
  },
  {
    src: bands,
    title: 'Battle of Bands',
    description: 'Where music meets competition'
  },
  {
    src: dj,
    title: 'DJ Night',
    description: 'An electrifying night of music and dance'
  },
  {
    src: bannerReveal,
    title: 'Banner Reveal',
    description: 'The grand unveiling of Samskruthi 2025'
  }
];

const Home = () => {
  // Sample event date - replace with actual date
  const eventDate = "2025-04-24T09:00:00";

  // Highlights data
  const highlights = [
    {
      icon: <FaCalendarAlt size={24} color="var(--coral)" />,
      title: "3-Day Extravaganza",
      description: "Experience three days of non-stop cultural celebrations and competitions."
    },
    {
      icon: <FaUsers size={24} color="var(--coral)" />,
      title: "20+ Events",
      description: "Participate in over 20 different events across various categories."
    },
    {
      icon: <FaMapMarkerAlt size={24} color="var(--coral)" />,
      title: "Multiple Venues",
      description: "Events spread across the beautiful East Point campus."
    }
  ];

  // Featured events
  const featuredEvents = [
    {
      title: "Live Concert",
      category: "Music",
      image: jonitha
    },
    {
      title: "DJ Night",
      category: "DJ",
      image: dj
    },
    {
      title: "Fashion Show",
      category: "Fashion",
      image: fashionShow
    },
    {
      title: "Battle of Bands",
      category: "Competition",
      image: bands
    }
  ];

 return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100%' }}>
      {/* Hero Section */}
      <HeroSection>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1558019142-6b6290019b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" 
            className="hero-bg"
          />
          
          {/* Decorative bubbles */}
          <div className="bubble" style={{top: '25%', left: '25%', width: '4rem', height: '4rem', opacity: 0.6}}></div>
          <div className="bubble" style={{top: '33%', right: '33%', width: '6rem', height: '6rem', opacity: 0.4}}></div>
          <div className="bubble" style={{bottom: '25%', left: '33%', width: '5rem', height: '5rem', opacity: 0.5}}></div>
          <div className="bubble" style={{bottom: '33%', right: '25%', width: '3rem', height: '3rem', opacity: 0.7}}></div>

          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, delay: 0.2 }}
              className="hero-content"
              style={{ marginTop: "-3rem" }}
            >
             
              <motion.img 
                src={epgiLogo} 
                alt="EPGI Logo" 
                style={{ 
                  maxWidth: '380px',
                  width: '90%',
                  margin: '0 auto',
                  filter: 'brightness(0) invert(1)',
                  marginBottom: '-2rem',
                  '@media (max-width: 1200px)': {
                    maxWidth: '320px'
                  },
                  '@media (max-width: 992px)': {
                    maxWidth: '280px'
                  },
                  '@media (max-width: 768px)': {
                    maxWidth: '240px'
                  },
                  '@media (max-width: 576px)': {
                    maxWidth: '200px'
                  },
                  '@media (max-width: 480px)': {
                    maxWidth: '180px'
                  },
                  '@media (max-width: 410px)': {
                    maxWidth: '160px'
                  },
                  '@media (max-width: 360px)': {
                    maxWidth: '140px'
                  },
                  '@media (max-width: 320px)': {
                    maxWidth: '120px'
                  }
                }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Presents text */}
              <motion.p
                style={{ 
                  color: 'white', 
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  margin: '0 auto',
                  fontStyle: 'italic',
                  textAlign: 'center',
                  marginBottom: '-1rem',
                  '@media (max-width: 1200px)': {
                    fontSize: '1.4rem'
                  },
                  '@media (max-width: 992px)': {
                    fontSize: '1.3rem'
                  },
                  '@media (max-width: 768px)': {
                    fontSize: '1.2rem'
                  },
                  '@media (max-width: 576px)': {
                    fontSize: '1.1rem'
                  },
                  '@media (max-width: 480px)': {
                    fontSize: '1rem'
                  },
                  '@media (max-width: 410px)': {
                    fontSize: '0.9rem'
                  },
                  '@media (max-width: 360px)': {
                    fontSize: '0.8rem'
                  },
                  '@media (max-width: 320px)': {
                    fontSize: '0.75rem'
                  }
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Presents
              </motion.p>
              
              {/* Samskruthi Logo */}
              <motion.img 
                src={samskruthiLogo} 
                alt="Samskruthi 2025" 
                style={{ 
                  maxWidth: '600px',
                  width: '90%',
                  height: 'auto',
                  margin: '0.0rem',
                  filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))',
                  '@media (max-width: 1200px)': {
                    maxWidth: '500px'
                  },
                  '@media (max-width: 992px)': {
                    maxWidth: '450px'
                  },
                  '@media (max-width: 768px)': {
                    maxWidth: '400px'
                  },
                  '@media (max-width: 576px)': {
                    maxWidth: '350px'
                  },
                  '@media (max-width: 480px)': {
                    maxWidth: '300px'
                  },
                  '@media (max-width: 410px)': {
                    maxWidth: '280px'
                  },
                  '@media (max-width: 360px)': {
                    maxWidth: '250px'
                  },
                  '@media (max-width: 320px)': {
                    maxWidth: '220px'
                  },
                  '@media (max-width: 280px)': {
                    maxWidth: '200px'
                  }
                }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="theme-text" style={{
                marginTop: -20,
                '@media (max-width: 480px)': {
                  fontSize: '1.1rem',
                  marginTop: -15
                },
                '@media (max-width: 410px)': {
                  fontSize: '1rem',
                  marginTop: -12
                },
                '@media (max-width: 360px)': {
                  fontSize: '0.95rem',
                  marginTop: -10
                },
                '@media (max-width: 320px)': {
                  fontSize: '0.9rem',
                  marginTop: -8
                }
              }}>
                Soak in the Hues of Joy
              </p>
              <p className="theme-text" style={{
                marginTop: -15,
                color: "white",
                '@media (max-width: 480px)': {
                  fontSize: '1.1rem',
                  marginTop: -10
                },
                '@media (max-width: 410px)': {
                  fontSize: '1rem',
                  marginTop: -8
                },
                '@media (max-width: 360px)': {
                  fontSize: '0.95rem',
                  marginTop: -7
                },
                '@media (max-width: 320px)': {
                  fontSize: '0.9rem',
                  marginTop: -6
                }
              }}>
                24<sup>th</sup>, 25<sup>th</sup> & 26<sup>th</sup> April
              </p>
              
              <p className="description" style={{
                marginTop: -20,
                '@media (max-width: 480px)': {
                  fontSize: '0.9rem',
                  marginTop: -15,
                  padding: '0 1rem'
                },
                '@media (max-width: 410px)': {
                  fontSize: '0.85rem',
                  marginTop: -12,
                  padding: '0 0.75rem'
                },
                '@media (max-width: 360px)': {
                  fontSize: '0.8rem',
                  marginTop: -10,
                  padding: '0 0.5rem'
                },
                '@media (max-width: 320px)': {
                  fontSize: '0.75rem',
                  marginTop: -8,
                  padding: '0 0.4rem'
                }
              }}>
                Join us for three days of music, dance, art, and more at East Point Group of Institutions' annual cultural fest.
              </p>
              
              <div style={{
                marginBottom: '2rem',
                '@media (max-width: 480px)': {
                  marginBottom: '1.5rem'
                },
                '@media (max-width: 410px)': {
                  marginBottom: '1.25rem'
                },
                '@media (max-width: 360px)': {
                  marginBottom: '1rem'
                }
              }}>
                <CountdownTimer targetDate={eventDate} />
              </div>
              
              <div className="buttons" style={{ 
                display: 'flex', 
                gap: '1rem',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto',
                '@media (max-width: 992px)': {
                  maxWidth: '500px'
                },
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  maxWidth: '400px',
                  gap: '0.75rem'
                },
                '@media (max-width: 576px)': {
                  maxWidth: '350px'
                },
                '@media (max-width: 480px)': {
                  maxWidth: '300px',
                  gap: '0.5rem'
                },
                '@media (max-width: 410px)': {
                  maxWidth: '280px',
                  gap: '0.4rem'
                },
                '@media (max-width: 360px)': {
                  maxWidth: '250px',
                  gap: '0.3rem'
                },
                '@media (max-width: 320px)': {
                  maxWidth: '220px',
                  gap: '0.25rem'
                }
              }}>
                <motion.a 
                  href={pdf} 
                  download
                  className="btn-primary"
                  style={{
                    padding: '0.75rem 1.5rem',
                    width: '100%',
                    textAlign: 'center',
                    '@media (max-width: 992px)': {
                      padding: '0.7rem 1.3rem',
                      fontSize: '0.95rem'
                    },
                    '@media (max-width: 768px)': {
                      padding: '0.6rem 1.2rem',
                      fontSize: '0.9rem'
                    },
                    '@media (max-width: 576px)': {
                      padding: '0.55rem 1.1rem',
                      fontSize: '0.85rem'
                    },
                    '@media (max-width: 480px)': {
                      padding: '0.5rem 1rem',
                      fontSize: '0.8rem'
                    },
                    '@media (max-width: 410px)': {
                      padding: '0.45rem 0.9rem',
                      fontSize: '0.75rem'
                    },
                    '@media (max-width: 360px)': {
                      padding: '0.4rem 0.8rem',
                      fontSize: '0.7rem'
                    },
                    '@media (max-width: 320px)': {
                      padding: '0.35rem 0.7rem',
                      fontSize: '0.65rem'
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Brochure
                </motion.a>
                <motion.a 
                  href="/events" 
                  className="btn-primary"
                  style={{
                    padding: '0.75rem 1.5rem',
                    width: '100%',
                    textAlign: 'center',
                    '@media (max-width: 992px)': {
                      padding: '0.7rem 1.3rem',
                      fontSize: '0.95rem'
                    },
                    '@media (max-width: 768px)': {
                      padding: '0.6rem 1.2rem',
                      fontSize: '0.9rem'
                    },
                    '@media (max-width: 576px)': {
                      padding: '0.55rem 1.1rem',
                      fontSize: '0.85rem'
                    },
                    '@media (max-width: 480px)': {
                      padding: '0.5rem 1rem',
                      fontSize: '0.8rem'
                    },
                    '@media (max-width: 410px)': {
                      padding: '0.45rem 0.9rem',
                      fontSize: '0.75rem'
                    },
                    '@media (max-width: 360px)': {
                      padding: '0.4rem 0.8rem',
                      fontSize: '0.7rem'
                    },
                    '@media (max-width: 320px)': {
                      padding: '0.45rem 0.9rem',
                      fontSize: '0.35rem'
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </HeroSection>

      {/* About Section */}
      <AboutSection>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="section-title">About Samskruthi 2025</h2>
          </div>
          
          <div className="about-grid">
            <div className="about-content">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3>Celebrating Culture Through Oceanic Wonders</h3>
                <p>
                  Samskruthi 2025 brings the magical world under the sea to life through a vibrant celebration of arts, music, dance, and creativity. This year's theme invites participants to explore the depths of cultural expression inspired by oceanic wonders.
                </p>
                <p>
                  From coral reefs to mysterious deep-sea creatures, our events draw inspiration from the vast underwater world, creating a unique and immersive experience for all participants and attendees.
                </p>
                <Link to="/events" className="btn-primary">
                  Learn More
                </Link>
              </motion.div>
            </div>
            
            <div className="about-image">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src={banner} 
                  alt="Cultural Performance" 
                />
                <div className="circle-1"></div>
                <div className="circle-2"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </AboutSection>

      {/* Highlights Section */}
      <HighlightsSection>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <h2 className="section-title">Event Highlights</h2>
            <p className="section-description">
              What makes Samskruthi 2025 special? Here's a glimpse of what to expect.
            </p>
          </div>
          
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="icon-container">
                  {highlight.icon}
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </HighlightsSection>

      {/* Featured Events Section */}
      <FeaturedEventsSection>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '2rem'}}>
            <h2 className="section-title">Featured Events</h2>
            <p className="section-description">
              Explore some of our most anticipated events at Samskruthi 2025.
            </p>
          </div>
          
          <div className="events-grid">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={index}
                className="event-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={event.image} alt={event.title} />
                <div className="overlay"></div>
                <div className="category">{event.category}</div>
                <div className="content">
                  <h3>{event.title}</h3>
                  <Link to={`/events#${event.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn more <FaArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="view-all">
            <Link to="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </FeaturedEventsSection>

      {/* CTA Section */}
      <CTASection id="register">
        <div className="bubble-1"></div>
        <div className="bubble-2"></div>
        
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Dive In?</h2>
            <p>
              Register now to participate in Samskruthi 2025 and immerse yourself in a world of creativity, talent, and cultural celebration.
            </p>
            <a href="/Events" className="register-button">
              Register Now <FaArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </CTASection>
    </div>
  );
};

export default Home;