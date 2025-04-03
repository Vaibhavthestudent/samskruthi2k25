import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

const TimeUnit = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  min-width: 80px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  
  @media (min-width: 640px) {
    min-width: 100px;
  }
`;

const Number = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  line-height: 1;
  margin-bottom: 0.5rem;
  
  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

const Label = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Message = styled.div`
  font-size: 1.5rem;
  color: var(--coral);
  text-align: center;
  margin: 2rem 0;
  font-weight: 600;
`;

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { unit: 'days', label: 'Days' },
    { unit: 'hours', label: 'Hours' },
    { unit: 'minutes', label: 'Minutes' },
    { unit: 'seconds', label: 'Seconds' }
  ];

  const timerAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  if (Object.keys(timeLeft).length === 0) {
    return <Message>The event has started!</Message>;
  }

  return (
    <TimerContainer>
      {timeUnits.map(({ unit, label }) => (
        <TimeUnit
          key={unit}
          initial="hidden"
          animate="visible"
          variants={timerAnimation}
          whileHover={{ y: -5 }}
        >
          <Number>
            <motion.span animate={unit === 'seconds' ? pulseAnimation : {}}>
              {timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}
            </motion.span>
          </Number>
          <Label>{label}</Label>
        </TimeUnit>
      ))}
    </TimerContainer>
  );
};

export default CountdownTimer;