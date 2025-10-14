import React from 'react';
import type { Keyframe, StyleConfig } from '../types/config';
import './ContentOverlay.css';

interface ContentOverlayProps {
  keyframe: Keyframe | null;
  style?: StyleConfig;
  onButtonClick?: (url: string) => void;
}

export const ContentOverlay: React.FC<ContentOverlayProps> = ({
  keyframe,
  style = {},
  onButtonClick
}) => {
  if (!keyframe) return null;

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (keyframe.button?.url) {
      if (onButtonClick) {
        onButtonClick(keyframe.button.url);
      } else {
        window.open(keyframe.button.url, '_blank');
      }
    }
  };

  const overlayClassName = `content-overlay content-overlay--${style.overlayPosition || 'right'}`;

  const overlayStyle: React.CSSProperties = {
    background: style.overlayBackground || 'rgba(0, 0, 0, 0.7)',
  };

  const titleStyle: React.CSSProperties = {
    color: style.titleColor || '#ffffff',
    fontSize: style.titleFontSize || '2rem',
    fontWeight: style.titleFontWeight || '700',
    fontFamily: style.titleFontFamily || undefined,
  };

  const messageStyle: React.CSSProperties = {
    color: style.messageColor || '#e0e0e0',
    fontSize: style.messageFontSize || '1rem',
    fontFamily: style.messageFontFamily || undefined,
  };

  const buttonStyle: React.CSSProperties = {
    background: style.buttonBackground || '#007bff',
    color: style.buttonColor || '#ffffff',
    borderRadius: style.buttonBorderRadius || '8px',
  };

  return (
    <div className={overlayClassName} style={overlayStyle}>
      <div className="content-overlay__inner">
        {keyframe.title && (
          <h2 className="content-overlay__title" style={titleStyle}>
            {keyframe.title}
          </h2>
        )}
        {keyframe.message && (
          <p className="content-overlay__message" style={messageStyle}>
            {keyframe.message}
          </p>
        )}
        {keyframe.button && (
          <button
            className="content-overlay__button"
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            {keyframe.button.text}
          </button>
        )}
      </div>
    </div>
  );
};
