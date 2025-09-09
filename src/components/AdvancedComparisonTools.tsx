'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import ReactECharts from 'echarts-for-react';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  LineChart,
  PieChart,
  Layers,
  Zap,
  Target,
  Eye,
  Filter,
  ArrowLeftRight,
  ArrowUpDown,
  Maximize,
  Minimize,
  RefreshCw,
  Download,
  Share2,
  Bookmark,
  Search,
  Calendar,
  Users,
  DollarSign,
  Package,
  Activity,
  AlertTriangle,
  CheckCircle,
  Star,
  Award,
  Lightbulb,
  Brain
} from 'lucide-react';

interface ComparisonData {
  id: string;
  label: string;
  current: number;
  previous: number;
  target: number;
  benchmark: number;
  category: string;
  unit: string;
  trend: number[];
  color: string;
}

interface DrillDownLevel {
  id: string;
  name: string;
  data: ComparisonData[];
  parent?: string;
}

interface TimeComparison {
  period: string;
  value: number;
  change: number;
  status: 'up' | 'down' | 'stable';
}

export function AdvancedComparisonTools() {
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(['revenue', 'costs', 'efficiency']);
  const [comparisonMode, setComparisonMode] = useState<'period' | 'benchmark' | 'target'>('period');
  const [currentDrillLevel, setCurrentDrillLevel] = useState(0);
  const [zoomedMetric, setZoomedMetric] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState([1, 12]);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });

  const comparisonData: ComparisonData[] = [
    {
      id: 'revenue',
      label: 'Ingresos Totales',
      current: 2847392,
      previous: 2650120,
      target: 2900000,
      benchmark: 2750000,
      category: 'Financiero',
      unit: '$',
      trend: [2200000, 2350000, 2500000, 2650000, 2750000, 2847392],
      color: '#10b981'
    },
    {
      id: 'costs',
      label: 'Costos Operativos',
      current: 1247320,
      previous: 1384500,
      target: 1200000,
      benchmark: 1300000,
      category: 'Financiero',
      unit: '$',
      trend: [1450000, 1420000, 1380000, 1350000, 1320000, 1247320],
      color: '#ef4444'
    },
    {
      id: 'efficiency',
      label: 'Eficiencia Operativa',
      current: 94.2,
      previous: 87.1,
      target: 95.0,
      benchmark: 88.0,
      category: 'Operacional',
      unit: '%',
      trend: [82.5, 84.2, 86.1, 87.8, 89.5, 94.2],
      color: '#3b82f6'
    },
    {
      id: 'satisfaction',
      label: 'Satisfacción Cliente',
      current: 96.8,
      previous: 89.2,
      target: 95.0,
      benchmark: 87.5,
      category: 'Calidad',
      unit: '%',
      trend: [85.0, 86.5, 87.2, 88.9, 91.2, 96.8],
      color: '#8b5cf6'
    },
    {
      id: 'inventory_turnover',
      label: 'Rotación Inventario',
      current: 12.3,
      previous: 10.8,
      target: 12.0,
      benchmark: 11.5,
      category: 'Operacional',
      unit: 'x',
      trend: [8.2, 9.1, 9.8, 10.2, 11.1, 12.3],
      color: '#f59e0b'
    },
    {
      id: 'quality_index',
      label: 'Índice de Calidad',
      current: 98.7,
      previous: 96.2,
      target: 99.0,
      benchmark: 95.0,
      category: 'Calidad',
      unit: '%',
      trend: [92.0, 93.5, 94.8, 95.2, 96.8, 98.7],
      color: '#06b6d4'
    }
  ];

  const drillDownLevels: DrillDownLevel[] = [
    {
      id: 'overview',
      name: 'Vista General',
      data: comparisonData
    },
    {
      id: 'financiero',
      name: 'Análisis Financiero',
      data: comparisonData.filter(d => d.category === 'Financiero'),
      parent: 'overview'
    },
    {
      id: 'operacional',
      name: 'Análisis Operacional',
      data: comparisonData.filter(d => d.category === 'Operacional'),
      parent: 'overview'
    },
    {
      id: 'calidad',
      name: 'Análisis de Calidad',
      data: comparisonData.filter(d => d.category === 'Calidad'),
      parent: 'overview'
    }
  ];

  const timeComparisons: TimeComparison[] = [
    { period: 'Último Mes', value: 2847392, change: 7.4, status: 'up' },
    { period: 'Último Trimestre', value: 8234567, change: 12.8, status: 'up' },
    { period: 'Último Año', value: 31245890, change: 18.2, status: 'up' },
    { period: 'vs Año Anterior', value: 31245890, change: -2.1, status: 'down' }
  ];

  const startAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 3000);
  };

  const getComparisonValue = (data: ComparisonData) => {
    switch (comparisonMode) {
      case 'period':
        return data.previous;
      case 'benchmark':
        return data.benchmark;
      case 'target':
        return data.target;
      default:
        return data.previous;
    }
  };

  const getComparisonLabel = () => {
    switch (comparisonMode) {
      case 'period':
        return 'Período Anterior';
      case 'benchmark':
        return 'Benchmark Mercado';
      case 'target':
        return 'Objetivo';
      default:
        return 'Comparación';
    }
  };

  const getMultiSeriesChartOptions = () => {
    const selectedData = comparisonData.filter(d => selectedMetrics.includes(d.id));
    
    return {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        textStyle: { color: '#ffffff' }
      },
      legend: {
        data: selectedData.map(d => d.label),
        textStyle: { color: '#94a3b8' },
        top: '5%'
      },
      grid: { 
        left: '3%', 
        right: '4%', 
        bottom: '10%', 
        top: '15%',
        containLabel: true 
      },
      xAxis: {
        type: 'category',
        data: Array.from({ length: timeRange[1] - timeRange[0] + 1 }, (_, i) => `Mes ${timeRange[0] + i}`),
        axisLine: { lineStyle: { color: '#475569' } },
        axisTick: { lineStyle: { color: '#475569' } },
        axisLabel: { color: '#94a3b8' }
      },
      yAxis: [
        {
          type: 'value',
          name: 'Valores Principales',
          position: 'left',
          axisLine: { lineStyle: { color: '#475569' } },
          axisTick: { lineStyle: { color: '#475569' } },
          axisLabel: { color: '#94a3b8' },
          splitLine: { lineStyle: { color: '#374151' } }
        },
        {
          type: 'value',
          name: 'Porcentajes',
          position: 'right',
          axisLine: { lineStyle: { color: '#475569' } },
          axisTick: { lineStyle: { color: '#475569' } },
          axisLabel: { color: '#94a3b8' },
          splitLine: { show: false }
        }
      ],
      series: selectedData.map((data, index) => ({
        name: data.label,
        type: 'line',
        yAxisIndex: data.unit === '%' ? 1 : 0,
        data: data.trend.slice(timeRange[0] - 1, timeRange[1]),
        smooth: true,
        lineStyle: { 
          color: data.color, 
          width: 3,
          type: zoomedMetric === data.id ? 'solid' : 'solid'
        },
        itemStyle: { 
          color: data.color,
          borderWidth: zoomedMetric === data.id ? 3 : 1
        },
        symbol: 'circle',
        symbolSize: zoomedMetric === data.id ? 10 : 6,
        emphasis: {
          focus: 'series',
          lineStyle: { width: 5 }
        },
        areaStyle: zoomedMetric === data.id ? {
          opacity: 0.3,
          color: data.color
        } : null,
        animation: true,
        animationDuration: 2000 * animationSpeed,
        animationEasing: 'elasticOut'
      }))
    };
  };

  const getComparisonChartOptions = () => {
    const selectedData = comparisonData.filter(d => selectedMetrics.includes(d.id));
    
    return {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        textStyle: { color: '#ffffff' }
      },
      legend: {
        data: ['Actual', getComparisonLabel()],
        textStyle: { color: '#94a3b8' }
      },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: {
        type: 'category',
        data: selectedData.map(d => d.label),
        axisLine: { lineStyle: { color: '#475569' } },
        axisTick: { lineStyle: { color: '#475569' } },
        axisLabel: { 
          color: '#94a3b8',
          rotate: 45,
          interval: 0
        }
      },
      yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#475569' } },
        axisTick: { lineStyle: { color: '#475569' } },
        axisLabel: { color: '#94a3b8' },
        splitLine: { lineStyle: { color: '#374151' } }
      },
      series: [
        {
          name: 'Actual',
          type: 'bar',
          data: selectedData.map(d => ({
            value: d.current,
            itemStyle: { color: d.color }
          })),
          barWidth: '30%',
          animation: isAnimating,
          animationDuration: 1500,
          animationEasing: 'bounceOut'
        },
        {
          name: getComparisonLabel(),
          type: 'bar',
          data: selectedData.map(d => ({
            value: getComparisonValue(d),
            itemStyle: { 
              color: d.color,
              opacity: 0.6
            }
          })),
          barWidth: '30%',
          animation: isAnimating,
          animationDuration: 1500,
          animationDelay: 300,
          animationEasing: 'bounceOut'
        }
      ]
    };
  };

  const currentLevel = drillDownLevels[currentDrillLevel];

  return (
    <div className="space-y-6">
      {/* Header with Controls */}
      <motion.div 
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Herramientas de Comparación Avanzada</h2>
            <p className="text-slate-300">Análisis comparativo multi-dimensional con drill-down inteligente</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
            Nivel: {currentLevel.name}
          </Badge>
          
          <Button
            onClick={startAnimation}
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Zap className="w-4 h-4 mr-2" />
            Animar
          </Button>
        </div>
      </motion.div>

      {/* Drill-down Navigation */}
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {drillDownLevels.map((level, index) => (
          <motion.button
            key={level.id}
            onClick={() => setCurrentDrillLevel(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              currentDrillLevel === index
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-slate-300 hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {level.name}
            {level.data.length > 0 && (
              <Badge className="ml-2 bg-white/20 text-xs">
                {level.data.length}
              </Badge>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Comparison Mode Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { key: 'period', label: 'vs Período Anterior', icon: Calendar, desc: 'Comparar con datos históricos' },
          { key: 'benchmark', label: 'vs Benchmark', icon: Target, desc: 'Comparar con estándares del mercado' },
          { key: 'target', label: 'vs Objetivos', icon: Award, desc: 'Comparar con metas establecidas' }
        ].map((mode) => (
          <motion.div
            key={mode.key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`cursor-pointer ${
              comparisonMode === mode.key ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setComparisonMode(mode.key as any)}
          >
            <Card className={`glass-dark-premium transition-all duration-300 ${
              comparisonMode === mode.key ? 'bg-blue-500/20 border-blue-500/30' : 'hover:bg-white/15'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    comparisonMode === mode.key 
                      ? 'bg-blue-500' 
                      : 'bg-slate-600'
                  }`}>
                    <mode.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-semibold">{mode.label}</h3>
                </div>
                <p className="text-slate-400 text-sm">{mode.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Metrics Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass-dark-premium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Seleccionar Métricas
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  onClick={() => setSelectedMetrics(comparisonData.map(d => d.id))}
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Todas
                </Button>
                <Button
                  onClick={() => setSelectedMetrics([])}
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Ninguna
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {currentLevel.data.map((metric) => {
                const isSelected = selectedMetrics.includes(metric.id);
                const change = ((metric.current - getComparisonValue(metric)) / getComparisonValue(metric)) * 100;
                
                return (
                  <motion.div
                    key={metric.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer p-3 rounded-lg border-2 transition-all ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-500/20' 
                        : 'border-white/20 bg-white/5 hover:border-white/40'
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedMetrics(prev => prev.filter(id => id !== metric.id));
                      } else {
                        setSelectedMetrics(prev => [...prev, metric.id]);
                      }
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="w-3 h-3 rounded-full mx-auto mb-2"
                        style={{ backgroundColor: metric.color }}
                      />
                      <h4 className="text-white text-sm font-medium mb-1">{metric.label}</h4>
                      <div className="text-xs text-slate-400 mb-1">
                        {metric.unit === '$' ? `$${(metric.current / 1000).toFixed(0)}K` : `${metric.current}${metric.unit}`}
                      </div>
                      <div className={`text-xs font-semibold ${
                        change > 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {change > 0 ? '+' : ''}{change.toFixed(1)}%
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Time Range Control */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="glass-dark-premium">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Rango Temporal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-slate-400">
                <span>Mes {timeRange[0]}</span>
                <span>Mes {timeRange[1]}</span>
              </div>
              <Slider
                value={timeRange}
                onValueChange={setTimeRange}
                min={1}
                max={12}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>Enero</span>
                <span>Diciembre</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Multi-Series Trend Chart */}
        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Card className="glass-dark-premium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2">
                  <LineChart className="w-5 h-5" />
                  Tendencias Temporales
                </CardTitle>
                <div className="flex gap-2">
                  {selectedMetrics.map(metricId => {
                    const metric = comparisonData.find(d => d.id === metricId);
                    return (
                      <button
                        key={metricId}
                        onClick={() => setZoomedMetric(zoomedMetric === metricId ? null : metricId)}
                        className={`w-4 h-4 rounded-full border-2 ${
                          zoomedMetric === metricId ? 'border-white' : 'border-white/30'
                        }`}
                        style={{ backgroundColor: metric?.color }}
                      />
                    );
                  })}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                {selectedMetrics.length > 0 ? (
                  <ReactECharts 
                    option={getMultiSeriesChartOptions()} 
                    style={{ height: '100%', width: '100%' }}
                    theme="dark"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    Selecciona métricas para visualizar
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Comparison Bar Chart */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.0 }}
        >
          <Card className="glass-dark-premium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Comparación {getComparisonLabel()}
                </CardTitle>
                <Button
                  onClick={() => setAnimationSpeed(animationSpeed === 1 ? 0.5 : 1)}
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  {animationSpeed === 1 ? 'Lento' : 'Rápido'}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                {selectedMetrics.length > 0 ? (
                  <ReactECharts 
                    option={getComparisonChartOptions()} 
                    style={{ height: '100%', width: '100%' }}
                    theme="dark"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    Selecciona métricas para comparar
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Time Comparison Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Card className="glass-dark-premium">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Resumen Comparativo Temporal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {timeComparisons.map((comparison, index) => (
                <motion.div
                  key={comparison.period}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h4 className="text-white font-semibold mb-2">{comparison.period}</h4>
                  <div className="text-2xl font-bold text-white mb-1">
                    ${(comparison.value / 1000000).toFixed(1)}M
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {comparison.status === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    ) : comparison.status === 'down' ? (
                      <TrendingDown className="w-4 h-4 text-red-400" />
                    ) : (
                      <ArrowLeftRight className="w-4 h-4 text-slate-400" />
                    )}
                    <span className={`text-sm font-semibold ${
                      comparison.status === 'up' ? 'text-green-400' : 
                      comparison.status === 'down' ? 'text-red-400' : 
                      'text-slate-400'
                    }`}>
                      {comparison.change > 0 ? '+' : ''}{comparison.change}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
          <Download className="w-4 h-4 mr-2" />
          Exportar Comparación
        </Button>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Share2 className="w-4 h-4 mr-2" />
          Compartir Análisis
        </Button>
        <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
          <Bookmark className="w-4 h-4 mr-2" />
          Guardar Vista
        </Button>
        <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
          <Brain className="w-4 h-4 mr-2" />
          Análisis IA
        </Button>
      </motion.div>
    </div>
  );
}