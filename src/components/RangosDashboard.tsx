'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from './DataTable';
import { FuturisticMetricsGrid, PulseAnimation, AnimatedProgressBar } from './FuturisticMetrics';
import { DonutChart } from './charts/DonutChart';
import { BarChart100 } from './charts/BarChart100';
import { LogScaleChart } from './charts/LogScaleChart';
import { AdvancedChartData } from '@/lib/advanced-data-processor';
import { chartColors } from '@/lib/color-palette';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Activity, 
  Database,
  Zap,
  Shield,
  Eye
} from 'lucide-react';

interface RangosDashboardProps {
  data: AdvancedChartData;
  className?: string;
}

export function RangosDashboard({ data, className = '' }: RangosDashboardProps) {
  const colors = chartColors;

  // Preparar datos para las tablas
  const rangosGeneralesData = data.rangosVsConceptos.rangos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: 'general' as const
  }));

  const rangosUbicacionesData = data.ubicaciones.rangos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: 'ubicacion' as const
  }));

  // Métricas específicas de rangos
  const metrics = [
    {
      title: 'Total Rangos Generales',
      value: data.rangosVsConceptos.rangos.total,
      subtitle: 'Productos en inventario general',
      trend: { value: 8, isPositive: true },
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-blue-600 to-cyan-600',
      glowColor: 'shadow-blue-500/50'
    },
    {
      title: 'Total Rangos Ubicaciones',
      value: data.ubicaciones.rangos.total,
      subtitle: 'Productos en ubicaciones específicas',
      trend: { value: 12, isPositive: true },
      icon: <Target className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-green-600 to-emerald-600',
      glowColor: 'shadow-green-500/50'
    },
    {
      title: 'Rango Promedio',
      value: Math.round(data.rangosVsConceptos.rangos.distribution.mean),
      subtitle: 'Cantidad promedio por rango',
      trend: { value: 5, isPositive: true },
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-purple-600 to-pink-600',
      glowColor: 'shadow-purple-500/50'
    },
    {
      title: 'Calidad de Datos',
      value: `${Math.round((data.rangosVsConceptos.rangos.quality.completeness + data.rangosVsConceptos.rangos.quality.consistency) / 2)}%`,
      subtitle: 'Puntuación de calidad',
      trend: { value: 3, isPositive: true },
      icon: <Shield className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-orange-600 to-red-600',
      glowColor: 'shadow-orange-500/50'
    }
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header Profesional */}
      <PulseAnimation delay={0}>
        <div className="text-center space-y-8 modern-header p-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-900">
              Análisis de Rangos
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Análisis detallado de la distribución de productos por rangos de cantidad
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
                <BarChart3 className="h-6 w-6" />
                <span>Distribución de Rangos Generales</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Visualización de la distribución de productos por rangos de cantidad
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
                <Target className="h-6 w-6" />
                <span>Rangos por Ubicación</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Distribución de rangos en ubicaciones específicas del almacén
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
      </div>

      {/* Gráficos de Análisis Avanzado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PulseAnimation delay={800}>
          <Card className="modern-card hover:scale-105 transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-t-2xl">
              <CardTitle className="text-xl flex items-center space-x-2">
                <TrendingUp className="h-6 w-6" />
                <span>Rangos Generales (100%)</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Proporciones completas de rangos en el inventario general
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <BarChart100
                data={data.rangosVsConceptos.rangos.data}
                title="Rangos Generales 100%"
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
                <span>Top Rangos (Escala Log)</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Análisis de los rangos más representativos con escala logarítmica
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <LogScaleChart
                data={data.rangosVsConceptos.rangos.topItems}
                title="Top Rangos"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>
      </div>

      {/* Análisis Estadístico */}
      <PulseAnimation delay={1200}>
        <Card className="hover-lift transition-all duration-300 shadow-glow">
          <CardHeader className="gradient-primary text-white">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Database className="h-8 w-8" />
              <span>Análisis Estadístico de Rangos</span>
            </CardTitle>
            <p className="text-sm text-white/90">
              Métricas estadísticas detalladas para la toma de decisiones
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">
                  {data.rangosVsConceptos.rangos.distribution.mean}
                </div>
                <div className="text-sm text-blue-600">Media</div>
                <AnimatedProgressBar 
                  value={data.rangosVsConceptos.rangos.distribution.mean} 
                  max={1000}
                  color="bg-blue-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">
                  {data.rangosVsConceptos.rangos.distribution.median}
                </div>
                <div className="text-sm text-green-600">Mediana</div>
                <AnimatedProgressBar 
                  value={data.rangosVsConceptos.rangos.distribution.median} 
                  max={1000}
                  color="bg-green-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">
                  {data.rangosVsConceptos.rangos.distribution.mode}
                </div>
                <div className="text-sm text-purple-600">Moda</div>
                <AnimatedProgressBar 
                  value={data.rangosVsConceptos.rangos.distribution.mode} 
                  max={1000}
                  color="bg-purple-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-700">
                  {data.rangosVsConceptos.rangos.distribution.standardDeviation}
                </div>
                <div className="text-sm text-orange-600">Desv. Est.</div>
                <AnimatedProgressBar 
                  value={data.rangosVsConceptos.rangos.distribution.standardDeviation} 
                  max={500}
                  color="bg-orange-500"
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </PulseAnimation>

      {/* Tablas de Datos */}
      <div className="space-y-8">
        <PulseAnimation delay={1400}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Datos Detallados de Rangos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tablas interactivas con información completa de rangos por categoría
            </p>
          </div>
        </PulseAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PulseAnimation delay={1600}>
            <DataTable
              title="Rangos Generales"
              data={rangosGeneralesData}
              description="Distribución de productos por rangos de cantidad en el inventario general"
            />
          </PulseAnimation>

          <PulseAnimation delay={1800}>
            <DataTable
              title="Rangos por Ubicación"
              data={rangosUbicacionesData}
              description="Distribución de rangos en ubicaciones específicas del almacén"
            />
          </PulseAnimation>
        </div>
      </div>
    </div>
  );
}
