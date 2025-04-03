import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaHandshake, FaArrowRight } from 'react-icons/fa';

const PageContainer = styled.div`
  padding-top: 80px; /* Space for navbar */
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
`;

const HeroSection = styled.section`
  padding: 5rem 0 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
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
    margin: 0 auto 2rem;
    color: #4b5563;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }
`;

const SponsorCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  cursor: pointer;
  
  .logo-container {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 1rem;
    
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
    color: var(--deep-blue);
    margin: 0.5rem 0;
    text-align: center;
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
    
    p {
      color: white;
      font-size: 1rem;
      text-align: center;
      margin: 0;
    }
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    
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
  
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    color: var(--deep-blue);
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: var(--coral);
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 0.5rem;
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
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    opacity: 0.9;
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--coral);
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
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
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
    { name: "TVS", logo: "/src/Resources/sponsor_logo/tvs.png", category: "automotive" },
    { name: "YAMAHA", logo: "/src/Resources/sponsor_logo/yamaha.png", category: "automotive" },
    { name: "KTM", logo: "/src/Resources/sponsor_logo/ktm.png", category: "automotive" },
    { name: "Mirchi", logo: "/src/Resources/sponsor_logo/Radio_Mirchi.webp", category: "media" },
    { name: "Raj Music", logo: "/src/Resources/sponsor_logo/raj.png", category: "media" },
    { name: "DECATHLON", logo: "/src/Resources/sponsor_logo/decathlon.svg", category: "retail" },
    { name: "SaaCHI", logo: "/src/Resources/sponsor_logo/saatchi-saatchi.png", category: "services" },
    { name: "YLG SALON", logo: "/src/Resources/sponsor_logo/ylg.png", category: "services" },
    { name: "Coca-Cola", logo: "/src/Resources/sponsor_logo/coca-cola.png", category: "food" },
    { name: "TRENDS", logo: "/src/Resources/sponsor_logo/trends.png", category: "retail" },
    { name: "Domino's Pizza", logo: "/src/Resources/sponsor_logo/dominos.svg", category: "food" },
    { name: "Printo", logo: "/src/Resources/sponsor_logo/printo.png", category: "services" },
    { name: "KFC", logo: "/src/Resources/sponsor_logo/kfc.png", category: "food" },
    { name: "Showoff", logo: "/src/Resources/sponsor_logo/showoff.jpg", category: "retail" },
    { name: "CareerLabs", logo: "/src/Resources/sponsor_logo/careerlabs.avif", category: "education" },
    { name: "McDonald's", logo: "/src/Resources/sponsor_logo/McDonald.png", category: "food" },
    { name: "Mufti", logo: "/src/Resources/sponsor_logo/mufti.png", category: "retail" },
    { name: "PluginHive", logo: "/src/Resources/sponsor_logo/pluginhive.png", category: "technology" },
    { name: "UCO Bank", logo: "/src/Resources/sponsor_logo/uco.png", category: "finance" },
    { name: "Federal Bank", logo: "/src/Resources/sponsor_logo/Federal_Bank.png", category: "finance" },
    { name: "PrintSEC Digital", logo: "/src/Resources/sponsor_logo/PrintSEC_Digital.jpg", category: "services" },
    { name: "Shot Circuit", logo: "/src/Resources/sponsor_logo/shot_circuit.png", category: "technology" }
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