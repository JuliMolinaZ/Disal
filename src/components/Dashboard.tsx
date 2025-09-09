'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DonutChart } from './charts/DonutChart';
import { BarChart100 } from './charts/BarChart100';
import { LogScaleChart } from './charts/LogScaleChart';
import { DataZoomChart } from './charts/DataZoomChart';
import { StatsCard } from './StatsCard';
import { DataQualityCard } from './analysis/DataQualityCard';
import { StatisticalSummary } from './analysis/StatisticalSummary';
import { InsightsPanel } from './analysis/InsightsPanel';
import { TableComparison } from './analysis/TableComparison';
import { ConteoRealizadosChart } from './charts/ConteoRealizadosChart';
import { ComparacionPositivosNegativosChart } from './charts/ComparacionPositivosNegativosChart';
import { SeccionesCantidadChart } from './charts/SeccionesCantidadChart';
import { ReporteEjecutivo } from './ReporteEjecutivo';
import { GraficasEspecificas } from './GraficasEspecificas';
import { FuturisticDashboard } from './FuturisticDashboard';
import { RangosDashboard } from './RangosDashboard';
import { ConceptosDashboard } from './ConceptosDashboard';
import { UbicacionesDashboard } from './UbicacionesDashboard';
import { LegendExplanatory, DataSourceInfo } from './LegendExplanatory';
import { BackgroundDecorations, CorporatePattern } from './BackgroundDecorations';
import { ImmersiveReport } from './ImmersiveReport';
import { MicroInteractions } from './MicroInteractions';
import { AccessibilityProvider } from './AccessibilitySystem';
import { PremiumExecutiveDashboard } from './PremiumExecutiveDashboard';
import { PredictiveAnalytics } from './PredictiveAnalytics';
import { ExecutiveStorytellingDashboard } from './ExecutiveStorytellingDashboard';
import { EnhancedMicroInteractions } from './EnhancedMicroInteractions';
import { AdvancedComparisonTools } from './AdvancedComparisonTools';
import { GeneralReportDashboard } from './GeneralReportDashboard';
import { AnalisisCompleto } from './AnalisisCompleto';
import { AdvancedChartData, processAdvancedCSVData, getDataValidationSummary } from '@/lib/advanced-data-processor';
import { SpecificChartsData, processSpecificChartsData } from '@/lib/specific-charts-processor';
import { chartColors } from '@/lib/color-palette';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  Database, 
  Target,
  Menu,
  X,
  Home,
  FileText,
  Settings,
  Download,
  Share2,
  Bookmark,
  Search,
  Filter,
  ChevronRight,
  Building2,
  Calendar,
  AlertTriangle
} from 'lucide-react';

interface DashboardProps {
  csvData: string;
}

