import React, { useState, useRef } from 'react';
import type { MouseEvent } from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. 'rgba(0, 210, 255, 0.15)'
}

export const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'rgba(0, 210, 255, 0.15)' 
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-xl overflow-hidden bg-surface/50 border border-surfaceLighter shadow-glass backdrop-blur-md transition-all duration-300 ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glow Overlay */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 blur-[80px]"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            left: `${coords.x - 125}px`,
            top: `${coords.y - 125}px`,
            opacity: 1,
            zIndex: 0,
          }}
        />
      )}

      {/* Card Content wrapper to sit above the glow effect */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
