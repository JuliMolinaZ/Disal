'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AdvancedChartData } from '@/lib/advanced-data-processor';
import { Lightbulb, AlertTriangle, CheckCircle, TrendingUp, Target, Database } from 'lucide-react';

interface InsightsPanelProps {
  data: AdvancedChartData;
  className?: string;
}

export function InsightsPanel({ data, className = '' }: InsightsPanelProps) {
  const { insights, comparative } = data;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Top Performers */}
      <Card className="hover-lift transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Target className="h-5 w-5 text-green-600" />
            <span>Top Performers</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-2">Rangos Más Representativos</h4>
              <div className="space-y-2">
                {insights.topRanges.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-700">{item.value.toLocaleString()}</div>
                      <div className="text-xs text-green-600">{item.percentage?.toFixed(1)}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-2">Conceptos Más Frecuentes</h4>
              <div className="space-y-2">
                {insights.topConcepts.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-700">{item.value.toLocaleString()}</div>
                      <div className="text-xs text-blue-600">{item.percentage?.toFixed(1)}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Quality Overview */}
      <Card className="hover-lift transition-all duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Database className="h-5 w-5 text-purple-600" />
            <span>Resumen de Calidad de Datos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-700">{comparative.dataQuality}%</div>
              <div className="text-sm text-purple-600">Calidad General</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-700">{comparative.consistencyScore}%</div>
              <div className="text-sm text-blue-600">Consistencia</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-700">{comparative.totalRangos.toLocaleString()}</div>
              <div className="text-sm text-green-600">Total Rangos</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-700">{comparative.totalConceptos.toLocaleString()}</div>
              <div className="text-sm text-orange-600">Total Conceptos</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issues and Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data Issues */}
        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <span>Problemas Identificados</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {insights.dataIssues.length > 0 ? (
              <div className="space-y-2">
                {insights.dataIssues.map((issue, index) => (
                  <div key={index} className="flex items-start space-x-2 p-2 bg-red-50 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-red-700">{issue}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center space-x-2 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm text-green-700">No se identificaron problemas críticos</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="hover-lift transition-all duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <span>Recomendaciones</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {insights.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-2 p-2 bg-yellow-50 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-yellow-700">{recommendation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
