import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import styled from 'styled-components';

// Page container with proper spacing for navbar
const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 120px; /* Fixed value to ensure content is below navbar */
  padding-bottom: 5rem;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f0ff 100%);
`;

// Styled components for glassmorphic event cards
const EventCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
  }
  
  ${EventCard}:hover img {
    transform: scale(1.05);
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 107, 107, 0.8);
  color: white;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const EventContent = styled.div`
  padding: 1.5rem;
`;

const EventTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--deep-blue);
  margin-bottom: 0.75rem;
`;

const EventDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const EventDetail = styled.div`
  display: flex;
  align-items: center;
  color: #4b5563;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  
  svg {
    color: var(--coral);
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  background: rgba(0, 119, 182, 0.7);
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  margin-top: 1.25rem;
  cursor: pointer;
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(3, 4, 94, 0.8);
    transform: translateY(-2px);
  }
`;

const Events = () => {
  const events = [
    {
      title: "Ocean Symphony",
      category: "Music",
      date: "December 15, 2023",
      time: "10:00 AM",
      venue: "Main Auditorium",
      description: "A musical extravaganza featuring classical and contemporary performances inspired by the ocean's rhythms.",
      image: "./Resources/Gallery/dance/5.jpg"
    },
    {
      title: "Deep Blue Dance",
      category: "Dance",
      date: "December 15, 2023",
      time: "2:00 PM",
      venue: "Open Air Theatre",
      description: "A mesmerizing dance showcase bringing underwater movements and stories to life.",
      image: "./Resources/Gallery/dance/5.jpg"
    },
    {
      title: "Coral Canvas",
      category: "Art",
      date: "December 16, 2023",
      time: "11:00 AM",
      venue: "Art Gallery",
      description: "An art exhibition featuring stunning underwater-themed paintings, sculptures, and installations.",
      image: "./Resources/Gallery/dance/5.jpg"
    }
  ];

  return (
    <PageContainer>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Our Events
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Dive into our exciting lineup of events at Samskruti 2023
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ImageContainer>
                <img
                  src={event.image}
                  alt={event.title}
                />
                <CategoryBadge>
                  {event.category}
                </CategoryBadge>
              </ImageContainer>

              <EventContent>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>

                <div>
                  <EventDetail>
                    <FaCalendarAlt size={14} />
                    <span>{event.date}</span>
                  </EventDetail>
                  <EventDetail>
                    <FaClock size={14} />
                    <span>{event.time}</span>
                  </EventDetail>
                  <EventDetail>
                    <FaMapMarkerAlt size={14} />
                    <span>{event.venue}</span>
                  </EventDetail>
                </div>

                <RegisterButton>
                  Register Now
                </RegisterButton>
              </EventContent>
            </EventCard>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Events;