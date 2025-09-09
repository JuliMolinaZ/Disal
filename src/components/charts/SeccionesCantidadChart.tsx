'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { SeccionesCantidad } from '@/lib/specific-charts-processor';

interface SeccionesCantidadChartProps {
  data: SeccionesCantidad[];
  height?: number;
}

export function SeccionesCantidadChart({ data, height = 500 }: SeccionesCantidadChartProps) {
  // Sistema de colores profesionales para secciones
  const professionalColors = [
    { primary: '#8B5CF6', secondary: '#7C3AED', accent: '#A78BFA' },
    { primary: '#06B6D4', secondary: '#0891B2', accent: '#22D3EE' },
    { primary: '#10B981', secondary: '#059669', accent: '#34D399' },
    { primary: '#F59E0B', secondary: '#D97706', accent: '#FBBF24' },
    { primary: '#EF4444', secondary: '#DC2626', accent: '#F87171' },
    { primary: '#EC4899', secondary: '#DB2777', accent: '#F472B6' }
  ];

  // const total = data.reduce((sum, item) => sum + item.cantidad, 0);

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
      formatter: (params: { name: string; value: number; percent: number }) => {
        const { name, value, percent } = params;
        const item = data.find(d => d.seccion === name);
        const color = professionalColors[data.findIndex(d => d.seccion === name) % professionalColors.length];
        
        return `
          <div style="text-align: center;">
            <div style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #1F2937;">
              ${name}
            </div>
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 6px;">
              <span style="display: inline-block; width: 16px; height: 16px; background: ${color.primary}; border-radius: 4px; margin-right: 8px;"></span>
              <span style="font-size: 18px; font-weight: 600; color: #1F2937;">
                ${value.toLocaleString()}
              </span>
            </div>
            <div style="color: #6B7280; font-size: 13px; margin-bottom: 8px;">
              ${percent}% del total
            </div>
            <div style="background: #F3F4F6; border-radius: 8px; padding: 8px; margin-top: 8px;">
              <div style="font-size: 11px; color: #6B7280; margin-bottom: 4px;">Rango de valores:</div>
              <div style="font-size: 12px; font-weight: 600; color: #1F2937;">
                ${item?.rango.min.toLocaleString()} - ${item?.rango.max.toLocaleString()}
              </div>
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
        const item = data.find(d => d.seccion === name);
        return `${name} (${item?.cantidad.toLocaleString() || 0})`;
      }
    },
    series: [
      {
        name: 'Secciones',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#FFFFFF',
          borderWidth: 4,
          shadowBlur: 12,
          shadowColor: 'rgba(0, 0, 0, 0.15)',
          shadowOffsetX: 0,
          shadowOffsetY: 3
        },
        label: {
          show: true,
          position: 'outside',
          formatter: (params: { name: string; percent: number }) => {
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
            shadowBlur: 20,
            shadowOffsetX: 0,
            shadowOffsetY: 6,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            scale: 1.08,
            borderWidth: 5
          },
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#1F2937'
          },
          scale: true,
          scaleSize: 8
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
        data: data.map((item, index) => ({
          value: item.cantidad,
          name: item.seccion,
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
        animationDelay: (idx: number) => idx * 120,
        animationDuration: 1600
      }
    ],
    animation: true,
    animationDuration: 2200,
    animationEasing: 'elasticOut',
    animationDelay: 200
  };

  return (
    <div className="w-full bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-white/20 shadow-lg flex flex-col items-center justify-center">
      {/* Métricas de resumen */}
      <div className="mb-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {data.map((item, index) => {
            const color = professionalColors[index % professionalColors.length];
            return (
              <div key={item.seccion} className="p-3 rounded-lg" style={{ background: `${color.primary}10` }}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded mr-2" 
                      style={{ background: color.primary }}
                    ></div>
                    <span className="text-xs font-semibold text-gray-700 truncate">{item.seccion}</span>
                  </div>
                  <span className="text-xs font-bold" style={{ color: color.primary }}>
                    {item.porcentaje}%
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-800">
                  {item.cantidad.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  Rango: {item.rango.min}-{item.rango.max}
                </div>
              </div>
            );
          })}
        </div>
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