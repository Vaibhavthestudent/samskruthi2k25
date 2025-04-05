import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHandshake, FaArrowRight } from 'react-icons/fa';
import tvs from '../assets/Resources/sponsor_logo/tvs.png';
import yamaha from '../assets/Resources/sponsor_logo/yamaha.png';
import ktm from '../assets/Resources/sponsor_logo/ktm.png';
import mirchi from '../assets/Resources/sponsor_logo/Radio_Mirchi.webp';
import raj from '../assets/Resources/sponsor_logo/raj.png';
import decathlon from '../assets/Resources/sponsor_logo/decathlon.svg';
import saachi from '../assets/Resources/sponsor_logo/saatchi-saatchi.png';
import ylg from '../assets/Resources/sponsor_logo/ylg.png';
import coca_cola from '../assets/Resources/sponsor_logo/coca-cola.png';
import trends from '../assets/Resources/sponsor_logo/trends.png';
import dominos from '../assets/Resources/sponsor_logo/dominos.svg';
import printo from '../assets/Resources/sponsor_logo/printo.png';
import kfc from '../assets/Resources/sponsor_logo/kfc.png';
import showoff from '../assets/Resources/sponsor_logo/showoff.jpg';
import careerlabs from '../assets/Resources/sponsor_logo/careerlabs.avif';
import mcdonalds from '../assets/Resources/sponsor_logo/McDonald.png';
import mufti from '../assets/Resources/sponsor_logo/mufti.png';
import pluginhive from '../assets/Resources/sponsor_logo/PluginHive.png';
import uco from '../assets/Resources/sponsor_logo/uco.png';
import federal from '../assets/Resources/sponsor_logo/Federal_Bank.png';
import printsec from '../assets/Resources/sponsor_logo/PrintSEC_Digital.jpg';
import snackladder from '../assets/Resources/sponsor_logo/snack&ladder.png';
import shotcircuit from '../assets/Resources/sponsor_logo/shot_circuit.png';
import unibic from '../assets/Resources/sponsor_logo/unibic.png';






const PageContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding-top: 70px;
  }
  
  @media (max-width: 480px) {
    padding-top: 60px;
  }
`;

const HeroSection = styled.section`
  padding: 2rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
    margin-top: 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0;
    margin-top: 0.5rem;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--text-color);
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.75rem;
      margin-bottom: 0.75rem;
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 2rem;
    color: var(--text-color);
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 0 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0 1rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
  }
`;

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0.75rem;
  }
`;

const SponsorCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  cursor: pointer;
  
  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    border-radius: 0.5rem;
  }
  
  .logo-container {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 1rem;
    
    @media (max-width: 768px) {
      height: 120px;
      padding: 0.75rem;
      margin-bottom: 0.75rem;
    }
    
    @media (max-width: 480px) {
      height: 80px;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
    
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      transition: transform 0.5s ease;
    }
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-color);
    margin: 0.5rem 0;
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin: 0.4rem 0;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
      margin: 0.3rem 0;
    }
  }
  
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 119, 182, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 1.5rem;
    
    @media (max-width: 768px) {
      padding: 1rem;
    }
    
    @media (max-width: 480px) {
      padding: 0.75rem;
    }
    
    p {
      color: white;
      font-size: 1rem;
      text-align: center;
      margin: 0;
      
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
      
      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.37);
    
    .overlay {
      opacity: 1;
    }
    
    .logo-container img {
      transform: scale(1.1);
    }
  }
`;

const CategorySection = styled.section`
  padding: 3rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
  
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: var(--deep-blue);
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: var(--coral);
      
      @media (max-width: 480px) {
        width: 40px;
        height: 2px;
        bottom: -8px;
      }
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    gap: 0.4rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    gap: 0.3rem;
    padding: 0 0.5rem;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--deep-blue)' : 'white'};
  color: ${props => props.active ? 'white' : '#4b5563'};
  border: 1px solid ${props => props.active ? 'var(--deep-blue)' : '#e5e7eb'};
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.3rem 0.75rem;
    font-size: 0.75rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: ${props => props.active ? 'var(--deep-blue)' : '#f9fafb'};
  }
