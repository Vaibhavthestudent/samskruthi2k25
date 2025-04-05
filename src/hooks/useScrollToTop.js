import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use window.scrollTo with smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Fallback for browsers that don't support smooth scrolling
    const scrollToTop = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    };

    // Add a small delay to ensure the page has rendered
    const timer = setTimeout(() => {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        scrollToTop();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);
};

export default useScrollToTop; 