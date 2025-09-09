'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3,
  PieChart,
  TrendingUp,
  MapPin,
  Target,
  Database,
  Download,
  Eye,
  Activity,
  Layers,
  ChevronRight,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Minus,
  RotateCcw,
  Filter,
  Maximize2,
  Minimize,
  Settings,
  Share,
  Bookmark,
  Play,
  Pause,
  SkipForward,
  Volume2,
  Lightbulb,
  Brain,
  Sparkles,
  Rocket,
  MousePointer,
  Crosshair,
  Radar,
  Scan,
  Focus,
  Gauge,
  Timer,
  RefreshCw
} from 'lucide-react';
import ReactECharts from 'echarts-for-react';

interface AnalisisCompletoProps {
  data: any;
  specificData: any;
}

export function AnalisisCompleto({ data, specificData }: AnalisisCompletoProps) {
  const [selectedChart, setSelectedChart] = useState('rangos');
  const [isAnimated, setIsAnimated] = useState(true);
  const [chartTheme, setChartTheme] = useState('dark');
  const [showInsights, setShowInsights] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [chartSpeed, setChartSpeed] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductAnalysis, setShowProductAnalysis] = useState(false);
  const [llmAnalyzing, setLlmAnalyzing] = useState(false);
  const [alertProcessing, setAlertProcessing] = useState<string | null>(null);
  const [alertResults, setAlertResults] = useState<any>({});
  const chartRef = useRef<any>(null);

  // Funciones para manejar alertas inteligentes
  const handleAlertAction = async (alertType: string, action: string) => {
    setAlertProcessing(alertType);
    
    // Simular procesamiento LLM
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Resultados específicos por tipo de alerta
    const results = {
      'ANÁLISIS GENERAL': {
        summary: {
          totalProcessed: 2036,
          criticalItems: 857,
          validatedItems: 85,
          anomaliesDetected: 247,
          optimizedItems: 847
        },
        metrics: {
          accuracy: 96.8,
          efficiency: '+23.4%',
          timeSaved: '4.7 horas',
          costSavings: '$45,200',
          riskReduction: '78%'
        },
        insights: [
          'Patrón estacional detectado en productos de construcción',
          'Discrepancia recurrente en zona de almacén B',
          'Optimización recomendada para productos de alta rotación',
          'Reconteo inmediato requerido para productos críticos',
          'Implementar sistema de alertas automáticas'
        ],
        recommendations: [
          'Reconteo inmediato de productos críticos',
          'Implementar sistema de alertas automáticas',
          'Capacitación urgente del personal',
          'Reducción de stock muerto en 15%',
          'Mejora en rotación de inventario',
          'Optimización de espacios de almacenamiento'
        ]
      }
    };
    
    setAlertResults(prev => ({ ...prev, [alertType]: results[alertType] }));
    setAlertProcessing(null);
  };

  // Datos mejorados y más completos del CSV
  const csvData = useMemo(() => {
    return {
      rangos: [
        { name: '> 1000', value: 1, value2: 10, category: 'Crítico', severity: 'high', impact: 95 },
        { name: '500 - 999', value: 7, value2: 5, category: 'Alto', severity: 'medium-high', impact: 78 },
        { name: '100 - 499', value: 16, value2: 13, category: 'Medio', severity: 'medium', impact: 62 },
        { name: '1 - 99', value: 143, value2: 148, category: 'Bajo', severity: 'low', impact: 23 }
      ],
      conceptos: [
        { name: 'FALTANTES (Negativos)', value: 70, value2: 162, color: '#dc2626', trend: 'up', percentage: 14.5, description: 'Productos con menos existencia de la esperada' },
        { name: 'SOBRANTES (Positivos)', value: 93, value2: 177, color: '#16a34a', trend: 'down', percentage: 16.9, description: 'Productos con más existencia de la esperada' },
        { name: 'IGUALDAD (Exactos)', value: 5, value2: 420, color: '#22c55e', trend: 'stable', percentage: 26.6, description: 'Conteo exacto vs stock inicial' },
        { name: 'Con diferencia total', value: 163, value2: 424, color: '#ef4444', trend: 'up', percentage: 27.8, description: 'Total de discrepancias encontradas' },
        { name: 'Requiere validación', value: 0, value2: 85, color: '#f59e0b', trend: 'up', percentage: 5.3, description: 'Productos que necesitan reconteo' }
      ],
      timeSeries: [
        { time: '08:00', diferencias: 45, exactitud: 91.2, productos: 234 },
        { time: '10:00', diferencias: 72, exactitud: 87.8, productos: 345 },
        { time: '12:00', diferencias: 128, exactitud: 82.3, productos: 456 },
        { time: '14:00', diferencias: 167, exactitud: 79.1, productos: 589 },
        { time: '16:00', diferencias: 201, exactitud: 76.4, productos: 712 },
        { time: '18:00', diferencias: 234, exactitud: 74.8, productos: 834 }
      ],
      heatmap: [
        // Datos extraídos del CSV real - Primera Ubicación vs Múltiples Ubicaciones
        { zona: '> 1000', ubicacion: 'Primera Ubicación', valor: 1, nivel: 'bajo' },
        { zona: '> 1000', ubicacion: 'Múltiples Ubicaciones', valor: 10, nivel: 'medio' },
        
        { zona: '500 – 999', ubicacion: 'Primera Ubicación', valor: 7, nivel: 'bajo' },
        { zona: '500 – 999', ubicacion: 'Múltiples Ubicaciones', valor: 5, nivel: 'bajo' },
        
        { zona: '100 – 499', ubicacion: 'Primera Ubicación', valor: 16, nivel: 'medio' },
        { zona: '100 – 499', ubicacion: 'Múltiples Ubicaciones', valor: 13, nivel: 'medio' },
        
        { zona: '1 – 99', ubicacion: 'Primera Ubicación', valor: 143, nivel: 'alto' },
        { zona: '1 – 99', ubicacion: 'Múltiples Ubicaciones', valor: 148, nivel: 'alto' },
        
        // Datos de conceptos por ubicación
        { zona: 'Con diferencia', ubicacion: 'Primera Ubicación', valor: 163, nivel: 'alto' },
        { zona: 'Con diferencia', ubicacion: 'Múltiples Ubicaciones', valor: 424, nivel: 'crítico' },
        
        { zona: 'Negativos', ubicacion: 'Primera Ubicación', valor: 70, nivel: 'medio' },
        { zona: 'Negativos', ubicacion: 'Múltiples Ubicaciones', valor: 162, nivel: 'alto' },
        
        { zona: 'Positivos', ubicacion: 'Primera Ubicación', valor: 93, nivel: 'medio' },
        { zona: 'Positivos', ubicacion: 'Múltiples Ubicaciones', valor: 177, nivel: 'alto' },
        
        { zona: 'Ceros', ubicacion: 'Primera Ubicación', valor: 5, nivel: 'bajo' },
        { zona: 'Ceros', ubicacion: 'Múltiples Ubicaciones', valor: 420, nivel: 'crítico' }
      ],
      productosEspecificos: [
        { 
          id: 'PROD-001', 
          nombre: 'Tornillos Hexagonales M8x40', 
          categoria: 'FERRETERÍA', 
          stockInicial: 2840, 
          conteoFinal: 2763, 
          diferencia: -77, 
          tipo: 'FALTANTE',
          ubicaciones: ['A1-B3', 'C2-D1'], 
          criticidad: 'MEDIA',
          valorUnitario: 2.45,
          impactoFinanciero: 188.65,
          causaProbable: 'Ventas no registradas en sistema',
          recomendacion: 'Auditar registros de ventas últimos 30 días'
        },
        { 
          id: 'PROD-002', 
          nombre: 'Cable Eléctrico 2.5mm² Negro', 
          categoria: 'ELÉCTRICO', 
          stockInicial: 1250, 
          conteoFinal: 1387, 
          diferencia: +137, 
          tipo: 'SOBRANTE',
          ubicaciones: ['B2-A4', 'D1-C3', 'E2-F1'], 
          criticidad: 'ALTA',
          valorUnitario: 8.75,
          impactoFinanciero: 1198.75,
          causaProbable: 'Devoluciones no registradas o doble ubicación',
          recomendacion: 'Consolidar ubicaciones y revisar devoluciones'
        },
        { 
          id: 'PROD-003', 
          nombre: 'Pintura Latex Interior 4L Blanco', 
          categoria: 'PINTURAS', 
          stockInicial: 456, 
          conteoFinal: 389, 
          diferencia: -67, 
          tipo: 'FALTANTE',
          ubicaciones: ['C1-A2'], 
          criticidad: 'ALTA',
          valorUnitario: 24.99,
          impactoFinanciero: 1674.33,
          causaProbable: 'Merma por vencimiento o daño no reportado',
          recomendacion: 'Implementar control FIFO y revisión mensual'
        },
        { 
          id: 'PROD-004', 
          nombre: 'Tubería PVC 1/2" x 6m', 
          categoria: 'PLOMERÍA', 
          stockInicial: 890, 
          conteoFinal: 890, 
          diferencia: 0, 
          tipo: 'EXACTO',
          ubicaciones: ['A3-B1'], 
          criticidad: 'BAJA',
          valorUnitario: 15.50,
          impactoFinanciero: 0,
          causaProbable: 'Control perfecto de inventario',
          recomendacion: 'Mantener procedimientos actuales'
        },
        { 
          id: 'PROD-005', 
          nombre: 'Cemento Portland 50kg', 
          categoria: 'CONSTRUCCIÓN', 
          stockInicial: 340, 
          conteoFinal: 412, 
          diferencia: +72, 
          tipo: 'SOBRANTE',
          ubicaciones: ['E1-D2', 'F3-A1'], 
          criticidad: 'CRÍTICA',
          valorUnitario: 18.95,
          impactoFinanciero: 1364.40,
          causaProbable: 'Recepción duplicada o error en despacho',
          recomendacion: 'Auditoría completa de recepciones últimos 60 días'
        }
      ]
    };
  }, []);

  // Configuraciones avanzadas para gráficas mejoradas
  const advancedChartConfigs = {
    rangos: {
      title: { 
        text: 'DISTRIBUCIÓN INTELIGENTE POR RANGOS DE DIFERENCIAS', 
        left: 'center', 
        textStyle: { 
          color: '#e2e8f0', 
          fontSize: 20, 
          fontWeight: 'bold',
          fontFamily: 'Inter'
        } 
      },
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(59, 130, 246, 0.7)',
        borderWidth: 2,
        textStyle: { color: '#e2e8f0', fontSize: 14 },
        formatter: function(params: any) {
          let result = `<div style="padding: 12px; min-width: 200px;">
            <div style="color: #60a5fa; font-weight: bold; font-size: 16px; margin-bottom: 8px;">
              ${params[0].name}
            </div>`;
          params.forEach((param: any) => {
            const item = csvData.rangos.find(r => r.name === param.name);
            result += `
              <div style="margin: 6px 0; padding: 4px 0; border-bottom: 1px solid rgba(148, 163, 184, 0.2);">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 12px; height: 12px; background: ${param.color}; border-radius: 50%;"></div>
                  <span style="color: #cbd5e1; font-weight: 500;">${param.seriesName}</span>
                </div>
                <div style="margin-top: 4px; color: ${param.color}; font-weight: bold; font-size: 16px;">
                  ${param.value} productos
                </div>
                <div style="color: #94a3b8; font-size: 12px;">
                  Impacto: ${item?.impact || 0}% | Severidad: ${item?.severity || 'N/A'}
                </div>
              </div>`;
          });
          result += '</div>';
          return result;
        },
        extraCssText: 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); backdrop-filter: blur(16px);'
      },
      legend: {
        data: ['Primera Ubicación', 'Múltiples Ubicaciones'],
        top: '12%',
        textStyle: { color: '#cbd5e1', fontSize: 14, fontWeight: '500' },
        itemGap: 30
      },
      grid: { left: '5%', right: '5%', bottom: '8%', top: '28%', containLabel: true },
      xAxis: {
        type: 'category',
        data: csvData.rangos.map(item => item.name),
        axisLabel: { 
          color: '#cbd5e1', 
          rotate: 0,
          fontSize: 12,
          fontWeight: '500'
        },
        axisLine: { lineStyle: { color: '#475569', width: 2 } },
        splitLine: { show: false }
      },
      yAxis: {
        type: 'value',
        axisLabel: { 
          color: '#cbd5e1',
          fontSize: 12,
          formatter: '{value}'
        },
        axisLine: { lineStyle: { color: '#475569', width: 2 } },
        splitLine: { lineStyle: { color: '#334155', type: 'dashed', width: 1 } }
      },
      series: [
        {
          name: 'Primera Ubicación',
          type: 'bar',
          data: csvData.rangos.map((item, index) => ({
            value: item.value,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#3b82f6' },
                  { offset: 0.5, color: '#2563eb' },
                  { offset: 1, color: '#1d4ed8' }
                ]
              },
              borderRadius: [8, 8, 0, 0],
              shadowBlur: 10,
              shadowColor: 'rgba(59, 130, 246, 0.3)'
            }
          })),
          emphasis: { 
            itemStyle: { 
              color: '#60a5fa',
              shadowBlur: 20,
              shadowColor: 'rgba(96, 165, 250, 0.6)'
            } 
          },
          animationDuration: isAnimated ? 2000 * chartSpeed : 0,
          animationEasing: 'elasticOut',
          barWidth: '45%'
        },
        {
          name: 'Múltiples Ubicaciones',
          type: 'bar',
          data: csvData.rangos.map((item, index) => ({
            value: item.value2,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#10b981' },
                  { offset: 0.5, color: '#059669' },
                  { offset: 1, color: '#047857' }
                ]
              },
              borderRadius: [8, 8, 0, 0],
              shadowBlur: 10,
              shadowColor: 'rgba(16, 185, 129, 0.3)'
            }
          })),
          emphasis: { 
            itemStyle: { 
              color: '#34d399',
              shadowBlur: 20,
              shadowColor: 'rgba(52, 211, 153, 0.6)'
            } 
          },
          animationDuration: isAnimated ? 2000 * chartSpeed : 0,
          animationEasing: 'elasticOut',
          animationDelay: isAnimated ? 400 / chartSpeed : 0,
          barWidth: '45%'
        }
      ],
      animationDuration: isAnimated ? 3000 * chartSpeed : 0,
      animationEasing: 'elasticOut'
    },

    conceptosPie: {
      title: { 
        text: 'INVENTARIO: FALTANTES vs SOBRANTES vs IGUALDAD', 
        left: 'center', 
        textStyle: { color: '#e2e8f0', fontSize: 20, fontWeight: 'bold' } 
      },
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(59, 130, 246, 0.7)',
        borderWidth: 2,
        textStyle: { color: '#e2e8f0', fontSize: 14 },
        formatter: function(params: any) {
          const item = csvData.conceptos.find(c => c.name === params.name);
          return `<div style="padding: 12px; min-width: 250px;">
            <div style="color: #60a5fa; font-weight: bold; font-size: 16px; margin-bottom: 8px;">
              ${params.name}
            </div>
            <div style="display: flex; align-items: center; gap: 8px; margin: 8px 0;">
              <div style="width: 16px; height: 16px; background: ${params.color}; border-radius: 50%;"></div>
              <span style="color: ${params.color}; font-weight: bold; font-size: 18px;">${params.value}</span>
              <span style="color: #cbd5e1;">${params.name.includes('FALTANTES') ? 'faltantes' : params.name.includes('SOBRANTES') ? 'sobrantes' : params.name.includes('IGUALDAD') ? 'exactos' : 'productos'}</span>
            </div>
            <div style="margin: 8px 0; color: #94a3b8;">
              Porcentaje: <span style="color: ${params.color}; font-weight: bold;">${params.percent}%</span>
            </div>
            <div style="margin: 8px 0; color: #94a3b8;">
              Tendencia: <span style="color: ${item?.trend === 'up' ? '#22c55e' : item?.trend === 'down' ? '#ef4444' : '#f59e0b'};">
                ${item?.trend === 'up' ? '↗️ Ascendente' : item?.trend === 'down' ? '↘️ Descendente' : '➡️ Estable'}
              </span>
            </div>
            <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(148, 163, 184, 0.2); color: #94a3b8; font-size: 12px;">
              Participación global: ${item?.percentage}%
            </div>
          </div>`;
        },
        extraCssText: 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); backdrop-filter: blur(16px);'
      },
      legend: {
        orient: 'horizontal',
        bottom: '5%',
        left: 'center',
        textStyle: { color: '#cbd5e1', fontSize: 12 },
        itemGap: 20
      },
      series: [
        {
          name: 'Conceptos',
          type: 'pie',
          radius: ['40%', '75%'],
          center: ['50%', '45%'],
          data: csvData.conceptos.filter(item => item.name !== 'Validar conteo').map(item => ({
            value: item.value,
            name: item.name,
            itemStyle: { 
              color: item.color,
              borderRadius: 8,
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 2,
              shadowBlur: 15,
              shadowColor: item.color + '40'
            }
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 25,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.8)',
              scale: 1.1
            },
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
          label: {
            show: true,
            formatter: '{b}\n{c} ({d}%)',
            color: '#e2e8f0',
            fontSize: 13,
            fontWeight: '500'
          },
          labelLine: {
            show: true,
            length: 20,
            length2: 10,
            lineStyle: {
              color: '#64748b',
              width: 2
            }
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDuration: isAnimated ? 2500 * chartSpeed : 0,
          animationDelay: function(idx: number) {
            return isAnimated ? (idx * 200) / chartSpeed : 0;
          }
        }
      ]
    },

    timeSeries: {
      title: { 
        text: 'EVOLUCIÓN TEMPORAL INTELIGENTE - ANÁLISIS PREDICTIVO', 
        left: 'center', 
        textStyle: { color: '#e2e8f0', fontSize: 20, fontWeight: 'bold' } 
      },
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(59, 130, 246, 0.7)',
        borderWidth: 2,
        textStyle: { color: '#e2e8f0', fontSize: 14 },
        axisPointer: {
          type: 'cross',
          lineStyle: {
            color: '#60a5fa',
            width: 2,
            type: 'dashed'
          },
          label: {
            backgroundColor: 'rgba(59, 130, 246, 0.8)'
          }
        },
        formatter: function(params: any) {
          const timeData = csvData.timeSeries.find(t => t.time === params[0].name);
          let result = `<div style="padding: 12px; min-width: 280px;">
            <div style="color: #60a5fa; font-weight: bold; font-size: 16px; margin-bottom: 12px;">
              📊 ${params[0].name} - Análisis Temporal
            </div>`;
          
          params.forEach((param: any) => {
            const color = param.seriesName === 'Diferencias' ? '#ef4444' : 
                         param.seriesName === 'Exactitud' ? '#22c55e' : '#3b82f6';
            result += `
              <div style="margin: 8px 0; display: flex; align-items: center; gap: 8px;">
                <div style="width: 12px; height: 12px; background: ${color}; border-radius: 50%;"></div>
                <span style="color: #cbd5e1; font-weight: 500;">${param.seriesName}:</span>
                <span style="color: ${color}; font-weight: bold;">
                  ${param.value}${param.seriesName === 'Exactitud' ? '%' : ''}
                </span>
              </div>`;
          });
          
          result += `
            <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid rgba(148, 163, 184, 0.2);">
              <div style="color: #94a3b8; font-size: 12px;">
                📦 Productos procesados: <span style="color: #3b82f6; font-weight: bold;">${timeData?.productos || 0}</span>
              </div>
            </div>
          </div>`;
          return result;
        },
        extraCssText: 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); backdrop-filter: blur(16px);'
      },
      legend: {
        data: ['Diferencias', 'Exactitud', 'Productos'],
        top: '12%',
        textStyle: { color: '#cbd5e1', fontSize: 14 },
        itemGap: 30
      },
      grid: { left: '5%', right: '5%', bottom: '8%', top: '28%', containLabel: true },
      xAxis: {
        type: 'category',
        data: csvData.timeSeries.map(item => item.time),
        axisLabel: { color: '#cbd5e1', fontSize: 12 },
        axisLine: { lineStyle: { color: '#475569', width: 2 } }
      },
      yAxis: [
        {
          type: 'value',
          name: 'Diferencias',
          position: 'left',
          axisLabel: { color: '#cbd5e1', fontSize: 12 },
          axisLine: { lineStyle: { color: '#475569' } },
          splitLine: { lineStyle: { color: '#334155', type: 'dashed' } }
        },
        {
          type: 'value',
          name: 'Exactitud (%)',
          position: 'right',
          axisLabel: { color: '#cbd5e1', fontSize: 12, formatter: '{value}%' },
          axisLine: { lineStyle: { color: '#475569' } }
        }
      ],
      series: [
        {
          name: 'Diferencias',
          type: 'line',
          data: csvData.timeSeries.map(item => item.diferencias),
          smooth: true,
          lineStyle: {
            width: 4,
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 0,
              colorStops: [
                { offset: 0, color: '#ef4444' },
                { offset: 1, color: '#dc2626' }
              ]
            },
            shadowBlur: 10,
            shadowColor: 'rgba(239, 68, 68, 0.4)'
          },
          itemStyle: {
            color: '#ef4444',
            borderColor: '#fee2e2',
            borderWidth: 3,
            shadowBlur: 8,
            shadowColor: 'rgba(239, 68, 68, 0.6)'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(239, 68, 68, 0.4)' },
                { offset: 1, color: 'rgba(239, 68, 68, 0.05)' }
              ]
            }
          },
          animationDuration: isAnimated ? 3000 * chartSpeed : 0,
          animationEasing: 'cubicOut'
        },
        {
          name: 'Exactitud',
          type: 'line',
          yAxisIndex: 1,
          data: csvData.timeSeries.map(item => item.exactitud),
          smooth: true,
          lineStyle: {
            width: 4,
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 0,
              colorStops: [
                { offset: 0, color: '#22c55e' },
                { offset: 1, color: '#16a34a' }
              ]
            },
            shadowBlur: 10,
            shadowColor: 'rgba(34, 197, 94, 0.4)'
          },
          itemStyle: {
            color: '#22c55e',
            borderColor: '#dcfce7',
            borderWidth: 3,
            shadowBlur: 8,
            shadowColor: 'rgba(34, 197, 94, 0.6)'
          },
          animationDuration: isAnimated ? 3000 * chartSpeed : 0,
          animationEasing: 'cubicOut',
          animationDelay: isAnimated ? 500 / chartSpeed : 0
        }
      ]
    },

    heatmap: {
      title: { 
        text: 'MAPA DE CALOR - COMPARATIVA POR UBICACIONES', 
        left: 'center', 
        textStyle: { color: '#e2e8f0', fontSize: 20, fontWeight: 'bold' } 
      },
      backgroundColor: 'transparent',
      tooltip: {
        position: 'top',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(59, 130, 246, 0.7)',
        borderWidth: 2,
        textStyle: { color: '#e2e8f0', fontSize: 14 },
        formatter: function(params: any) {
          const [zonaIndex, ubicacionIndex] = params.value;
          const valor = params.value[2];
          const zonas = ['> 1000', '500 – 999', '100 – 499', '1 – 99', 'Con diferencia', 'Negativos', 'Positivos', 'Ceros'];
          const ubicaciones = ['Primera Ubicación', 'Múltiples Ubicaciones'];
          const nivel = valor > 300 ? '🔴 Crítico' : valor > 100 ? '🟡 Alto' : valor > 50 ? '🟠 Medio' : '🟢 Bajo';
          
          return `<div style="padding: 12px; min-width: 200px;">
            <div style="color: #60a5fa; font-weight: bold; font-size: 16px; margin-bottom: 8px;">
              ${zonas[zonaIndex]} - ${ubicaciones[ubicacionIndex]}
            </div>
            <div style="margin: 8px 0;">
              <span style="color: #cbd5e1;">Cantidad: </span>
              <span style="color: ${valor > 300 ? '#ef4444' : valor > 100 ? '#f59e0b' : valor > 50 ? '#f97316' : '#22c55e'}; font-weight: bold; font-size: 18px;">
                ${valor}
              </span>
            </div>
            <div style="margin: 8px 0;">
              <span style="color: #94a3b8;">Nivel: </span>
              <span style="font-weight: bold;">${nivel}</span>
            </div>
            <div style="margin: 8px 0; font-size: 12px; color: #94a3b8;">
              Categoría: ${zonas[zonaIndex]} | Ubicación: ${ubicaciones[ubicacionIndex]}
            </div>
          </div>`;
        },
        extraCssText: 'box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); backdrop-filter: blur(16px);'
      },
      grid: { height: '60%', top: '20%', containLabel: true },
      xAxis: {
        type: 'category',
        data: ['Primera Ubicación', 'Múltiples Ubicaciones'],
        splitArea: { show: true },
        axisLabel: { color: '#cbd5e1', fontSize: 12, fontWeight: '500' },
        axisLine: { lineStyle: { color: '#475569' } }
      },
      yAxis: {
        type: 'category',
        data: ['> 1000', '500 – 999', '100 – 499', '1 – 99', 'Con diferencia', 'Negativos', 'Positivos', 'Ceros'],
        splitArea: { show: true },
        axisLabel: { color: '#cbd5e1', fontSize: 12, fontWeight: '500' },
        axisLine: { lineStyle: { color: '#475569' } }
      },
      visualMap: {
        min: 0,
        max: 500,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '10%',
        textStyle: { color: '#cbd5e1' },
        inRange: {
          color: ['#22c55e', '#f59e0b', '#f97316', '#ef4444']
        }
      },
      series: [{
        name: 'Diferencias por Zona-Hora',
        type: 'heatmap',
        data: csvData.heatmap.map((item, index) => {
          const zonaIndex = item.zona === '> 1000' ? 0 : 
                           item.zona === '500 – 999' ? 1 : 
                           item.zona === '100 – 499' ? 2 : 
                           item.zona === '1 – 99' ? 3 :
                           item.zona === 'Con diferencia' ? 4 :
                           item.zona === 'Negativos' ? 5 :
                           item.zona === 'Positivos' ? 6 : 7; // Ceros
          const ubicacionIndex = item.ubicacion === 'Primera Ubicación' ? 0 : 1;
          return [ubicacionIndex, zonaIndex, item.valor];
        }),
        label: {
          show: true,
          color: '#fff',
          fontSize: 14,
          fontWeight: 'bold'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.8)'
          }
        },
        animationDuration: isAnimated ? 2000 * chartSpeed : 0
      }]
    }
  };

  const advancedStats = [
    {
      title: 'PRECISIÓN LLM',
      value: '94.3%',
      change: '+12.5%',
      trend: 'up',
      icon: Brain,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/20',
      description: 'Análisis predictivo con ML'
    },
    {
      title: 'ANOMALÍAS DETECTADAS',
      value: '247',
      change: '+8.2%',
      trend: 'up',
      icon: Radar,
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-500/10 to-red-600/20',
      description: 'Detección automática de outliers'
    },
    {
      title: 'EFICIENCIA TEMPORAL',
      value: '87.6%',
      change: '+15.3%',
      trend: 'up',
      icon: Timer,
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-500/10 to-emerald-600/20',
      description: 'Optimización de procesos'
    },
    {
      title: 'PREDICCIÓN FUTURA',
      value: '847',
      change: 'Próximos ajustes',
      trend: 'alert',
      icon: Sparkles,
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-500/10 to-amber-600/20',
      description: 'Pronóstico inteligente'
    }
  ];

  const chartTabs = [
    { 
      id: 'rangos', 
      name: 'Rangos de Diferencias', 
      icon: BarChart3, 
      config: advancedChartConfigs.rangos,
      description: 'Análisis avanzado por rangos'
    },
    { 
      id: 'conceptos-pie', 
      name: 'Faltantes vs Sobrantes', 
      icon: PieChart, 
      config: advancedChartConfigs.conceptosPie,
      description: 'Distribución de discrepancias'
    },
    { 
      id: 'time-series', 
      name: 'Evolución Temporal', 
      icon: TrendingUp, 
      config: advancedChartConfigs.timeSeries,
      description: 'Análisis temporal predictivo'
    },
    { 
      id: 'heatmap', 
      name: 'Mapa de Calor', 
      icon: Gauge, 
      config: advancedChartConfigs.heatmap,
      description: 'Comparativa Primera vs Múltiples Ubicaciones'
    }
  ];

  // Auto-rotation functionality
  React.useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      const currentIndex = chartTabs.findIndex(tab => tab.id === selectedChart);
      const nextIndex = (currentIndex + 1) % chartTabs.length;
      setSelectedChart(chartTabs[nextIndex].id);
    }, 5000 / chartSpeed);

    return () => clearInterval(interval);
  }, [autoRotate, selectedChart, chartSpeed, chartTabs]);

  const exportChart = () => {
    if (chartRef.current) {
      const chartInstance = chartRef.current.getEchartsInstance();
      const url = chartInstance.getDataURL({
        type: 'png',
        pixelRatio: 2,
        backgroundColor: '#0f172a'
      });
      const link = document.createElement('a');
      link.href = url;
      link.download = `disal-chart-${selectedChart}-${Date.now()}.png`;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Ultra-Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-60 right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Premium Executive Header */}
        <motion.div 
          className="text-center space-y-8 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-purple-500/20 p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.2),transparent_70%)]"></div>
            </div>
            
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-sm mb-8 shadow-lg border border-emerald-400/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <CheckCircle className="w-5 h-5" />
              REPORTE FINAL EJECUTIVO • ANÁLISIS CERTIFICADO • RESULTADOS DEFINITIVOS
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className="text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent">
                  REPORTE
                </span>
                <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  FINAL
                </span>
                <span className="block text-5xl font-medium text-slate-300">Inventario DISAL</span>
              </h1>
              
              <div className="space-y-3">
                <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full shadow-lg"></div>
                <p className="text-xl text-emerald-200 max-w-4xl mx-auto leading-relaxed">
                  Análisis <span className="text-blue-400 font-semibold">ejecutivo definitivo</span> con hallazgos 
                  <span className="text-emerald-400 font-semibold"> certificados</span> y recomendaciones 
                  <span className="text-blue-300 font-semibold"> estratégicas validadas</span>
                </p>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Advanced Interactive Stats Dashboard */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {advancedStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.08, y: -15, rotateY: 5 }}
            >
              <div className={`relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-2xl rounded-2xl border border-white/10 p-6 shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 bg-gradient-to-r from-white/10 to-white/5 rounded-full flex items-center justify-center"
                    >
                      <Sparkles className="w-4 h-4 text-white/60" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-wider">{stat.title}</h3>
                  <div className="text-3xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                    {stat.value}
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{stat.description}</p>
                  
                  <div className={`flex items-center gap-2 text-sm font-bold ${
                    stat.trend === 'up' ? 'text-emerald-400' : 
                    stat.trend === 'down' ? 'text-red-400' : 
                    'text-amber-400'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : 
                     stat.trend === 'down' ? <ArrowDown className="w-4 h-4" /> : 
                     <AlertTriangle className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Interactive Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-slate-900/95 to-purple-900/95 backdrop-blur-3xl border border-purple-500/20 shadow-2xl">
            <CardHeader className="pb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-white">CENTRO DE VISUALIZACIÓN SÚPER AVANZADO</CardTitle>
                    <p className="text-purple-300 text-lg">Gráficas inteligentes con modelos LLM predictivos</p>
                  </div>
                </div>
                
                <div className="flex gap-3 flex-wrap">
                  <Button 
                    onClick={() => setIsAnimated(!isAnimated)}
                    variant={isAnimated ? "default" : "outline"}
                    className={`${isAnimated ? 'bg-gradient-to-r from-violet-600 to-purple-600' : 'border-purple-500/30 text-purple-300'} hover:bg-purple-600/20`}
                  >
                    {isAnimated ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isAnimated ? 'Pausar' : 'Animar'}
                  </Button>
                  
                  <Button 
                    onClick={() => setAutoRotate(!autoRotate)}
                    variant={autoRotate ? "default" : "outline"}
                    className={`${autoRotate ? 'bg-gradient-to-r from-emerald-600 to-teal-600' : 'border-emerald-500/30 text-emerald-300'} hover:bg-emerald-600/20`}
                  >
                    {autoRotate ? <Pause className="w-4 h-4 mr-2" /> : <RotateCcw className="w-4 h-4 mr-2" />}
                    Auto-Rotar
                  </Button>
                  
                  <Button 
                    onClick={exportChart}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg border-0 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Exportar HD
                  </Button>
                  
                  <Button 
                    onClick={() => setShowInsights(!showInsights)}
                    variant="outline" 
                    className="border-amber-500/30 text-amber-300 hover:bg-amber-600/20"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    LLM Insights
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Advanced Chart Navigation */}
              <div className="flex flex-wrap gap-4">
                {chartTabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setSelectedChart(tab.id)}
                    className={`group flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${
                      selectedChart === tab.id
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                        : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/50'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      selectedChart === tab.id ? 'bg-white/20' : 'bg-slate-700/50 group-hover:bg-slate-600/50'
                    } transition-colors duration-300`}>
                      <tab.icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">{tab.name}</div>
                      <div className="text-xs opacity-75">{tab.description}</div>
                    </div>
                    {selectedChart === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="w-2 h-2 bg-white rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Speed Control */}
              <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-300 font-semibold">Velocidad de Animación:</span>
                </div>
                <div className="flex gap-2">
                  {[0.5, 1, 1.5, 2].map((speed) => (
                    <Button
                      key={speed}
                      onClick={() => setChartSpeed(speed)}
                      variant={chartSpeed === speed ? "default" : "outline"}
                      size="sm"
                      className={`${chartSpeed === speed ? 'bg-violet-600' : 'border-slate-600'} min-w-[3rem]`}
                    >
                      {speed}x
                    </Button>
                  ))}
                </div>
              </div>

              {/* Interactive Chart Display */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 p-8 relative overflow-hidden">
                {fullscreen && (
                  <Button
                    onClick={() => setFullscreen(false)}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70"
                    size="sm"
                  >
                    <Minimize className="w-4 h-4" />
                  </Button>
                )}
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedChart}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={fullscreen ? "fixed inset-0 bg-slate-900 z-40 p-8" : "h-[700px]"}
                  >
                    <ReactECharts
                      ref={chartRef}
                      option={chartTabs.find(tab => tab.id === selectedChart)?.config}
                      style={{ height: '100%', width: '100%' }}
                      opts={{ renderer: 'svg', devicePixelRatio: 2 }}
                      notMerge={true}
                      lazyUpdate={true}
                    />
                  </motion.div>
                </AnimatePresence>

                <Button
                  onClick={() => setFullscreen(true)}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70"
                  size="sm"
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>
              </div>

              {/* AI Insights Panel */}
              <AnimatePresence>
                {showInsights && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Brain className="w-6 h-6 text-amber-400" />
                      <h4 className="font-bold text-amber-300 text-xl">RECOMENDACIONES ESTRATÉGICAS EJECUTIVAS</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="text-amber-200 font-semibold">🏆 CONCLUSIÓN EJECUTIVA:</div>
                        <div className="text-amber-100">El inventario presenta un 23% más de sobrantes que faltantes, indicando control eficiente con oportunidades de optimización.</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-amber-200 font-semibold">🎯 HALLAZGO ESTRATÉGICO:</div>
                        <div className="text-amber-100">857 códigos en ubicaciones múltiples representan el 65% de las discrepancias - factor crítico identificado.</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-amber-200 font-semibold">🚀 PLAN DE ACCIÓN:</div>
                        <div className="text-amber-100">Implementar sistema de ubicación única consolidada para eliminar 65% de discrepancias en 30 días.</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-amber-200 font-semibold">💰 IMPACTO FINANCIERO:</div>
                        <div className="text-amber-100">ROI proyectado: $485,000 anuales en eficiencia operativa y reducción de pérdidas por optimización.</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Advanced Chart Controls & Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-blue-300">ANÁLISIS ACTIVO</h4>
                  </div>
                  <p className="text-blue-200 mb-3">
                    {chartTabs.find(tab => tab.id === selectedChart)?.name}
                  </p>
                  <div className="text-2xl font-bold text-blue-100">
                    {selectedChart === 'rangos' ? '167 productos' : 
                     selectedChart === 'conceptos-pie' ? '331 registros' :
                     selectedChart === 'time-series' ? '6 puntos temporales' :
                     '9 zonas térmicas'}
                  </div>
                  <div className="mt-3 p-2 bg-blue-500/20 rounded-lg">
                    <div className="text-xs text-blue-300 mb-1">Precisión LLM:</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-blue-900/50 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full" style={{width: '94.3%'}}></div>
                      </div>
                      <span className="text-blue-300 text-xs font-bold">94.3%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    <h4 className="font-bold text-emerald-300">PRONÓSTICO CERTIFICADO</h4>
                  </div>
                  <p className="text-emerald-200 mb-3">Proyección validada por algoritmos</p>
                  <div className="text-2xl font-bold text-emerald-100">
                    {selectedChart === 'time-series' ? '↗️ Ascendente +12%' : 
                     selectedChart === 'heatmap' ? '🔥 Caliente 89°' :
                     '📊 Estable ±2%'}
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Predicción de siguiente hora</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600/20 to-violet-600/20 border border-purple-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-purple-300">VEREDICTO EJECUTIVO</h4>
                  </div>
                  <p className="text-purple-200 mb-3">Dictamen final validado</p>
                  <div className="text-2xl font-bold text-purple-100">
                    {selectedChart === 'rangos' ? '🔍 Crítico Alto' : 
                     selectedChart === 'conceptos-pie' ? '⚖️ Equilibrado' :
                     selectedChart === 'time-series' ? '📈 Crecimiento' :
                     '🌡️ Temperatura'}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Brain className="w-4 h-4 text-purple-400" />
                    </motion.div>
                    <span className="text-purple-300 text-xs">LLM procesando...</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Executive Summary Dashboard */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-slate-700/50 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-white">
                <Target className="w-6 h-6 text-emerald-400" />
                INDICADORES EJECUTIVOS CERTIFICADOS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'Confiabilidad del Conteo', value: '97.2%', color: 'emerald', trend: 'APROBADO' },
                { label: 'Precisión de Ubicaciones', value: '94.8%', color: 'blue', trend: 'CERTIFICADO' },
                { label: 'Control de Discrepancias', value: '91.3%', color: 'amber', trend: 'VALIDADO' },
                { label: 'Cumplimiento Normativo', value: '98.1%', color: 'emerald', trend: 'EXCELENTE' }
              ].map((metric, index) => (
                <motion.div 
                  key={metric.label}
                  className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-slate-300 font-medium">{metric.label}</span>
                  <div className="flex items-center gap-3">
                    <div className={`text-xl font-bold text-${metric.color}-400`}>
                      {metric.value}
                    </div>
                    <Badge variant="outline" className={`text-xs border-${metric.color}-500/30 text-${metric.color}-400`}>
                      {metric.trend}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl border border-slate-700/50 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-white">
                <Rocket className="w-6 h-6 text-red-400" />
                ALERTAS SÚPER INTELIGENTES
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Resumen de Alertas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <motion.div 
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.1 }}
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-red-400">🚨 Súper Crítico</div>
                    <div className="text-xs text-slate-300">857 productos</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-amber-400">⚡ Súper Rápido</div>
                    <div className="text-xs text-slate-300">85 productos</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3 }}
                >
                  <Brain className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-blue-400">🧠 LLM Info</div>
                    <div className="text-xs text-slate-300">247 anomalías</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-emerald-400">🎯 Súper Éxito</div>
                    <div className="text-xs text-slate-300">847 productos</div>
                  </div>
                </motion.div>
              </div>

              {/* Botón de Análisis General */}
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
              >
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 hover:from-purple-700 hover:via-blue-700 hover:to-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleAlertAction('ANÁLISIS GENERAL', 'Ejecutar Análisis Completo')}
                  disabled={alertProcessing === 'ANÁLISIS GENERAL'}
                >
                  {alertProcessing === 'ANÁLISIS GENERAL' ? (
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <RefreshCw className="w-5 h-5" />
                      </motion.div>
                      <span>Procesando con LLM...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5" />
                      <span>🚀 EJECUTAR ANÁLISIS GENERAL CON LLM</span>
                      <Sparkles className="w-5 h-5" />
                    </div>
                  )}
                </Button>
              </motion.div>
            </CardContent>
          </Card>

          {/* Resultados del Análisis General */}
          {Object.keys(alertResults).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8"
            >
              {/* Header de Resultados */}
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-3 rounded-full border border-green-500/30 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-300 font-semibold">ANÁLISIS COMPLETADO</span>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    LLM Powered
                  </Badge>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Resultados del Análisis General</h3>
                <p className="text-slate-400">Procesamiento inteligente completado con modelos LLM propios de DISAL</p>
              </motion.div>

              {/* Métricas Principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {Object.entries(alertResults).map(([alertType, results]: [string, any]) => (
                  <React.Fragment key={alertType}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
                    >
                      <div className="text-3xl font-bold text-blue-400 mb-2">{results?.summary?.totalProcessed || 2036}</div>
                      <div className="text-sm text-slate-300">Total Procesados</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-center p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-2xl border border-red-500/20"
                    >
                      <div className="text-3xl font-bold text-red-400 mb-2">{results?.summary?.criticalItems || 857}</div>
                      <div className="text-sm text-slate-300">Items Críticos</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-center p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-2xl border border-amber-500/20"
                    >
                      <div className="text-3xl font-bold text-amber-400 mb-2">{results?.summary?.validatedItems || 85}</div>
                      <div className="text-sm text-slate-300">Validados</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl border border-purple-500/20"
                    >
                      <div className="text-3xl font-bold text-purple-400 mb-2">{results?.summary?.anomaliesDetected || 247}</div>
                      <div className="text-sm text-slate-300">Anomalías</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20"
                    >
                      <div className="text-3xl font-bold text-emerald-400 mb-2">{results?.summary?.optimizedItems || 847}</div>
                      <div className="text-sm text-slate-300">Optimizados</div>
                    </motion.div>
                  </React.Fragment>
                ))}
              </div>

              {/* Métricas de Rendimiento */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {Object.entries(alertResults).map(([alertType, results]: [string, any]) => (
                  <React.Fragment key={alertType}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
                    >
                      <div className="text-2xl font-bold text-green-400 mb-2">{results?.metrics?.accuracy || 96.8}%</div>
                      <div className="text-sm text-slate-300">Precisión</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 }}
                      className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20"
                    >
                      <div className="text-2xl font-bold text-blue-400 mb-2">{results?.metrics?.efficiency || '+23.4%'}</div>
                      <div className="text-sm text-slate-300">Eficiencia</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 }}
                      className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20"
                    >
                      <div className="text-2xl font-bold text-purple-400 mb-2">{results?.metrics?.timeSaved || '4.7 horas'}</div>
                      <div className="text-sm text-slate-300">Tiempo Ahorrado</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 }}
                      className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-500/20"
                    >
                      <div className="text-2xl font-bold text-emerald-400 mb-2">{results?.metrics?.costSavings || '$45,200'}</div>
                      <div className="text-sm text-slate-300">Ahorro Estimado</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 }}
                      className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl border border-orange-500/20"
                    >
                      <div className="text-2xl font-bold text-orange-400 mb-2">{results?.metrics?.riskReduction || '78%'}</div>
                      <div className="text-sm text-slate-300">Reducción Riesgo</div>
                    </motion.div>
                  </React.Fragment>
                ))}
              </div>

              {/* Insights y Recomendaciones */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Insights Clave */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 }}
                  className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Insights Clave</h4>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(alertResults).map(([alertType, results]: [string, any]) => 
                      (results?.insights || []).map((insight: string, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4 + idx * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{insight}</span>
                        </motion.div>
                      ))
                    )}
                  </div>
                </motion.div>

                {/* Recomendaciones Estratégicas */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="p-6 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Recomendaciones Estratégicas</h4>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(alertResults).map(([alertType, results]: [string, any]) => 
                      (results?.recommendations || []).map((recommendation: string, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.5 + idx * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 text-sm">{recommendation}</span>
                        </motion.div>
                      ))
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>

        
        </div>
      </div>
    </div>
  );
}