`;

const ThankYouSection = styled.section`
  background: var(--deep-blue);
  color: white;
  padding: 4rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-bottom: 1.25rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    opacity: 0.9;
    padding: 0 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0 1rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--coral);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 1.25rem;
    }
    
    @media (max-width: 480px) {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;

const SponsorButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  background: var(--coral);
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.85rem;
    margin-top: 0.75rem;
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
    
    @media (max-width: 480px) {
      margin-left: 0.4rem;
    }
  }
  
  &:hover {
    background: #ff5a5a;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const Sponsors = () => {
  const [filter, setFilter] = useState('all');
  const [sponsors, setSponsors] = useState([]);
  
  // Sponsor data with categories
  const sponsorData = [
    { name: "UNIBIC", logo: unibic, category: "food" },
    { name: "TVS", logo: tvs, category: "automotive" },
    { name: "YAMAHA", logo: yamaha, category: "automotive" },
    { name: "KTM", logo: ktm, category: "automotive" },
    { name: "Mirchi", logo: mirchi, category: "media" },
    { name: "Raj Music", logo: raj, category: "media" },
    { name: "DECATHLON", logo: decathlon, category: "retail" },
    { name: "SaaCHI", logo: saachi, category: "services" },
    { name: "YLG SALON", logo: ylg, category: "services" },
    { name: "Coca-Cola", logo: coca_cola, category: "food" },
    { name: "TRENDS", logo: trends, category: "retail" },
    { name: "Domino's Pizza", logo: dominos, category: "food" },
    { name: "Printo", logo: printo, category: "services" },
    { name: "KFC", logo: kfc, category: "food" },
    { name: "Showoff", logo: showoff, category: "retail" },
    { name: "CareerLabs", logo: careerlabs, category: "education" },
    { name: "McDonald's", logo: mcdonalds, category: "food" },
    { name: "Mufti", logo: mufti, category: "retail" },
    { name: "PluginHive", logo: pluginhive, category: "technology" },
    { name: "UCO Bank", logo: uco, category: "finance" },
    { name: "Federal Bank", logo: federal, category: "finance" },
    { name: "PrintSEC Digital", logo: printsec, category: "services" },
    { name: "Snack and Ladder", logo: snackladder, category: "food" },
    { name: "Shot Circuit", logo: shotcircuit, category: "technology" }
  ];
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Sponsors' },
    { id: 'food', name: 'Food & Beverages' },
    { id: 'retail', name: 'Retail' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'finance', name: 'Finance' },
    { id: 'services', name: 'Services' },
    { id: 'media', name: 'Media' },
    { id: 'technology', name: 'Technology' },
    { id: 'education', name: 'Education' }
  ];
  
  useEffect(() => {
    // Filter sponsors based on selected category
    const filtered = filter === 'all' 
      ? sponsorData 
      : sponsorData.filter(sponsor => sponsor.category === filter);
    
    setSponsors(filtered);
  }, [filter]);
  
  // Card variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <PageContainer>
      <HeroSection>
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Valued Sponsors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We extend our heartfelt gratitude to all the sponsors who have supported Samskruthi over the years. 
            Their generous contributions have been instrumental in making our cultural fest a grand success.
          </motion.p>
        </div>
      </HeroSection>
      
      <CategorySection>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2>Browse by Category</h2>
          </div>
          
          <FilterContainer>
            {categories.map((category) => (
              <FilterButton
                key={category.id}
                active={filter === category.id}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </FilterButton>
            ))}
          </FilterContainer>
          
          <SponsorsGrid>
            {sponsors.map((sponsor, index) => (
              <SponsorCard
                key={sponsor.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="logo-container">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                </div>
                <h3>{sponsor.name}</h3>
                <div className="overlay">
                  <p>Thank you {sponsor.name} for supporting Samskruthi!</p>
                </div>
              </SponsorCard>
            ))}
          </SponsorsGrid>
        </div>
      </CategorySection>
      
      <ThankYouSection>
        <div className="container mx-auto px-4">
          <FaHandshake className="icon" />
          <h2>Become a Sponsor</h2>
          <p>
            Join our prestigious list of sponsors and be a part of Samskruthi 2025. 
            Gain visibility among thousands of students and visitors while supporting 
            one of the largest cultural festivals in the region.
          </p>
          <SponsorButton 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Partner with us <FaArrowRight />
          </SponsorButton>
        </div>
      </ThankYouSection>
    </PageContainer>
  );
};

export default Sponsors;