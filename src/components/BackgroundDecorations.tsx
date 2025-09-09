'use client';

import React from 'react';

interface BackgroundDecorationsProps {
  className?: string;
}

export function BackgroundDecorations({ className = '' }: BackgroundDecorationsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Elementos decorativos sutiles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-40 right-20 w-24 h-24 bg-green-100 rounded-full opacity-15 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-slate-100 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-100 rounded-full opacity-15 animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
      
      {/* Líneas decorativas */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30" />
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-30" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-20" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-200 to-transparent opacity-20" />
      
      {/* Patrones geométricos */}
      <div className="absolute top-16 right-16 w-16 h-16 border border-blue-200 opacity-10 rotate-45" />
      <div className="absolute bottom-16 left-16 w-12 h-12 border border-green-200 opacity-15 rotate-12" />
      <div className="absolute top-1/2 left-8 w-8 h-8 border border-slate-200 opacity-20 rotate-45" />
      <div className="absolute bottom-1/3 right-8 w-10 h-10 border border-orange-200 opacity-15 rotate-12" />
    </div>
  );
}

interface CorporatePatternProps {
  variant?: 'subtle' | 'medium' | 'strong';
  className?: string;
}

export function CorporatePattern({ variant = 'subtle', className = '' }: CorporatePatternProps) {
  const opacity = variant === 'subtle' ? 'opacity-5' : variant === 'medium' ? 'opacity-10' : 'opacity-15';
  
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Patrón de cuadrícula sutil */}
      <div className={`absolute inset-0 bg-professional-grid ${opacity}`} />
      
      {/* Círculos decorativos */}
      <div className={`absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-transparent ${opacity}`} />
      <div className={`absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-transparent ${opacity}`} />
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-slate-100 to-transparent ${opacity}`} />
      
      {/* Líneas de conexión */}
      <div className={`absolute top-20 left-20 w-1 h-32 bg-gradient-to-b from-blue-200 to-transparent ${opacity}`} />
      <div className={`absolute bottom-20 right-20 w-1 h-24 bg-gradient-to-b from-green-200 to-transparent ${opacity}`} />
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-slate-200 to-transparent ${opacity}`} />
    </div>
  );
}

interface DepthLayersProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export function DepthLayers({ children, level = 2, className = '' }: DepthLayersProps) {
  const depthClass = `depth-layer-${level}`;
  
  return (
    <div className={`relative ${depthClass} ${className}`}>
      {children}
    </div>
  );
}

interface ExecutiveFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function ExecutiveFrame({ children, className = '' }: ExecutiveFrameProps) {
  return (
    <div className={`relative glass-effect border-executive ${className}`}>
      {/* Marco decorativo */}
      <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-blue-200 via-green-200 to-slate-200 rounded-lg opacity-20" />
      <div className="relative bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
}
