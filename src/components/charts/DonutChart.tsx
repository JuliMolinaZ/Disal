'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { DataPoint } from '@/lib/data-processor';

interface DonutChartProps {
  data: DataPoint[];
  height?: number;
}

export function DonutChart({ data, height = 500 }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Sistema de colores profesionales
  const professionalColors = [
    { primary: '#10B981', secondary: '#059669', gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' },
    { primary: '#F59E0B', secondary: '#D97706', gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' },
    { primary: '#EF4444', secondary: '#DC2626', gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)' },
    { primary: '#8B5CF6', secondary: '#7C3AED', gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)' },
    { primary: '#06B6D4', secondary: '#0891B2', gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)' },
    { primary: '#EC4899', secondary: '#DB2777', gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)' }
  ];

  const option = {
    backgroundColor: 'transparent',
    title: {
      show: false
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#E5E7EB',
      borderWidth: 1,
      borderRadius: 12,
      padding: [16, 20],
      textStyle: {
        color: '#1F2937',
        fontSize: 14,
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      formatter: (params: any) => {
        const { name, value, percent } = params;
        const color = professionalColors[data.findIndex(d => d.name === name) % professionalColors.length];
        
        return `
          <div style="text-align: center;">
            <div style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #1F2937;">
              ${name}
            </div>
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 6px;">
              <span style="display: inline-block; width: 16px; height: 16px; background: ${color.primary}; border-radius: 50%; margin-right: 8px;"></span>
              <span style="font-size: 18px; font-weight: 600; color: #1F2937;">
                ${value.toLocaleString()}
              </span>
            </div>
            <div style="color: #6B7280; font-size: 13px; margin-bottom: 8px;">
              ${percent}% del total
            </div>
            <div style="margin-top: 8px; padding: 6px 12px; background: ${color.primary}20; border-radius: 8px; color: ${color.primary}; font-weight: 600; font-size: 12px;">
              ${name.includes('Correctos') ? '✓ Excelente' : name.includes('Menores') ? '⚠ Atención' : '❌ Crítico'}
            </div>
          </div>
        `;
      }
    },
    legend: {
      orient: 'horizontal',
      bottom: 20,
      left: 'center',
      itemGap: 60,
      textStyle: {
        fontSize: 16,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#1F2937',
        fontWeight: '600'
      },
      itemWidth: 24,
      itemHeight: 16,
      formatter: (name: string) => {
        const item = data.find(d => d.name === name);
        return `${name} (${item?.value.toLocaleString() || 0})`;
      }
    },
    series: [
      {
        name: 'Distribución',
        type: 'pie',
        radius: ['45%', '80%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#FFFFFF',
          borderWidth: 4,
          shadowBlur: 12,
          shadowColor: 'rgba(0, 0, 0, 0.15)'
        },
        label: {
          show: true,
          position: 'outside',
          formatter: (params: any) => {
            return `${params.name}\n${params.value.toLocaleString()}\n${params.percent}%`;
          },
          fontSize: 12,
          fontWeight: '600',
          color: '#1F2937',
          fontFamily: 'Inter, system-ui, sans-serif'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          },
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 15,
          lineStyle: {
            color: '#E5E7EB',
            width: 2
          }
        },
        data: data.map((item, index) => ({
          value: item.value,
          name: item.name,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 1,
              colorStops: [
                { offset: 0, color: professionalColors[index % professionalColors.length].primary },
                { offset: 1, color: professionalColors[index % professionalColors.length].secondary }
              ]
            }
          }
        })),
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: (idx: number) => idx * 200
      }
    ],
    animation: true,
    animationDuration: 2500,
    animationEasing: 'cubicOut'
  };

  return (
    <div className="w-full bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-xl flex flex-col items-center justify-center">
      {/* Métricas centrales */}
      <div className="mb-6 text-center">
        <div className="inline-block p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
          <div className="text-3xl font-bold text-gray-800 mb-1">
            {total.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Total General
          </div>
        </div>
      </div>

      {/* Métricas de resumen */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {data.map((item, index) => {
          const color = professionalColors[index % professionalColors.length];
          return (
            <div key={item.name} className="text-center p-4 rounded-xl" style={{ background: `${color.primary}10` }}>
              <div className="flex items-center justify-center mb-2">
                <div 
                  className="w-4 h-4 rounded-full mr-2" 
                  style={{ background: color.primary }}
                ></div>
                <span className="text-sm font-semibold text-gray-700">{item.name}</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: color.primary }}>
                {item.value.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                {((item.value / total) * 100).toFixed(1)}% del total
              </div>
            </div>
          );
        })}
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