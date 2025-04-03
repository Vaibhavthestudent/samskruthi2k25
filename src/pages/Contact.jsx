import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

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

// Styled components for glassmorphic contact page
const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 0 5rem;
  position: relative;
`;

const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.2);
  }
`;

const ContactInfoCard = styled(GlassCard)`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1.5rem;
  height: 100%;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 119, 182, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  
  svg {
    color: var(--deep-blue);
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }
  
  ${ContactInfoCard}:hover & {
    background: var(--coral);
    transform: scale(1.1) rotate(10deg);
    
    svg {
      color: white;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(0, 119, 182, 0.5);
    box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.2);
  }
  
  &::placeholder {
    color: #6b7280;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  min-height: 150px;
  transition: all 0.3s ease;
  resize: vertical;
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.8);
    border-color: rgba(0, 119, 182, 0.5);
    box-shadow: 0 0 0 3px rgba(0, 119, 182, 0.2);
  }
  
  &::placeholder {
    color: #6b7280;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--deep-blue) 0%, var(--ocean-blue) 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 119, 182, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 119, 182, 0.4);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const MapContainer = styled(GlassCard)`
  height: 400px;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--deep-blue);
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
      height: 3px;
      background: var(--coral);
      border-radius: 3px;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #4b5563;
    max-width: 600px;
    margin: 1.5rem auto 0;
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--deep-blue);
  font-size: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: var(--coral);
    color: white;
    transform: translateY(-5px);
  }
`;

const TeamMemberCard = styled(GlassCard)`
  padding: 1.5rem;
  text-align: center;
  
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 1rem;
    border: 3px solid rgba(255, 255, 255, 0.5);
  }
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--deep-blue);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #4b5563;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 123 456 7890"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "samskruti2025@eastpoint.ac.in"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: "East Point College of Engineering and Technology, Bangalore"
    }
  ];

  const teamMembers = [
    {
      name: "Aditya Sharma",
      role: "Event Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Priya Patel",
      role: "Marketing Head",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Rahul Verma",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <ContactContainer>
      <DeepSeaBackground />
      
      <div className="container mx-auto px-4">
        <PageHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Connect With Us</h1>
          <p>
            Reach out to our team for any queries about Samskruti 2023. We're here to help make your experience memorable!
          </p>
          <SocialMediaContainer>
            <SocialIcon 
              href="#" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook />
            </SocialIcon>
            <SocialIcon 
              href="#" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
            </SocialIcon>
          </SocialMediaContainer>
        </PageHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <IconContainer>
                {info.icon}
              </IconContainer>
              <div>
                <h3 className="text-xl font-bold text-deep-blue mb-1">{info.title}</h3>
                <p className="text-gray-700">{info.details}</p>
              </div>
            </ContactInfoCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3">
            <MapContainer
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3652333086547!2d77.6982473!3d13.0196873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d7a5b93505f%3A0x4c4acb4ac36c1be6!2sEast%20Point%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1659632245781!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </MapContainer>
          </div>
          
          <div className="lg:col-span-2">
            <GlassCard
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 h-full"
            >
              <h2 className="text-2xl font-bold text-deep-blue mb-6">Send us a message</h2>
              <ContactForm>
                <FormGroup>
                  <FormInput 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                  />
                </FormGroup>
                <FormGroup>
                  <FormTextarea 
                    placeholder="Your Message" 
                    required
                  />
                </FormGroup>
                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message <FaPaperPlane />
                </SubmitButton>
              </ContactForm>
            </GlassCard>
          </div>
        </div>

        <motion.h2 
          className="text-3xl font-bold text-deep-blue text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Meet Our Team
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="flex justify-center gap-3 mt-3">
                <SocialIcon 
                  as="button"
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: '35px', height: '35px', fontSize: '1rem' }}
                >
                  <FaEnvelope />
                </SocialIcon>
                <SocialIcon 
                  as="button"
                  href="#" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: '35px', height: '35px', fontSize: '1rem' }}
                >
                  <FaInstagram />
                </SocialIcon>
              </div>
            </TeamMemberCard>
          ))}
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;