'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  MapPin, 
  Clock, 
  Database, 
  Target, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Activity,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface MetricCard {
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  trend: 'up' | 'down' | 'neutral';
}

interface OverviewSectionProps {
  metrics: MetricCard[];
}

export function OverviewSection({ metrics }: OverviewSectionProps) {
  return (
    <section id="overview" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-800 dark:text-blue-200 border border-blue-400/30 rounded-full mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Reporte de Inventario Inteligente
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight mb-8">
            Reporte de Inventario
            <br />
            <span className="text-5xl md:text-7xl">DISAL</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Documentación completa de las actividades realizadas durante la toma de inventario del día 31 de agosto, 
            incluyendo la organización de equipos, metodología implementada con aplicación móvil, y análisis detallado 
            del desempeño y obstáculos identificados durante el proceso.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                <span>Ver Análisis Completo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-xl text-gray-900 dark:text-white font-semibold rounded-2xl border border-gray-200/50 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300">
                Descargar Reporte
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Métricas Principales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 rounded-2xl overflow-hidden shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${metric.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <metric.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className={`flex items-center space-x-1 text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600 dark:text-green-400' :
                      metric.trend === 'down' ? 'text-red-600 dark:text-red-400' :
                      'text-gray-500 dark:text-gray-400'
                    }`}>
                      {metric.trend === 'up' ? <TrendingUp className="h-4 w-4" /> :
                       metric.trend === 'down' ? <TrendingUp className="h-4 w-4 rotate-180" /> :
                       <Activity className="h-4 w-4" />}
                      <span>{Math.abs(metric.change)}%</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{metric.value}</h3>
                  <p className="text-gray-600 dark:text-blue-200 text-sm">{metric.title}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
