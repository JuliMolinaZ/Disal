'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AdvancedChartData } from '@/lib/advanced-data-processor';
import { BarChart3, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

interface TableComparisonProps {
  data: AdvancedChartData;
  className?: string;
}

export function TableComparison({ data, className = '' }: TableComparisonProps) {
  const { rangosVsConceptos, ubicaciones, comparative } = data;

  const comparisonData = [
    {
      name: 'Rangos Generales',
      total: rangosVsConceptos.rangos.total,
      quality: Math.round((rangosVsConceptos.rangos.quality.completeness + rangosVsConceptos.rangos.quality.consistency) / 2),
      outliers: rangosVsConceptos.rangos.quality.outliers,
      topItem: rangosVsConceptos.rangos.topItems[0]?.name || 'N/A'
    },
    {
      name: 'Conceptos Generales',
      total: rangosVsConceptos.conceptos.total,
      quality: Math.round((rangosVsConceptos.conceptos.quality.completeness + rangosVsConceptos.conceptos.quality.consistency) / 2),
      outliers: rangosVsConceptos.conceptos.quality.outliers,
      topItem: rangosVsConceptos.conceptos.topItems[0]?.name || 'N/A'
    },
    {
      name: 'Rangos Ubicaciones',
      total: ubicaciones.rangos.total,
      quality: Math.round((ubicaciones.rangos.quality.completeness + ubicaciones.rangos.quality.consistency) / 2),
      outliers: ubicaciones.rangos.quality.outliers,
      topItem: ubicaciones.rangos.topItems[0]?.name || 'N/A'
    },
    {
      name: 'Conceptos Ubicaciones',
      total: ubicaciones.conceptos.total,
      quality: Math.round((ubicaciones.conceptos.quality.completeness + ubicaciones.conceptos.quality.consistency) / 2),
      outliers: ubicaciones.conceptos.quality.outliers,
      topItem: ubicaciones.conceptos.topItems[0]?.name || 'N/A'
    }
  ];

  const getQualityColor = (quality: number) => {
    if (quality >= 90) return 'text-green-600 bg-green-50';
    if (quality >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getQualityIcon = (quality: number) => {
    if (quality >= 90) return <CheckCircle className="h-4 w-4 text-green-600" />;
    if (quality >= 70) return <AlertCircle className="h-4 w-4 text-yellow-600" />;
    return <AlertCircle className="h-4 w-4 text-red-600" />;
  };

  return (
    <Card className={`hover-lift transition-all duration-300 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-indigo-600" />
          <span>Comparación Entre Tablas</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-700">{comparative.totalRangos.toLocaleString()}</div>
              <div className="text-xs text-blue-600">Total Rangos</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-700">{comparative.totalConceptos.toLocaleString()}</div>
              <div className="text-xs text-green-600">Total Conceptos</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-lg font-bold text-purple-700">{comparative.dataQuality}%</div>
              <div className="text-xs text-purple-600">Calidad Promedio</div>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <div className="text-lg font-bold text-orange-700">{comparative.consistencyScore}%</div>
              <div className="text-xs text-orange-600">Consistencia</div>
            </div>
          </div>

          {/* Table Comparison */}
          <div className="space-y-3">
            {comparisonData.map((table, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-800">{table.name}</h4>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getQualityColor(table.quality)}`}>
                    {getQualityIcon(table.quality)}
                    <span>{table.quality}%</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-700">{table.total.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Total Registros</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-700">{table.outliers}</div>
                    <div className="text-xs text-gray-500">Outliers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-600 truncate" title={table.topItem}>
                      {table.topItem}
                    </div>
                    <div className="text-xs text-gray-500">Top Elemento</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Consistency Analysis */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-indigo-600" />
              <span>Análisis de Consistencia</span>
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Diferencia Rangos vs Ubicaciones</span>
                <span className="text-sm font-medium">
                  {Math.abs(rangosVsConceptos.rangos.total - ubicaciones.rangos.total).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Diferencia Conceptos vs Ubicaciones</span>
                <span className="text-sm font-medium">
                  {Math.abs(rangosVsConceptos.conceptos.total - ubicaciones.conceptos.total).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Ratio Ubicaciones/Generales</span>
                <span className="text-sm font-medium">
                  {(ubicaciones.rangos.total / rangosVsConceptos.rangos.total).toFixed(2)}x
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
