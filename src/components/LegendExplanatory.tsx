'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Info, Database, BarChart3, PieChart, Target, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface LegendExplanatoryProps {
  title: string;
  description: string;
  dataSource: string;
  purpose: string;
  methodology: string;
  insights: string[];
  icon?: React.ReactNode;
  className?: string;
}

export function LegendExplanatory({ 
  title, 
  description, 
  dataSource, 
  purpose, 
  methodology, 
  insights, 
  icon,
  className = '' 
}: LegendExplanatoryProps) {
  return (
    <Card className={`bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center space-x-2 text-blue-800">
          {icon || <Info className="h-5 w-5" />}
          <span>Leyenda Explicativa: {title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 flex items-center space-x-2">
                <Database className="h-4 w-4 text-blue-600" />
                <span>Descripción</span>
              </h4>
              <p className="text-sm text-gray-700">{description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 flex items-center space-x-2">
                <Target className="h-4 w-4 text-green-600" />
                <span>Fuente de Datos</span>
              </h4>
              <p className="text-sm text-gray-700">{dataSource}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <span>Propósito</span>
              </h4>
              <p className="text-sm text-gray-700">{purpose}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-1 flex items-center space-x-2">
                <BarChart3 className="h-4 w-4 text-orange-600" />
                <span>Metodología</span>
              </h4>
              <p className="text-sm text-gray-700">{methodology}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Insights Clave</span>
          </h4>
          <div className="space-y-2">
            {insights.map((insight, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{insight}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface DataSourceInfoProps {
  source: string;
  processedBy: string;
  lastUpdated: string;
  reliability: 'Alta' | 'Media' | 'Baja';
  className?: string;
}

export function DataSourceInfo({ 
  source, 
  processedBy, 
  lastUpdated, 
  reliability, 
  className = '' 
}: DataSourceInfoProps) {
  const getReliabilityColor = (level: string) => {
    switch (level) {
      case 'Alta': return 'bg-green-100 text-green-800';
      case 'Media': return 'bg-yellow-100 text-yellow-800';
      case 'Baja': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-gray-50 p-4 rounded-lg border ${className}`}>
      <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
        <Database className="h-4 w-4 text-gray-600" />
        <span>Información de la Fuente de Datos</span>
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        <div>
          <span className="font-medium text-gray-600">Fuente:</span>
          <span className="ml-2 text-gray-800">{source}</span>
        </div>
        <div>
          <span className="font-medium text-gray-600">Procesado por:</span>
          <span className="ml-2 text-gray-800">{processedBy}</span>
        </div>
        <div>
          <span className="font-medium text-gray-600">Última actualización:</span>
          <span className="ml-2 text-gray-800">{lastUpdated}</span>
        </div>
        <div>
          <span className="font-medium text-gray-600">Confiabilidad:</span>
          <Badge className={`ml-2 ${getReliabilityColor(reliability)}`}>
            {reliability}
          </Badge>
        </div>
      </div>
    </div>
  );
}
