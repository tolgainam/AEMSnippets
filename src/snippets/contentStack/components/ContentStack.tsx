import React, { useLayoutEffect, useRef, useCallback, useEffect, useState } from 'react';
import { BrandName, createThemeTokens } from '../../../tokens/designTokens';
import '../styles/contentStack.css';

export interface ContentStackItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  backgroundImage?: string;
  backgroundPosition?: 'top' | 'left' | 'right' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  backgroundSize?: 'cover' | 'contain';
  hasButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  brand?: BrandName;
  cardTheme?: 'default' | 'dark' | 'accent';
}

export const ContentStackItem: React.FC<ContentStackItemProps> = ({
  children,
  className = '',
  style = {},
  backgroundImage,
  backgroundPosition = 'center',
  backgroundSize = 'cover',
  hasButton = false,
  buttonText = 'Learn More',
  buttonUrl = '#',
  brand = 'iqos',
  cardTheme = 'default'
}) => {
  // Get theme tokens for this brand (always use light theme)
  const themeTokens = createThemeTokens(brand);
  const currentTheme = themeTokens.light;

  // Get card colors based on card theme
  const getCardColors = () => {
    switch (cardTheme) {
      case 'dark':
        return {
          cardBackground: currentTheme.background['primary-inverse'], // Dark background
          textColor: currentTheme.content['primary-inverse'], // Light text
          buttonBackground: currentTheme.background.primary, // Light button background
          buttonTextColor: currentTheme.content.primary, // Dark button text
        };
      case 'accent':
        return {
          cardBackground: currentTheme.background.accent, // Accent color background
          textColor: currentTheme.content.primary, // Dark text
          buttonBackground: currentTheme.background.primary, // Light button background
          buttonTextColor: currentTheme.content.primary, // Dark button text
        };
      case 'default':
      default:
        return {
          cardBackground: currentTheme.background.primary, // Light background
          textColor: currentTheme.content.primary, // Dark text
          buttonBackground: currentTheme.background['primary-inverse'], // Dark button background
          buttonTextColor: currentTheme.content['primary-inverse'], // Light button text
        };
    }
  };

  const { cardBackground, buttonBackground, buttonTextColor } = getCardColors();

  // Convert position shorthand to CSS value
  const getBackgroundPosition = (position: string) => {
    switch (position) {
      case 'topleft': return 'top left';
      case 'topright': return 'top right';
      case 'bottomleft': return 'bottom left';
      case 'bottomright': return 'bottom right';
      default: return position;
    }
  };

  const cardStyle: React.CSSProperties = {
    ...style,
    backgroundColor: backgroundImage ? 'transparent' : cardBackground,
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: backgroundSize,
      backgroundPosition: getBackgroundPosition(backgroundPosition),
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    })
  };

  const overlayStyle: React.CSSProperties = backgroundImage ? {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: currentTheme.background.overlay,
    borderRadius: 'inherit',
    zIndex: 1
  } : {};

  const contentStyle: React.CSSProperties = backgroundImage ? {
    position: 'relative',
    zIndex: 2
  } : {};

  // Get CSS class names based on card theme
  const getCardClasses = () => {
    let classes = 'content-stack-card';

    // For background images, always use dark theme colors (white text)
    if (backgroundImage) {
      classes += ' dark';
    } else {
      // Apply theme-based colors
      if (cardTheme === 'dark') {
        classes += ' dark';
      } else if (cardTheme === 'accent') {
        classes += ' accent';
      }
    }

    if (className) {
      classes += ` ${className}`;
    }
    return classes;
  };

  return (
    <div className={getCardClasses()} style={cardStyle}>
      {backgroundImage && <div style={overlayStyle} />}
      <div style={contentStyle}>
        {children}
        {hasButton && (
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href={buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: buttonBackground,
                color: buttonTextColor,
                textDecoration: 'none',
                borderRadius: '100px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = currentTheme.background.accent; // Accent on hover
                e.currentTarget.style.color = currentTheme.content['primary-inverse']; // White text on accent
                e.currentTarget.style.boxShadow = `0 4px 12px ${currentTheme.background.overlay}`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = buttonBackground;
                e.currentTarget.style.color = buttonTextColor;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export interface ContentStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  onStackComplete?: () => void;
  brand?: BrandName;
  height?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export const ContentStack: React.FC<ContentStackProps> = ({
  children,
  className = '',
  itemDistance = 120,
  itemScale = 0.03,
  itemStackDistance = 24,
  stackPosition = '15%',
  scaleEndPosition = '10%',
  baseScale = 0.95,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
  brand: _brand,
  height = '100vh',
  backgroundColor,
  style = {}
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const [isInIframe, setIsInIframe] = useState(false);

  // const themeTokens = createThemeTokens(brand); // Removed - not currently used

  // Detect if running in iframe
  useEffect(() => {
    const inIframe = window.self !== window.top;
    setIsInIframe(inIframe);
  }, []);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return { scrollTop: 0, containerHeight: 0 };

    return {
      scrollTop: scroller.scrollTop,
      containerHeight: scroller.clientHeight,
    };
  }, []);

  const getElementOffset = useCallback((element: HTMLElement) => {
    return element.offsetTop;
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = scrollerRef.current?.querySelector('.content-stack-end') as HTMLElement;
    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);


  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll('.content-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    scroller.addEventListener('scroll', handleScroll, { passive: true });

    updateCardTransforms();

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    handleScroll,
    updateCardTransforms,
    isInIframe
  ]);

  const containerStyles: React.CSSProperties = {
    height: isInIframe ? 'auto' : height,
    backgroundColor: backgroundColor || 'transparent',
    overflow: isInIframe ? 'hidden' : 'auto',
    ...style
  };

  return (
    <div
      className={`content-stack-scroller ${className}`.trim()}
      ref={scrollerRef}
      style={containerStyles}
    >
      <div className="content-stack-inner">
        {children}
        <div className="content-stack-end" />
      </div>
    </div>
  );
};

export default ContentStack;