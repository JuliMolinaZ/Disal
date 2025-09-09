'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DataTable } from './DataTable';
import { FuturisticMetricsGrid, PulseAnimation } from './FuturisticMetrics';
import { DonutChart } from './charts/DonutChart';
import { BarChart100 } from './charts/BarChart100';
import { AdvancedChartData } from '@/lib/advanced-data-processor';
import { chartColors } from '@/lib/color-palette';
import { 
  Database, 
  TrendingUp, 
  Target, 
  Activity, 
  BarChart3, 
  PieChart,
  Zap,
  Shield,
  Eye,
  Download
} from 'lucide-react';

interface FuturisticDashboardProps {
  data: AdvancedChartData;
  className?: string;
}

export function FuturisticDashboard({ data, className = '' }: FuturisticDashboardProps) {
  const colors = chartColors;

  // Preparar datos para las tablas
  const rangosTableData = data.rangosVsConceptos.rangos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: 'positivo' as const
  }));

  const conceptosTableData = data.rangosVsConceptos.conceptos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: item.name.includes('Positivos') ? 'positivo' as const :
          item.name.includes('Negativos') ? 'negativo' as const :
          item.name.includes('Ceros') ? 'cero' as const : 'diferencia' as const
  }));

  const ubicacionesRangosTableData = data.ubicaciones.rangos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: 'general' as const
  }));

  const ubicacionesConceptosTableData = data.ubicaciones.conceptos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: item.name.includes('Positivos') ? 'positivo' as const :
          item.name.includes('Negativos') ? 'negativo' as const :
          item.name.includes('Ceros') ? 'cero' as const : 'diferencia' as const
  }));

  // Métricas profesionales
  const metrics = [
    {
      title: 'Total Registros',
      value: data.comparative.totalRangos + data.comparative.totalConceptos + data.comparative.totalUbicaciones,
      subtitle: 'Procesados en todas las tablas',
      trend: { value: 12, isPositive: true },
      icon: <Database className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-blue-600 to-blue-700',
      glowColor: 'shadow-blue-500/20'
    },
    {
      title: 'Calidad de Datos',
      value: `${data.comparative.dataQuality}%`,
      subtitle: 'Puntuación general de calidad',
      trend: { value: 8, isPositive: true },
      icon: <Shield className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-green-600 to-green-700',
      glowColor: 'shadow-green-500/20'
    },
    {
      title: 'Consistencia',
      value: `${data.comparative.consistencyScore}%`,
      subtitle: 'Entre tablas relacionadas',
      trend: { value: 15, isPositive: true },
      icon: <Target className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-slate-600 to-slate-700',
      glowColor: 'shadow-slate-500/20'
    },
    {
      title: 'Problemas Detectados',
      value: data.insights.dataIssues.length,
      subtitle: 'Issues identificados',
      trend: { value: -5, isPositive: false },
      icon: <Activity className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-orange-600 to-orange-700',
      glowColor: 'shadow-orange-500/20'
    }
  ];

  return (
    <div className={`space-y-8 bg-executive-lines p-8 rounded-lg ${className}`}>
      {/* Header Profesional */}
      <PulseAnimation delay={0}>
        <div className="text-center space-y-8 modern-header p-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-900">
              Dashboard Ejecutivo de Inventario
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Análisis integral de inventario con métricas clave y visualizaciones para la toma de decisiones
          </p>
          <div className="flex justify-center space-x-3 mt-8">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
        </div>
      </PulseAnimation>

      {/* Métricas Futuristas */}
      <PulseAnimation delay={200}>
        <FuturisticMetricsGrid metrics={metrics} />
      </PulseAnimation>

      {/* Gráficos Principales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PulseAnimation delay={400}>
          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-2xl">
              <CardTitle className="text-xl flex items-center space-x-2">
                <PieChart className="h-6 w-6" />
                <span>Distribución de Rangos Generales</span>
              </CardTitle>
              <p className="text-sm text-white/90 mt-2">
                Análisis visual de la distribución de productos por rangos de cantidad
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <DonutChart
                data={data.rangosVsConceptos.rangos.data}
                title="Rangos Generales"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>

        <PulseAnimation delay={600}>
          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-2xl">
              <CardTitle className="text-xl flex items-center space-x-2">
                <BarChart3 className="h-6 w-6" />
                <span>Conceptos Generales (100%)</span>
              </CardTitle>
              <p className="text-sm text-white/90 mt-2">
                Visualización de proporciones completas de conceptos identificados
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <BarChart100
                data={data.rangosVsConceptos.conceptos.data}
                title="Conceptos Generales"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>
      </div>

      {/* Gráficos de Ubicaciones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PulseAnimation delay={800}>
          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-t-2xl">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Target className="h-6 w-6" />
                <span>Rangos por Ubicación</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Distribución de rangos en diferentes ubicaciones del almacén
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <DonutChart
                data={data.ubicaciones.rangos.data}
                title="Rangos Ubicaciones"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>

        <PulseAnimation delay={1000}>
          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-2xl">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Activity className="h-6 w-6" />
                <span>Conceptos por Ubicación</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Análisis de conceptos identificados en ubicaciones específicas
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <DonutChart
                data={data.ubicaciones.conceptos.data}
                title="Conceptos Ubicaciones"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>
      </div>

      {/* Tablas de Datos Detalladas */}
      <div className="space-y-8">
        <PulseAnimation delay={1200}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Datos Detallados del Inventario
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tablas interactivas con información completa extraída del archivo CSV
            </p>
          </div>
        </PulseAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PulseAnimation delay={1400}>
            <DataTable
              title="Rangos Generales"
              data={rangosTableData}
              description="Distribución de productos por rangos de cantidad en el inventario general"
            />
          </PulseAnimation>

          <PulseAnimation delay={1600}>
            <DataTable
              title="Conceptos Generales"
              data={conceptosTableData}
              description="Clasificación de conceptos identificados en el inventario general"
            />
          </PulseAnimation>

          <PulseAnimation delay={1800}>
            <DataTable
              title="Rangos por Ubicación"
              data={ubicacionesRangosTableData}
              description="Distribución de rangos en ubicaciones específicas del almacén"
            />
          </PulseAnimation>

          <PulseAnimation delay={2000}>
            <DataTable
              title="Conceptos por Ubicación"
              data={ubicacionesConceptosTableData}
              description="Conceptos identificados en ubicaciones específicas del almacén"
            />
          </PulseAnimation>
        </div>
      </div>

      {/* Resumen Ejecutivo */}
      <PulseAnimation delay={2200}>
        <Card className="hover-lift transition-all duration-300 shadow-glow">
          <CardHeader className="gradient-primary text-white">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <TrendingUp className="h-8 w-8" />
              <span>Resumen Ejecutivo</span>
            </CardTitle>
            <p className="text-sm text-white/90">
              Análisis consolidado de todos los datos del inventario
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">
                  {data.comparative.totalRangos.toLocaleString()}
                </div>
                <div className="text-sm text-blue-600">Total Rangos</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">
                  {data.comparative.totalConceptos.toLocaleString()}
                </div>
                <div className="text-sm text-green-600">Total Conceptos</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">
                  {data.comparative.totalUbicaciones.toLocaleString()}
                </div>
                <div className="text-sm text-purple-600">Total Ubicaciones</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </PulseAnimation>
    </div>
  );
}
