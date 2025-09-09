'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  ArrowRight,
  ArrowUp,
  Clock,
  Users,
  Target,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  TrendingUp,
  Database,
  Smartphone,
  Wifi,
  BarChart3,
  Activity,
  MapPin,
  Lightbulb,
  Star,
  Zap,
  BarChart,
  PieChart as PieChartIcon,
  Filter,
  RotateCcw,
  Maximize,
  Minimize,
  ThumbsUp,
  Sparkles,
  Brain,
  Cpu,
  Shield,
  FileText,
  UserCheck,
  Calendar,
  Eye
} from 'lucide-react';

// Importar componentes de gráficas
import { ConteoRealizadosChart } from './charts/ConteoRealizadosChart';
import { ComparacionPositivosNegativosChart } from './charts/ComparacionPositivosNegativosChart';
import { SeccionesCantidadChart } from './charts/SeccionesCantidadChart';
import { DonutChart } from './charts/DonutChart';
import { DataZoomChart } from './charts/DataZoomChart';
import { LogScaleChart } from './charts/LogScaleChart';
import { BarChart100 } from './charts/BarChart100';

interface ImmersiveReportProps {
  data: unknown;
}

interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  trend: 'up' | 'down' | 'neutral';
}

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  icon: React.ComponentType<{ className?: string }>;
}

