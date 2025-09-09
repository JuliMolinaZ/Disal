'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TableAnalysis } from '@/lib/advanced-data-processor';
import { BarChart3, TrendingUp, Calculator, Target } from 'lucide-react';

interface StatisticalSummaryProps {
  analysis: TableAnalysis;
  className?: string;
}

export function StatisticalSummary({ analysis, className = '' }: StatisticalSummaryProps) {
  const { distribution, topItems, quality } = analysis;

  return (
    <Card className={`hover-lift transition-all duration-300 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          <span>Análisis Estadístico - {analysis.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Top 3 Items */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-gray-700 flex items-center space-x-2">
            <Target className="h-4 w-4" />
            <span>Top 3 Elementos</span>
          </h4>
          <div className="space-y-2">
            {topItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">{item.value.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{item.percentage?.toFixed(1)}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistical Distribution */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-gray-700 flex items-center space-x-2">
            <Calculator className="h-4 w-4" />
            <span>Distribución Estadística</span>
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-xs text-blue-600 font-medium">Media</div>
              <div className="text-lg font-bold text-blue-700">{distribution.mean}</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-xs text-green-600 font-medium">Mediana</div>
              <div className="text-lg font-bold text-green-700">{distribution.median}</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-xs text-purple-600 font-medium">Moda</div>
              <div className="text-lg font-bold text-purple-700">{distribution.mode}</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-xs text-orange-600 font-medium">Desv. Est.</div>
              <div className="text-lg font-bold text-orange-700">{distribution.standardDeviation}</div>
            </div>
          </div>
        </div>

        {/* Data Quality Indicators */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-gray-700 flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>Indicadores de Calidad</span>
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Completitud</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${quality.completeness}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium w-8">{quality.completeness}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Consistencia</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${quality.consistency}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium w-8">{quality.consistency}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Outliers</span>
              <span className={`text-sm font-medium ${quality.outliers > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                {quality.outliers}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
