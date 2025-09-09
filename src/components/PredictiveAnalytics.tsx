'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import ReactECharts from 'echarts-for-react';
import { 
  TrendingUp, 
  TrendingDown, 
  Brain,
  Target,
  AlertTriangle,
  CheckCircle,
  Zap,
  Calendar,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  DollarSign,
  Package,
  Users,
  ArrowUp,
  ArrowDown,
  Sparkles,
  Eye,
  Lightbulb,
  Shield,
  Clock,
  Cpu
} from 'lucide-react';

interface PredictionData {
  id: string;
  title: string;
  currentValue: number;
  predictedValue: number;
  confidence: number;
  timeframe: string;
  change: number;
  changeType: 'increase' | 'decrease';
  risk: 'low' | 'medium' | 'high';
  recommendations: string[];
  historicalData: number[];
  forecastData: number[];
}

interface SeasonalityPattern {
  month: string;
  index: number;
  trend: 'up' | 'down' | 'stable';
  impact: number;
}

export function PredictiveAnalytics() {
  const [selectedPrediction, setSelectedPrediction] = useState<string>('inventory');
  const [timeHorizon, setTimeHorizon] = useState<'1m' | '3m' | '6m' | '1y'>('6m');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const predictions: PredictionData[] = [
    {
      id: 'inventory',
      title: 'Rotación de Inventario',
      currentValue: 12.3,
      predictedValue: 15.8,
      confidence: 87,
      timeframe: '6 meses',
      change: 28.5,
      changeType: 'increase',
      risk: 'low',
      recommendations: [
        'Aumentar órdenes de productos de alta rotación en 25%',
        'Reducir stock de productos estacionales fuera de temporada',
        'Implementar sistema de reposición automática'
      ],
      historicalData: [8.2, 9.1, 10.5, 11.2, 11.8, 12.3],
      forecastData: [12.8, 13.5, 14.2, 14.8, 15.3, 15.8]
    },
    {
      id: 'revenue',
      title: 'Ingresos Mensuales',
      currentValue: 2847392,
      predictedValue: 3420000,
      confidence: 82,
      timeframe: '6 meses',
      change: 20.1,
      changeType: 'increase',
      risk: 'medium',
      recommendations: [
        'Expandir canales de distribución digital',
        'Lanzar campaña de productos premium',
        'Optimizar precios en categorías de alto margen'
      ],
      historicalData: [2200000, 2350000, 2500000, 2650000, 2750000, 2847392],
      forecastData: [2950000, 3100000, 3200000, 3300000, 3380000, 3420000]
    },
    {
      id: 'costs',
      title: 'Control de Costos',
      currentValue: 1247320,
      predictedValue: 1180000,
      confidence: 91,
      timeframe: '6 meses',
      change: -5.4,
      changeType: 'decrease',
      risk: 'low',
      recommendations: [
        'Continuar optimización de procesos actuales',
        'Implementar automatización en áreas clave',
        'Renegociar contratos con proveedores principales'
      ],
      historicalData: [1450000, 1380000, 1320000, 1290000, 1265000, 1247320],
      forecastData: [1230000, 1215000, 1200000, 1190000, 1185000, 1180000]
    }
  ];

  const seasonalityData: SeasonalityPattern[] = [
    { month: 'Ene', index: 0.85, trend: 'down', impact: -15 },
    { month: 'Feb', index: 0.92, trend: 'up', impact: -8 },
    { month: 'Mar', index: 1.15, trend: 'up', impact: 15 },
    { month: 'Apr', index: 1.08, trend: 'stable', impact: 8 },
    { month: 'May', index: 1.25, trend: 'up', impact: 25 },
    { month: 'Jun', index: 1.12, trend: 'down', impact: 12 },
    { month: 'Jul', index: 0.95, trend: 'down', impact: -5 },
    { month: 'Ago', index: 0.88, trend: 'down', impact: -12 },
    { month: 'Sep', index: 1.05, trend: 'up', impact: 5 },
    { month: 'Oct', index: 1.18, trend: 'up', impact: 18 },
    { month: 'Nov', index: 1.32, trend: 'up', impact: 32 },
    { month: 'Dic', index: 1.45, trend: 'up', impact: 45 }
  ];

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  const selectedData = predictions.find(p => p.id === selectedPrediction);

  const getForecastChartOptions = () => {
    if (!selectedData) return {};

    const allData = [...selectedData.historicalData, ...selectedData.forecastData];
    const labels = Array.from({ length: 12 }, (_, i) => `Mes ${i + 1}`);

    return {
      tooltip: { trigger: 'axis' },
      legend: { data: ['Histórico', 'Predicción', 'Confianza'] },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { type: 'category', data: labels },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Histórico',
          type: 'line',
          data: [...selectedData.historicalData, null, null, null, null, null, null],
          lineStyle: { color: '#3b82f6', width: 3 },
          itemStyle: { color: '#3b82f6' },
          symbol: 'circle',
          symbolSize: 8
        },
        {
          name: 'Predicción',
          type: 'line',
          data: [null, null, null, null, null, null, ...selectedData.forecastData],
          lineStyle: { color: '#10b981', width: 3, type: 'dashed' },
          itemStyle: { color: '#10b981' },
          symbol: 'diamond',
          symbolSize: 8
        },
        {
          name: 'Confianza',
          type: 'line',
          data: allData.map(val => val * 0.1),
          lineStyle: { color: '#f59e0b', width: 2, opacity: 0.6 },
          itemStyle: { color: '#f59e0b' },
          symbol: 'none',
          areaStyle: { opacity: 0.2, color: '#f59e0b' }
        }
      ],
      animation: true,
      animationDuration: 1000
    };
  };

  const getSeasonalityChartOptions = () => ({
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: seasonalityData.map(d => d.month) },
    yAxis: { type: 'value', name: 'Índice Estacional' },
    series: [{
      data: seasonalityData.map(d => ({
        value: d.index,
        itemStyle: {
          color: d.trend === 'up' ? '#10b981' : d.trend === 'down' ? '#ef4444' : '#6b7280'
        }
      })),
      type: 'bar',
      showBackground: true,
      backgroundStyle: { color: 'rgba(180, 180, 180, 0.2)' }
    }],
    animation: true
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div 
        className="flex flex-col lg:flex-row lg:items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4 mb-4 lg:mb-0">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Análisis Predictivo</h2>
            <p className="text-slate-300">Forecasting con modelos LLM propios e insights estratégicos</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-white/10 rounded-lg p-1">
            {[
              { key: '1m', label: '1M' },
              { key: '3m', label: '3M' },
              { key: '6m', label: '6M' },
              { key: '1y', label: '1A' }
            ].map((period) => (
              <button
                key={period.key}
                onClick={() => setTimeHorizon(period.key as any)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  timeHorizon === period.key
                    ? 'bg-white text-slate-900'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
          
          <Button 
            onClick={runAnalysis} 
            disabled={isAnalyzing}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {isAnalyzing ? (
              <Cpu className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 mr-2" />
            )}
            Analizar
          </Button>
        </div>
      </motion.div>

      {/* Prediction Cards */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {predictions.map((prediction, index) => (
          <motion.div
            key={prediction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`cursor-pointer ${
              selectedPrediction === prediction.id ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => setSelectedPrediction(prediction.id)}
          >
            <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-lg">{prediction.title}</CardTitle>
                  <Badge 
                    variant={prediction.risk === 'low' ? 'default' : 'destructive'}
                    className="bg-white/20 border-white/30 text-white"
                  >
                    {prediction.confidence}% confianza
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {typeof prediction.currentValue === 'number' && prediction.currentValue > 1000000
                        ? `$${(prediction.currentValue / 1000000).toFixed(1)}M`
                        : typeof prediction.currentValue === 'number' && prediction.currentValue > 1000
                        ? `$${(prediction.currentValue / 1000).toFixed(0)}K`
                        : prediction.currentValue
                      }
                    </div>
                    <div className="text-sm text-slate-400">Actual</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-semibold text-green-400">
                      {typeof prediction.predictedValue === 'number' && prediction.predictedValue > 1000000
                        ? `$${(prediction.predictedValue / 1000000).toFixed(1)}M`
                        : typeof prediction.predictedValue === 'number' && prediction.predictedValue > 1000
                        ? `$${(prediction.predictedValue / 1000).toFixed(0)}K`
                        : prediction.predictedValue
                      }
                    </div>
                    <div className="text-sm text-slate-400">Predicción {prediction.timeframe}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {prediction.changeType === 'increase' ? (
                    <TrendingUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`font-semibold ${
                    prediction.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {prediction.change > 0 ? '+' : ''}{prediction.change}%
                  </span>
                  <span className="text-slate-400">vs actual</span>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Confianza</span>
                    <span className="text-white">{prediction.confidence}%</span>
                  </div>
                  <Progress value={prediction.confidence} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Forecast Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-dark-premium">
            <CardHeader>
              <div className="flex items-center gap-3">
                <LineChart className="w-5 h-5 text-purple-400" />
                <CardTitle className="text-white">Proyección Temporal</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {selectedData && (
                <div className="h-80">
                  <ReactECharts 
                    option={getForecastChartOptions()} 
                    style={{ height: '100%', width: '100%' }}
                    theme="dark"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Seasonality Analysis */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass-dark-premium">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-white">Patrones Estacionales</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ReactECharts 
                  option={getSeasonalityChartOptions()} 
                  style={{ height: '100%', width: '100%' }}
                  theme="dark"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Recommendations */}
      {selectedData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="glass-dark-premium">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <CardTitle className="text-white">Recomendaciones Estratégicas</CardTitle>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  LLM-Powered
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {selectedData.recommendations.map((recommendation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{recommendation}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs border-green-500/30 text-green-300">
                          Impacto Alto
                        </Badge>
                        <Badge variant="outline" className="text-xs border-blue-500/30 text-blue-300">
                          {timeHorizon} implementación
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}