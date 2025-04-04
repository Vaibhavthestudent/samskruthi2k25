import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import video from '../assets/Resources/Gallery/background_video/hero_video.mp4';    

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
`;

const VideoElement = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.5; /* Reduced opacity for professional look */
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(3, 4, 94, 0.3) 0%, rgba(0, 119, 182, 0.3) 100%);
  z-index: 1;
`;

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays automatically and loops
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Handle autoplay restrictions
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <VideoContainer>
      <VideoElement 
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoElement>
      <VideoOverlay />
    </VideoContainer>
  );
};

export default VideoBackground;