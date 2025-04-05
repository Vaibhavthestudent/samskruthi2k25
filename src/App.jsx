import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import VideoBackground from './components/VideoBackground';
import Sponsors from './pages/Sponsors';
import useScrollToTop from './hooks/useScrollToTop';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
  
  :root {
    --primary-color: #0077b6;
    --secondary-color: #00b4d8;
    --accent-color: #ff6b6b;
    --deep-blue: #03045e;
    --light-blue: #90e0ef;
    --background-color: rgba(240, 248, 255, 0.7);
    --text-color: #333;
    --white: #ffffff;
    --coral: #ff6b6b;
    --sand: #f8edeb;
    --glass-bg: rgba(255, 255, 255, 0.25);
    --glass-border: rgba(255, 255, 255, 0.3);
    --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    
    /* Responsive breakpoints */
    --mobile: 480px;
    --tablet: 768px;
    --laptop: 1024px;
    --desktop: 1200px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
    overflow-x: hidden;
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      margin-bottom: 0.75rem;
    }
  }
  
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.75rem; }
  h4 { font-size: 1.5rem; }
  h5 { font-size: 1.25rem; }
  h6 { font-size: 1rem; }
  
  @media (max-width: 768px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.5rem; }
    h4 { font-size: 1.25rem; }
    h5 { font-size: 1.1rem; }
    h6 { font-size: 1rem; }
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
    @media (max-width: 768px) {
      padding: 0 0.75rem;
    }
  }
  
  section {
    padding: 3rem 0;
    @media (max-width: 768px) {
      padding: 2rem 0;
    }
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
    font-size: 1rem;
    
    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      min-width: auto;
      width: auto;
    }
    
    @media (max-width: 480px) {
      padding: 0.4rem 0.875rem;
      font-size: 0.8125rem;
    }
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
    font-size: 1rem;
    
    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      min-width: auto;
      width: auto;
    }
    
    @media (max-width: 480px) {
      padding: 0.4rem 0.875rem;
      font-size: 0.8125rem;
    }
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
    
    @media (max-width: 768px) {
      padding: 1rem;
    }
  }
  
  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px 0 rgba(31, 38, 135, 0.2);
  }
  
  /* Responsive grid system */
  .grid {
    display: grid;
    gap: 1.5rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  /* Responsive flex utilities */
  .flex {
    display: flex;
    
    &-col {
      flex-direction: column;
    }
    
    &-wrap {
      flex-wrap: wrap;
    }
  }
  
  /* Responsive spacing */
  .gap-1 { gap: 0.25rem; }
  .gap-2 { gap: 0.5rem; }
  .gap-3 { gap: 1rem; }
  .gap-4 { gap: 1.5rem; }
  .gap-5 { gap: 2rem; }
  
  @media (max-width: 768px) {
    .gap-1 { gap: 0.2rem; }
    .gap-2 { gap: 0.4rem; }
    .gap-3 { gap: 0.75rem; }
    .gap-4 { gap: 1rem; }
    .gap-5 { gap: 1.5rem; }
  }
  
  /* Responsive text alignment */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
  
  @media (max-width: 768px) {
    .text-center-mobile { text-align: center; }
    .text-left-mobile { text-align: left; }
    .text-right-mobile { text-align: right; }
  }
  
  /* Responsive margins and padding */
  .m-1 { margin: 0.25rem; }
  .m-2 { margin: 0.5rem; }
  .m-3 { margin: 1rem; }
  .m-4 { margin: 1.5rem; }
  .m-5 { margin: 2rem; }
  
  .p-1 { padding: 0.25rem; }
  .p-2 { padding: 0.5rem; }
  .p-3 { padding: 1rem; }
  .p-4 { padding: 1.5rem; }
  .p-5 { padding: 2rem; }
  
  @media (max-width: 768px) {
    .m-1 { margin: 0.2rem; }
    .m-2 { margin: 0.4rem; }
    .m-3 { margin: 0.75rem; }
    .m-4 { margin: 1rem; }
    .m-5 { margin: 1.5rem; }
    
    .p-1 { padding: 0.2rem; }
    .p-2 { padding: 0.4rem; }
    .p-3 { padding: 0.75rem; }
    .p-4 { padding: 1rem; }
    .p-5 { padding: 1.5rem; }
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
    
    @media (max-width: 768px) {
      display: none; /* Hide decorative elements on mobile */
    }
  }

  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    padding-top: 80px; /* Add padding to account for fixed navbar */
    position: relative;
    z-index: 1;
    
    @media (max-width: 768px) {
      padding-top: 70px; /* Slightly less padding on mobile */
    }
  }
`;

function AppContent() {
  useScrollToTop();
  
  return (
    <div className="app-container">
      <VideoBackground />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="container" style={{padding: '8rem 0', textAlign: 'center'}}><h1>Page Not Found</h1></div>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContent />
    </Router>
  );
}

export default App;
