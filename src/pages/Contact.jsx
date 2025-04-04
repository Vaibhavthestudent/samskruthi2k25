import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaHandshake } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background: #f8f9fa;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const HeaderSection = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: #03045e;
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
    color: #4b5563;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    color: #03045e;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #4b5563;

    svg {
      color: #03045e;
      font-size: 1.25rem;
    }

    a {
      color: #03045e;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #0077b6;
      }
    }
  }
`;

const MapContainer = styled.div`
  grid-column: 1 / -1;
  margin-top: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 400px;
    border: none;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <HeaderSection
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Contact Us</h1>
        <p>Get in touch with us for registration, sponsorship, or any other inquiries</p>
      </HeaderSection>
      <ContactGrid>
        <ContactCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            <FaUser /> Registration Contact
          </h2>
          <div className="contact-info">
            <div className="info-item">
              <FaPhone />
              <a href="tel:+917070211484">+91 7070211484</a>
              <p>|</p>
              <FaPhone />
              <a href="tel:+918145645183">+91 8145645183</a>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <a href="mailto:registration.samskruthi@eastpoint.ac.in">registration.samskruthi@eastpoint.ac.in</a>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>East Point Group of Institutions</span>
            </div>
          </div>
        </ContactCard>

        <ContactCard
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            <FaHandshake /> Sponsorship Contact
          </h2>
          <div className="contact-info">
            <div className="info-item">
              <FaPhone />
              <a href="tel:+919071046910">+91 9071046910</a>
              <p>|</p>
              <FaPhone />
              <a href="tel:+917483054886">+91 7483054886</a>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <a href="mailto:samskruthi@eastpoint.ac.in">samskruthi@eastpoint.ac.in</a>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>East Point Group of Institutions</span>
            </div>
          </div>
        </ContactCard>

        <MapContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="info-item" style={{ marginBottom: '1rem', padding: '0 1rem' }}>
            <FaMapMarkerAlt />
            <span>East Point Group of Institutions, Vidyanagar, Bengaluru, Karnataka 560049</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9999999999995!2d77.7169929!3d13.0500747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1019aaaaaaab%3A0x2a4d23a66cafaaf7!2sEast%20Point%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="East Point Group of Institutions Location"
          ></iframe>
        </MapContainer>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
