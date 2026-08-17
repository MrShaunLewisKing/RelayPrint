import React from 'react';

type PatternVariant = 'light' | 'dark' | 'lavender' | 'cta' | 'footer';

interface PatternProps {
  variant?: PatternVariant;
  className?: string;
  style?: React.CSSProperties;
}

export function PrintExchangePattern({ variant = 'light', className = '', style }: PatternProps) {
  const isDark = variant === 'dark' || variant === 'cta' || variant === 'footer';
  
  // Tweak line opacities per variant to keep them extremely subtle
  let lineColor = 'rgba(11, 16, 32, 0.035)'; // Light / Lavender
  if (variant === 'dark') lineColor = 'rgba(255, 255, 255, 0.04)';
  if (variant === 'cta') lineColor = 'rgba(255, 255, 255, 0.03)';
  if (variant === 'footer') lineColor = 'rgba(255, 255, 255, 0.02)';

  const accentColor = isDark ? 'rgba(87, 71, 232, 0.25)' : 'rgba(87, 71, 232, 0.08)';
  const cyanAccent = isDark ? 'rgba(6, 182, 212, 0.25)' : 'rgba(6, 182, 212, 0.08)';

  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`} style={style} aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-pattern-${variant}`} width="48" height="48" patternUnits="userSpaceOnUse">
            {/* Primary Grid Cell Boundaries */}
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke={lineColor} strokeWidth="1" />
            
            {/* Occasional Crop Corner (top right) */}
            <path d="M 44 4 L 44 0 L 48 0" fill="none" stroke={accentColor} strokeWidth="1" />
            <path d="M 0 44 L 4 44 L 4 48" fill="none" stroke={cyanAccent} strokeWidth="1" />

            {/* Subtle Inner Registration (Crosshair at center) */}
            <path d="M 24 20 L 24 28 M 20 24 L 28 24" fill="none" stroke={lineColor} strokeWidth="1" />
            
            {/* Tiny accent dot at the exact center */}
            <circle cx="24" cy="24" r="0.5" fill={accentColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-pattern-${variant})`} />
      </svg>
    </div>
  );
}
