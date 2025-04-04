import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import pic1 from '../assets/Resources/2k24/1.jpg';
import pic2 from '../assets/Resources/2k24/2.jpg';
import pic3 from '../assets/Resources/2k24/3.jpg';
import pic4 from '../assets/Resources/2k24/4.jpg';
import pic5 from '../assets/Resources/2k24/5.jpg';
import pic6 from '../assets/Resources/2k24/6.jpg';    
import pic7 from '../assets/Resources/2k24/7.jpg';
import pic8 from '../assets/Resources/2k24/8.jpg';
import pic9 from '../assets/Resources/2k24/9.jpg';
import pic10 from '../assets/Resources/2k24/10.jpg';
import pic11 from '../assets/Resources/2k24/11.jpg';
import pic12 from '../assets/Resources/2k24/12.jpg';    
import pic13 from '../assets/Resources/2k24/13.jpg';
import pic14 from '../assets/Resources/2k24/14.jpg';
import pic15 from '../assets/Resources/2k24/15.jpg';
import pic16 from '../assets/Resources/2k24/16.jpg';
import pic17 from '../assets/Resources/2k24/17.jpg';
import pic18 from '../assets/Resources/2k24/18.jpg';  
import pic19 from '../assets/Resources/2k24/19.jpg';
import pic20 from '../assets/Resources/2k24/20.jpg';
import pic21 from '../assets/Resources/2k24/21.jpg';
import pic22 from '../assets/Resources/2k24/22.jpg';
import pic23 from '../assets/Resources/2k24/23.jpg';  
import pic24 from '../assets/Resources/2k24/24.jpg';
import pic25 from '../assets/Resources/2k24/25.jpg';
import pic26 from '../assets/Resources/2k24/26.jpg';
import pic27 from '../assets/Resources/2k24/27.jpg';  
import pic28 from '../assets/Resources/2k24/28.jpg';
import pic29 from '../assets/Resources/2k24/29.jpg';
import pic30 from '../assets/Resources/2k24/30.jpg';
import pic31 from '../assets/Resources/2k24/31.jpg';
import pic32 from '../assets/Resources/Gallery/benny/1.jpg';
import pic33 from '../assets/Resources/Gallery/benny/2.jpg';
import pic34 from '../assets/Resources/Gallery/benny/3.jpg';
import pic35 from '../assets/Resources/Gallery/benny/4.jpg';
import pic36 from '../assets/Resources/Gallery/dance/1.jpg';
import pic37 from '../assets/Resources/Gallery/dance/2.jpg';
import pic38 from '../assets/Resources/Gallery/dance/3.jpg';
import pic39 from '../assets/Resources/Gallery/dance/4.jpg';
import pic40 from '../assets/Resources/Gallery/dance/5.jpg';
import pic41 from '../assets/Resources/Gallery/dance/6.jpg';
import pic42 from '../assets/Resources/Gallery/Crowd/1.jpg';
import pic43 from '../assets/Resources/Gallery/Crowd/2.jpg';
import pic44 from '../assets/Resources/Gallery/Crowd/3.jpg';
import pic45 from '../assets/Resources/Gallery/Crowd/4.jpg';        






// Modified to be more subtle since we have video background
const DeepSeaBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(255, 255, 255, 0.4); /* Lighter background to work with video */
  overflow: hidden;
  
  /* Removed the animated SVG backgrounds since we have video */
`;

// Styled components for glassmorphic gallery
const GalleryContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 0 5rem;
  position: relative;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  h1 {
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
      border-radius: 3px;
    }
  }
  
  p {
    margin-top: 1.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'rgba(0, 119, 182, 0.8)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.active ? 'white' : '#4b5563'};
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: ${props => props.active ? 'rgba(0, 119, 182, 0.8)' : 'rgba(255, 255, 255, 0.4)'};
  }
`;

const MasonryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 10px;
  grid-gap: 1.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const GlassCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  transition: all 0.4s ease;
  grid-row-end: span ${props => props.span};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.2);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(3, 4, 94, 0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.5rem;
  
  ${GlassCard}:hover & {
    opacity: 1;
  }
  
  p {
    color: white;
    font-weight: 500;
    font-size: 1.1rem;
    margin: 0;
  }
  
  .zoom-icon {
    background: rgba(255, 255, 255, 0.2);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    
    &:hover {
      background: rgba(255, 107, 107, 0.7);
      transform: rotate(90deg);
    }
  }
`;

// Modal components for image preview
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  max-width: 90%;
  max-height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    object-fit: contain;
  }
  
  .caption {
    color: white;
    text-align: center;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    backdrop-filter: blur(5px);
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  z-index: 110;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
  
  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    
    &.prev {
      left: 0.5rem;
    }
    
    &.next {
      right: 0.5rem;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -3rem;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(255, 107, 107, 0.7);
    transform: rotate(90deg);
  }
`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [spans, setSpans] = useState({});
  const [filteredImages, setFilteredImages] = useState([]);
  
  // Gallery images from local folder
  const images = [
    
    {
      src: pic1,
    //   caption: "Samskruthi 2024 Highlights",
      category: "samskruthi2k24"
    },
    {
      src: pic2,
    //   caption: "Cultural Performance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic3,
    //   caption: "Dance Competition 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic4,
    //   caption: "Music Performance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic5,
    //   caption: "Award Ceremony 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic6,
    //   caption: "Fashion Show 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic7,
    //   caption: "Group Performance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic8,
    //   caption: "Solo Dance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic9,
    //   caption: "Audience Engagement 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic10,
    //   caption: "Stage Performance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic11,
    //   caption: "Traditional Dance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic12,
    //   caption: "Celebrity Guest 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic13,
    //   caption: "Singing Competition 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic14,
    //   caption: "Art Exhibition 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic15,
    //   caption: "Drama Performance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic16,
    //   caption: "Cultural Showcase 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic17,
    //   caption: "Lighting Ceremony 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic18,
    //   caption: "Student Performance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic19,
    //   caption: "Crowd Interaction 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic20,
    //   caption: "Evening Celebration 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic21,
    //   caption: "Classical Performance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic22,
    //   caption: "Modern Dance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic23,
    //   caption: "Instrumental Show 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic24,
    //   caption: "Group Singing 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic25,
    //   caption: "Talent Showcase 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic26,
    //   caption: "Cultural Fusion 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic27,
    //   caption: "Artistic Display 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic28,
    //   caption: "Folk Dance 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic29,
    //   caption: "Event Finale 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic30,
    //   caption: "Closing Ceremony 2024",
      category: "samskruthi2k24"
    },
    {
      src: pic31,
    //   caption: "Grand Finale 2024",
      category: "samskruthi2k24"
    },
    
    {
      src: pic32,
    //   caption: "Live Music Performance",
      category: "samskruthi2k23"
    },
    {
      src: pic33,
    //   caption: "Concert Highlights",
      category: "samskruthi2k23"
    },
    {
      src: pic34,
    //   caption: "Music Night Celebration",
      category: "samskruthi2k23"
    },
    {
      src: pic35,
    //   caption: "Cultural Event 2023",
      category: "samskruthi2k23"
    },
    {
      src: pic36,
    //   caption: "Traditional Dance Performance",
      category: "samskruthi2k23"
    },
    {
      src: pic37,
    //   caption: "Contemporary Dance Showcase",
      category: "samskruthi2k23"
    },
    {
      src: pic38,
    //   caption: "Dance Competition Finals",
      category: "samskruthi2k23"
    },
    {
      src: pic39,
    //   caption: "Group Dance Performance",
      category: "samskruthi2k23"
    },
    {
      src: pic40,
    //   caption: "Classical Dance Exhibition",
      category: "samskruthi2k23"
    },
    {
        src: pic42,
    //   caption: "The crowd at the event",
      category: "samskruthi2k23"
    },
    {
      src: pic43,
    //   caption: "Audience Engagement",
      category: "samskruthi2k23"
    },
    {
      src: pic44,
    //   caption: "Event Atmosphere",
      category: "samskruthi2k23"
    },
    {
      src: pic45,
    //   caption: "Celebration Moments",
      category: "samskruthi2k23"
    }
  ];

  useEffect(() => {
    // Filter images based on selected category
    const filtered = filter === 'all' 
      ? images 
      : images.filter(image => image.category === filter);
    
    setFilteredImages(filtered);
    
    // Calculate random spans for masonry layout
    const imageSpans = {};
    filtered.forEach((image, index) => {
      // Random span between 15 and 30 for varied heights
      imageSpans[index] = Math.floor(Math.random() * 15) + 15;
    });
    setSpans(imageSpans);
  }, [filter]);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length 
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const categories = [
    { id: 'samskruthi2k24', name: 'Samskruthi 2K24' },
    { id: 'samskruthi2k23', name: 'Samskruthi 2K23' },
    { id: 'samskruthi2k22', name: 'Samskruthi 2K22' }
  ];

  return (
    <GalleryContainer>
      <DeepSeaBackground />
      
      <div className="container mx-auto px-4">
        <PageHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-blue">
            Our Gallery
          </h1>
          <p className="text-gray-700">
            Dive into the memories of our past events and experience the magic of Samskruthi
          </p>
        </PageHeader>

        <FilterContainer>
          {categories.map(category => (
            <FilterButton 
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterContainer>

        <MasonryGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredImages.map((image, index) => (
            <GlassCard
              key={index}
              span={spans[index]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => openModal(image, index)}
              style={{ gridRowEnd: `span ${spans[index]}` }}
            >
              <img
                src={image.src}
                alt={image.caption}
              />
              <ImageOverlay>
                <p>{image.caption}</p>
                <div className="zoom-icon">
                  <FaSearch size={16} />
                </div>
              </ImageOverlay>
            </GlassCard>
          ))}
        </MasonryGrid>
      </div>
      
      {/* Image Preview Modal */}
      {selectedImage && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <NavigationButton 
            className="prev" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <FaChevronLeft />
          </NavigationButton>
          
          <ModalContent
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
            
            <img src={selectedImage.src} alt={selectedImage.caption} />
            
            {selectedImage.caption && (
              <div className="caption">{selectedImage.caption}</div>
            )}
          </ModalContent>
          
          <NavigationButton 
            className="next" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <FaChevronRight />
          </NavigationButton>
        </ModalOverlay>
      )}
    </GalleryContainer>
  );
};

export default Gallery;