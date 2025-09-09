'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend, 
  className = '' 
}: StatsCardProps) {
  return (
    <Card className={`relative overflow-hidden bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-wider">{title}</p>
            <p className="text-4xl font-bold text-slate-900 mt-2">{value}</p>
            {description && (
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{description}</p>
            )}
          </div>
          {Icon && (
            <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
              <Icon className="h-8 w-8 text-white" />
            </div>
          )}
        </div>
        {trend && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                trend.isPositive ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <span className={`text-sm font-bold ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">vs anterior</span>
          </div>
        )}
      </div>
    </Card>
  );
}
