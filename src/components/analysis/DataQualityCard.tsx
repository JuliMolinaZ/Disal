'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertTriangle, XCircle, TrendingUp } from 'lucide-react';

interface DataQualityCardProps {
  title: string;
  completeness: number;
  consistency: number;
  outliers: number;
  totalRecords: number;
  className?: string;
}

export function DataQualityCard({ 
  title, 
  completeness, 
  consistency, 
  outliers, 
  totalRecords,
  className = '' 
}: DataQualityCardProps) {
  const getQualityColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getQualityIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="h-4 w-4 text-green-600" />;
    if (score >= 70) return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
    return <XCircle className="h-4 w-4 text-red-600" />;
  };

  const overallScore = Math.round((completeness + consistency) / 2);

  return (
    <Card className={`hover-lift transition-all duration-300 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          {title}
          {getQualityIcon(overallScore)}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Score */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Puntuación General</span>
            <span className={`text-lg font-bold ${getQualityColor(overallScore)}`}>
              {overallScore}%
            </span>
          </div>
          <Progress value={overallScore} className="h-2" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-3 w-3 text-green-500" />
              <span className="text-xs text-muted-foreground">Completitud</span>
            </div>
            <div className="text-lg font-semibold">{completeness}%</div>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-3 w-3 text-blue-500" />
              <span className="text-xs text-muted-foreground">Consistencia</span>
            </div>
            <div className="text-lg font-semibold">{consistency}%</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="pt-2 border-t">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Registros: {totalRecords.toLocaleString()}</span>
            <span className={outliers > 0 ? 'text-orange-600' : 'text-green-600'}>
              Outliers: {outliers}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
