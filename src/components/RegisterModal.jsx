import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes, FaDownload } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  position: relative;
  margin: auto;
  transform: translateY(0);
  animation: modalFadeIn 0.3s ease-out;

  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h2 {
    color: #03045e;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #03045e;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const ModalButton = styled.a`
  display: inline-block;
  background: #03045e;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  margin: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
  width: 100%;
  max-width: 300px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(3, 4, 94, 0.3);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1.5rem;
`;

const RegisterModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>
          <FaTimes />
        </ModalCloseButton>
        <h2>Know About the Events</h2>
        <ModalButton href="/assets/brochure.pdf" download>
          <FaDownload style={{ marginRight: '8px' }} />
          Download Brochure
        </ModalButton>
        <hr style={{width: '100%', margin: '1rem 0'}} />
        <h2>Register Now !!</h2>
        <ButtonContainer>
          <ModalButton href="https://forms.gle/2zpD7ZEPirzLuG8s6" target="_blank">
            Register for On-Stage Events
          </ModalButton>
          <ModalButton href="https://forms.gle/juJzqMwZhqJkZYQr8" target="_blank">
            Register for Off-Stage Events
          </ModalButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RegisterModal;