'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ConteoData } from '@/lib/specific-charts-processor';

interface ConteoRealizadosChartProps {
  data: ConteoData[];
  height?: number;
}

export function ConteoRealizadosChart({ data, height = 500 }: ConteoRealizadosChartProps) {
  // Sistema de colores profesional
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
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      borderColor: '#D1D5DB',
      borderWidth: 2,
      borderRadius: 16,
      padding: [16, 20],
      textStyle: {
        color: '#1F2937',
        fontSize: 15,
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: '500'
      },
      shadowBlur: 20,
      shadowColor: 'rgba(0, 0, 0, 0.15)',
      shadowOffsetX: 0,
      shadowOffsetY: 4,
      formatter: (params: any) => {
        const conteoData = params[0];
        const diferenciaData = params[1];
        const total = data.reduce((sum, item) => sum + item.conteoRealizado, 0);
        const porcentaje = ((conteoData.value / total) * 100).toFixed(1);
        
        return `
          <div style="font-weight: 600; margin-bottom: 8px; color: #1F2937;">
            ${conteoData.name}
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 4px;">
            <span style="display: inline-block; width: 12px; height: 12px; background: ${conteoData.color}; border-radius: 2px; margin-right: 8px;"></span>
            <span style="color: #6B7280;">Conteo Realizado:</span>
            <span style="font-weight: 600; margin-left: 8px; color: #1F2937;">${conteoData.value.toLocaleString()}</span>
            <span style="color: #9CA3AF; margin-left: 4px;">(${porcentaje}%)</span>
          </div>
          <div style="display: flex; align-items: center;">
            <span style="display: inline-block; width: 12px; height: 12px; background: ${diferenciaData.color}; border-radius: 50%; margin-right: 8px;"></span>
            <span style="color: #6B7280;">% Diferencia:</span>
            <span style="font-weight: 600; margin-left: 8px; color: ${diferenciaData.value > 3 ? '#EF4444' : diferenciaData.value > 1 ? '#F59E0B' : '#10B981'};">
              ${diferenciaData.value}%
            </span>
          </div>
        `;
      }
    },
    legend: {
      data: ['Conteo Realizado', '% Diferencia'],
      top: 10,
      left: 'center',
      itemGap: 40,
      textStyle: {
        fontSize: 14,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#374151',
        fontWeight: '600'
      },
      itemWidth: 20,
      itemHeight: 14
    },
    grid: {
      left: '8%',
      right: '5%',
      bottom: '15%',
      top: '10%',
      containLabel: true,
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    },
    xAxis: {
      type: 'category',
      data: data.map(item => item.concepto),
      axisLabel: {
        interval: 0,
        rotate: 0,
        fontSize: 14,
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#374151',
        fontWeight: '500',
        margin: 12,
        formatter: (value: string) => {
          if (value.length > 12) {
            return value.substring(0, 12) + '...';
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
    yAxis: [
      {
        type: 'value',
        name: 'Conteo Realizado',
        position: 'left',
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
          fontSize: 12,
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
      {
        type: 'value',
        name: '% Diferencia',
        position: 'right',
        nameTextStyle: {
          color: '#374151',
          fontSize: 14,
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '600'
        },
        axisLabel: {
          formatter: '{value}%',
          fontSize: 12,
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
          show: false
        }
      }
    ],
    series: [
      {
        name: 'Conteo Realizado',
        type: 'bar',
        data: data.map((item, index) => ({
          value: item.conteoRealizado,
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
            shadowBlur: 12,
            shadowOffsetX: 0,
            shadowOffsetY: 4,
            shadowColor: professionalColors[index % professionalColors.length].primary + '60'
          }
        })),
        barWidth: '60%',
        barCategoryGap: '15%',
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
      },
      {
        name: '% Diferencia',
        type: 'line',
        yAxisIndex: 1,
        data: data.map(item => item.porcentajeDiferencia),
        lineStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 1, y2: 0,
            colorStops: [
              { offset: 0, color: '#EF4444' },
              { offset: 0.5, color: '#F59E0B' },
              { offset: 1, color: '#10B981' }
            ]
          },
          width: 5,
          shadowBlur: 8,
          shadowColor: '#EF444460',
          shadowOffsetX: 0,
          shadowOffsetY: 2
        },
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5, y: 0.5, r: 0.5,
            colorStops: [
              { offset: 0, color: '#FFFFFF' },
              { offset: 0.7, color: '#EF4444' },
              { offset: 1, color: '#DC2626' }
            ]
          },
          borderWidth: 4,
          borderColor: '#FFFFFF',
          shadowBlur: 10,
          shadowColor: '#EF444480',
          shadowOffsetX: 0,
          shadowOffsetY: 2
        },
        symbol: 'circle',
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            shadowBlur: 12,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: '#EF444480'
          },
          focus: 'series'
        },
        smooth: true,
        animationDelay: (idx: number) => idx * 100 + 200
      }
    ],
    animation: true,
    animationDuration: 2000,
    animationEasing: 'elasticOut',
    animationDelay: 0,
    animationDurationUpdate: 1200,
    animationEasingUpdate: 'cubicInOut',
    animationThreshold: 2000
  };

  return (
    <div className="w-full bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-white/20 shadow-lg flex flex-col items-center justify-center">
      <ReactECharts 
        option={option} 
        style={{ height: `${height}px`, width: '100%', maxWidth: '100%' }}
        opts={{ renderer: 'canvas' }}
        theme="light"
      />
    </div>
  );
}