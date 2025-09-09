'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { DataPoint } from '@/lib/data-processor';

interface DataZoomChartProps {
  data: DataPoint[];
  height?: number;
}

export function DataZoomChart({ data, height = 500 }: DataZoomChartProps) {
  // Sistema de colores profesionales
  const professionalColors = [
    { primary: '#667EEA', secondary: '#764BA2', accent: '#8B5CF6' },
    { primary: '#F093FB', secondary: '#F5576C', accent: '#EC4899' },
    { primary: '#4FACFE', secondary: '#00F2FE', accent: '#06B6D4' },
    { primary: '#43E97B', secondary: '#38F9D7', accent: '#10B981' }
  ];

  const option = {
    backgroundColor: 'transparent',
    title: {
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        },
        lineStyle: {
          color: '#667EEA',
          width: 2,
          type: 'dashed'
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
        
        return `
          <div style="font-weight: 600; margin-bottom: 8px; color: #1F2937;">
            ${param.name}
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <span style="display: inline-block; width: 12px; height: 12px; background: ${param.color}; border-radius: 50%; margin-right: 8px;"></span>
            <span style="color: #6B7280;">Valor:</span>
            <span style="font-weight: 600; margin-left: 8px; color: #1F2937;">${param.value.toLocaleString()}</span>
          </div>
          <div style="color: #9CA3AF; font-size: 12px;">
            ${percentage}% del máximo
          </div>
        `;
      }
    },
    legend: {
      data: ['Serie Temporal'],
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
      left: '12%',
      right: '12%',
      bottom: '20%',
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
        rotate: data.length > 8 ? 45 : 0
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
      type: 'value',
      name: 'Valor',
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
      }
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100,
        throttle: 50
      },
      {
        type: 'slider',
        start: 0,
        end: 100,
        height: 30,
        bottom: 20,
        handleStyle: {
          color: '#667EEA',
          borderColor: '#667EEA',
          borderWidth: 2
        },
        textStyle: {
          color: '#6B7280',
          fontSize: 11
        },
        backgroundColor: '#F9FAFB',
        borderColor: '#E5E7EB',
        fillerColor: 'rgba(102, 126, 234, 0.1)',
        selectedDataBackground: {
          areaStyle: {
            color: 'rgba(102, 126, 234, 0.2)'
          },
          lineStyle: {
            color: '#667EEA'
          }
        }
      }
    ],
    series: [
      {
        name: 'Serie Temporal',
        type: 'line',
        data: data.map(item => item.value),
        smooth: true,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 1, y2: 0,
            colorStops: [
              { offset: 0, color: professionalColors[0].primary },
              { offset: 0.5, color: professionalColors[0].accent },
              { offset: 1, color: professionalColors[0].secondary }
            ]
          },
          width: 5,
          shadowBlur: 8,
          shadowColor: professionalColors[0].primary + '40',
          shadowOffsetX: 0,
          shadowOffsetY: 2
        },
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5, y: 0.5, r: 0.5,
            colorStops: [
              { offset: 0, color: '#FFFFFF' },
              { offset: 0.7, color: professionalColors[0].primary },
              { offset: 1, color: professionalColors[0].secondary }
            ]
          },
          borderWidth: 4,
          borderColor: '#FFFFFF',
          shadowBlur: 10,
          shadowColor: professionalColors[0].primary + '80',
          shadowOffsetX: 0,
          shadowOffsetY: 2
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: professionalColors[0].primary + '40' },
              { offset: 0.5, color: professionalColors[0].accent + '20' },
              { offset: 1, color: professionalColors[0].secondary + '10' }
            ]
          }
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 15,
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowColor: professionalColors[0].primary + '90',
            scale: 1.2
          },
          focus: 'series',
          scale: true,
          scaleSize: 15
        },
        animationDelay: (idx: number) => idx * 50
      }
    ],
    animation: true,
    animationDuration: 2500,
    animationEasing: 'elasticOut',
    animationDelay: 0,
    animationDurationUpdate: 1200,
    animationEasingUpdate: 'cubicInOut'
  };

  return (
    <div className="w-full bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-xl flex flex-col items-center justify-center">
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
            {(data.reduce((sum, d) => sum + d.value, 0) / data.length).toFixed(0)}
          </div>
          <div className="text-xs text-purple-500 font-medium">Promedio</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-orange-50">
          <div className="text-lg font-bold text-orange-600">
            {data.length}
          </div>
          <div className="text-xs text-orange-500 font-medium">Puntos</div>
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