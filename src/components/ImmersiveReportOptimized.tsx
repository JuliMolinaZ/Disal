'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Download, 
  Share2, 
  Bookmark, 
  Heart,
  Menu,
  X,
  ArrowRight,
  ArrowUp,
  Clock,
  Users,
  Target,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Database,
  Smartphone,
  Wifi,
  FileText,
  BarChart3,
  PieChart,
  Activity,
  MapPin,
  Shield,
  Lightbulb,
  Star,
  AlertCircle,
  Calendar,
  Zap,
  Award,
  Globe,
  Layers,
  BarChart,
  PieChart as PieChartIcon,
  LineChart,
  Eye,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  RotateCcw,
  Maximize,
  Minimize,
  Settings,
  Info,
  ExternalLink,
  Copy,
  Printer,
  Mail,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Flag,
  BookmarkCheck,
  Timer,
  RefreshCw,
  Sparkles,
  Rocket,
  Brain,
  Cpu,
  HardDrive,
  Network,
  WifiOff,
  Signal,
  Battery,
  BatteryCharging,
  Power,
  PowerOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Scan,
  QrCode,
  Camera,
  Image,
  Video,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Headphones,
  Speaker,
  Radio,
  Tv,
  Monitor,
  Laptop,
  Tablet,
  Phone,
  Watch,
  Gamepad2,
  Joystick,
  Mouse,
  Keyboard,
  MousePointer,
  Touchpad,
  Wifi as WifiIcon,
  Bluetooth,
  Usb,
  Hdmi,
  Ethernet,
  Router,
  Server,
  Cloud,
  CloudOff,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Compass,
  Navigation,
  Map,
  Globe2,
  Earth,
  Satellite,
  Plane,
  Car,
  Truck,
  Ship,
  Train,
  Bike,
  Bus,
  Motorcycle,
  Scooter,
  Skateboard,
  RollerSkate,
  Footprints,
  Route,
  Navigation2,
  Compass2,
  MapPin2,
  Locate,
  LocateFixed,
  LocateOff,
  MapPinned,
  Waypoints,
  Route2,
  Navigation3,
  Compass3,
  MapPin3,
  Locate2,
  LocateFixed2,
  LocateOff2,
  MapPinned2,
  Waypoints2,
  Route3,
  Navigation4,
  Compass4,
  MapPin4,
  Locate3,
  LocateFixed3,
  LocateOff3,
  MapPinned3,
  Waypoints3,
  Route4,
  Navigation5,
  Compass5,
  MapPin5,
  Locate4,
  LocateFixed4,
  LocateOff4,
  MapPinned4,
  Waypoints4,
  Route5,
  Navigation6,
  Compass6,
  MapPin6,
  Locate5,
  LocateFixed5,
  LocateOff5,
  MapPinned5,
  Waypoints5,
  Route6,
  Navigation7,
  Compass7,
  MapPin7,
  Locate6,
  LocateFixed6,
  LocateOff6,
  MapPinned6,
  Waypoints6,
  Route7,
  Navigation8,
  Compass8,
  MapPin8,
  Locate7,
  LocateFixed7,
  LocateOff7,
  MapPinned7,
  Waypoints7,
  Route8,
  Navigation9,
  Compass9,
  MapPin9,
  Locate8,
  LocateFixed8,
  LocateOff8,
  MapPinned8,
  Waypoints8,
  Route9,
  Navigation10,
  Compass10,
  MapPin10,
  Locate9,
  LocateFixed9,
  LocateOff9,
  MapPinned9,
  Waypoints9,
  Route10
} from 'lucide-react';

interface ImmersiveReportProps {
  data: unknown;
}

interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  icon: React.ComponentType<any>;
  color: string;
  trend: 'up' | 'down' | 'neutral';
}

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  icon: React.ComponentType<any>;
}

