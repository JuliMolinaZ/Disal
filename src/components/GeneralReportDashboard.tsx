'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, CheckCircle, AlertTriangle, TrendingUp, FileText, Settings, BookOpen, Shield, Building2, Calendar, MapPin, Award, Zap, Eye, BarChart3 } from 'lucide-react';

export function GeneralReportDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-slate-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto space-y-12">
        
        {/* EXECUTIVE HEADER - INFORME GERENCIAL */}
        <motion.div 
          className="text-center space-y-8 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Premium Executive Card */}
          <div className="relative bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-blue-500/20 p-16 overflow-hidden">
            {/* Luxury Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]"></div>
            </div>
            
            {/* DISTRIBUIDORA SALVADOREÑA DE LICORES Branding */}
            <motion.div 
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl shadow-blue-500/30">
                <Building2 className="w-6 h-6" />
                <span className="font-bold text-lg tracking-wider">DISTRIBUIDORA SALVADOREÑA DE LICORES</span>
              </div>
            </motion.div>

            {/* Main Executive Title */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="space-y-4">
                <h1 className="text-7xl font-black bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent leading-tight tracking-tight">
                  INFORME GERENCIAL
                </h1>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  INVENTARIO CORPORATIVO
                </h2>
                
                {/* Executive Date and Location */}
                <div className="flex items-center justify-center gap-8 mt-8">
                  <div className="flex items-center gap-2 text-blue-300">
                    <Calendar className="w-5 h-5" />
                    <span className="font-semibold">31 de Agosto, 2024</span>
                  </div>
                  <div className="w-px h-6 bg-blue-500/50"></div>
                  <div className="flex items-center gap-2 text-blue-300">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">El Salvador</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Executive Summary Badge */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 text-emerald-300 px-8 py-4 rounded-full backdrop-blur-sm">
                <Award className="w-5 h-5" />
                <span className="font-bold text-lg">REPORTE EJECUTIVO CONFIDENCIAL</span>
              </div>
            </motion.div>

            {/* Executive Description */}
            <motion.div 
              className="mt-8 max-w-5xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <p className="text-2xl text-blue-200 leading-relaxed font-light">
                Análisis integral y estratégico del proceso de inventario corporativo, incluyendo metodología innovadora, 
                gestión de equipos multidisciplinarios, y evaluación crítica de sistemas tecnológicos implementados.
              </p>
            </motion.div>
            
            {/* Decorative Executive Elements */}
            <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl rotate-12 blur-sm"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-3xl -rotate-12 blur-sm"></div>
          </div>
        </motion.div>

        {/* EXECUTIVE KPI DASHBOARD */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { 
              title: 'EQUIPOS DESPLEGADOS', 
              value: '12', 
              subtitle: 'Grupos Especializados',
              icon: Users, 
              gradient: 'from-blue-600 to-cyan-600',
              bgGradient: 'from-blue-500/20 to-cyan-500/20',
              change: '+100%'
            },
            { 
              title: 'PERSONAL INVOLUCRADO', 
              value: '36', 
              subtitle: 'Colaboradores Capacitados',
              icon: Target, 
              gradient: 'from-emerald-600 to-teal-600',
              bgGradient: 'from-emerald-500/20 to-teal-500/20',
              change: 'Total'
            },
            { 
              title: 'ZONAS OPERATIVAS', 
              value: '6', 
              subtitle: 'Áreas Estratégicas',
              icon: MapPin, 
              gradient: 'from-purple-600 to-violet-600',
              bgGradient: 'from-purple-500/20 to-violet-500/20',
              change: 'Críticas'
            },
            { 
              title: 'DÍAS DE EJECUCIÓN', 
              value: '2', 
              subtitle: 'Jornadas Consecutivas',
              icon: Calendar, 
              gradient: 'from-amber-600 to-orange-600',
              bgGradient: 'from-amber-500/20 to-orange-500/20',
              change: 'Intensivos'
            },
            { 
              title: 'CÓDIGOS CON DIFERENCIAS', 
              value: '163', 
              subtitle: 'Productos con Discrepancias',
              icon: AlertTriangle, 
              gradient: 'from-red-600 to-pink-600',
              bgGradient: 'from-red-500/20 to-pink-500/20',
              change: 'Crítico'
            },
            { 
              title: 'CÓDIGOS MÚLTIPLES UBICACIONES', 
              value: '857', 
              subtitle: 'Productos en Varias Zonas',
              icon: Zap, 
              gradient: 'from-orange-600 to-yellow-600',
              bgGradient: 'from-orange-500/20 to-yellow-500/20',
              change: 'Identificados'
            },
            { 
              title: 'PRODUCTOS NEGATIVOS', 
              value: '70', 
              subtitle: 'Inventario con Faltante',
              icon: TrendingUp, 
              gradient: 'from-rose-600 to-red-600',
              bgGradient: 'from-rose-500/20 to-red-500/20',
              change: 'Ajustar'
            },
            { 
              title: 'PRODUCTOS POSITIVOS', 
              value: '93', 
              subtitle: 'Inventario con Sobrante',
              icon: CheckCircle, 
              gradient: 'from-green-600 to-emerald-600',
              bgGradient: 'from-green-500/20 to-emerald-500/20',
              change: 'Favorable'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Executive KPI Card */}
              <div className={`relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-2xl rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500`}>
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-blue-200 text-xs font-bold mb-2 uppercase tracking-widest">{stat.title}</h3>
                  <div className="text-5xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                    {stat.value}
                  </div>
                  <p className="text-blue-300 text-sm mb-3 font-medium">{stat.subtitle}</p>
                  <div className="text-xs text-emerald-400 font-bold bg-emerald-500/20 px-3 py-1 rounded-full inline-block">
                    {stat.change}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EXECUTIVE SUMMARY SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-slate-900/90 via-blue-900/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-blue-500/20 p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_70%)]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">RESUMEN EJECUTIVO</h2>
                  <p className="text-blue-300 text-xl">Hallazgos Críticos y Recomendaciones Estratégicas</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <h4 className="font-bold text-emerald-300 text-lg">LOGROS ALCANZADOS</h4>
                  </div>
                  <p className="text-emerald-200 leading-relaxed">
                    Ejecución del proceso de inventario físico utilizando dispositivos móviles y metodología de doble conteo 
                    con 12 equipos multidisciplinarios.
                  </p>
                </div>
                
                <div className="bg-amber-500/20 border border-amber-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-amber-400" />
                    <h4 className="font-bold text-amber-300 text-lg">RIESGOS IDENTIFICADOS</h4>
                  </div>
                  <p className="text-amber-200 leading-relaxed">
                    Inconsistencias en datos maestros, problemas de conectividad en zona crítica y registros duplicados 
                    que requieren atención prioritaria.
                  </p>
                </div>
                
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-blue-300 text-lg">VALOR ESTRATÉGICO</h4>
                  </div>
                  <p className="text-blue-200 leading-relaxed">
                    Identificación de oportunidades de mejora para procesos de inventario futuros 
                    y establecimiento de metodología estandarizada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ANÁLISIS DETALLADO DE DATOS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Card className="bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-2xl border border-purple-500/20 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                ANÁLISIS DETALLADO DE INVENTARIO
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Rangos de Diferencias */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6">
                  <h4 className="font-bold text-blue-300 text-xl mb-6">RANGOS DE DIFERENCIAS - PRIMERA UBICACIÓN</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-red-500/20 rounded-lg">
                      <span className="text-red-200">Más de 1000 unidades</span>
                      <span className="text-red-300 font-bold">1 producto</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-500/20 rounded-lg">
                      <span className="text-orange-200">500 - 999 unidades</span>
                      <span className="text-orange-300 font-bold">7 productos</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-500/20 rounded-lg">
                      <span className="text-yellow-200">100 - 499 unidades</span>
                      <span className="text-yellow-300 font-bold">16 productos</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg">
                      <span className="text-green-200">1 - 99 unidades</span>
                      <span className="text-green-300 font-bold">143 productos</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl p-6">
                  <h4 className="font-bold text-emerald-300 text-xl mb-6">RANGOS DE DIFERENCIAS - MÚLTIPLES UBICACIONES</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-red-500/20 rounded-lg">
                      <span className="text-red-200">Más de 1000 unidades</span>
                      <span className="text-red-300 font-bold">10 productos</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-500/20 rounded-lg">
                      <span className="text-orange-200">500 - 999 unidades</span>
                      <span className="text-orange-300 font-bold">5 productos</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-500/20 rounded-lg">
                      <span className="text-yellow-200">100 - 499 unidades</span>
                      <span className="text-yellow-300 font-bold">13 productos</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg">
                      <span className="text-green-200">1 - 99 unidades</span>
                      <span className="text-green-300 font-bold">148 productos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Análisis de Diferencias por Concepto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-6">
                  <h4 className="font-bold text-indigo-300 text-xl mb-6">ANÁLISIS POR CONCEPTO - PRIMERA UBICACIÓN</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-red-500/20 rounded-lg">
                      <span className="text-red-200">Con diferencia</span>
                      <span className="text-red-300 font-bold">163</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-500/20 rounded-lg">
                      <span className="text-orange-200">Negativos</span>
                      <span className="text-orange-300 font-bold">70</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg">
                      <span className="text-green-200">Positivos</span>
                      <span className="text-green-300 font-bold">93</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-500/20 rounded-lg">
                      <span className="text-blue-200">Exactos (Ceros)</span>
                      <span className="text-blue-300 font-bold">5</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/30 rounded-2xl p-6">
                  <h4 className="font-bold text-violet-300 text-xl mb-6">ANÁLISIS POR CONCEPTO - MÚLTIPLES UBICACIONES</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-yellow-500/20 rounded-lg">
                      <span className="text-yellow-200">Múltiples ubicaciones</span>
                      <span className="text-yellow-300 font-bold">857</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-500/20 rounded-lg">
                      <span className="text-red-200">Con diferencia</span>
                      <span className="text-red-300 font-bold">424</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-500/20 rounded-lg">
                      <span className="text-orange-200">Negativos</span>
                      <span className="text-orange-300 font-bold">162</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg">
                      <span className="text-green-200">Positivos</span>
                      <span className="text-green-300 font-bold">177</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-500/20 rounded-lg">
                      <span className="text-blue-200">Exactos (Ceros)</span>
                      <span className="text-blue-300 font-bold">420</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-500/20 rounded-lg">
                      <span className="text-purple-200">Validar conteo</span>
                      <span className="text-purple-300 font-bold">85</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resumen Ejecutivo de Datos */}
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-slate-600/50 rounded-2xl p-8">
                <h4 className="font-bold text-white text-2xl mb-4">RESUMEN DE HALLAZGOS CRÍTICOS</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">587</div>
                    <div className="text-red-300 font-semibold">Total con Diferencias</div>
                    <div className="text-slate-400 text-sm">(163 + 424)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">857</div>
                    <div className="text-yellow-300 font-semibold">Códigos Múltiples Ubicaciones</div>
                    <div className="text-slate-400 text-sm">Mayor complejidad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">85</div>
                    <div className="text-purple-300 font-semibold">Requieren Validación</div>
                    <div className="text-slate-400 text-sm">Revisión adicional</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* INTRODUCCIÓN Y OBJETIVOS CORPORATIVOS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
        >
          <Card className="bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-2xl border border-blue-500/20 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                INTRODUCCIÓN Y OBJETIVOS ESTRATÉGICOS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-blue-100">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/20">
                <p className="text-lg leading-relaxed">
                  El presente informe documenta de manera integral las actividades realizadas durante la toma de inventario 
                  en las instalaciones de DISAL. Este proceso se llevó a cabo durante dos días consecutivos, implementando 
                  una metodología innovadora basada en el uso de aplicaciones móviles para optimizar la precisión y 
                  eficiencia del conteo.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/20">
                <p className="text-lg leading-relaxed">
                  La jornada se estructuró con el objetivo de realizar doble conteo que permitiera 
                  identificar discrepancias y garantizar confiabilidad en los resultados. Se describe 
                  detalladamente la organización de los equipos de trabajo, la metodología implementada y las observaciones 
                  sobre el desempeño del personal y los obstáculos técnicos identificados durante la ejecución.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* ACTIVIDADES PRINCIPALES - VISUAL IMPACTANTE */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          <Card className="bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-2xl border border-blue-500/20 shadow-2xl overflow-hidden">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                FASES DE EJECUCIÓN ESTRATÉGICA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    phase: "01",
                    title: "COORDINACIÓN EJECUTIVA",
                    description: "Inicio de jornada con presentación de objetivos estratégicos, asignación de líderes por área crítica y distribución de tecnología móvil avanzada.",
                    gradient: "from-blue-600 to-cyan-600",
                    bgColor: "bg-blue-500/20 border-blue-500/30"
                  },
                  {
                    phase: "02", 
                    title: "VERIFICACIÓN CRUZADA",
                    description: "Ejecución del sistema de doble conteo en zonas estratégicas mediante protocolos de verificación cruzada para máxima precisión.",
                    gradient: "from-emerald-600 to-teal-600",
                    bgColor: "bg-emerald-500/20 border-emerald-500/30"
                  },
                  {
                    phase: "03",
                    title: "CONSOLIDACIÓN DIGITAL",
                    description: "Consolidación y análisis de datos críticos obtenidos durante el proceso de inventario corporativo.",
                    gradient: "from-purple-600 to-violet-600", 
                    bgColor: "bg-purple-500/20 border-purple-500/30"
                  },
                  {
                    phase: "04",
                    title: "VALIDACIÓN FINAL",
                    description: "Implementación de tercer conteo de validación para discrepancias identificadas y supervisión continua del proceso crítico.",
                    gradient: "from-amber-600 to-orange-600",
                    bgColor: "bg-amber-500/20 border-amber-500/30"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`${item.bgColor} border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg text-white font-black text-lg`}>
                        {item.phase}
                      </div>
                      <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg">{item.title}</h4>
                    <p className="text-blue-200 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* ORGANIZACIÓN CORPORATIVA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
        >
          <Card className="bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-2xl border border-blue-500/20 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                ESTRUCTURA ORGANIZACIONAL Y DESPLIEGUE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-blue-500/20">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">CONFIGURACIÓN ESTRATÉGICA</h4>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Se conformaron 12 equipos de trabajo integrados por 3 personas cada uno, con roles claramente definidos 
                    para optimizar la eficiencia del proceso. Cada equipo contaba con un responsable de contar y digitar en 
                    el sistema, un verificador y un contador auditor.
                  </p>
                  <p className="text-blue-100 leading-relaxed">
                    La distribución estratégica consistió en asignar 6 equipos para realizar el conteo 1 y los otros 6 equipos 
                    para ejecutar el conteo 2, estableciendo así una metodología de verificación cruzada que permitiera identificar 
                    discrepancias y errores humanos en el proceso de contabilización.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center p-8 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl">
                    <div className="text-6xl font-black text-blue-400 mb-3">12</div>
                    <div className="text-white font-bold text-lg mb-2">EQUIPOS ESPECIALIZADOS</div>
                    <div className="text-blue-300 text-sm">Grupos multidisciplinarios</div>
                  </div>
                  
                  <div className="text-center p-8 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl">
                    <div className="text-6xl font-black text-emerald-400 mb-3">36</div>
                    <div className="text-white font-bold text-lg mb-2">COLABORADORES</div>
                    <div className="text-emerald-300 text-sm">Personal estratégico</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* METODOLOGÍA CORPORATIVA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 }}
        >
          <Card className="bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-2xl border border-blue-500/20 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                METODOLOGÍA Y PROTOCOLO DE EJECUCIÓN
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-blue-300 mb-3">CAPTURA DIGITAL</h4>
                  <p className="text-blue-100 text-sm">
                    Registro simultáneo físico y digital mediante aplicación móvil, eliminando transcripción posterior.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-emerald-300 mb-3">VERIFICACIÓN CRUZADA</h4>
                  <p className="text-emerald-100 text-sm">
                    Doble conteo con 6 equipos por sesión para determinar cantidades reales con máxima precisión.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-purple-300 mb-3">VALIDACIÓN FINAL</h4>
                  <p className="text-purple-100 text-sm">
                    Conteo 3 de validación para confirmar cantidades definitivas y resolver discrepancias críticas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* DISTRIBUCIÓN DE EQUIPOS - TABLA EJECUTIVA */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9 }}
        >
          <Card className="bg-gradient-to-r from-slate-900/90 to-blue-900/90 backdrop-blur-2xl border border-blue-500/20 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                DISTRIBUCIÓN OPERACIONAL POR ZONA CRÍTICA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-800/50 rounded-2xl border border-blue-500/20 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
                        <th className="px-6 py-4 text-left text-blue-200 font-bold">GRUPO</th>
                        <th className="px-6 py-4 text-left text-blue-200 font-bold">CONTEO PRIMARIO</th>
                        <th className="px-6 py-4 text-left text-blue-200 font-bold">CONTEO SECUNDARIO</th>
                        <th className="px-6 py-4 text-left text-blue-200 font-bold">ZONA ESTRATÉGICA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { grupo: "1", conteo1: "Alexis Chávez\nMauricio Figueroa", conteo2: "Antonio Mejía\nIsaías Bonilla", zona: "Zona Importados", color: "border-blue-500/30" },
                        { grupo: "2", conteo1: "Marvin Arias\nEmerson Osorio", conteo2: "Manuel Portillo\nJostin Cruz", zona: "Zona Cerveza y Premezclado", color: "border-emerald-500/30" },
                        { grupo: "3", conteo1: "Ronald Astorga\nJeidy Caravantes", conteo2: "Alexander Ortiz\nAndrea Contreras", zona: "Zona Sure y No Alcohólicos", color: "border-purple-500/30" },
                        { grupo: "4", conteo1: "Nelson Esquizabal\nJorge Rodríguez", conteo2: "Diego Román\nCésar Ruano", zona: "Zona FDC y Botrán", color: "border-amber-500/30" },
                        { grupo: "5", conteo1: "Juan Pérez\nHernán García", conteo2: "Gabriela García\nManuel Estrada", zona: "Zona Vinos", color: "border-pink-500/30" },
                        { grupo: "6", conteo1: "Santos Salguero\nAdolfo Esperanza", conteo2: "Ramón Rosales\nOscar Deras", zona: "Zona Nacional", color: "border-teal-500/30" }
                      ].map((row, index) => (
                        <tr key={row.grupo} className={`border-t ${row.color} hover:bg-slate-700/30 transition-colors`}>
                          <td className="px-6 py-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                              {row.grupo}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-blue-100 whitespace-pre-line">{row.conteo1}</td>
                          <td className="px-6 py-4 text-blue-100 whitespace-pre-line">{row.conteo2}</td>
                          <td className="px-6 py-4">
                            <span className="bg-blue-600/20 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                              {row.zona}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* RIESGOS Y PROBLEMÁTICAS CRÍTICAS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1 }}
        >
          <Card className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-2xl border border-red-500/30 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                RIESGOS CRÍTICOS IDENTIFICADOS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "INCONSISTENCIAS TECNOLÓGICAS",
                    description: "Errores en escaneo de códigos de barras y rendimiento deficiente en dispositivos handheld que comprometen la precisión del proceso.",
                    severity: "CRÍTICO",
                    color: "from-red-600 to-orange-600",
                    bgColor: "bg-red-500/20 border-red-500/30"
                  },
                  {
                    title: "PROBLEMAS DE CONECTIVIDAD",
                    description: "Señal WiFi deficiente en zona de vinos que genera retrasos significativos y potencial pérdida de datos críticos.",
                    severity: "ALTO",
                    color: "from-orange-600 to-amber-600", 
                    bgColor: "bg-orange-500/20 border-orange-500/30"
                  },
                  {
                    title: "DUPLICACIÓN DE REGISTROS",
                    description: "Registros dobles y creación manual no autorizada de productos que compromete la integridad de la información.",
                    severity: "CRÍTICO",
                    color: "from-pink-600 to-red-600",
                    bgColor: "bg-pink-500/20 border-pink-500/30"
                  }
                ].map((risk, index) => (
                  <motion.div
                    key={risk.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.2 + index * 0.1 }}
                    className={`${risk.bgColor} border rounded-2xl p-6 hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 bg-gradient-to-r ${risk.color} text-white text-xs font-bold rounded-full`}>
                        {risk.severity}
                      </div>
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    <h4 className="font-bold text-red-200 mb-3 text-lg">{risk.title}</h4>
                    <p className="text-red-100 text-sm leading-relaxed">{risk.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* RECOMENDACIONES ESTRATÉGICAS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3 }}
        >
          <Card className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                PLAN ESTRATÉGICO DE MEJORA CORPORATIVA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    phase: "01",
                    title: "DEPURACIÓN DE DATOS MAESTROS",
                    description: "Ejecutar plan integral de saneamiento antes del próximo inventario, consolidando SKU únicos y eliminando duplicidades críticas.",
                    priority: "INMEDIATO",
                    color: "from-emerald-600 to-teal-600"
                  },
                  {
                    phase: "02", 
                    title: "CAPACITACIÓN ESPECIALIZADA",
                    description: "Fortalecer competencias del personal operativo y administrativo en aplicación móvil y lógica de control de inventarios.",
                    priority: "CRÍTICO",
                    color: "from-blue-600 to-indigo-600"
                  },
                  {
                    phase: "03",
                    title: "CONTROLES TECNOLÓGICOS",
                    description: "Implementar controles estrictos para evitar registros manuales no autorizados y garantizar trazabilidad completa.",
                    priority: "ALTO",
                    color: "from-purple-600 to-violet-600"
                  },
                  {
                    phase: "04",
                    title: "INFRAESTRUCTURA DIGITAL",
                    description: "Fortalecer conectividad WiFi, eliminar zonas muertas y mejorar rendimiento de dispositivos móviles críticos.",
                    priority: "INMEDIATO",
                    color: "from-cyan-600 to-blue-600"
                  }
                ].map((recommendation, index) => (
                  <motion.div
                    key={recommendation.phase}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.4 + index * 0.1 }}
                    className="bg-slate-800/50 border border-emerald-500/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${recommendation.color} rounded-xl flex items-center justify-center text-white font-bold`}>
                        {recommendation.phase}
                      </div>
                      <div className="px-3 py-1 bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold rounded-full">
                        {recommendation.priority}
                      </div>
                    </div>
                    <h4 className="font-bold text-emerald-300 mb-3 text-lg">{recommendation.title}</h4>
                    <p className="text-emerald-100 text-sm leading-relaxed">{recommendation.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CONCLUSIONES EJECUTIVAS */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
        >
          <Card className="bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-2xl border border-blue-500/20 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                CONCLUSIONES EJECUTIVAS Y VALOR ESTRATÉGICO
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8">
                <h4 className="font-bold text-red-300 mb-4 text-2xl">EVALUACIÓN CRÍTICA DE CONFIABILIDAD</h4>
                <p className="text-red-100 leading-relaxed mb-6 text-lg">
                  El inventario realizado no puede ser considerado confiable para fines contables, debido a la 
                  combinación de inconsistencias en datos maestros, debilidades en procesos y limitaciones 
                  tecnológicas identificadas.
                </p>
                <p className="text-red-100 leading-relaxed text-lg">
                  No obstante, su valor estratégico es significativo, ya que ha permitido identificar riesgos críticos 
                  que afectan la confiabilidad de los inventarios futuros. El proceso ha generado un mapa claro de 
                  oportunidades de mejora en datos, procesos y tecnología que será fundamental para implementaciones posteriores.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-6">
                  <h4 className="font-bold text-blue-300 mb-4 text-xl">IDENTIFICACIÓN DE RIESGOS</h4>
                  <p className="text-blue-100 leading-relaxed">
                    Mapeo completo de riesgos críticos que afectan la confiabilidad de inventarios futuros
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl p-6">
                  <h4 className="font-bold text-emerald-300 mb-4 text-xl">OPORTUNIDADES ESTRATÉGICAS</h4>
                  <p className="text-emerald-100 leading-relaxed">
                    Generación de roadmap claro para optimizar datos, procesos y tecnología corporativa
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-2xl p-6">
                  <h4 className="font-bold text-purple-300 mb-4 text-xl">MODELO DE MEJORA CONTINUA</h4>
                  <p className="text-purple-100 leading-relaxed">
                    Establecimiento de procedimientos para inventarios futuros más precisos
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-6">
                  <h4 className="font-bold text-cyan-300 mb-4 text-xl">PLAN DE VALIDACIÓN</h4>
                  <p className="text-cyan-100 leading-relaxed">
                    Implementación de conteos cíclicos para productos con diferencias críticas
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-8">
                <p className="text-blue-100 leading-relaxed text-xl font-medium text-center">
                  A pesar de las limitaciones identificadas, este proceso ha establecido las bases sólidas para mejorar 
                  los procesos de inventario futuros, con mayor confiabilidad y precisión requerida para 
                  las operaciones de DISAL.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* ANEXO TÉCNICO */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7 }}
        >
          <Card className="bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-2xl border-2 border-dashed border-slate-500/30 shadow-2xl">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-slate-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                ANEXO TÉCNICO – AMPLIACIONES RECOMENDADAS
              </CardTitle>
              <p className="text-slate-400 italic text-lg">
                (Propuestas adicionales para reforzamiento estratégico)
              </p>
            </CardHeader>
            <CardContent className="space-y-10">
              
              {/* Checklist Operativo */}
              <div className="space-y-6">
                <h4 className="font-bold text-white text-2xl">PROTOCOLO OPERATIVO PARA FUTUROS INVENTARIOS</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "PREPARACIÓN ESTRATÉGICA",
                      subtitle: "(T-2 semanas)",
                      items: "Depuración de catálogo, cierre de movimientos, congelamiento de transferencias, etiquetado de ubicaciones",
                      color: "from-blue-600 to-cyan-600",
                      bgColor: "bg-blue-500/20 border-blue-500/30"
                    },
                    {
                      title: "INFRAESTRUCTURA DIGITAL", 
                      subtitle: "(Crítico)",
                      items: "Site survey WiFi, densidad de AP por pasillo, MDM para handhelds, pruebas de estrés con 30+ usuarios",
                      color: "from-emerald-600 to-teal-600",
                      bgColor: "bg-emerald-500/20 border-emerald-500/30"
                    },
                    {
                      title: "CAPACITACIÓN INTENSIVA",
                      subtitle: "(Obligatorio)", 
                      items: "Guías rápidas impresas, videos instructivos, simulacros de conteo por zona crítica",
                      color: "from-purple-600 to-violet-600",
                      bgColor: "bg-purple-500/20 border-purple-500/30"
                    }
                  ].map((protocol, index) => (
                    <div key={protocol.title} className={`${protocol.bgColor} border rounded-2xl p-6`}>
                      <div className={`w-12 h-12 bg-gradient-to-r ${protocol.color} rounded-xl flex items-center justify-center mb-4`}>
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <h5 className="font-bold text-white mb-2">{protocol.title}</h5>
                      <p className="text-blue-300 text-sm font-semibold mb-3">{protocol.subtitle}</p>
                      <p className="text-blue-100 text-sm leading-relaxed">{protocol.items}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPIs y Métricas */}
              <div className="space-y-6">
                <h4 className="font-bold text-white text-2xl">MÉTRICAS DE CONTROL Y KPIs ESTRATÉGICOS</h4>
                
                <div className="bg-slate-800/50 rounded-2xl border border-blue-500/20 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold text-blue-300 mb-3">INDICADORES CRÍTICOS</h5>
                      <ul className="space-y-2 text-blue-100 text-sm">
                        <li>• Exactitud de inventario = 1 − |AX − Físico| / MAX(AX, Físico)</li>
                        <li>• % ubicaciones correctamente asignadas</li>
                        <li>• % capturas con reconteo requerido</li>
                        <li>• Tasa de duplicados por 1.000 lecturas</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-emerald-300 mb-3">MATRIZ RACI CORPORATIVA</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-emerald-600/20 border border-emerald-500/30 rounded-lg p-2 text-center">
                          <p className="text-emerald-300 font-bold text-xs">RESPONSABLE</p>
                          <p className="text-emerald-200 text-xs">Supervisor de Inventarios</p>
                        </div>
                        <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-2 text-center">
                          <p className="text-blue-300 font-bold text-xs">APROBADOR</p>
                          <p className="text-blue-200 text-xs">Gerencia de Operaciones</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-500/30 pt-6">
                <p className="text-slate-400 italic text-center">
                  Las ampliaciones propuestas constituyen mejores prácticas para el reforzamiento de datos, procesos y tecnología 
                  en futuras ejecuciones de inventario corporativo en DISAL.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* FOOTER CORPORATIVO */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.0 }}
          className="text-center py-12 border-t border-blue-500/20"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Building2 className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">DISTRIBUIDORA SALVADOREÑA DE LICORES</h3>
            </div>
            <p className="text-blue-300 text-lg font-semibold">INFORME GERENCIAL CONFIDENCIAL</p>
            <div className="flex items-center justify-center gap-6 text-blue-400 text-sm">
              <span>© 2025 DISAL</span>
              <span>•</span>
              <span>El Salvador</span>
              <span>•</span>
              <span>Documento Ejecutivo</span>
            </div>
          </div>
        </motion.div>

        </div>
      </div>
    </div>
  );
}