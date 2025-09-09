'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  FileText,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Target,
  DollarSign,
  Users,
  BarChart3,
  PieChart,
  Activity,
  Star,
  Award,
  Zap,
  Brain,
  Eye,
  BookOpen,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Crown,
  Trophy,
  Flame
} from 'lucide-react';
import ReactECharts from 'echarts-for-react';

interface StoryChapter {
  id: string;
  title: string;
  subtitle: string;
  duration: number;
  content: string;
  keyMetrics: Array<{
    label: string;
    value: string;
    change: number;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  visualData: any;
  insights: string[];
  narration: string;
  actionItems: string[];
  priority: 'high' | 'medium' | 'low';
}

interface ExecutiveSummary {
  title: string;
  overview: string;
  keyWins: string[];
  criticalAlerts: string[];
  strategicRecommendations: string[];
  roi: number;
  marketPosition: string;
}

export function ExecutiveStorytellingDashboard() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedView, setSelectedView] = useState<'story' | 'summary' | 'deep-dive'>('summary');
  const [autoAdvance, setAutoAdvance] = useState(true);

  const executiveSummary: ExecutiveSummary = {
    title: "Rendimiento Excepcional Q4 2024",
    overview: "Trimestre extraordinario con crecimiento del 28.5% en ingresos, optimización de costos del 12%, y satisfacción del cliente alcanzando niveles récord del 96.8%. La estrategia de transformación digital ha generado resultados superiores a las proyecciones.",
    keyWins: [
      "Superación de meta trimestral en 12.3% ($847K adicionales)",
      "Reducción de costos operativos en $180K anuales",
      "Implementación exitosa de automatización en 3 procesos clave",
      "Lanzamiento de productos premium generó 35% más margen"
    ],
    criticalAlerts: [
      "Ligera tendencia a la baja en métricas de calidad (-2.1%)",
      "Aumento de 8% en tiempo de respuesta al cliente",
      "Stock crítico en 3 productos de alta rotación"
    ],
    strategicRecommendations: [
      "Acelerar expansión a mercados internacionales Q1 2025",
      "Invertir en IA predictiva para optimización de inventario",
      "Establecer centro de excelencia en experiencia cliente",
      "Desarrollar línea de productos sustentables"
    ],
    roi: 342,
    marketPosition: "Líderes en 2 de 4 categorías principales"
  };

  const storyChapters: StoryChapter[] = [
    {
      id: 'performance-overview',
      title: 'Rendimiento Excepcional',
      subtitle: 'Un trimestre que redefine nuestro potencial',
      duration: 45,
      content: 'Este trimestre hemos logrado resultados extraordinarios que no solo superan nuestras metas, sino que establecen un nuevo estándar de excelencia operativa.',
      keyMetrics: [
        { label: 'Ingresos', value: '$2.84M', change: 28.5, icon: DollarSign },
        { label: 'Rentabilidad', value: '34.2%', change: 15.8, icon: TrendingUp },
        { label: 'Satisfacción', value: '96.8%', change: 8.2, icon: Star },
      ],
      visualData: {
        type: 'performance',
        data: [2200000, 2350000, 2500000, 2650000, 2750000, 2847392]
      },
      insights: [
        'Crecimiento sostenido durante 6 meses consecutivos',
        'Mejor trimestre en la historia de la compañía',
        'Superación de competidores principales en 3 métricas clave'
      ],
      narration: 'Los números hablan por sí solos: hemos alcanzado niveles de rendimiento que confirman la efectividad de nuestra estrategia transformacional.',
      actionItems: [
        'Replicar mejores prácticas en todas las unidades',
        'Documentar procesos de éxito para escalamiento',
        'Preparar plan de expansión para Q1 2025'
      ],
      priority: 'high'
    },
    {
      id: 'cost-optimization',
      title: 'Optimización Inteligente',
      subtitle: 'Eficiencia que impulsa la rentabilidad',
      duration: 35,
      content: 'La implementación de automatización y optimización de procesos ha resultado en ahorros significativos sin comprometer la calidad.',
      keyMetrics: [
        { label: 'Reducción Costos', value: '$180K', change: -12.4, icon: Target },
        { label: 'Eficiencia', value: '94.2%', change: 8.7, icon: Zap },
        { label: 'Automatización', value: '67%', change: 23.1, icon: Brain },
      ],
      visualData: {
        type: 'costs',
        data: [1450000, 1380000, 1320000, 1290000, 1265000, 1247320]
      },
      insights: [
        'Automatización de 3 procesos críticos completada',
        'ROI de implementación alcanzado en 4 meses',
        'Capacidad liberada para proyectos estratégicos'
      ],
      narration: 'La inversión en tecnología está demostrando su valor: cada dólar invertido en automatización genera $3.40 en ahorros.',
      actionItems: [
        'Expandir automatización a 2 procesos adicionales',
        'Entrenar equipo en nuevas herramientas digitales',
        'Establecer métricas de eficiencia continua'
      ],
      priority: 'high'
    },
    {
      id: 'market-position',
      title: 'Posición Dominante',
      subtitle: 'Liderazgo consolidado en el mercado',
      duration: 40,
      content: 'Hemos fortalecido nuestra posición competitiva, convirtiéndonos en referentes del sector en innovación y satisfacción del cliente.',
      keyMetrics: [
        { label: 'Market Share', value: '23.4%', change: 5.7, icon: Trophy },
        { label: 'NPS Score', value: '78', change: 12.3, icon: Users },
        { label: 'Brand Value', value: '$45M', change: 18.9, icon: Crown },
      ],
      visualData: {
        type: 'market',
        data: [15.2, 17.8, 19.1, 20.5, 22.1, 23.4]
      },
      insights: [
        'Líderes en 2 de 4 categorías principales',
        'Reconocimiento como "Marca del Año" en sector',
        'Expansión exitosa a 3 nuevos mercados'
      ],
      narration: 'Nuestra estrategia de diferenciación está funcionando: somos la opción preferida en el 78% de decisiones de compra.',
      actionItems: [
        'Capitalizar momentum para expansión internacional',
        'Fortalecer presencia en categorías emergentes',
        'Desarrollar alianzas estratégicas'
      ],
      priority: 'medium'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && autoAdvance) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (currentChapter < storyChapters.length - 1) {
              setCurrentChapter(current => current + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          return prev + (100 / (storyChapters[currentChapter].duration * 10));
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentChapter, autoAdvance, storyChapters]);

  const getChartOptions = (chapter: StoryChapter) => {
    const baseOptions = {
      tooltip: { trigger: 'axis' },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: { 
        type: 'category', 
        data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        axisLine: { lineStyle: { color: '#64748b' } },
        axisTick: { lineStyle: { color: '#64748b' } },
        axisLabel: { color: '#94a3b8' }
      },
      yAxis: { 
        type: 'value',
        axisLine: { lineStyle: { color: '#64748b' } },
        axisTick: { lineStyle: { color: '#64748b' } },
        axisLabel: { color: '#94a3b8' },
        splitLine: { lineStyle: { color: '#374151' } }
      },
      backgroundColor: 'transparent'
    };

    if (chapter.visualData.type === 'performance') {
      return {
        ...baseOptions,
        series: [{
          data: chapter.visualData.data,
          type: 'line',
          smooth: true,
          lineStyle: { color: '#10b981', width: 4 },
          itemStyle: { color: '#10b981' },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(16, 185, 129, 0.3)' },
                { offset: 1, color: 'rgba(16, 185, 129, 0.05)' }
              ]
            }
          },
          symbol: 'circle',
          symbolSize: 8
        }]
      };
    }

    return {
      ...baseOptions,
      series: [{
        data: chapter.visualData.data,
        type: 'bar',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#3b82f6' },
              { offset: 1, color: '#1e40af' }
            ]
          }
        }
      }]
    };
  };

  const currentChapterData = storyChapters[currentChapter];

  if (selectedView === 'summary') {
    return (
      <div className="space-y-6">
        {/* Executive Summary Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-white mb-2">{executiveSummary.title}</h1>
              <div className="flex items-center gap-4">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
                  ROI: {executiveSummary.roi}%
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  {executiveSummary.marketPosition}
                </Badge>
              </div>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {executiveSummary.overview}
          </p>
        </motion.div>

        {/* Key Metrics Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Crecimiento Ingresos', value: '28.5%', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
            { label: 'Reducción Costos', value: '$180K', icon: Target, color: 'from-blue-500 to-indigo-600' },
            { label: 'Satisfacción Cliente', value: '96.8%', icon: Star, color: 'from-purple-500 to-violet-600' },
            { label: 'Eficiencia Operativa', value: '94.2%', icon: Zap, color: 'from-orange-500 to-red-600' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-dark-premium hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 animate-floating`}>
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 animate-counter-up">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Wins and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Key Wins */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="glass-dark-premium">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Logros Destacados</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {executiveSummary.keyWins.map((win, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{win}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Critical Alerts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="glass-dark-premium">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Alertas Críticas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {executiveSummary.criticalAlerts.map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-start gap-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg"
                    >
                      <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{alert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Strategic Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="glass-dark-premium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Recomendaciones Estratégicas</CardTitle>
                </div>
                <Button 
                  onClick={() => setSelectedView('story')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Ver Historia Completa
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {executiveSummary.strategicRecommendations.map((recommendation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                          {recommendation}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                            Q1 2025
                          </Badge>
                          <ArrowRight className="w-3 h-3 text-purple-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (selectedView === 'story') {
    return (
      <div className="space-y-6">
        {/* Story Controls */}
        <motion.div 
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => setSelectedView('summary')}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Resumen
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Historia Ejecutiva</h2>
                <p className="text-slate-400 text-sm">Narrativa interactiva de rendimiento</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              size="sm"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <SkipBack className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              size="sm"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            
            <Button
              onClick={() => setCurrentChapter(Math.min(storyChapters.length - 1, currentChapter + 1))}
              disabled={currentChapter === storyChapters.length - 1}
              size="sm"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-between text-sm text-slate-400">
            <span>Capítulo {currentChapter + 1} de {storyChapters.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-slate-500">
            {storyChapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => { setCurrentChapter(index); setProgress(0); }}
                className={`px-2 py-1 rounded transition-colors ${
                  index === currentChapter 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : 'hover:bg-white/10 text-slate-400'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Current Chapter */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-dark-premium">
              <CardHeader>
                <div className="text-center">
                  <Badge className={`mb-4 ${
                    currentChapterData.priority === 'high' ? 'bg-red-500/20 text-red-300 border-red-500/30' :
                    currentChapterData.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                    'bg-green-500/20 text-green-300 border-green-500/30'
                  }`}>
                    Prioridad {currentChapterData.priority.toUpperCase()}
                  </Badge>
                  <CardTitle className="text-3xl font-bold text-white mb-2">
                    {currentChapterData.title}
                  </CardTitle>
                  <p className="text-xl text-slate-300">{currentChapterData.subtitle}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Narration */}
                <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-lg text-slate-200 leading-relaxed italic">
                    &quot;{currentChapterData.narration}&quot;
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentChapterData.keyMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <metric.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-sm text-slate-400 mb-1">{metric.label}</div>
                      <Badge className={`text-xs ${
                        metric.change > 0 ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
                      }`}>
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Visualization */}
                <div className="h-80">
                  <ReactECharts 
                    option={getChartOptions(currentChapterData)} 
                    style={{ height: '100%', width: '100%' }}
                    theme="dark"
                  />
                </div>

                {/* Insights and Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Insights Clave
                    </h4>
                    <div className="space-y-2">
                      {currentChapterData.insights.map((insight, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg">
                          <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      Acciones Requeridas
                    </h4>
                    <div className="space-y-2">
                      {currentChapterData.actionItems.map((action, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-purple-500/10 rounded-lg">
                          <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <span className="text-slate-300 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return null;
}