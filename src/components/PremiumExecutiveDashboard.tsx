'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  AlertTriangle, 
  CheckCircle,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  Calendar,
  Zap,
  Brain,
  Star,
  Award,
  Activity,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Filter,
  Download,
  RefreshCw,
  Eye,
  Sparkles
} from 'lucide-react';

interface KPIMetric {
  id: string;
  title: string;
  value: string | number;
  previousValue: string | number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  target?: number;
  status: 'excellent' | 'good' | 'warning' | 'critical';
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  trend: number[];
  unit?: string;
}

interface ExecutiveInsight {
  id: string;
  type: 'opportunity' | 'risk' | 'achievement' | 'alert';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  action?: string;
  priority: number;
}

export function PremiumExecutiveDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('monthly');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedKPI, setSelectedKPI] = useState<string | null>(null);

  const kpiMetrics: KPIMetric[] = [
    {
      id: 'revenue',
      title: 'Ingresos Totales',
      value: '$2,847,392',
      previousValue: '$2,650,120',
      change: 7.4,
      changeType: 'increase',
      target: 85,
      status: 'excellent',
      icon: DollarSign,
      description: 'Crecimiento sostenido vs mes anterior',
      trend: [65, 72, 78, 85, 92, 88, 95],
      unit: '$'
    },
    {
      id: 'inventory',
      title: 'Rotación Inventario',
      value: '12.3x',
      previousValue: '10.8x',
      change: 13.9,
      changeType: 'increase',
      target: 90,
      status: 'excellent',
      icon: Package,
      description: 'Optimización en gestión de stock',
      trend: [68, 71, 75, 82, 87, 90, 94],
      unit: 'x'
    },
    {
      id: 'efficiency',
      title: 'Eficiencia Operativa',
      value: '94.2%',
      previousValue: '87.1%',
      change: 8.2,
      changeType: 'increase',
      target: 94,
      status: 'excellent',
      icon: Zap,
      description: 'Superando objetivos trimestrales',
      trend: [75, 79, 83, 87, 91, 94, 96],
      unit: '%'
    },
    {
      id: 'satisfaction',
      title: 'Satisfacción Cliente',
      value: '4.8/5',
      previousValue: '4.6/5',
      change: 4.3,
      changeType: 'increase',
      target: 96,
      status: 'excellent',
      icon: Star,
      description: 'Excelente feedback de clientes',
      trend: [85, 87, 89, 92, 94, 96, 98],
      unit: '/5'
    },
    {
      id: 'costs',
      title: 'Control de Costos',
      value: '$1,247,320',
      previousValue: '$1,384,500',
      change: -9.9,
      changeType: 'increase',
      target: 88,
      status: 'excellent',
      icon: Target,
      description: 'Reducción significativa de gastos',
      trend: [92, 89, 87, 85, 84, 82, 80],
      unit: '$'
    },
    {
      id: 'quality',
      title: 'Índice de Calidad',
      value: '98.7%',
      previousValue: '96.2%',
      change: 2.6,
      changeType: 'increase',
      target: 75,
      status: 'warning',
      icon: Award,
      description: 'Mantener estándares altos',
      trend: [70, 72, 74, 76, 75, 73, 75],
      unit: '%'
    }
  ];

  const executiveInsights: ExecutiveInsight[] = [
    {
      id: '1',
      type: 'achievement',
      title: 'Meta Trimestral Superada',
      description: 'Los ingresos han superado la meta Q4 en un 12.3%, destacando la efectividad de las nuevas estrategias.',
      impact: 'high',
      action: 'Replicar estrategias exitosas en Q1',
      priority: 1
    },
    {
      id: '2',
      type: 'opportunity',
      title: 'Optimización de Inventario',
      description: 'La rotación mejorada permite reducir costos de almacenamiento en $180K anuales.',
      impact: 'high',
      action: 'Implementar en todas las sucursales',
      priority: 2
    },
    {
      id: '3',
      type: 'alert',
      title: 'Monitoreo Calidad',
      description: 'Ligera tendencia a la baja en métricas de calidad. Requiere atención preventiva.',
      impact: 'medium',
      action: 'Revisar procesos de QA',
      priority: 3
    }
  ];

  const refreshData = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-gradient-to-r from-emerald-500 to-teal-600';
      case 'good': return 'bg-gradient-to-r from-blue-500 to-indigo-600';
      case 'warning': return 'bg-gradient-to-r from-amber-500 to-orange-600';
      case 'critical': return 'bg-gradient-to-r from-red-500 to-rose-600';
      default: return 'bg-gradient-to-r from-gray-500 to-slate-600';
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'achievement': return CheckCircle;
      case 'opportunity': return TrendingUp;
      case 'risk': return AlertTriangle;
      case 'alert': return AlertTriangle;
      default: return Activity;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'achievement': return 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30';
      case 'opportunity': return 'from-blue-500/20 to-indigo-500/20 border-blue-500/30';
      case 'risk': return 'from-red-500/20 to-rose-500/20 border-red-500/30';
      case 'alert': return 'from-amber-500/20 to-orange-500/20 border-amber-500/30';
      default: return 'from-gray-500/20 to-slate-500/20 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Ultra-Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-60 right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto space-y-12">

        {/* Ultra-Premium Executive Header */}
        <motion.div 
          className="text-center space-y-8 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Luxury Background Card */}
          <div className="relative bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-700/50 p-16 overflow-hidden">
            {/* Premium Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            </div>
            
            {/* Executive Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-sm mb-8 shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              PREMIUM EXECUTIVE DASHBOARD • CONFIDENTIAL
            </motion.div>

            {/* Main Title */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
                  <BarChart3 className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight tracking-tight text-left">
                    EXECUTIVE
                    <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                      COMMAND
                    </span>
                    <span className="block text-5xl font-light">
                      Center
                    </span>
                  </h1>
                  {/* Elegant Separator */}
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-20 h-px bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/50"></div>
                    <div className="w-20 h-px bg-gradient-to-r from-pink-400 to-indigo-400"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Executive Summary */}
            <motion.p 
              className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Strategic command center delivering 
              <span className="text-purple-400 font-semibold"> real-time insights </span>
              and 
              <span className="text-pink-400 font-semibold"> executive intelligence </span>
              for leadership decision-making
            </motion.p>
            
            {/* Premium Control Panel */}
            <motion.div 
              className="flex flex-col lg:flex-row lg:items-center justify-center gap-8 pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="flex bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
                {['weekly', 'monthly', 'quarterly'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedTimeframe(period)}
                    className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      selectedTimeframe === period
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </button>
                ))}
              </div>
              
              <Button 
                onClick={refreshData} 
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl shadow-indigo-500/25 border-0 text-white px-8 py-4 rounded-xl font-semibold tracking-wide hover:scale-105 transition-all duration-300"
              >
                <RefreshCw className={`w-5 h-5 mr-2 ${isAnimating ? 'animate-spin' : ''}`} />
                ACTUALIZAR DATOS
              </Button>
            </motion.div>

            {/* Premium Time Indicator */}
            <motion.div 
              className="flex items-center justify-center gap-3 mt-8 text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Clock className="w-4 h-4" />
              <span className="font-medium">
                Última actualización: {new Date().toLocaleDateString('es-ES', { 
                  day: 'numeric', 
                  month: 'long', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </span>
              <div className="w-px h-4 bg-slate-600"></div>
              <span className="text-sm font-medium">LIVE DATA</span>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl rotate-12 blur-sm"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-indigo-500/10 rounded-2xl -rotate-12 blur-sm"></div>
          </div>
        </motion.div>

      {/* Ultra-Premium KPIs Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {kpiMetrics.map((kpi, index) => (
          <motion.div
            key={kpi.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group cursor-pointer relative"
            onClick={() => setSelectedKPI(selectedKPI === kpi.id ? null : kpi.id)}
          >
            {/* Premium KPI Card */}
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
              {/* Status Glow Effect */}
              <div className={`absolute inset-0 ${getStatusColor(kpi.status)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute top-0 left-0 w-full h-1 ${getStatusColor(kpi.status)}`} />
              
              {/* Premium Pattern Overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
              </div>
              
              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${getStatusColor(kpi.status)} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <kpi.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold mb-1">{kpi.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{kpi.description}</p>
                    </div>
                  </div>
                  <Badge className={`${
                    kpi.changeType === 'increase' ? 'bg-emerald-600/20 text-emerald-300 border-emerald-500/30' : 'bg-red-600/20 text-red-300 border-red-500/30'
                  } px-3 py-1 rounded-full font-semibold`}>
                    {kpi.changeType === 'increase' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {kpi.change > 0 ? '+' : ''}{kpi.change}%
                  </Badge>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                      {kpi.value}
                    </div>
                    <div className="text-slate-400 font-medium">vs anterior: <span className="text-slate-300">{kpi.previousValue}</span></div>
                  </div>
                  
                  {kpi.target && (
                    <div>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="text-slate-400 font-medium">PROGRESO OBJETIVO</span>
                        <span className="text-white font-bold">{kpi.target}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          className={`h-full ${getStatusColor(kpi.status)} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${kpi.target}%` }}
                          transition={{ delay: 1.8 + index * 0.1, duration: 1 }}
                        />
                      </div>
                    </div>
                  )}

                  <AnimatePresence>
                    {selectedKPI === kpi.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-slate-700/50 pt-6 mt-6"
                      >
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400 font-medium">TENDENCIA (7 DÍAS)</span>
                          <div className="flex gap-2">
                            {kpi.trend.map((point, i) => (
                              <motion.div 
                                key={i}
                                className={`w-3 rounded-full ${getStatusColor(kpi.status)} opacity-80 shadow-sm`}
                                style={{ height: `${(point / 100) * 40}px` }}
                                initial={{ height: 0 }}
                                animate={{ height: `${(point / 100) * 40}px` }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Ultra-Premium Executive Insights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
          {/* Premium Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          </div>
          
          <div className="relative z-10 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">EXECUTIVE INSIGHTS</h2>
                <p className="text-slate-400 text-lg font-light">Strategic intelligence & critical recommendations</p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {executiveInsights.map((insight, index) => {
                const IconComponent = getInsightIcon(insight.type);
                return (
                  <motion.div
                    key={insight.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`relative p-8 rounded-2xl bg-gradient-to-r ${getInsightColor(insight.type)} border backdrop-blur-sm group cursor-pointer overflow-hidden`}
                  >
                    {/* Priority Indicator */}
                    <div className={`absolute top-0 left-0 w-2 h-full ${
                      insight.priority === 1 ? 'bg-gradient-to-b from-red-500 to-red-600' :
                      insight.priority === 2 ? 'bg-gradient-to-b from-amber-500 to-orange-600' :
                      'bg-gradient-to-b from-blue-500 to-indigo-600'
                    }`}></div>
                    
                    <div className="flex items-start gap-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                        insight.type === 'achievement' ? 'bg-gradient-to-r from-emerald-600 to-teal-600' :
                        insight.type === 'opportunity' ? 'bg-gradient-to-r from-blue-600 to-indigo-600' :
                        insight.type === 'risk' ? 'bg-gradient-to-r from-red-600 to-rose-600' :
                        'bg-gradient-to-r from-amber-600 to-orange-600'
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className="text-white font-bold text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                            {insight.title}
                          </h3>
                          <div className="flex gap-2">
                            <Badge className={`px-3 py-1 rounded-full font-semibold ${
                              insight.impact === 'high' ? 'bg-red-600/20 text-red-300 border-red-500/30' :
                              insight.impact === 'medium' ? 'bg-amber-600/20 text-amber-300 border-amber-500/30' :
                              'bg-blue-600/20 text-blue-300 border-blue-500/30'
                            }`}>
                              {insight.impact.toUpperCase()}
                            </Badge>
                            <Badge className="bg-slate-700/50 text-slate-300 border-slate-600/50 px-3 py-1 rounded-full font-semibold">
                              P{insight.priority}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed mb-4">{insight.description}</p>
                        {insight.action && (
                          <div className="flex items-center gap-3 text-lg">
                            <div className={`p-2 rounded-lg ${
                              insight.type === 'achievement' ? 'bg-emerald-600/20' :
                              insight.type === 'opportunity' ? 'bg-blue-600/20' :
                              insight.type === 'risk' ? 'bg-red-600/20' :
                              'bg-amber-600/20'
                            }`}>
                              <ArrowUpRight className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                              {insight.action}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl rotate-12 blur-sm"></div>
        </div>
      </motion.div>

      {/* Ultra-Premium Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2.8, type: "spring", stiffness: 200, damping: 10 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-50"></div>
          <Button className="relative w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl border-2 border-white/20">
            <Sparkles className="w-7 h-7 text-white" />
          </Button>
        </div>
      </motion.div>
      
      </div>
      </div>
    </div>
  );
}