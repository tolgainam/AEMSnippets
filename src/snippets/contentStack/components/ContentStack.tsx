import React, { useLayoutEffect, useRef, useCallback } from 'react';
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
  buttonUrl = '#'
}) => {
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 'inherit',
    zIndex: 1
  } : {};

  const contentStyle: React.CSSProperties = backgroundImage ? {
    position: 'relative',
    zIndex: 2,
    color: 'white'
  } : {};

  return (
    <div className={`content-stack-card ${className}`.trim()} style={cardStyle}>
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
                backgroundColor: backgroundImage ? 'rgba(255, 255, 255, 0.9)' : '#007bff',
                color: backgroundImage ? '#000' : 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
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
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  onStackComplete,
  brand = 'iqos',
  height = '100vh',
  backgroundColor,
  style = {}
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const themeTokens = createThemeTokens(brand);

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
    updateCardTransforms
  ]);

  const containerStyles: React.CSSProperties = {
    height,
    backgroundColor: backgroundColor || themeTokens.light.background.primary,
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