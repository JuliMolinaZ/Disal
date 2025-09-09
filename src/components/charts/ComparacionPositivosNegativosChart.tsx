'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ComparacionPositivosNegativos } from '@/lib/specific-charts-processor';

interface ComparacionPositivosNegativosChartProps {
  data: ComparacionPositivosNegativos[];
  height?: number;
}

export function ComparacionPositivosNegativosChart({ data, height = 500 }: ComparacionPositivosNegativosChartProps) {
  // Colores profesionales para positivos y negativos
  const colorMap = {
    'Positivos': { primary: '#10B981', secondary: '#059669', gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' },
    'Negativos': { primary: '#EF4444', secondary: '#DC2626', gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)' },
    'Ceros': { primary: '#6B7280', secondary: '#4B5563', gradient: 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)' }
  };

  const total = data.reduce((sum, item) => sum + item.cantidad, 0);

  const option = {
    backgroundColor: 'transparent',
    title: {
      show: false
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      borderColor: '#D1D5DB',
      borderWidth: 2,
      borderRadius: 16,
      padding: [20, 24],
      textStyle: {
        color: '#1F2937',
        fontSize: 16,
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: '600'
      },
      shadowBlur: 25,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffsetX: 0,
      shadowOffsetY: 6,
      formatter: (params: any) => {
        const { name, value, percent } = params;
        const color = colorMap[name as keyof typeof colorMap];
        
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
            <div style="color: #6B7280; font-size: 13px;">
              ${percent}% del total
            </div>
            <div style="margin-top: 8px; padding: 6px 12px; background: ${color.primary}20; border-radius: 8px; color: ${color.primary}; font-weight: 600; font-size: 12px;">
              ${name === 'Positivos' ? '✓ Conteos Correctos' : name === 'Negativos' ? '⚠ Discrepancias' : '○ Sin Diferencias'}
            </div>
          </div>
        `;
      }
    },
    legend: {
      orient: 'horizontal',
      bottom: 20,
      left: 'center',
      itemGap: 30,
      textStyle: {
        fontSize: 14,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#374151',
        fontWeight: '600'
      },
      itemWidth: 20,
      itemHeight: 14,
      formatter: (name: string) => {
        const item = data.find(d => d.tipo === name);
        return `${name} (${item?.cantidad.toLocaleString() || 0})`;
      }
    },
    series: [
      {
        name: 'Comparación',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 12,
          borderColor: '#FFFFFF',
          borderWidth: 4,
          shadowBlur: 15,
          shadowColor: 'rgba(0, 0, 0, 0.15)',
          shadowOffsetX: 0,
          shadowOffsetY: 4
        },
        label: {
          show: true,
          position: 'outside',
          formatter: (params: any) => {
            return `${params.name}\n${params.percent}%`;
          },
          fontSize: 12,
          fontWeight: '600',
          color: '#374151',
          fontFamily: 'Inter, system-ui, sans-serif',
          distance: 20
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 25,
            shadowOffsetX: 0,
            shadowOffsetY: 8,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            scale: 1.05,
            borderWidth: 5
          },
          label: {
            show: true,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#1F2937'
          },
          scale: true,
          scaleSize: 10
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 10,
          lineStyle: {
            color: '#D1D5DB',
            width: 1
          }
        },
        data: data.map(item => ({
          value: item.cantidad,
          name: item.tipo,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 1, y2: 1,
              colorStops: [
                { offset: 0, color: colorMap[item.tipo as keyof typeof colorMap].primary },
                { offset: 1, color: colorMap[item.tipo as keyof typeof colorMap].secondary }
              ]
            }
          }
        })),
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: (idx: number) => idx * 150,
        animationDuration: 1800
      }
    ],
    animation: true,
    animationDuration: 2500,
    animationEasing: 'elasticOut',
    animationDelay: 300
  };

  return (
    <div className="w-full bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-white/20 shadow-lg flex flex-col items-center justify-center">
      {/* Métricas de resumen */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {data.map((item, index) => {
          const color = colorMap[item.tipo as keyof typeof colorMap];
          return (
            <div key={item.tipo} className="text-center p-4 rounded-xl" style={{ background: `${color.primary}10` }}>
              <div className="flex items-center justify-center mb-2">
                <div 
                  className="w-4 h-4 rounded-full mr-2" 
                  style={{ background: color.primary }}
                ></div>
                <span className="text-sm font-semibold text-gray-700">{item.tipo}</span>
              </div>
              <div className="text-2xl font-bold" style={{ color: color.primary }}>
                {item.cantidad.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                {item.porcentaje}% del total
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="w-full">
        <ReactECharts 
          option={option} 
          style={{ height: `${height}px`, width: '100%', maxWidth: '100%' }}
          opts={{ renderer: 'canvas' }}
          theme="light"
        />
      </div>
    </div>
  );
}