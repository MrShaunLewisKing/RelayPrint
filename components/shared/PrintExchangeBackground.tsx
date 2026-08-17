import React from 'react';

export type BackgroundVariant = 'hero' | 'light' | 'dark' | 'lavender' | 'cta' | 'footer';

interface PrintExchangeBackgroundProps {
  variant?: BackgroundVariant;
  className?: string;
}

export function PrintExchangeBackground({ variant = 'light', className = '' }: PrintExchangeBackgroundProps) {
  const isDark = variant === 'dark' || variant === 'cta' || variant === 'footer';
  
  let lineColor = 'rgba(11, 16, 32, 0.032)';
  if (isDark) lineColor = 'rgba(255, 255, 255, 0.035)';

  const accentColor = isDark ? 'rgba(87, 71, 232, 0.2)' : 'rgba(87, 71, 232, 0.08)';
  const cyanAccent = isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.08)';

  // Masking definitions per variant
  let maskImage = '';
  if (variant === 'hero') {
    maskImage = 'radial-gradient(ellipse at center, transparent 40%, black 100%)';
  } else if (variant === 'light' || variant === 'lavender') {
    maskImage = 'radial-gradient(ellipse at center, transparent 35%, black 100%)';
  } else if (variant === 'dark') {
    maskImage = 'radial-gradient(ellipse at center, transparent 20%, black 80%)';
  } else if (variant === 'cta') {
    maskImage = 'radial-gradient(ellipse at top left, black 20%, transparent 70%), radial-gradient(ellipse at bottom right, black 20%, transparent 70%)';
  } else if (variant === 'footer') {
    maskImage = 'linear-gradient(to bottom, black 0%, transparent 70%)';
  }

  const maskStyle = maskImage ? { maskImage, WebkitMaskImage: maskImage } : {};

  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`} style={maskStyle} aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-pattern-${variant}`} width="56" height="56" patternUnits="userSpaceOnUse">
            {/* Primary Grid Cell Boundaries */}
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke={lineColor} strokeWidth="1" />
            
            {/* Occasional Crop Corner (top right) */}
            <path d="M 52 4 L 52 0 L 56 0" fill="none" stroke={accentColor} strokeWidth="1" />
            <path d="M 0 52 L 4 52 L 4 56" fill="none" stroke={cyanAccent} strokeWidth="1" />

            {/* Subtle Inner Registration (Crosshair at center) */}
            <path d="M 28 24 L 28 32 M 24 28 L 32 28" fill="none" stroke={lineColor} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-pattern-${variant})`} />
      </svg>
    </div>
  );
}
