import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height || 'auto'};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: ${props => props.objectFit || 'cover'};
  }
`;

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  height,
  objectFit = 'cover',
  style = {},
  onLoad,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState('');
  const [thumbSrc, setThumbSrc] = useState('');
  
  useEffect(() => {
    // Convert image path to WebP format
    const basePath = src.replace('/src/Resources/', '/images/');
    const baseNameWithoutExt = basePath.replace(/\.[^/.]+$/, '');
    
    // Check if we need the smaller version (if original is larger than 1200px)
    const img = new Image();
    img.src = `${baseNameWithoutExt}.webp`;
    
    img.onload = () => {
      if (img.width > 1200) {
        setImageSrc(`${baseNameWithoutExt}-1200.webp`);
      } else {
        setImageSrc(`${baseNameWithoutExt}.webp`);
      }
    };
    
    // Set thumbnail for blur effect
    setThumbSrc(`${baseNameWithoutExt}-thumb.webp`);
  }, [src]);
  
  return (
    <ImageContainer 
      height={height}
      objectFit={objectFit}
      className={className}
      style={style}
    >
      <LazyLoadImage
        src={imageSrc}
        placeholderSrc={thumbSrc}
        alt={alt}
        effect="blur"
        onLoad={onLoad}
        {...props}
      />
    </ImageContainer>
  );
};

export default OptimizedImage; 