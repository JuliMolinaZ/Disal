'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ConteoRealizadosChart } from './charts/ConteoRealizadosChart';
import { ComparacionPositivosNegativosChart } from './charts/ComparacionPositivosNegativosChart';
import { SeccionesCantidadChart } from './charts/SeccionesCantidadChart';
import { LegendExplanatory, DataSourceInfo } from './LegendExplanatory';
import { SpecificChartsData } from '@/lib/specific-charts-processor';
import { chartColors } from '@/lib/color-palette';
import { BarChart3, PieChart, TrendingUp, Target, Database, AlertTriangle } from 'lucide-react';

interface GraficasEspecificasProps {
  data: SpecificChartsData;
  className?: string;
}

export function GraficasEspecificas({ data, className = '' }: GraficasEspecificasProps) {
  const colors = chartColors;

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="text-center space-y-8 modern-header p-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-slate-900">Análisis Específico de Inventario</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          Visualización detallada de los datos de inventario con enfoque en conteos realizados, 
          comparaciones de positivos/negativos y distribución por secciones de cantidad
        </p>
        <div className="flex justify-center space-x-3 mt-8">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* Resumen de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="modern-card hover:scale-105 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Database className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{data.resumen.totalConteos.toLocaleString()}</div>
            <div className="text-sm text-slate-600">Total Conteos Realizados</div>
          </CardContent>
        </Card>
        
        <Card className="modern-card hover:scale-105 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{data.resumen.totalPositivos.toLocaleString()}</div>
            <div className="text-sm text-slate-600">Registros Positivos</div>
          </CardContent>
        </Card>
        
        <Card className="modern-card hover:scale-105 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{data.resumen.totalNegativos.toLocaleString()}</div>
            <div className="text-sm text-slate-600">Registros Negativos</div>
          </CardContent>
        </Card>
        
        <Card className="modern-card hover:scale-105 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{data.resumen.totalCeros.toLocaleString()}</div>
            <div className="text-sm text-slate-600">Registros en Cero</div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfica 1: Conteo Realizados y Porcentaje de Diferencias */}
      <Card className="modern-card hover:scale-105 transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-2xl">
          <CardTitle className="text-xl flex items-center space-x-2">
            <BarChart3 className="h-6 w-6" />
            <span>Conteo Realizados y Porcentaje de Diferencias</span>
          </CardTitle>
          <p className="text-sm text-white/90">
            Análisis comparativo entre conteos generales y de ubicaciones, mostrando las diferencias porcentuales 
            identificadas durante el proceso de verificación cruzada.
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <ConteoRealizadosChart
            data={data.conteoRealizados}
            title="Conteo Realizados vs % Diferencias"
            colors={colors}
            height={500}
          />
          
          <LegendExplanatory
            title="Conteo Realizados y % Diferencias"
            description="Esta gráfica combina barras que muestran el total de conteos realizados por concepto con una línea que indica el porcentaje de diferencia entre conteos generales y de ubicaciones."
            dataSource="Datos extraídos del archivo CSV 'GraficasFinales - General.csv', procesando las columnas de conceptos generales (3-5) y conceptos de ubicaciones (9-10)."
            purpose="Identificar conceptos con mayores discrepancias entre conteos para priorizar validaciones y detectar posibles errores en el proceso de inventario."
            methodology="Se calcula la diferencia absoluta entre conteos generales y de ubicaciones, luego se expresa como porcentaje relativo al conteo general para normalizar las diferencias."
            insights={[
              "Conceptos con diferencias superiores al 50% requieren validación inmediata",
              "Diferencias menores al 10% pueden considerarse aceptables para el proceso",
              "La línea de tendencia ayuda a identificar patrones sistemáticos de error",
              "Los picos en la línea indican conceptos problemáticos que necesitan atención"
            ]}
            icon={<BarChart3 className="h-5 w-5" />}
            className="mt-6"
          />
        </CardContent>
      </Card>

      {/* Gráfica 2: Comparación Positivos y Negativos */}
      <Card className="modern-card hover:scale-105 transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-2xl">
          <CardTitle className="text-xl flex items-center space-x-2">
            <PieChart className="h-6 w-6" />
            <span>Comparación Positivos y Negativos</span>
          </CardTitle>
          <p className="text-sm text-white/90">
            Distribución de registros por tipo de valor (positivos, negativos y ceros), proporcionando una 
            visión clara de la composición de los datos capturados.
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <ComparacionPositivosNegativosChart
            data={data.comparacionPositivosNegativos}
            title="Distribución de Valores por Tipo"
            colors={colors}
            height={500}
          />
          
          <LegendExplanatory
            title="Comparación Positivos y Negativos"
            description="Gráfico de dona que muestra la distribución porcentual de registros clasificados como positivos (valores > 0), negativos (valores < 0) y ceros (valores = 0)."
            dataSource="Datos consolidados del archivo CSV combinando conceptos generales y de ubicaciones, sumando las cantidades de cada tipo de valor."
            purpose="Evaluar la calidad de los datos capturados y identificar la proporción de registros válidos vs problemáticos en el inventario."
            methodology="Se suman las cantidades de cada tipo de valor de ambas tablas (general y ubicaciones) y se calculan los porcentajes relativos del total."
            insights={[
              "Un alto porcentaje de positivos indica buena calidad de datos",
              "Presencia significativa de negativos puede indicar errores de captura",
              "Los ceros pueden representar productos sin stock o errores de conteo",
              "La proporción ideal debería ser >80% positivos, <15% ceros, <5% negativos"
            ]}
            icon={<PieChart className="h-5 w-5" />}
            className="mt-6"
          />
        </CardContent>
      </Card>

      {/* Gráfica 3: Cantidades por Secciones */}
      <Card className="modern-card hover:scale-105 transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-2xl">
          <CardTitle className="text-xl flex items-center space-x-2">
            <Target className="h-6 w-6" />
            <span>Cantidades Divididas por Secciones</span>
          </CardTitle>
          <p className="text-sm text-white/90">
            Análisis de la distribución de productos por rangos de cantidad (&gt;1000, 500-999, 100-499, 1-99), 
            mostrando la concentración de inventario en diferentes segmentos.
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <SeccionesCantidadChart
            data={data.seccionesCantidad}
            title="Distribución por Rangos de Cantidad"
            colors={colors}
            height={500}
          />
          
          <LegendExplanatory
            title="Cantidades Divididas por Secciones"
            description="Gráfico de barras que muestra la distribución de productos según rangos de cantidad, permitiendo identificar la concentración de inventario en diferentes segmentos de valor."
            dataSource="Datos extraídos de las columnas de rangos del archivo CSV (columnas 0-1 para generales y 6-7 para ubicaciones), consolidando las cantidades por rango."
            purpose="Analizar la distribución del inventario por segmentos de cantidad para identificar patrones de almacenamiento y optimizar la gestión de stock."
            methodology="Se agrupan los productos según sus rangos de cantidad predefinidos y se suman las cantidades de cada rango de ambas tablas para obtener el total consolidado."
            insights={[
              "Rangos altos (>1000) indican productos de alta rotación o gran volumen",
              "Rangos medios (100-999) representan productos de rotación moderada",
              "Rangos bajos (1-99) pueden indicar productos de baja rotación o errores de conteo",
              "La distribución ideal depende del tipo de negocio y estrategia de inventario"
            ]}
            icon={<Target className="h-5 w-5" />}
            className="mt-6"
          />
        </CardContent>
      </Card>

      {/* Análisis Detallado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Top 5 Conceptos con Mayor Conteo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.conteoRealizados.slice(0, 5).map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-800">{item.concepto}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-blue-700">{item.conteoRealizado.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{item.porcentajeDiferencia}% diferencia</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Distribución por Secciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.seccionesCantidad.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-800">{item.seccion}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-purple-700">{item.cantidad.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{item.porcentaje}% del total</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights y Observaciones */}
      <Card className="hover-lift transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <span>Insights y Observaciones Clave</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Diferencias Identificadas</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mayor diferencia en conceptos con códigos de barras conflictivos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Discrepancias significativas en productos de alta rotación</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Diferencias menores en productos de bajo valor</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800">Recomendaciones</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Implementar validación cruzada automática para códigos conflictivos</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Establecer conteos cíclicos para productos de alta rotación</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mejorar capacitación en identificación de productos</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información de Fuente de Datos */}
      <DataSourceInfo
        source="Archivo CSV: 'GraficasFinales - General.csv'"
        processedBy="Sistema de Procesamiento Avanzado de Inventario DISAL"
        lastUpdated={new Date().toLocaleString('es-ES')}
        reliability="Media"
        className="mt-8"
      />
    </div>
  );
}
