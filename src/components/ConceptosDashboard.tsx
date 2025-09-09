'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from './DataTable';
import { FuturisticMetricsGrid, PulseAnimation, AnimatedProgressBar } from './FuturisticMetrics';
import { DonutChart } from './charts/DonutChart';
import { BarChart100 } from './charts/BarChart100';
import { DataZoomChart } from './charts/DataZoomChart';
import { AdvancedChartData } from '@/lib/advanced-data-processor';
import { chartColors } from '@/lib/color-palette';
import { 
  PieChart, 
  TrendingUp, 
  Target, 
  Activity, 
  Database,
  Zap,
  Shield,
  Eye,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface ConceptosDashboardProps {
  data: AdvancedChartData;
  className?: string;
}

export function ConceptosDashboard({ data, className = '' }: ConceptosDashboardProps) {
  const colors = chartColors;

  // Preparar datos para las tablas
  const conceptosGeneralesData = data.rangosVsConceptos.conceptos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: item.name.includes('Positivos') ? 'positivo' as const :
          item.name.includes('Negativos') ? 'negativo' as const :
          item.name.includes('Ceros') ? 'cero' as const : 'diferencia' as const
  }));

  const conceptosUbicacionesData = data.ubicaciones.conceptos.data.map((item, index) => ({
    concepto: item.name,
    cantidad: item.value,
    porcentaje: item.percentage,
    tipo: item.name.includes('Positivos') ? 'positivo' as const :
          item.name.includes('Negativos') ? 'negativo' as const :
          item.name.includes('Ceros') ? 'cero' as const : 'diferencia' as const
  }));

  // Métricas específicas de conceptos
  const metrics = [
    {
      title: 'Total Conceptos Generales',
      value: data.rangosVsConceptos.conceptos.total,
      subtitle: 'Conceptos identificados en inventario general',
      trend: { value: 15, isPositive: true },
      icon: <PieChart className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-emerald-600 to-teal-600',
      glowColor: 'shadow-emerald-500/50'
    },
    {
      title: 'Total Conceptos Ubicaciones',
      value: data.ubicaciones.conceptos.total,
      subtitle: 'Conceptos en ubicaciones específicas',
      trend: { value: 18, isPositive: true },
      icon: <Target className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-violet-600 to-purple-600',
      glowColor: 'shadow-violet-500/50'
    },
    {
      title: 'Conceptos Positivos',
      value: (conceptosGeneralesData.find(c => c.tipo === 'positivo')?.cantidad || 0) + 
             (conceptosUbicacionesData.find(c => c.tipo === 'positivo')?.cantidad || 0),
      subtitle: 'Registros con valores positivos',
      trend: { value: 12, isPositive: true },
      icon: <CheckCircle className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-green-600 to-emerald-600',
      glowColor: 'shadow-green-500/50'
    },
    {
      title: 'Conceptos Problemáticos',
      value: (conceptosGeneralesData.find(c => c.tipo === 'negativo')?.cantidad || 0) + 
             (conceptosUbicacionesData.find(c => c.tipo === 'negativo')?.cantidad || 0),
      subtitle: 'Registros con valores negativos',
      trend: { value: -8, isPositive: false },
      icon: <AlertTriangle className="h-6 w-6" />,
      gradient: 'bg-gradient-to-br from-red-600 to-orange-600',
      glowColor: 'shadow-red-500/50'
    }
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header Futurista */}
      <PulseAnimation delay={0}>
        <div className="text-center space-y-6">
          <div className="relative">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              Análisis de Conceptos
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-violet-500 to-purple-500 blur opacity-30 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Análisis detallado de conceptos identificados en el inventario
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
                <PieChart className="h-6 w-6" />
                <span>Distribución de Conceptos Generales</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Visualización de conceptos identificados en el inventario general
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <DonutChart
                data={data.rangosVsConceptos.conceptos.data}
                title="Conceptos Generales"
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
                <Target className="h-6 w-6" />
                <span>Conceptos por Ubicación</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Distribución de conceptos en ubicaciones específicas del almacén
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
                <span>Conceptos Generales (100%)</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Proporciones completas de conceptos en el inventario general
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <BarChart100
                data={data.rangosVsConceptos.conceptos.data}
                title="Conceptos Generales 100%"
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
                <span>Conceptos con Zoom Interactivo</span>
              </CardTitle>
              <p className="text-sm text-white/90">
                Análisis detallado con capacidad de zoom para explorar datos
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <DataZoomChart
                data={data.rangosVsConceptos.conceptos.data}
                title="Conceptos con Zoom"
                colors={colors}
                height={400}
              />
            </CardContent>
          </Card>
        </PulseAnimation>
      </div>

      {/* Análisis de Calidad de Conceptos */}
      <PulseAnimation delay={1200}>
        <Card className="hover-lift transition-all duration-300 shadow-glow">
          <CardHeader className="gradient-primary text-white">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span>Análisis de Calidad de Conceptos</span>
            </CardTitle>
            <p className="text-sm text-white/90">
              Evaluación de la calidad y confiabilidad de los conceptos identificados
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-700">
                  {data.rangosVsConceptos.conceptos.quality.completeness}%
                </div>
                <div className="text-sm text-green-600">Completitud</div>
                <AnimatedProgressBar 
                  value={data.rangosVsConceptos.conceptos.quality.completeness} 
                  max={100}
                  color="bg-green-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-700">
                  {data.rangosVsConceptos.conceptos.quality.consistency}%
                </div>
                <div className="text-sm text-blue-600">Consistencia</div>
                <AnimatedProgressBar 
                  value={data.rangosVsConceptos.conceptos.quality.consistency} 
                  max={100}
                  color="bg-blue-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-700">
                  {data.rangosVsConceptos.conceptos.quality.outliers}
                </div>
                <div className="text-sm text-orange-600">Outliers</div>
                <AnimatedProgressBar 
                  value={data.rangosVsConceptos.conceptos.quality.outliers} 
                  max={10}
                  color="bg-orange-500"
                  className="mt-2"
                />
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-700">
                  {Math.round((data.rangosVsConceptos.conceptos.quality.completeness + data.rangosVsConceptos.conceptos.quality.consistency) / 2)}%
                </div>
                <div className="text-sm text-purple-600">Calidad General</div>
                <AnimatedProgressBar 
                  value={Math.round((data.rangosVsConceptos.conceptos.quality.completeness + data.rangosVsConceptos.conceptos.quality.consistency) / 2)} 
                  max={100}
                  color="bg-purple-500"
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
              Datos Detallados de Conceptos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tablas interactivas con información completa de conceptos por categoría
            </p>
          </div>
        </PulseAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PulseAnimation delay={1600}>
            <DataTable
              title="Conceptos Generales"
              data={conceptosGeneralesData}
              description="Clasificación de conceptos identificados en el inventario general"
            />
          </PulseAnimation>

          <PulseAnimation delay={1800}>
            <DataTable
              title="Conceptos por Ubicación"
              data={conceptosUbicacionesData}
              description="Conceptos identificados en ubicaciones específicas del almacén"
            />
          </PulseAnimation>
        </div>
      </div>

      {/* Resumen de Insights */}
      <PulseAnimation delay={2000}>
        <Card className="hover-lift transition-all duration-300 shadow-glow">
          <CardHeader className="gradient-info text-white">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Zap className="h-8 w-8" />
              <span>Insights Clave de Conceptos</span>
            </CardTitle>
            <p className="text-sm text-white/90">
              Conclusiones importantes para la toma de decisiones
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Fortalezas Identificadas</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Alta completitud en la identificación de conceptos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Buena consistencia entre datos generales y de ubicaciones</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Proporción adecuada de conceptos positivos</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <span>Áreas de Mejora</span>
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Reducir conceptos negativos mediante validación previa</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Implementar controles de calidad más estrictos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mejorar capacitación en identificación de conceptos</span>
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