export function Dashboard({ csvData }: DashboardProps) {
  const [data, setData] = useState<AdvancedChartData | null>(null);
  const [specificData, setSpecificData] = useState<SpecificChartsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      const processedData = processAdvancedCSVData(csvData);
      const specificProcessedData = processSpecificChartsData(csvData);
      setData(processedData);
      setSpecificData(specificProcessedData);
    } catch (error) {
      console.error('Error procesando datos:', error);
    } finally {
      setLoading(false);
    }
  }, [csvData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data || !specificData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error al cargar los datos</h2>
          <p className="text-gray-600">No se pudieron procesar los datos del archivo CSV.</p>
        </div>
      </div>
    );
  }

  const colors = chartColors;

  const validationSummary = getDataValidationSummary(data);
  const { comparative } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Floating Menu Button */}
      <motion.button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full shadow-2xl shadow-blue-500/25 backdrop-blur-sm border border-blue-400/20 flex items-center justify-center transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
      >
        <Menu className="w-6 h-6 text-white group-hover:rotate-180 transition-transform duration-300" />
      </motion.button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border-l border-slate-700/50 shadow-2xl z-50"
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-slate-700/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">DISAL</h3>
                      <p className="text-slate-400 text-sm">Navegación</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSidebarOpen(false)}
                    className="w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-4 h-4 text-slate-400" />
                  </motion.button>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="p-6 space-y-4">
                <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">Secciones Principales</h4>
                
                {[
                  { icon: FileText, label: 'Reporte Ejecutivo', description: 'Informe gerencial completo', action: () => {
                    document.querySelector('[value="immersive"]')?.click();
                    setSidebarOpen(false);
                  }},
                  { icon: BarChart3, label: 'Análisis Visual', description: 'Gráficas interactivas', action: () => {
                    document.querySelector('[value="overview"]')?.click();
                    setSidebarOpen(false);
                  }},
                  { icon: Download, label: 'Exportar Reporte', description: 'Descargar datos', action: () => {
                    alert('Función de exportación próximamente');
                    setSidebarOpen(false);
                  }},
                  { icon: Share2, label: 'Compartir', description: 'Compartir reporte', action: () => {
                    navigator.share ? navigator.share({
                      title: 'Reporte de Inventario DISAL',
                      text: 'Informe ejecutivo de inventario corporativo',
                      url: window.location.href
                    }) : alert('Función de compartir no disponible');
                    setSidebarOpen(false);
                  }}
                ].map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={item.action}
                    className="w-full group relative bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-4 text-left transition-all duration-300 border border-slate-700/30 hover:border-slate-600/50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-indigo-600/30 transition-colors">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                        <div className="text-slate-400 text-xs">{item.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-slate-400 transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="p-6 border-t border-slate-700/50">
                <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-4">Resumen Rápido</h4>
                <div className="space-y-3">
                  {[
                    { icon: Database, label: '1,599 Productos', color: 'text-blue-400' },
                    { icon: AlertTriangle, label: '587 Diferencias', color: 'text-red-400' },
                    { icon: Target, label: '84.7% Exactitud', color: 'text-green-400' },
                    { icon: Calendar, label: 'Sept 2025', color: 'text-purple-400' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-slate-300 text-sm font-medium">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto space-y-10">
        


        {/* Premium Executive Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Tabs defaultValue="immersive" className="space-y-10">
            <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-2xl shadow-2xl border border-slate-700/50 p-2 rounded-2xl">
              <TabsTrigger 
                value="immersive" 
                className="group relative text-lg font-bold py-6 px-8 rounded-2xl text-slate-300 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all duration-500 hover:bg-slate-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center group-data-[state=active]:from-white group-data-[state=active]:to-slate-200 transition-all duration-300">
                    <span className="text-lg group-data-[state=active]:text-blue-600">📋</span>
                  </div>
                  <span className="tracking-wide">REPORTE EJECUTIVO</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              </TabsTrigger>
              
              <TabsTrigger 
                value="overview" 
                className="group relative text-lg font-bold py-6 px-8 rounded-2xl text-slate-300 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-2xl transition-all duration-500 hover:bg-slate-700/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-data-[state=active]:from-white group-data-[state=active]:to-slate-200 transition-all duration-300">
                    <span className="text-lg group-data-[state=active]:text-green-600">📊</span>
                  </div>
                  <span className="tracking-wide">ANÁLISIS VISUAL</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              </TabsTrigger>
          </TabsList>

          {/* Reporte General - Principal */}
          <TabsContent value="immersive" className="space-y-6">
            <GeneralReportDashboard />
          </TabsContent>


          {/* Análisis Completo - Todos los módulos integrados */}
            <TabsContent value="overview" className="space-y-6">
              <AnalisisCompleto data={data} specificData={specificData} />
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
            <p className="text-slate-400 text-base">
              <span className="text-blue-400 font-semibold">Reporte de Inventario DISAL</span> • 
              Generado el {new Date().toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
              })}
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-slate-500 text-sm">Datos Finales • Confidencial</span>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
