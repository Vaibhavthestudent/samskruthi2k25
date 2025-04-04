import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pic1 from '../assets/Resources/2k24/5.jpg';
import pic2 from '../assets/Resources/2k24/8.jpg';
import pic3 from '../assets/Resources/2k24/12.jpg';
import pic4 from '../assets/Resources/2k24/11.jpg';
import pic5 from '../assets/Resources/2k24/19.jpg';
import pic6 from '../assets/Resources/2k24/21.jpg'; 
import pic7 from '../assets/Resources/2k24/26.jpg';
import pic8 from '../assets/Resources/2k24/27.jpg';


const PageContainer = styled.div`
  padding-top: 80px; /* Space for navbar */
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--deep-blue) 0%, #1a365d 100%);
  color: white;
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  
//   .bubble {
//     position: absolute;
//     border-radius: 50%;
//     background: rgba(255, 255, 255, 0.1);
//     /* Removed the animation property */
//   }
  
  /* Removed the @keyframes float animation */
`;

const EventSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.bgColor || 'white'};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => props.pattern ? 'url("/src/Resources/patterns/wave-pattern.svg")' : 'none'};
    background-repeat: repeat;
    background-size: 500px;
    opacity: 0.03;
    pointer-events: none;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
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
`;

const CarouselContainer = styled.div`
  position: relative;
  margin: 3rem 0;
  
  .carousel {
    display: flex;
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    position: relative;
    height: 400px;
    
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
  
  .controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    padding: 0 1rem;
    z-index: 2;
    
    button {
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.3s ease;
      
      &:hover {
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
  
  .indicators {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    z-index: 2;
    
    .dot {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background: #ccc;
      margin: 0 0.25rem;
      cursor: pointer;
      transition: background 0.3s ease;
      
      &.active {
        background: var(--coral);
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
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--coral);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  .card-content {
    padding: 1.75rem;
    text-align: center;
    
    h3 {
      font-size: 1.35rem;
      color: var(--deep-blue);
      margin-bottom: 0.75rem;
      font-weight: 600;
    }
    
    p {
      color: #4b5563;
      font-size: 0.95rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
  }
`;

const RegisterButton = styled(Link)`
  display: inline-block;
  background: var(--coral);
  color: white;
  font-weight: 700;
  padding: 0.85rem 2.5rem;
  border-radius: 9999px;
  text-align: center;
  margin: 2rem auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: #ff5a5a;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(255, 107, 107, 0.4);
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
      }, 2500);
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
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
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
  { "name": "Treasure Hunt", "description": "Adventurous clue-solving" },
  { "name": "Quiz", "description": "Knowledge-testing challenge" },
  { "name": "Spoken Poetry", "description": "Expressive word artistry" },
  { "name": "Body Building", "description": "Strength and aesthetics" }
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
            
            <div className="controls">
              <button onClick={prevSlide}>
                <FaArrowLeft />
              </button>
              <button onClick={nextSlide}>
                <FaArrowRight />
              </button>
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
            <RegisterButton to="https://forms.gle/2zpD7ZEPirzLuG8s6">
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
            <RegisterButton to="https://forms.gle/juJzqMwZhqJkZYQr8">
              Register for Off-Stage Events
            </RegisterButton>
          </div>
        </div>
      </EventSection>
    </PageContainer>
  );
};

export default Events;