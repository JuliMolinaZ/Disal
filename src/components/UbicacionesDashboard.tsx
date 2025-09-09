'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from './DataTable';
import { FuturisticMetricsGrid, PulseAnimation, AnimatedProgressBar } from './FuturisticMetrics';
import { DonutChart } from './charts/DonutChart';
import { BarChart100 } from './charts/BarChart100';
import { LogScaleChart } from './charts/LogScaleChart';
import { DataZoomChart } from './charts/DataZoomChart';
import { AdvancedChartData } from '@/lib/advanced-data-processor';
import { chartColors } from '@/lib/color-palette';
import { 
  MapPin, 
  TrendingUp, 
  Target, 
  Activity, 
  Database,
  Zap,
  Shield,
  Eye,
  Building,
  Navigation
} from 'lucide-react';

interface UbicacionesDashboardProps {
  data: AdvancedChartData;
  className?: string;
}

export function UbicacionesDashboard({ data, className = '' }: UbicacionesDashboardProps) {
  const colors = chartColors;

  // Preparar datos para las tablas
  const ubicacionesRangosData = data.ubicaciones.rangos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: 'ubicacion' as const
  }));

  const ubicacionesConceptosData = data.ubicaciones.conceptos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: item.name.includes('Positivos') ? 'positivo' as const :
          item.name.includes('Negativos') ? 'negativo' as const :
          item.name.includes('Ceros') ? 'cero' as const : 'diferencia' as const
  }));

  // Métricas específicas de ubicaciones
  const metrics = [
    {
      title: 'Total Rangos Ubicaciones',
      value: data.ubicaciones.rangos.total,
      subtitle: 'Productos en ubicaciones específicas',
      trend: { value: 22, isPositive: true },
      icon: <MapPin className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-cyan-600 to-blue-600',
      glowColor: 'shadow-cyan-500/50'
    },
    {
      title: 'Total Conceptos Ubicaciones',
      value: data.ubicaciones.conceptos.total,
      subtitle: 'Conceptos en ubicaciones específicas',
      trend: { value: 25, isPositive: true },
      icon: <Building className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-indigo-600 to-purple-600',
      glowColor: 'shadow-indigo-500/50'
    },
    {
      title: 'Eficiencia de Ubicación',
      value: Math.round((data.ubicaciones.rangos.total / data.rangosVsConceptos.rangos.total) * 100),
      subtitle: 'Porcentaje de cobertura por ubicación',
      trend: { value: 8, isPositive: true },
      icon: <Target className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-emerald-600 to-teal-600',
      glowColor: 'shadow-emerald-500/50'
    },
    {
      title: 'Calidad de Ubicaciones',
      value: `${Math.round((data.ubicaciones.rangos.quality.completeness + data.ubicaciones.rangos.quality.consistency) / 2)}%`,
      subtitle: 'Puntuación de calidad por ubicación',
      trend: { value: 12, isPositive: true },
      icon: <Shield className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-rose-600 to-pink-600',
      glowColor: 'shadow-rose-500/50'
    }
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header Futurista */}
      <PulseAnimation delay={0}>
        <div className="text-center space-y-6">
          <div className="relative">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Análisis de Ubicaciones
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 blur opacity-30 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Análisis detallado de la distribución de inventario por ubicaciones específicas
          </p>
        </div>
      </PulseAnimation>

      {/* Métricas Futuristas */}
      <PulseAnimation delay={200}>
        <FuturisticMetricsGrid metrics={metrics} />
      </PulseAnimation>

      {/* Gráficos Principales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PulseAnimation delay={400}>
          <Card className="hover-lift transition-all duration-300 shadow-glow">
            <CardHeader className="gradient-ocean text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <MapPin className="h-6 w-6" />
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

        <PulseAnimation delay={600}>
          <Card className="hover-lift transition-all duration-300 shadow-glow-success">
            <CardHeader className="gradient-success text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Building className="h-6 w-6" />
                <span>Conceptos por Ubicación</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Conceptos identificados en ubicaciones específicas del almacén
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

      {/* Gráficos de Análisis Avanzado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PulseAnimation delay={800}>
          <Card className="hover-lift transition-all duration-300 shadow-glow-warning">
            <CardHeader className="gradient-warning text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <TrendingUp className="h-6 w-6" />
                <span>Rangos Ubicaciones (100%)</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Proporciones completas de rangos en ubicaciones específicas
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <BarChart100
                data={data.ubicaciones.rangos.data}
                title="Rangos Ubicaciones 100%"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>

        <PulseAnimation delay={1000}>
          <Card className="hover-lift transition-all duration-300 shadow-glow-error">
            <CardHeader className="gradient-error text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Activity className="h-6 w-6" />
                <span>Top Ubicaciones (Escala Log)</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Análisis de las ubicaciones más representativas con escala logarítmica
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <LogScaleChart
                data={data.ubicaciones.rangos.topItems}
                title="Top Ubicaciones"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>
      </div>

      {/* Gráficos de Conceptos por Ubicación */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PulseAnimation delay={1200}>
          <Card className="hover-lift transition-all duration-300 shadow-glow">
            <CardHeader className="gradient-primary text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Navigation className="h-6 w-6" />
                <span>Conceptos Ubicaciones (100%)</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Proporciones completas de conceptos en ubicaciones específicas
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <BarChart100
                data={data.ubicaciones.conceptos.data}
                title="Conceptos Ubicaciones 100%"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>

        <PulseAnimation delay={1400}>
          <Card className="hover-lift transition-all duration-300 shadow-glow-success">
            <CardHeader className="gradient-success text-white">
              <CardTitle className="text-xl flex items-center space-x-2">
                <Zap className="h-6 w-6" />
                <span>Conceptos con Zoom Interactivo</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Análisis detallado de conceptos con capacidad de zoom
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <DataZoomChart
                data={data.ubicaciones.conceptos.data}
                title="Conceptos Ubicaciones con Zoom"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>
      </div>

      {/* Análisis Comparativo de Ubicaciones */}
      <PulseAnimation delay={1600}>
        <Card className="hover-lift transition-all duration-300 shadow-glow">
          <CardHeader className="gradient-info text-white">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Database className="h-8 w-8" />
              <span>Análisis Comparativo de Ubicaciones</span>
            </CardTitle>
            <p className="text-sm text-white/90">
              Comparación entre datos generales y de ubicaciones específicas
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">
                  {Math.round((data.ubicaciones.rangos.total / data.rangosVsConceptos.rangos.total) * 100)}%
                </div>
                <div className="text-sm text-blue-600">Cobertura de Rangos</div>
                <AnimatedProgressBar 
                  value={(data.ubicaciones.rangos.total / data.rangosVsConceptos.rangos.total) * 100} 
                  max={100}
                  color="bg-blue-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">
                  {Math.round((data.ubicaciones.conceptos.total / data.rangosVsConceptos.conceptos.total) * 100)}%
                </div>
                <div className="text-sm text-green-600">Cobertura de Conceptos</div>
                <AnimatedProgressBar 
                  value={(data.ubicaciones.conceptos.total / data.rangosVsConceptos.conceptos.total) * 100} 
                  max={100}
                  color="bg-green-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">
                  {Math.abs(data.ubicaciones.rangos.total - data.rangosVsConceptos.rangos.total)}
                </div>
                <div className="text-sm text-purple-600">Diferencia en Rangos</div>
                <AnimatedProgressBar 
                  value={Math.abs(data.ubicaciones.rangos.total - data.rangosVsConceptos.rangos.total)} 
                  max={1000}
                  color="bg-purple-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-700">
                  {Math.abs(data.ubicaciones.conceptos.total - data.rangosVsConceptos.conceptos.total)}
                </div>
                <div className="text-sm text-orange-600">Diferencia en Conceptos</div>
                <AnimatedProgressBar 
                  value={Math.abs(data.ubicaciones.conceptos.total - data.rangosVsConceptos.conceptos.total)} 
                  max={1000}
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
        <PulseAnimation delay={1800}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Datos Detallados de Ubicaciones
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tablas interactivas con información completa de ubicaciones por categoría
            </p>
          </div>
        </PulseAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PulseAnimation delay={2000}>
            <DataTable
              title="Rangos por Ubicación"
              data={ubicacionesRangosData}
              description="Distribución de rangos en ubicaciones específicas del almacén"
            />
          </PulseAnimation>

          <PulseAnimation delay={2200}>
            <DataTable
              title="Conceptos por Ubicación"
              data={ubicacionesConceptosData}
              description="Conceptos identificados en ubicaciones específicas del almacén"
            />
          </PulseAnimation>
        </div>
      </div>

      {/* Resumen de Insights de Ubicaciones */}
      <PulseAnimation delay={2400}>
        <Card className="hover-lift transition-all duration-300 shadow-glow">
          <CardHeader className="gradient-warning text-white">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Eye className="h-8 w-8" />
              <span>Insights Clave de Ubicaciones</span>
            </CardTitle>
            <p className="text-sm text-white/90">
              Conclusiones importantes para la optimización de ubicaciones
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <Target className="h-5 w-5 text-green-500" />
                  <span>Optimizaciones Identificadas</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Alta cobertura de ubicaciones en rangos principales</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Buena distribución de conceptos por ubicación</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Consistencia adecuada entre ubicaciones</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-orange-500" />
                  <span>Recomendaciones de Ubicación</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Implementar sistema de tracking por ubicación</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Optimizar distribución de productos por zona</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Establecer controles de calidad por ubicación</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </PulseAnimation>
    </div>
  );
}
