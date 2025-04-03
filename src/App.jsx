import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import VideoBackground from './components/VideoBackground';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
  
  :root {
    --primary-color: #0077b6;
    --secondary-color: #00b4d8;
    --accent-color: #ff6b6b;
    --deep-blue: #03045e;
    --light-blue: #90e0ef;
    --background-color: rgba(240, 248, 255, 0.7); /* Made slightly transparent */
    --text-color: #333;
    --white: #ffffff;
    --coral: #ff6b6b;
    --sand: #f8edeb;
    --glass-bg: rgba(255, 255, 255, 0.25);
    --glass-border: rgba(255, 255, 255, 0.3);
    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
    overflow-x: hidden;
    line-height: 1.6;
    /* Removed background gradient since we're using video */
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  section {
    padding: 5rem 0;
  }
  
  /* Glassmorphic button styles */
  .btn-primary {
    background: rgba(0, 119, 182, 0.7);
    color: var(--white);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    display: inline-block;
    backdrop-filter: blur(5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
  
  .btn-primary:hover {
    background: rgba(3, 4, 94, 0.8);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  .btn-secondary {
    background: rgba(255, 255, 255, 0.3);
    color: var(--primary-color);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    border: 1px solid rgba(0, 119, 182, 0.3);
    transition: all 0.3s ease;
    display: inline-block;
    backdrop-filter: blur(5px);
  }
  
  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.5);
    color: var(--deep-blue);
    border-color: var(--primary-color);
  }
  
  /* Glassmorphic card style */
  .glass-card {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    padding: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.2);
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes wave {
    0% { transform: translateX(0) translateY(0); }
    25% { transform: translateX(-5px) translateY(-5px); }
    50% { transform: translateX(0) translateY(-10px); }
    75% { transform: translateX(5px) translateY(-5px); }
    100% { transform: translateX(0) translateY(0); }
  }
  
  .bubble {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(145deg, rgba(144, 224, 239, 0.3), rgba(144, 224, 239, 0.1));
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: float 3s ease-in-out infinite;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="app-container">
        <VideoBackground />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div className="container" style={{padding: '8rem 0', textAlign: 'center'}}><h1>Page Not Found</h1></div>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