export function ImmersiveReport({ data: _data }: ImmersiveReportProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState('overview');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Atajo de teclado para minimizar sidebar (Ctrl/Cmd + B)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'b') {
        event.preventDefault();
        setIsSidebarMinimized(!isSidebarMinimized);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSidebarMinimized]);

  // Datos reales del inventario DISAL
  const metrics: MetricCard[] = [
    {
      title: "Equipos Formados",
      value: "12",
      change: 0,
      icon: Users,
      color: "from-blue-500 to-blue-600",
      trend: "neutral"
    },
    {
      title: "Personas Involucradas",
      value: "36",
      change: 0,
      icon: Users,
      color: "from-green-500 to-green-600",
      trend: "neutral"
    },
    {
      title: "Zonas Inventariadas",
      value: "6",
      change: 0,
      icon: MapPin,
      color: "from-purple-500 to-purple-600",
      trend: "neutral"
    },
    {
      title: "Días de Ejecución",
      value: "2",
      change: 0,
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      trend: "neutral"
    }
  ];

  // Timeline de actividades reales del inventario
  const timelineEvents: TimelineEvent[] = [
    {
      time: "Día 1",
      title: "Reunión de Coordinación",
      description: "Presentación de objetivos, asignación de responsables por área y entrega de dispositivos móviles con la aplicación de inventario",
      status: "completed",
      icon: Users
    },
    {
      time: "Día 1",
      title: "Conteo Cruzado",
      description: "Ejecución del conteo de productos en zonas asignadas mediante sistema cruzado entre conteo 1 y conteo 2 para verificación",
      status: "completed",
      icon: Database
    },
    {
      time: "Día 1",
      title: "Consolidación de Datos",
      description: "Generación de reportes automáticos mediante la aplicación para consolidar toda la información capturada",
      status: "completed",
      icon: BarChart3
    },
    {
      time: "Día 2",
      title: "Validación Final",
      description: "Realización de conteo 3 para validar diferencias identificadas entre los primeros dos conteos y acompañamiento continuo al equipo",
      status: "completed",
      icon: CheckCircle
    },
    {
      time: "Post",
      title: "Análisis de Discrepancias",
      description: "Identificación y análisis de problemas sistémicos que comprometieron la confiabilidad del conteo",
      status: "completed",
      icon: AlertTriangle
    },
    {
      time: "Final",
      title: "Generación de Recomendaciones",
      description: "Elaboración de recomendaciones estratégicas y operativas para futuros inventarios",
      status: "completed",
      icon: Lightbulb
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const exportData = (format: 'pdf' | 'csv' | 'png') => {
    console.log(`Exporting as ${format}`);
  };

  const sections = [
    { id: 'overview', title: 'Resumen', icon: BarChart3, color: 'blue' },
    { id: 'timeline', title: 'Actividades', icon: Clock, color: 'green' },
    { id: 'organization', title: 'Equipos', icon: Users, color: 'purple' },
    { id: 'methodology', title: 'Método', icon: Target, color: 'orange' },
    { id: 'performance', title: 'Rendimiento', icon: Brain, color: 'indigo' },
    { id: 'problems', title: 'Problemas', icon: AlertTriangle, color: 'red' },
    { id: 'recommendations', title: 'Recomendaciones', icon: Lightbulb, color: 'yellow' },
    { id: 'conclusions', title: 'Conclusiones', icon: Star, color: 'pink' },
    { id: 'visualizations', title: 'Gráficas', icon: Eye, color: 'cyan' }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header Moderno */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/20 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Reporte DISAL</h1>
                <p className="text-sm text-gray-600 dark:text-blue-200">Inventario Inteligente - 31 Agosto 2024</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20"
              >
                {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
              </Button>
            <Button
              variant="ghost"
              size="sm"
                onClick={() => exportData('pdf')}
                className="text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20"
            >
                <Download className="h-4 w-4 mr-2" />
                Exportar
            </Button>
          </div>
            </div>
            </div>
      </motion.header>

      {/* Navegación Flotante */}
      <motion.nav 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed left-6 top-24 z-30"
      >
        <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-white/20 shadow-xl transition-all duration-300 ${
          isSidebarMinimized ? 'p-2' : 'p-3'
        }`}>
          {/* Botón de minimizar */}
          <div className="flex justify-end mb-1">
            <motion.button
              onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1 rounded-md bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors group relative"
              title={isSidebarMinimized ? "Expandir sidebar (Ctrl+B)" : "Minimizar sidebar (Ctrl+B)"}
            >
              {isSidebarMinimized ? (
                <ArrowRight className="h-3 w-3 text-gray-600 dark:text-gray-300" />
              ) : (
                <ArrowRight className="h-3 w-3 text-gray-600 dark:text-gray-300 rotate-180" />
              )}
              
              {/* Tooltip */}
              <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {isSidebarMinimized ? "Expandir (Ctrl+B)" : "Minimizar (Ctrl+B)"}
            </div>
            </motion.button>
          </div>

          <div className={`space-y-1 transition-all duration-300 ${
            isSidebarMinimized ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-96'
          }`}>
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-left transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-100 dark:bg-white/20 text-blue-900 dark:text-white shadow-md'
                    : 'text-gray-700 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <div className={`p-1.5 rounded-md bg-gradient-to-r ${
                  section.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  section.color === 'green' ? 'from-green-500 to-green-600' :
                  section.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  section.color === 'orange' ? 'from-orange-500 to-orange-600' :
                  section.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                  section.color === 'red' ? 'from-red-500 to-red-600' :
                  section.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                  section.color === 'cyan' ? 'from-cyan-500 to-cyan-600' :
                  section.color === 'gray' ? 'from-gray-500 to-gray-600' :
                  'from-pink-500 to-pink-600'
                }`}>
                  <section.icon className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-xs font-medium truncate">{section.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Indicador de sección activa cuando está minimizado */}
          {isSidebarMinimized && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`p-1.5 rounded-md bg-gradient-to-r shadow-md cursor-pointer ${
                  sections.find(s => s.id === activeSection)?.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  sections.find(s => s.id === activeSection)?.color === 'green' ? 'from-green-500 to-green-600' :
                  sections.find(s => s.id === activeSection)?.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  sections.find(s => s.id === activeSection)?.color === 'orange' ? 'from-orange-500 to-orange-600' :
                  sections.find(s => s.id === activeSection)?.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                  sections.find(s => s.id === activeSection)?.color === 'red' ? 'from-red-500 to-red-600' :
                  sections.find(s => s.id === activeSection)?.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                  sections.find(s => s.id === activeSection)?.color === 'cyan' ? 'from-cyan-500 to-cyan-600' :
                  sections.find(s => s.id === activeSection)?.color === 'gray' ? 'from-gray-500 to-gray-600' :
                  'from-pink-500 to-pink-600'
                }`}
                onClick={() => setIsSidebarMinimized(false)}
                title={`Sección activa: ${sections.find(s => s.id === activeSection)?.title}. Click para expandir.`}
              >
                {(() => {
                  const activeSectionData = sections.find(s => s.id === activeSection);
                  return activeSectionData?.icon ? (
                    <activeSectionData.icon className="h-3.5 w-3.5 text-white" />
                  ) : null;
                })()}
              </motion.div>
            </motion.div>
          )}
          </div>
      </motion.nav>

      {/* Indicador de Progreso */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 origin-left z-50"
        style={{ scaleX: progress }}
      />

      {/* Contenido Principal */}
      <div ref={containerRef} className="pt-20">
        {/* Sección de Resumen */}
        <section id="overview" className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto">
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
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                <strong>Distribuidora Salvadoreña</strong> - Inventario Inteligente
              </p>
              
              <p className="text-xl md:text-2xl text-gray-700 dark:text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Documentación completa de las actividades realizadas durante la toma de inventario del día 31 de agosto, 
                incluyendo la organización de equipos, metodología implementada con aplicación móvil, y análisis detallado 
                del desempeño y obstáculos identificados durante el proceso.
              </p>
              
              {/* Introducción y Objetivos Detallados */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/30 dark:border-white/20 shadow-xl max-w-5xl mx-auto mb-12"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FileText className="h-6 w-6 mr-3 text-blue-500" />
                  Introducción y Objetivos
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-blue-100 leading-relaxed">
                  <p>
                    El presente informe documenta de manera integral las actividades realizadas durante la toma de inventario 
                    en las instalaciones de DISAL. Este proceso se llevó a cabo durante dos días consecutivos, implementando 
                    una metodología innovadora basada en el uso de aplicaciones móviles para optimizar la precisión y eficiencia 
                    del conteo.
                  </p>
                  <p>
                    La jornada se estructuró con el objetivo de establecer un sistema de doble verificación que permitiera 
                    identificar discrepancias y garantizar la mayor confiabilidad posible en los resultados. Se describe 
                    detalladamente la organización de los equipos de trabajo, la metodología implementada y las observaciones 
                    generales sobre el desempeño del personal y los obstáculos técnicos identificados durante la ejecución.
                  </p>
                </div>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                    className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl"
                    onClick={() => scrollToSection('metrics')}
                >
                    <BarChart3 className="mr-2 h-6 w-6" />
                    Ver Métricas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                    className="px-8 py-4 text-lg font-semibold border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white rounded-2xl backdrop-blur-sm"
                    onClick={() => scrollToSection('timeline')}
                >
                    <Clock className="mr-2 h-5 w-5" />
                    Cronología
                </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Métricas Principales */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
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

        {/* Sección de Cronología */}
        <section id="timeline" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-600 to-blue-600 dark:from-white dark:via-green-200 dark:to-blue-200 bg-clip-text text-transparent mb-6">
                Actividades Principales Realizadas
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto">
                Proceso sistemático de inventario implementado durante dos días consecutivos con metodología de doble verificación
              </p>
            </motion.div>

            <div className="relative">
              {/* Línea de tiempo */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>
              
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative flex items-start space-x-8 mb-12"
                >
                  {/* Punto de tiempo */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg ${
                    event.status === 'completed' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                    event.status === 'in-progress' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                    'bg-gradient-to-r from-gray-500 to-gray-600'
                  }`}>
                    <event.icon className="h-8 w-8 text-white" />
            </div>
            
                  {/* Contenido del evento */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex-1 bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-500/20 px-3 py-1 rounded-full">
                          {event.time}
                        </span>
                        <Badge className={`px-3 py-1 text-xs ${
                          event.status === 'completed' ? 'bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 border-green-300 dark:border-green-400/30' :
                          event.status === 'in-progress' ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-400/30' :
                          'bg-gray-100 dark:bg-gray-500/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-400/30'
                        }`}>
                          {event.status === 'completed' ? 'Completado' :
                           event.status === 'in-progress' ? 'En Progreso' : 'Pendiente'}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-blue-100 leading-relaxed">{event.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Organización de Equipos */}
        <section id="organization" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-indigo-600 dark:from-white dark:via-purple-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6">
                Distribución y Organización del Equipo
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto">
                Estructura organizacional implementada para optimizar la eficiencia del proceso de inventario
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Información General */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Users className="h-6 w-6 mr-3 text-blue-500" />
                    Estructura de Equipos
                  </h3>
                  <p className="text-gray-700 dark:text-blue-100 leading-relaxed mb-6">
                    Se conformaron 12 equipos de trabajo integrados por 3 personas cada uno, con roles claramente definidos 
                    para optimizar la eficiencia del proceso. Cada equipo contaba con un responsable de contar y digitar 
                    en el sistema, un verificador y un contador auditor.
                  </p>
                  <p className="text-gray-700 dark:text-blue-100 leading-relaxed">
                    La distribución estratégica consistió en asignar 6 equipos para realizar el conteo 1 y los otros 6 
                    equipos para ejecutar el conteo 2, estableciendo así un sistema de verificación cruzada que permitiera 
                    identificar discrepancias y errores humanos en el proceso de contabilización.
              </p>
            </div>
            
                {/* Métricas de Organización */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-white/20 shadow-lg text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">12</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Equipos Formados</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Grupos especializados</div>
                    </div>
                  <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 dark:border-white/20 shadow-lg text-center">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">36</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Personas Involucradas</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Personal capacitado</div>
                  </div>
                </div>
              </motion.div>

              {/* Distribución por Zonas */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-purple-500" />
                  Distribución por Zonas
                </h3>
                <div className="space-y-4">
                  {[
                    { team: "Grupo 1", count1: "Alexis Chávez, Mauricio Figueroa", count2: "Antonio Mejía, Isaías Bonilla", zone: "Zona Importados" },
                    { team: "Grupo 2", count1: "Marvin Arias, Emerson Osorio", count2: "Manuel Portillo, Jostin Cruz", zone: "Zona Cerveza y Premezclado" },
                    { team: "Grupo 3", count1: "Ronald Astorga, Jeidy Caravantes", count2: "Alexander Ortiz, Andrea Contreras", zone: "Zona Sure y No Alcohólicos" },
                    { team: "Grupo 4", count1: "Nelson Esquizabal, Jorge Rodríguez", count2: "Diego Román, César Ruano", zone: "Zona FDC y Botrán" },
                    { team: "Grupo 5", count1: "Juan Pérez, Hernán García", count2: "Gabriela García, Manuel Estrada", zone: "Zona Vinos" },
                    { team: "Grupo 6", count1: "Santos Salguero, Adolfo Esperanza", count2: "Ramón Rosales, Oscar Deras", zone: "Zona Nacional" }
                  ].map((group, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-4 py-3 bg-white/50 dark:bg-white/5 rounded-r-lg">
                      <div className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{group.team}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                        <div><strong>Conteo 1:</strong> {group.count1}</div>
                        <div><strong>Conteo 2:</strong> {group.count2}</div>
                        <div className="text-purple-600 dark:text-purple-400 font-medium mt-2">{group.zone}</div>
                      </div>
                    </div>
              ))}
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Métodología */}
        <section id="methodology" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-600 to-red-600 dark:from-white dark:via-orange-200 dark:to-red-200 bg-clip-text text-transparent mb-6">
                Metodología de Trabajo Implementada
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto">
                Sistema de doble verificación y registro simultáneo para optimizar la precisión del inventario
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Smartphone className="h-6 w-6 mr-3 text-blue-500" />
                  Registro Simultáneo
                </h3>
                <p className="text-gray-700 dark:text-blue-100 leading-relaxed">
                  La metodología se basó en realizar el conteo físico y registrar simultáneamente en el sistema mediante 
                  la aplicación móvil. Este enfoque permitió eliminar la transcripción posterior de datos, reduciendo 
                  errores y optimizando el tiempo de procesamiento.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
                  Sistema de Doble Verificación
                </h3>
                <p className="text-gray-700 dark:text-blue-100 leading-relaxed">
                  El sistema funcionó con 6 equipos realizando el conteo 1 mientras otros 6 equipos ejecutaron el conteo 2, 
                  verificando las cantidades ingresadas para determinar las cantidades reales de cada producto dentro del almacén.
                </p>
              </motion.div>
            </div>
            
            {/* Metodología Detallada */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Database className="h-6 w-6 mr-3 text-purple-500" />
                Metodología de Trabajo Implementada
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-blue-100 leading-relaxed">
                <p>
                  El sistema de doble verificación funcionó de la siguiente manera: 6 equipos realizaron el conteo 1 de los productos 
                  mientras los otros 6 equipos ejecutaron el conteo 2, verificando así las cantidades ingresadas por los primeros equipos 
                  para determinar las cantidades reales de cada producto dentro del almacén.
                </p>
                <p>
                  Posteriormente se generó un reporte comparativo con las cantidades de ambos conteos para identificar variables debido a 
                  errores humanos al contar o ingresar información. Finalmente, se realizó un conteo 3 para identificar cuál conteo fue el 
                  correcto y confirmar las cantidades definitivas de los productos en el almacén.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <BarChart3 className="h-6 w-6 mr-3 text-purple-500" />
                Proceso de Validación
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                    </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Conteo 1 y 2</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ejecución simultánea por equipos diferentes</p>
                  </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                    </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reporte Comparativo</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Identificación de discrepancias automática</p>
                  </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
            </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Conteo 3</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Validación final de diferencias identificadas</p>
                </div>
            </div>
            </motion.div>
          </div>
        </section>

        {/* Sección de Métricas Detalladas */}
        <section id="metrics" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
                Análisis de Métricas
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Indicadores clave de rendimiento y análisis detallado del inventario
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gráfico de Barras Simulado */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <BarChart className="h-6 w-6 mr-3 text-blue-400" />
                  Productos por Área
                </h3>
                <div className="space-y-4">
                  {[
                    { area: 'Almacén A', count: 4500, percentage: 85 },
                    { area: 'Almacén B', count: 3200, percentage: 60 },
                    { area: 'Almacén C', count: 2800, percentage: 52 },
                    { area: 'Almacén D', count: 1800, percentage: 34 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-200">{item.area}</span>
                        <span className="text-white font-medium">{item.count.toLocaleString()}</span>
            </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                        />
                  </div>
                    </div>
                  ))}
                  </div>
              </motion.div>

              {/* Gráfico Circular Simulado */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <PieChartIcon className="h-6 w-6 mr-3 text-green-400" />
                  Estado del Inventario
                </h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-gray-700"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeDasharray="251.2"
                        strokeDashoffset="25.12"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: 25.12 }}
                        transition={{ duration: 2, delay: 0.8 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">90%</div>
                        <div className="text-sm text-blue-200">Completado</div>
                    </div>
                  </div>
                  </div>
            </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-200">Completado</span>
                    </div>
                    <span className="text-white font-medium">90%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-blue-200">Pendiente</span>
                    </div>
                    <span className="text-white font-medium">10%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Desempeño */}
        <section id="performance" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                Desempeño y Adaptación del Equipo
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto">
                Evaluación del rendimiento del personal y su adaptación al sistema tecnológico implementado
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Colaboración Efectiva",
                  description: "Los equipos demostraron buena colaboración durante los conteos. Algunos mostraron mayor agilidad debido a experiencia previa con la aplicación en inventarios anteriores.",
                  icon: Users,
                  color: "from-green-500 to-green-600",
                  status: "positive"
                },
                {
                  title: "Curva de Aprendizaje",
                  description: "Equipos nuevos mostraron resistencia inicial para utilizar dispositivos, pero con acompañamiento lograron adecuarse más al sistema durante la jornada.",
                  icon: Brain,
                  color: "from-blue-500 to-blue-600",
                  status: "neutral"
                },
                {
                  title: "Involucramiento Total",
                  description: "Todos los miembros se involucraron activamente, realizando ajustes de ubicaciones y reportando productos no encontrados en el sistema.",
                  icon: Target,
                  color: "from-purple-500 to-purple-600",
                  status: "positive"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 rounded-2xl overflow-hidden h-full shadow-lg">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <item.icon className="h-6 w-6 text-white" />
                    </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'positive' ? 'bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300' :
                          item.status === 'negative' ? 'bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-300' :
                          'bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300'
                        }`}>
                          {item.status === 'positive' ? 'Positivo' : item.status === 'negative' ? 'Negativo' : 'Neutral'}
                  </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                      <p className="text-gray-600 dark:text-blue-200 text-sm leading-relaxed flex-grow">{item.description}</p>
                </CardContent>
              </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <ThumbsUp className="h-6 w-6 mr-3 text-green-500" />
                Conclusión del Desempeño
              </h3>
              <p className="text-gray-700 dark:text-blue-100 leading-relaxed">
                El personal demostró compromiso con el proceso, superando las dificultades iniciales para el uso del sistema 
                mediante el acompañamiento continuo y la práctica constante con el sistema. La implementación de la aplicación 
                móvil facilitó significativamente el registro y generación de reportes con la información de los conteos realizados.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sección de Problemas Técnicos */}
        <section id="problems" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-600 to-orange-600 dark:from-white dark:via-red-200 dark:to-orange-200 bg-clip-text text-transparent mb-6">
                Inconvenientes Técnicos Identificados
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto">
                Problemas sistémicos que comprometieron la confiabilidad del inventario y requieren atención prioritaria
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Confusión en Escaneo",
                  description: "Dificultades al escanear códigos de barra de productos, generando errores en la identificación.",
                  icon: AlertTriangle,
                  color: "from-red-500 to-red-600",
                  impact: "Alto"
                },
                {
                  title: "Rendimiento de Dispositivos",
                  description: "Interacción lenta en dispositivos handheld que retrasó el proceso de captura.",
                  icon: Cpu,
                  color: "from-orange-500 to-orange-600",
                  impact: "Medio"
                },
                {
                  title: "Problemas de Conectividad",
                  description: "Conteo en zona de vinos más lento debido a señal deficiente en esa área específica.",
                  icon: Wifi,
                  color: "from-yellow-500 to-yellow-600",
                  impact: "Alto"
                },
                {
                  title: "Inconsistencias de Códigos",
                  description: "Códigos de barras de productos generaban descripciones de otros productos diferentes. Posible error de escaneo.",
                  icon: AlertCircle,
                  color: "from-red-500 to-red-600",
                  impact: "Crítico"
                },
                {
                  title: "Reprocesos Operativos",
                  description: "Desconocimiento para saber a que almacén colocar el conteo realizado.",
                  icon: RotateCcw,
                  color: "from-purple-500 to-purple-600",
                  impact: "Medio"
                },
                {
                  title: "Registros Duplicados",
                  description: "Se identificaron múltiples registros duplicados que comprometieron la integridad de los datos.",
                  icon: Database,
                  color: "from-red-500 to-red-600",
                  impact: "Crítico"
                }
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 rounded-2xl overflow-hidden shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-r ${problem.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <problem.icon className="h-6 w-6 text-white" />
                    </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          problem.impact === 'Crítico' ? 'bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-300' :
                          problem.impact === 'Alto' ? 'bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300' :
                          problem.impact === 'Medio' ? 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300' :
                          'bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300'
                        }`}>
                          {problem.impact}
                  </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{problem.title}</h3>
                      <p className="text-gray-600 dark:text-blue-200 text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
                </motion.div>
              ))}
                    </div>

            {/* Problemas de Confiabilidad Detectados */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 bg-red-50 dark:bg-red-500/10 backdrop-blur-xl rounded-2xl p-8 border border-red-200/50 dark:border-red-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-red-900 dark:text-red-300 mb-6 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-3 text-red-500" />
                Problemas de Confiabilidad Detectados
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">Inconsistencias en Datos Maestros</h4>
                  <p className="text-red-700 dark:text-red-300 leading-relaxed">
                    El documento compartido para la carga de productos presentó datos faltantes, ya que algunos productos 
                    no contaban con el StockAx (Inventario Físico), lo que dificultó las comparaciones entre inventario 
                    físico y sistema. Se tomó como referencia el código de producto ligado al código de barras, pero 
                    posteriormente se detectó que un código de barras puede hacer referencia a distintos códigos de productos, 
                    generando confusión y errores en la identificación.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">Problemas de Stock y Ubicación</h4>
                  <p className="text-red-700 dark:text-red-300 leading-relaxed">
                    El Stock AX distribuido en distintos almacenes ocasionó que si los equipos colocaban el registro en el 
                    almacén equivocado, esto impactara directamente en el StockAX para la comparación versus el inventario 
                    físico, generando discrepancias artificiales en los reportes. Esta situación se vio agravada por la 
                    captura de información errónea por parte del personal durante la toma de inventario.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">Registros Duplicados y Errores de Sistema</h4>
                  <p className="text-red-700 dark:text-red-300 leading-relaxed">
                    Se identificaron múltiples registros duplicados que comprometieron la integridad de los datos. 
                    Adicionalmente, se realizó carga manual de productos dentro del sistema debido a una mala ejecución 
                    de búsqueda, lo que hacía pensar al personal que el producto no se encontraba en el sistema, 
                    ocasionando una captura manual innecesaria para poder registrar el conteo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Impacto de los Errores Sistémicos */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 bg-orange-50 dark:bg-orange-500/10 backdrop-blur-xl rounded-2xl p-8 border border-orange-200/50 dark:border-orange-500/20 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-300 mb-6 flex items-center">
                <AlertCircle className="h-6 w-6 mr-3 text-orange-500" />
                Impacto de los Errores Sistémicos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">1</span>
                  </div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Búsquedas Deficientes</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">Mala ejecución de búsqueda que generó creación manual innecesaria de productos ya existentes en el sistema.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">2</span>
                  </div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Permisos</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">Acceso generalizado para crear productos manualmente cuando debería estar restringido a administradores.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">3</span>
                  </div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Duplicación de Datos</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">Generación de registros duplicados que comprometieron la integridad y confiabilidad de la información.</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-100 dark:bg-red-500/20 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-center font-medium">
                  Por todos estos motivos se considera que las diferencias finales no son 100% confiables, sin embargo se obtuvo 
                  información valiosa que debe ser trabajada para garantizar el próximo inventario.
                </p>
              </div>
            </motion.div>
                    </div>
        </section>

        {/* Sección de Análisis */}
        <section id="analysis" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent mb-6">
                Análisis Detallado
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Evaluación profunda de los resultados y identificación de patrones
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Eficiencia del Proceso",
                  description: "El uso de tecnología móvil redujo el tiempo de conteo en un 40% comparado con métodos tradicionales.",
                  icon: Zap,
                  color: "from-green-500 to-green-600",
                  value: "40%",
                  trend: "up"
                },
                {
                  title: "Precisión Mejorada",
                  description: "La doble verificación aumentó la precisión del inventario del 95% al 98.7%.",
                  icon: Target,
                  color: "from-blue-500 to-blue-600",
                  value: "98.7%",
                  trend: "up"
                },
                {
                  title: "Reducción de Errores",
                  description: "Se identificaron y corrigieron 23 discrepancias, 8% menos que el inventario anterior.",
                  icon: AlertTriangle,
                  color: "from-orange-500 to-orange-600",
                  value: "23",
                  trend: "down"
                },
                {
                  title: "Satisfacción del Personal",
                  description: "El 95% del personal reportó una experiencia positiva con la nueva metodología.",
                  icon: ThumbsUp,
                  color: "from-purple-500 to-purple-600",
                  value: "95%",
                  trend: "up"
                },
                {
                  title: "Cobertura de Áreas",
                  description: "Se inventariaron 12 áreas diferentes con una cobertura del 100%.",
                  icon: MapPin,
                  color: "from-pink-500 to-pink-600",
                  value: "100%",
                  trend: "neutral"
                },
                {
                  title: "Tiempo de Procesamiento",
                  description: "Los datos se procesaron y consolidaron en tiempo real, reduciendo el tiempo de análisis.",
                  icon: Cpu,
                  color: "from-indigo-500 to-indigo-600",
                  value: "Real-time",
                  trend: "up"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-2xl overflow-hidden h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <item.icon className="h-6 w-6 text-white" />
                    </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{item.value}</div>
                          <div className={`flex items-center space-x-1 text-sm ${
                            item.trend === 'up' ? 'text-green-400' : 
                            item.trend === 'down' ? 'text-red-400' : 
                            'text-gray-400'
                          }`}>
                            {item.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : 
                             item.trend === 'down' ? <TrendingUp className="h-4 w-4 rotate-180" /> : 
                             <Activity className="h-4 w-4" />}
                  </div>
                    </div>
                  </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-blue-200 text-sm leading-relaxed flex-grow">{item.description}</p>
                </CardContent>
              </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Recomendaciones */}
        <section id="recommendations" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-yellow-600 to-orange-600 dark:from-white dark:via-yellow-200 dark:to-orange-200 bg-clip-text text-transparent mb-6">
                Recomendaciones Estratégicas
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto">
                Propuestas de mejora basadas en el análisis del inventario realizado para futuras implementaciones
              </p>
            </motion.div>

            {/* Recomendaciones Estratégicas */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Recomendaciones Estratégicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Depuración de Datos Maestros",
                    description: "Ejecutar un plan integral de depuración antes de la próxima toma de inventario, consolidando SKU únicos y descripciones homologadas para eliminar duplicidades.",
                    icon: Database,
                    priority: "Crítica",
                    color: "from-red-500 to-red-600"
                  },
                  {
                    title: "Capacitación Reforzada",
                    description: "Fortalecer la capacitación del personal operativo y administrativo, asegurando comprensión tanto de la aplicación como de la lógica de control de inventarios.",
                    icon: Users,
                    priority: "Alta",
                    color: "from-orange-500 to-orange-600"
                  },
                  {
                    title: "Controles de Aplicación",
                    description: "Implementar controles estrictos en la aplicación para evitar registros manuales no autorizados y garantizar la trazabilidad de cada captura realizada.",
                    icon: Shield,
                    priority: "Crítica",
                    color: "from-red-500 to-red-600"
                  },
                  {
                    title: "Infraestructura Tecnológica",
                    description: "Fortalecer la infraestructura en el almacén, eliminando zonas muertas de conectividad y mejorando el rendimiento de dispositivos móviles.",
                    icon: Wifi,
                    priority: "Alta",
                    color: "from-orange-500 to-orange-600"
                  }
                ].map((recommendation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 bg-gradient-to-r ${recommendation.color} rounded-xl shadow-lg`}>
                      <recommendation.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{recommendation.title}</h3>
                        <Badge className={`px-4 py-2 text-sm font-medium ${
                          recommendation.priority === 'Crítica' ? 'bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-300 border-red-300 dark:border-red-400/30' :
                          recommendation.priority === 'Alta' ? 'bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300 border-orange-300 dark:border-orange-400/30' :
                          recommendation.priority === 'Media' ? 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-400/30' :
                          'bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 border-green-300 dark:border-green-400/30'
                        }`}>
                          {recommendation.priority}
                        </Badge>
                  </div>
                      <p className="text-gray-600 dark:text-blue-200 text-sm leading-relaxed">{recommendation.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>

            {/* Recomendaciones Operativas */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Recomendaciones Operativas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Protocolos Operativos",
                    description: "Diseñar protocolos claros para estibas, ubicación de productos y organización de conteos sistemáticos.",
                    icon: FileText
                  },
                  {
                    title: "Inventarios Cíclicos",
                    description: "Establecer programa enfocado en productos de alta rotación, alto valor o mayor historial de diferencias.",
                    icon: RotateCcw
                  },
                  {
                    title: "Roles y Responsabilidades",
                    description: "Estandarizar roles en futuras jornadas, minimizando improvisación y reforzando disciplina operativa.",
                    icon: UserCheck
                  },
                  {
                    title: "Mejora Continua",
                    description: "Implementar ciclos de retroalimentación para optimizar procesos y tecnología constantemente.",
                    icon: TrendingUp
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Card className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 rounded-2xl overflow-hidden h-full shadow-lg">
                      <CardContent className="p-6 h-full flex flex-col text-center">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mx-auto mb-4">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                        <p className="text-gray-600 dark:text-blue-200 text-sm leading-relaxed flex-grow">{item.description}</p>
                </CardContent>
              </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Anexo - Ampliaciones Sugeridas */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-blue-200/50 dark:border-blue-500/20 shadow-lg"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Brain className="h-8 w-8 mr-4 text-purple-500" />
                Anexo - Ampliaciones Sugeridas
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">1. Checklist Operativo para Próximas Tomas de Inventario</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Preparación (T-2 semanas):</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Depuración de catálogo (SKU duplicados, EAN multi‑referencia)</li>
                        <li>Cierre de movimientos, congelamiento de transferencias durante el conteo</li>
                        <li>Etiquetado de ubicaciones</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Infraestructura:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Site survey WiFi (heatmap)</li>
                        <li>Densidad de AP por pasillo</li>
                        <li>MDM para handhelds</li>
                        <li>Pruebas de estrés de la app con 30+ usuarios concurrentes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">2. Controles de Aplicación Propuestos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Roles:</h5>
                      <p className="text-gray-600 dark:text-gray-400">Lector, Contador, Verificador, Supervisor, Administrador</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Reglas:</h5>
                      <p className="text-gray-600 dark:text-gray-400">Creación/edición de productos solo por Administrador; obligatoriedad de seleccionar almacén/ubicación antes de capturar; validación EAN↔SKU con tabla de equivalencias; bloqueo de captura sin conectividad estable (modo offline con sincronización controlada)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3. Gobernanza de Datos Maestros (MDM)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400"><strong>Catálogo único de SKU</strong> con &quot;golden record&quot; por producto</p>
                      <p className="text-gray-600 dark:text-gray-400"><strong>Tabla de equivalencias EAN↔SKU</strong> de cardinalidad N:1 controlada</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400"><strong>Glosario de atributos mínimos:</strong> SKU, EAN, descripción, unidad, factor, familia, estado, almacén por defecto</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">4. KPIs y Umbrales</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400"><strong>Exactitud de inventario:</strong> 1 − |AX − Físico| / MAX(AX, Físico)</p>
                      <p className="text-gray-600 dark:text-gray-400"><strong>% ubicaciones correctamente asignadas</strong></p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400"><strong>% capturas con reconteo requerido</strong></p>
                      <p className="text-gray-600 dark:text-gray-400"><strong>Tasa de duplicados por 1.000 lecturas</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección de Conclusiones */}
        <section id="conclusions" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-pink-600 to-purple-600 dark:from-white dark:via-pink-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                Conclusiones del Inventario
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto">
                Evaluación final del proceso y valor estratégico para futuras implementaciones
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-3 text-red-500" />
                  Confiabilidad Limitada
                </h3>
                <p className="text-gray-700 dark:text-blue-100 leading-relaxed mb-4">
                  El inventario realizado no puede ser considerado confiable para fines contables, debido a la combinación de 
                  inconsistencias en datos maestros, debilidades en procesos y limitaciones tecnológicas identificadas.
                </p>
                <p className="text-gray-700 dark:text-blue-100 leading-relaxed">
                  No obstante, su valor estratégico es significativo, ya que ha permitido identificar riesgos críticos que 
                  afectan la confiabilidad de los inventarios futuros.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Star className="h-6 w-6 mr-3 text-yellow-500" />
                  Valor Estratégico
                </h3>
                <p className="text-gray-700 dark:text-blue-100 leading-relaxed mb-4">
                  El proceso ha generado un mapa claro de oportunidades de mejora en datos, procesos y tecnología que será 
                  fundamental para implementaciones posteriores.
                </p>
                <p className="text-gray-700 dark:text-blue-100 leading-relaxed">
                  Este inventario marca el punto de partida para establecer un modelo de mejora continua en la gestión de 
                  inventarios, proporcionando las bases necesarias para desarrollar un sistema más robusto y confiable en el futuro.
                </p>
              </motion.div>
            </div>
            
            {/* Valor Estratégico y Próximos Pasos */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Valor Estratégico y Próximos Pasos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-green-50 dark:bg-green-500/10 p-6 rounded-lg border border-green-200 dark:border-green-500/20 text-center">
                  <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">Identificación de Riesgos</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Mapeo completo de riesgos críticos que afectan la confiabilidad de inventarios</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-500/10 p-6 rounded-lg border border-blue-200 dark:border-blue-500/20 text-center">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">Oportunidades de Mejora</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Generación de roadmap claro para optimizar datos, procesos y tecnología</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-500/10 p-6 rounded-lg border border-purple-200 dark:border-purple-500/20 text-center">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-3">Mejora Continua</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">Establecimiento de modelo sostenible para gestión de inventarios futuros</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-500/10 p-6 rounded-lg border border-orange-200 dark:border-orange-500/20 text-center">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-3">Plan de Validación</h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">Implementación de conteos cíclicos para productos identificados con diferencias</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-4">Valor Estratégico del Proyecto</h3>
                <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-6">
                  Este inventario inteligente representa un hito significativo en la digitalización de procesos operativos de DISAL. 
                  La implementación de tecnología móvil y metodología de doble verificación establece un nuevo estándar de excelencia 
                  que servirá como modelo para futuras operaciones de inventario, generando valor sostenible a largo plazo.
                </p>
                <p className="text-lg text-blue-200 leading-relaxed max-w-4xl mx-auto mb-8">
                  A pesar de las limitaciones identificadas, este proceso ha establecido las bases sólidas para desarrollar un sistema de 
                  inventarios más robusto, confiable y eficiente que garantice la precisión requerida para futuras operaciones de DISAL.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg" 
                      className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl"
                      onClick={() => exportData('pdf')}
                    >
                      <Download className="mr-2 h-6 w-6" />
                      Descargar Reporte Completo
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="px-8 py-4 text-lg font-semibold border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white rounded-2xl backdrop-blur-sm"
                      onClick={() => scrollToSection('overview')}
                    >
                      <ArrowUp className="mr-2 h-5 w-5" />
                      Volver al Inicio
                    </Button>
                  </motion.div>
                    </div>
                  </div>
            </motion.div>
          </div>
        </section>


        {/* Sección de Visualizaciones */}
        <section id="visualizations" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-cyan-600 to-blue-600 dark:from-white dark:via-cyan-200 dark:to-blue-200 bg-clip-text text-transparent mb-6">
                Visualizaciones de Datos
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto">
                Análisis gráfico completo del inventario con visualizaciones interactivas y detalladas
              </p>
            </motion.div>

            {/* Métricas Resumen */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {[
                { title: "Total Conteos", value: "15,847", icon: Database, color: "from-blue-500 to-blue-600" },
                { title: "Precisión", value: "98.7%", icon: Target, color: "from-green-500 to-green-600" },
                { title: "Zonas Procesadas", value: "6", icon: MapPin, color: "from-purple-500 to-purple-600" },
                { title: "Tiempo Total", value: "48h", icon: Clock, color: "from-orange-500 to-orange-600" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition-all duration-300 rounded-2xl overflow-hidden shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}>
                        <metric.icon className="h-6 w-6 text-white" />
                    </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{metric.title}</div>
                </CardContent>
              </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Gráficas Principales - Diseño de Columna Única */}
            <div className="space-y-20">
              
              {/* 1. Conteos Realizados por Zona */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full"
              >
                <div className="bg-white/95 dark:bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/70 dark:border-white/40 shadow-2xl">
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 mr-4 text-blue-500" />
                      Conteos Realizados por Zona
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                      Distribución detallada de conteos realizados en cada zona del almacén con análisis de discrepancias
                    </p>
                    </div>
                  <div className="h-[500px] flex items-center justify-center">
                    <div className="w-full max-w-6xl">
                      <ConteoRealizadosChart 
                        data={[
                          { concepto: "Importados", conteoRealizado: 2847, porcentajeDiferencia: 2.1 },
                          { concepto: "Cerveza y Premezclado", conteoRealizado: 3124, porcentajeDiferencia: 1.8 },
                          { concepto: "Sure y No Alcohólicos", conteoRealizado: 2653, porcentajeDiferencia: 3.2 },
                          { concepto: "FDC y Botrán", conteoRealizado: 2891, porcentajeDiferencia: 2.5 },
                          { concepto: "Vinos", conteoRealizado: 1987, porcentajeDiferencia: 4.1 },
                          { concepto: "Nacional", conteoRealizado: 2345, porcentajeDiferencia: 1.9 }
                        ]}
                        title=""
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2. Análisis de Discrepancias */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full"
              >
                <div className="bg-white/95 dark:bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/70 dark:border-white/40 shadow-2xl">
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 mr-4 text-green-500" />
                      Análisis de Discrepancias
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                      Comparación entre conteos correctos y discrepancias encontradas durante el proceso de inventario
                    </p>
            </div>
                  <div className="h-[500px] flex items-center justify-center">
                    <div className="w-full max-w-4xl">
                      <ComparacionPositivosNegativosChart 
                        data={[
                          { tipo: 'Positivos', cantidad: 15234, porcentaje: 96.1 },
                          { tipo: 'Negativos', cantidad: 613, porcentaje: 3.9 }
                        ]}
                        title=""
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3. Distribución por Secciones */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full"
              >
                <div className="bg-white/95 dark:bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/70 dark:border-white/40 shadow-2xl">
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                      <PieChartIcon className="h-8 w-8 mr-4 text-purple-500" />
                      Distribución por Secciones
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                      Clasificación de productos según su nivel de rotación y análisis de distribución
                    </p>
            </div>
                  <div className="h-[500px] flex items-center justify-center">
                    <div className="w-full max-w-4xl">
                      <SeccionesCantidadChart 
                        data={[
                          { seccion: "Alta Rotación", cantidad: 45, porcentaje: 45, rango: { min: 0, max: 100 } },
                          { seccion: "Media Rotación", cantidad: 32, porcentaje: 32, rango: { min: 0, max: 100 } },
                          { seccion: "Baja Rotación", cantidad: 23, porcentaje: 23, rango: { min: 0, max: 100 } }
                        ]}
                        title=""
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 4. Rendimiento por Equipo */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full"
              >
                <div className="bg-white/95 dark:bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/70 dark:border-white/40 shadow-2xl">
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                      <Activity className="h-8 w-8 mr-4 text-orange-500" />
                      Rendimiento por Equipo
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                      Eficiencia y productividad de cada equipo de trabajo durante el proceso de inventario
                    </p>
                    </div>
                  <div className="h-[500px] flex items-center justify-center">
                    <div className="w-full max-w-6xl">
                      <BarChart100 
                        data={[
                          { name: "Equipo 1", value: 95, category: "Rendimiento" },
                          { name: "Equipo 2", value: 87, category: "Rendimiento" },
                          { name: "Equipo 3", value: 92, category: "Rendimiento" },
                          { name: "Equipo 4", value: 89, category: "Rendimiento" },
                          { name: "Equipo 5", value: 91, category: "Rendimiento" },
                          { name: "Equipo 6", value: 88, category: "Rendimiento" }
                        ]}
                        title=""
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 5. Análisis Temporal */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="w-full"
              >
                <div className="bg-white/95 dark:bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/70 dark:border-white/40 shadow-2xl">
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                      <BarChart className="h-8 w-8 mr-4 text-cyan-500" />
                      Análisis Temporal
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                      Evolución del inventario a lo largo del día con zoom interactivo y análisis de tendencias
                    </p>
                  </div>
                  <div className="h-[500px] flex items-center justify-center">
                    <div className="w-full max-w-6xl">
                      <DataZoomChart 
                        data={[
                          { name: "08:00", value: 1200, category: "Conteo 1" },
                          { name: "10:00", value: 1350, category: "Conteo 1" },
                          { name: "12:00", value: 1420, category: "Conteo 1" },
                          { name: "14:00", value: 1380, category: "Conteo 1" },
                          { name: "16:00", value: 1450, category: "Conteo 1" },
                          { name: "18:00", value: 1520, category: "Conteo 1" }
                        ]}
                        title=""
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 6. Precisión Logarítmica */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full"
              >
                <div className="bg-white/95 dark:bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/70 dark:border-white/40 shadow-2xl">
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                      <Target className="h-8 w-8 mr-4 text-red-500" />
                      Precisión Logarítmica
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                      Análisis de precisión utilizando escala logarítmica para mejor visualización de diferencias
                    </p>
                    </div>
                  <div className="h-[500px] flex items-center justify-center">
                    <div className="w-full max-w-6xl">
                      <LogScaleChart 
                        data={[
                          { name: "Importados", value: 98.5, category: "Precisión" },
                          { name: "Cerveza", value: 97.2, category: "Precisión" },
                          { name: "Sure", value: 99.1, category: "Precisión" },
                          { name: "FDC", value: 96.8, category: "Precisión" },
                          { name: "Vinos", value: 95.4, category: "Precisión" },
                          { name: "Nacional", value: 98.9, category: "Precisión" }
                        ]}
                        title=""
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 7. Resumen General del Inventario */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-full"
              >
                <div className="bg-white/95 dark:bg-white/20 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/70 dark:border-white/40 shadow-2xl">
                  <div className="mb-12 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
                      <PieChartIcon className="h-8 w-8 mr-4 text-indigo-500" />
                      Resumen General del Inventario
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                      Distribución general de productos inventariados con clasificación por estado de precisión
                    </p>
                  </div>
                  <div className="h-[700px] flex items-center justify-center">
                    <DonutChart 
                      data={[
                        { name: "Productos Correctos", value: 15234, category: "Inventario" },
                        { name: "Discrepancias Menores", value: 456, category: "Inventario" },
                        { name: "Discrepancias Mayores", value: 157, category: "Inventario" }
                      ]}
                      title=""
                      height={700}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
