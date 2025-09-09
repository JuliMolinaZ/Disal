'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { DataPoint } from '@/lib/data-processor';

interface LogScaleChartProps {
  data: DataPoint[];
  height?: number;
}

export function LogScaleChart({ data, height = 500 }: LogScaleChartProps) {
  // Sistema de colores profesionales
  const professionalColors = [
    { primary: '#667EEA', secondary: '#764BA2', gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)' },
    { primary: '#F093FB', secondary: '#F5576C', gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)' },
    { primary: '#4FACFE', secondary: '#00F2FE', gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)' },
    { primary: '#43E97B', secondary: '#38F9D7', gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)' },
    { primary: '#FA709A', secondary: '#FEE140', gradient: 'linear-gradient(135deg, #FA709A 0%, #FEE140 100%)' },
    { primary: '#A8EDEA', secondary: '#FED6E3', gradient: 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 100%)' }
  ];

  const option = {
    backgroundColor: 'transparent',
    title: {
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#E5E7EB',
      borderWidth: 1,
      borderRadius: 12,
      padding: [12, 16],
      textStyle: {
        color: '#1F2937',
        fontSize: 13,
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      formatter: (params: any) => {
        const param = params[0];
        const maxValue = Math.max(...data.map(d => d.value));
        const percentage = ((param.value / maxValue) * 100).toFixed(1);
        const logValue = Math.log10(param.value).toFixed(2);
        
        return `
          <div style="font-weight: 600; margin-bottom: 8px; color: #1F2937;">
            ${param.name}
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <span style="display: inline-block; width: 12px; height: 12px; background: ${param.color}; border-radius: 2px; margin-right: 8px;"></span>
            <span style="color: #6B7280;">Valor:</span>
            <span style="font-weight: 600; margin-left: 8px; color: #1F2937;">${param.value.toLocaleString()}</span>
          </div>
          <div style="color: #9CA3AF; font-size: 12px; margin-bottom: 4px;">
            ${percentage}% del máximo
          </div>
          <div style="color: #9CA3AF; font-size: 12px;">
            Log₁₀: ${logValue}
          </div>
        `;
      }
    },
    legend: {
      data: ['Valores Logarítmicos'],
      top: 15,
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#1F2937',
        fontWeight: '600'
      }
    },
    grid: {
      left: '15%',
      right: '15%',
      bottom: '15%',
      top: '10%',
      containLabel: true,
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      borderColor: 'transparent'
    },
    xAxis: {
      type: 'category',
      data: data.map(item => item.name),
      axisLabel: {
        fontSize: 14,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#374151',
        fontWeight: '500',
        formatter: (value: string) => {
          if (value.length > 6) {
            return value.substring(0, 6) + '...';
          }
          return value;
        }
      },
      axisLine: {
        lineStyle: {
          color: '#E5E7EB',
          width: 1
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'log',
      name: 'Valor (Escala Logarítmica)',
        nameTextStyle: {
          color: '#374151',
          fontSize: 14,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '600'
        },
        axisLabel: {
          formatter: (value: number) => {
            if (value >= 1000) {
              return (value / 1000).toFixed(1) + 'K';
            }
            return value.toString();
          },
          fontSize: 13,
          color: '#6B7280',
          fontWeight: '500'
        },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#F3F4F6',
          type: 'dashed'
        }
      },
      logBase: 10
    },
    series: [
      {
        name: 'Valores Logarítmicos',
        type: 'bar',
        data: data.map((item, index) => ({
          value: item.value,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: professionalColors[index % professionalColors.length].primary },
                { offset: 1, color: professionalColors[index % professionalColors.length].secondary }
              ]
            },
            borderRadius: [6, 6, 0, 0],
            shadowBlur: 8,
            shadowColor: professionalColors[index % professionalColors.length].primary + '40'
          }
        })),
        barWidth: '70%',
        barCategoryGap: '25%',
        emphasis: {
          itemStyle: {
            shadowBlur: 15,
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowColor: 'rgba(0, 0, 0, 0.2)'
          },
          focus: 'series'
        },
        animationDelay: (idx: number) => idx * 100
      }
    ],
    animation: true,
    animationDuration: 1500,
    animationEasing: 'cubicOut',
    animationDelay: 0,
    animationDurationUpdate: 800,
    animationEasingUpdate: 'cubicInOut'
  };

  return (
    <div className="w-full bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-xl flex flex-col items-center justify-center">
      {/* Información sobre escala logarítmica */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 max-w-2xl">
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm font-semibold text-blue-800">Escala Logarítmica</span>
        </div>
        <p className="text-xs text-blue-700">
          Esta gráfica utiliza una escala logarítmica para visualizar mejor las diferencias entre valores que varían en órdenes de magnitud.
        </p>
      </div>

      {/* Métricas de resumen */}
      <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
        <div className="text-center p-3 rounded-lg bg-blue-50">
          <div className="text-lg font-bold text-blue-600">
            {Math.max(...data.map(d => d.value)).toLocaleString()}
          </div>
          <div className="text-xs text-blue-500 font-medium">Valor Máximo</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-green-50">
          <div className="text-lg font-bold text-green-600">
            {Math.min(...data.map(d => d.value)).toLocaleString()}
          </div>
          <div className="text-xs text-green-500 font-medium">Valor Mínimo</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-purple-50">
          <div className="text-lg font-bold text-purple-600">
            {Math.log10(Math.max(...data.map(d => d.value))).toFixed(1)}
          </div>
          <div className="text-xs text-purple-500 font-medium">Log₁₀ Máximo</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-orange-50">
          <div className="text-lg font-bold text-orange-600">
            {data.length}
          </div>
          <div className="text-xs text-orange-500 font-medium">Elementos</div>
        </div>
      </div>
      
      <ReactECharts 
        option={option} 
        style={{ height: `${height}px`, width: '100%', maxWidth: '100%' }}
        opts={{ renderer: 'canvas' }}
        theme="light"
      />
    </div>
  );
}