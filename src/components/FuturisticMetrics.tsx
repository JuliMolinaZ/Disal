'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Target, 
  Zap, 
  Shield,
  Database,
  BarChart3
} from 'lucide-react';

interface FuturisticMetricProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  gradient: string;
  glowColor: string;
  delay?: number;
  className?: string;
}

export function FuturisticMetric({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon, 
  gradient, 
  glowColor,
  delay = 0,
  className = '' 
}: FuturisticMetricProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (isVisible && typeof value === 'number') {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setAnimatedValue(value);
          clearInterval(timer);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const displayValue = typeof value === 'number' ? animatedValue.toLocaleString() : value;

  return (
    <Card className={`relative overflow-hidden transition-all duration-500 hover:scale-105 ${className}`}>
      <div className={`absolute inset-0 ${gradient} opacity-90`} />
      <div className={`absolute inset-0 ${glowColor} opacity-0 hover:opacity-30 transition-opacity duration-300`} />
      
      <CardContent className="relative p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              {icon}
            </div>
            <div>
              <h3 className="text-sm font-medium text-white/90">{title}</h3>
              {subtitle && (
                <p className="text-xs text-white/70">{subtitle}</p>
              )}
            </div>
          </div>
          
          {trend && (
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
              trend.isPositive ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}>
              {trend.isPositive ? (
                <TrendingUp className="h-4 w-4 text-green-300" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-300" />
              )}
              <span className="text-xs font-medium">
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white">
            {isVisible ? displayValue : '...'}
          </div>
          
          {isVisible && (
            <div className="flex items-center space-x-2">
              <div className="w-full bg-white/20 rounded-full h-1">
                <div 
                  className="bg-white h-1 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      
      {/* Efecto de partículas */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </Card>
  );
}

interface FuturisticMetricsGridProps {
  metrics: Array<{
    title: string;
    value: string | number;
    subtitle?: string;
    trend?: {
      value: number;
      isPositive: boolean;
    };
    icon: React.ReactNode;
    gradient: string;
    glowColor: string;
  }>;
  className?: string;
}

export function FuturisticMetricsGrid({ metrics, className = '' }: FuturisticMetricsGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {metrics.map((metric, index) => (
        <FuturisticMetric
          key={index}
          {...metric}
          delay={index * 200}
        />
      ))}
    </div>
  );
}

// Componente de pulso animado
export function PulseAnimation({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ${
      isVisible 
        ? 'opacity-100 transform translate-y-0' 
        : 'opacity-0 transform translate-y-8'
    }`}>
      {children}
    </div>
  );
}

// Componente de línea de progreso animada
export function AnimatedProgressBar({ 
  value, 
  max = 100, 
  color = 'bg-blue-500',
  height = 'h-2',
  className = '' 
}: {
  value: number;
  max?: number;
  color?: string;
  height?: string;
  className?: string;
}) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setAnimatedValue(value);
        clearInterval(timer);
      } else {
        setAnimatedValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const percentage = (animatedValue / max) * 100;

  return (
    <div className={`w-full bg-gray-200 rounded-full ${height} ${className}`}>
      <div 
        className={`${color} ${height} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      </div>
    </div>
  );
}
