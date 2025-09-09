'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { DataPoint } from '@/lib/data-processor';

interface BarChart100Props {
  data: DataPoint[];
  height?: number;
}

export function BarChart100({ data, height = 500 }: BarChart100Props) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
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
        const percentage = ((param.value / total) * 100).toFixed(1);
        
        return `
          <div style="font-weight: 600; margin-bottom: 8px; color: #1F2937;">
            ${param.name}
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <span style="display: inline-block; width: 12px; height: 12px; background: ${param.color}; border-radius: 2px; margin-right: 8px;"></span>
            <span style="color: #6B7280;">Valor:</span>
            <span style="font-weight: 600; margin-left: 8px; color: #1F2937;">${param.value.toLocaleString()}</span>
          </div>
          <div style="color: #9CA3AF; font-size: 12px;">
            ${percentage}% del total
          </div>
        `;
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
          if (value.length > 8) {
            return value.substring(0, 8) + '...';
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
    series: [
      {
        name: 'Valores',
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
            borderRadius: [8, 8, 0, 0],
            shadowBlur: 12,
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowColor: professionalColors[index % professionalColors.length].primary + '60'
          }
        })),
        barWidth: '70%',
        barCategoryGap: '25%',
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 8,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            borderWidth: 2,
            borderColor: '#FFFFFF'
          },
          focus: 'series',
          scale: 1.05
        },
        animationDelay: (idx: number) => idx * 100
      }
    ],
    animation: true,
    animationDuration: 1800,
    animationEasing: 'elasticOut',
    animationDelay: 0,
    animationDurationUpdate: 800,
    animationEasingUpdate: 'cubicInOut'
  };

  return (
    <div className="w-full bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-xl flex flex-col items-center justify-center">
      {/* Métricas de resumen */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="text-center p-4 rounded-xl bg-blue-50">
          <div className="text-2xl font-bold text-blue-600">
            {total.toLocaleString()}
          </div>
          <div className="text-sm text-blue-500 font-medium">Total General</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-green-50">
          <div className="text-2xl font-bold text-green-600">
            {data.length}
          </div>
          <div className="text-sm text-green-500 font-medium">Elementos</div>
        </div>
        <div className="text-center p-4 rounded-xl bg-purple-50">
          <div className="text-2xl font-bold text-purple-600">
            {(total / data.length).toFixed(0)}
          </div>
          <div className="text-sm text-purple-500 font-medium">Promedio</div>
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