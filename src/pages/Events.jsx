import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import image1  from '../assets/Resources/events/1.jpg'
import image2  from '../assets/Resources/events/2.jpg'
import image3  from '../assets/Resources/events/3.jpg'
import image4  from '../assets/Resources/events/4.jpg'
import image5  from '../assets/Resources/events/5.jpg'
import image6  from '../assets/Resources/events/6.jpg'
import image7  from '../assets/Resources/events/7.jpg'
import image8  from '../assets/Resources/events/8.jpg'
import image9  from '../assets/Resources/events/9.jpg'
import image10  from '../assets/Resources/events/10.jpg'
import image11  from '../assets/Resources/events/11.jpg'
import image12  from '../assets/Resources/events/12.jpg'



const PageContainer = styled.div`
  padding: 80px 0 2rem;
  min-height: 100vh;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 70px 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 60px 0 1rem;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin: 1rem 0 3rem;
  padding: 1rem;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: #0077b6;
      border-radius: 2px;
    }
  }

  p {
    color: var(--text-color);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 1rem auto 0;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0 2rem;
    padding: 0.5rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;

const EventSection = styled.section`
  padding: 2rem 0;
  position: relative;
  z-index: 1;
  
  .section-title {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-color);
    font-size: 2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: #0077b6;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  margin: 2rem auto;
  max-width: 1000px;
  
  .carousel {
    display: flex;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    position: relative;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 1.0s ease-in-out;
      
      &.active {
        opacity: 1;
      }
    }
  }
`;

const EventCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const EventCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.5);
  }
  
  .card-content {
    padding: 1.75rem;
    text-align: center;
    
    h3 {
      font-size: 1.35rem;
      color: var(--text-color);
      margin-bottom: 0.75rem;
      font-weight: 600;
    }
    
    p {
      color: var(--text-color);
      font-size: 0.95rem;
      margin-bottom: 1rem;
      line-height: 1.5;
      opacity: 0.9;
    }
  }
`;

const RegisterButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-color);
  font-weight: 600;
  padding: 0.85rem 2.5rem;
  border-radius: 9999px;
  text-decoration: none;
  margin: 2rem auto;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.5);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Events = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === onstageImages.length - 1 ? 0 : prev + 1));
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };
  
  // On-stage event images
  const onstageImages = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12
  ];
  
  // On-stage events data
  const onstageEvents = [
    { "name": "Classical Dance", "description": "Graceful traditional moves" },
  { "name": "Classical Singing", "description": "Melodic heritage vocals" },
  { "name": "Duet Singing", "description": "Harmonized vocal duo" },
  { "name": "Solo Singing", "description": "Expressive solo melodies" },
  { "name": "Duet Dance", "description": "Synchronized dance pair" },
  { "name": "Solo Dance", "description": "Individual artistic expression" },
  { "name": "Group Dance", "description": "Energetic team performance" },
  { "name": "Beatboxing", "description": "Rhythmic vocal beats" },
  { "name": "Fashion Show", "description": "Stylish runway showcase" },
  { "name": "Instrumental", "description": "Musical mastery display" },
  { "name": "Battle of Bands", "description": "Intense musical showdown" }
    
  ];
  
  // Off-stage events data
  const offstageEvents = [
    { "name": "Painting", "description": "Creative color strokes" },
  { "name": "Rangoli", "description": "Vibrant floor art" },
  { "name": "Short Film", "description": "Visual storytelling creativity" },
  { "name": "Sketching", "description": "Expressive pencil artistry" },
  { "name": "Dance Battle", "description": "High-energy face-off" },
  { "name": "Photography", "description": "Capturing perfect moments" },
  { "name": "Mehendi", "description": "Intricate henna designs" },
  { "name": "Quiz", "description": "Knowledge-testing challenge" },
  { "name": "Spoken Poetry", "description": "Expressive word artistry" },

  ];
  
  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === onstageImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? onstageImages.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Samskruthi 2025 Events
          </motion.h1>
          <motion.p 
            className="text-xl text-light-blue max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dive into a sea of talent and creativity with our diverse range of events
          </motion.p>
        </div>
      </HeroSection>
      
      {/* On-stage Events Section */}
      <EventSection pattern={true}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="section-title text-3xl font-bold text-deep-blue">On-Stage Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcase your talent on the big stage with our exciting performance-based events
            </p>
          </div>
          
          {/* Carousel for on-stage events */}
          <CarouselContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="carousel">
              {onstageImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`On-stage event ${index + 1}`}
                  className={currentSlide === index ? 'active' : ''}
                />
              ))}
            </div>
            
            
            
            <div className="indicators">
              {onstageImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </CarouselContainer>
          
          {/* On-stage event cards */}
          <EventCardsGrid>
            {onstageEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard>
                  <div className="card-content">
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                  </div>
                </EventCard>
              </motion.div>
            ))}
          </EventCardsGrid>
          
          {/* Register button for on-stage events */}
          <div className="text-center">
            <RegisterButton to="https://forms.gle/2zpD7ZEPirzLuG8s6" style={{backgroundColor: '#03045e', color: 'white'}}>
              Register for On-Stage Events
            </RegisterButton>
          </div>
        </div>
      </EventSection>
      
      {/* Off-stage Events Section */}
      <EventSection bgColor="rgba(144, 224, 239, 0.1)" pattern={true}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="section-title text-3xl font-bold text-deep-blue">Off-Stage Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Express your creativity and skills through our diverse range of off-stage competitions
            </p>
          </div>
          
          {/* Off-stage event cards */}
          <EventCardsGrid>
            {offstageEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <EventCard>
                  <div className="card-content">
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                  </div>
                </EventCard>
              </motion.div>
            ))}
          </EventCardsGrid>
          
          {/* Register button for off-stage events */}
          <div className="text-center">
            <RegisterButton to="https://forms.gle/juJzqMwZhqJkZYQr8" style={{backgroundColor: '#03045e', color: 'white'}}>
              Register for Off-Stage Events
            </RegisterButton>
          </div>
        </div>
      </EventSection>
    </PageContainer>
  );
};

export default Events;