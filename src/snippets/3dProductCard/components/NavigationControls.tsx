import React from 'react';
import type { StyleConfig } from '../types/config';
import './NavigationControls.css';

interface NavigationControlsProps {
  currentKeyframe: number;
  totalKeyframes: number;
  onPrevious: () => void;
  onNext: () => void;
  style?: StyleConfig;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentKeyframe,
  totalKeyframes,
  onPrevious,
  onNext,
  style = {}
}) => {
  const buttonColor = style.navButtonColor || '#ffffff';

  const buttonStyle: React.CSSProperties = {
    color: buttonColor,
    borderColor: buttonColor,
  };

  return (
    <div className="navigation-controls">
      <button
        className="nav-button nav-button--prev"
        onClick={onPrevious}
        disabled={currentKeyframe === 0}
        style={buttonStyle}
        aria-label="Previous"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="nav-indicator">
        {Array.from({ length: totalKeyframes }).map((_, index) => (
          <div
            key={index}
            className={`nav-dot ${index === currentKeyframe ? 'nav-dot--active' : ''}`}
            style={{
              backgroundColor: index === currentKeyframe ? buttonColor : 'transparent',
              borderColor: buttonColor
            }}
          />
        ))}
      </div>

      <button
        className="nav-button nav-button--next"
        onClick={onNext}
        disabled={currentKeyframe === totalKeyframes - 1}
        style={buttonStyle}
        aria-label="Next"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
