import React, { useEffect, useState, useRef } from 'react';
import { BrandName, createThemeTokens } from '../../../tokens/designTokens';
import '../styles/tickertape.css';

export interface TickertapeProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  brand?: BrandName;
  theme?: 'light' | 'dark';
  fontSize?: 'text-poster' | 'text-h1' | 'text-h2' | 'text-h3' | 'text-h4' | 'text-h5' | 'text-h6';
  speed?: number; // pixels per second
  backgroundColor?: string;
  backgroundGradient?: string;
  backgroundImage?: string;
  height?: string;
  pauseOnHover?: boolean;
  hasBorder?: boolean;
  borderColor?: string;
  textColor?: string;
}

export const Tickertape: React.FC<TickertapeProps> = ({
  text = 'Breaking News: This is a sample ticker tape message scrolling from right to left.',
  className = '',
  style = {},
  brand = 'iqos',
  theme = 'light',
  fontSize = 'text-h6',
  speed = 50,
  backgroundColor,
  backgroundGradient,
  backgroundImage,
  height = '60px',
  pauseOnHover = true,
  hasBorder = false,
  borderColor = '#000000',
  textColor
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [repeatedText, setRepeatedText] = useState('');

  // Get theme tokens for this brand
  const themeTokens = createThemeTokens(brand);
  const currentTheme = themeTokens[theme];

  // Measure content and container dimensions, create repeated content
  useEffect(() => {
    if (textRef.current && containerRef.current) {
      if (backgroundImage) {
        // For images, use a simpler approach - just repeat multiple times
        const containerWidth = containerRef.current.clientWidth;
        const estimatedImageWidth = 100; // Estimate image width
        const repetitions = Math.max(5, Math.ceil(containerWidth * 3 / estimatedImageWidth));
        setRepeatedText(''); // Not used for images

        // Update measurements after image loads
        setTimeout(() => {
          if (textRef.current) {
            setTextWidth(textRef.current.scrollWidth);
            setContainerWidth(containerRef.current.clientWidth);
          }
        }, 100); // Give time for image to load
      } else {
        // Create a temporary element to measure single text width
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.visibility = 'hidden';
        tempDiv.style.whiteSpace = 'nowrap';
        tempDiv.style.fontSize = window.getComputedStyle(textRef.current).fontSize;
        tempDiv.style.fontFamily = window.getComputedStyle(textRef.current).fontFamily;
        tempDiv.style.fontWeight = window.getComputedStyle(textRef.current).fontWeight;
        tempDiv.textContent = text;
        document.body.appendChild(tempDiv);

        const singleTextWidth = tempDiv.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;

        document.body.removeChild(tempDiv);

        // Calculate how many repetitions we need to fill at least 3x the container width
        const neededWidth = containerWidth * 3; // Extra buffer for smooth scrolling
        const repetitions = Math.max(3, Math.ceil(neededWidth / singleTextWidth));

        // Create repeated text with separators
        const separator = '   '; // 3 spaces as separator
        const repeated = Array(repetitions).fill(text).join(separator);
        setRepeatedText(repeated);

        // Update measurements
        setTimeout(() => {
          if (textRef.current) {
            setTextWidth(textRef.current.scrollWidth);
            setContainerWidth(containerRef.current.clientWidth);
          }
        }, 0);
      }
    }

    const handleResize = () => {
      if (textRef.current && containerRef.current) {
        setTextWidth(textRef.current.scrollWidth);
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text, fontSize, backgroundImage]);

  // Calculate animation duration based on speed (account for duplicated content)
  const animationDuration = textWidth && speed ? (textWidth + containerWidth) / speed : 20;

  // Determine background styling (only for gradient and color, not image)
  const getBackgroundStyle = () => {
    if (backgroundGradient) {
      return {
        background: backgroundGradient
      };
    } else if (backgroundColor) {
      return {
        backgroundColor: backgroundColor
      };
    } else {
      return {
        backgroundColor: currentTheme.background.primary
      };
    }
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: 'none',
    height,
    color: textColor || currentTheme.content.primary,
    position: 'relative', // Required for absolute positioning of background layers
    ...(hasBorder && {
      borderRadius: '4px'
    }),
    ...getBackgroundStyle(),
    boxSizing: 'border-box',
    ...style
  };

  const textStyle: React.CSSProperties = {
    animationDuration: `${animationDuration}s`,
    animationPlayState: isPaused ? 'paused' : 'running'
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`tickertape-container ${hasBorder ? `brand-${brand}` : ''} ${className}`.trim()}
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {backgroundImage ? (
        // Infinite scrolling background technique with two layers
        <>
          <div
            ref={textRef}
            className="tickertape-background-layer"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: 'space',
              backgroundSize: 'auto 98%',
              backgroundPosition: 'left center',
              animation: 'tickertape-infinite-scroll linear infinite',
              animationDuration: `${animationDuration}s`,
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          />
          <div
            className="tickertape-background-layer"
            style={{
              position: 'absolute',
              top: 0,
              left: '100%',
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: 'space',
              backgroundSize: 'auto 98%',
              backgroundPosition: 'left center',
              animation: 'tickertape-infinite-scroll linear infinite',
              animationDuration: `${animationDuration}s`,
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          />
        </>
      ) : (
        <div
          ref={textRef}
          className={`tickertape-text ${fontSize}`}
          style={textStyle}
        >
          {repeatedText || text}
        </div>
      )}
    </div>
  );
};

export default Tickertape;