export function ImmersiveReportOptimized({ data }: ImmersiveReportProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Datos de ejemplo para métricas
  const metrics: MetricCard[] = [
    {
      title: "Productos Inventariados",
      value: "15,847",
      change: 12.5,
      icon: Database,
      color: "from-blue-500 to-blue-600",
      trend: "up"
    },
    {
      title: "Precisión del Conteo",
      value: "98.7%",
      change: 2.3,
      icon: Target,
      color: "from-green-500 to-green-600",
      trend: "up"
    },
    {
      title: "Tiempo Promedio",
      value: "4.2h",
      change: -15.2,
      icon: Clock,
      color: "from-purple-500 to-purple-600",
      trend: "up"
    },
    {
      title: "Discrepancias",
      value: "23",
      change: -8.1,
      icon: AlertTriangle,
      color: "from-orange-500 to-orange-600",
      trend: "down"
    }
  ];

  // Timeline de actividades
  const timelineEvents: TimelineEvent[] = [
    {
      time: "08:00",
      title: "Reunión de Coordinación",
      description: "Presentación de objetivos y asignación de equipos",
      status: "completed",
      icon: Users
    },
    {
      time: "08:30",
      title: "Distribución de Dispositivos",
      description: "Entrega de tablets con aplicación de inventario",
      status: "completed",
      icon: Smartphone
    },
    {
      time: "09:00",
      title: "Inicio de Conteo",
      description: "Comienzo del inventario físico en todas las áreas",
      status: "completed",
      icon: Database
    },
    {
      time: "12:00",
      title: "Primera Verificación",
      description: "Revisión de datos y resolución de discrepancias",
      status: "completed",
      icon: CheckCircle
    },
    {
      time: "14:00",
      title: "Conteo de Verificación",
      description: "Segunda ronda de conteo en áreas críticas",
      status: "in-progress",
      icon: RotateCcw
    },
    {
      time: "16:00",
      title: "Consolidación",
      description: "Análisis final y generación de reportes",
      status: "pending",
      icon: BarChart3
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsNavOpen(false);
    }
  };

  const exportData = (format: 'pdf' | 'csv' | 'png') => {
    console.log(`Exporting as ${format}`);
  };

  const sections = [
    { id: 'overview', title: 'Resumen', icon: BarChart3, color: 'blue' },
    { id: 'timeline', title: 'Cronología', icon: Clock, color: 'green' },
    { id: 'metrics', title: 'Métricas', icon: Target, color: 'purple' },
    { id: 'analysis', title: 'Análisis', icon: Brain, color: 'orange' },
    { id: 'recommendations', title: 'Recomendaciones', icon: Lightbulb, color: 'indigo' },
    { id: 'conclusions', title: 'Conclusiones', icon: Star, color: 'pink' }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header Moderno */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/10 backdrop-blur-xl border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Reporte DISAL</h1>
                <p className="text-sm text-blue-200">Inventario Inteligente - 31 Agosto 2024</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="text-white hover:bg-white/20"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-white hover:bg-white/20"
              >
                {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => exportData('pdf')}
                className="text-white hover:bg-white/20"
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
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
          <div className="space-y-2">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${
                  section.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  section.color === 'green' ? 'from-green-500 to-green-600' :
                  section.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  section.color === 'orange' ? 'from-orange-500 to-orange-600' :
                  section.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                  'from-pink-500 to-pink-600'
                }`}>
                  <section.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">{section.title}</span>
              </motion.button>
            ))}
          </div>
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
              <Badge className="px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-400/30 rounded-full mb-8">
                <Sparkles className="h-4 w-4 mr-2" />
                Reporte de Inventario Inteligente
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight mb-8">
                Inventario
                <br />
                <span className="text-5xl md:text-7xl">Inteligente</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
                Análisis completo del inventario realizado el 31 de agosto de 2024, 
                implementando tecnología móvil y metodología de doble verificación 
                para garantizar la máxima precisión en los resultados.
              </p>
              
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
                  <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-r ${metric.color} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <metric.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className={`flex items-center space-x-1 text-sm font-medium ${
                          metric.trend === 'up' ? 'text-green-400' : 
                          metric.trend === 'down' ? 'text-red-400' : 
                          'text-gray-400'
                        }`}>
                          {metric.trend === 'up' ? <TrendingUp className="h-4 w-4" /> : 
                           metric.trend === 'down' ? <TrendingUp className="h-4 w-4 rotate-180" /> : 
                           <Activity className="h-4 w-4" />}
                          <span>{Math.abs(metric.change)}%</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
                      <p className="text-blue-200 text-sm">{metric.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
