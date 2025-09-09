'use client';

import React from 'react';
import { 
  Users, 
  Target, 
  CheckCircle, 
  TrendingUp, 
  Database, 
  Wifi, 
  FileText,
  Clock,
  AlertCircle,
  Calendar,
  CheckSquare,
  RefreshCw
} from 'lucide-react';

interface ReporteEjecutivoProps {
  className?: string;
}

export function ReporteEjecutivo({ className = '' }: ReporteEjecutivoProps) {
  return (
    <div className={`space-y-12 ${className}`}>
      {/* Header del Reporte */}
      <div className="text-center space-y-8 p-12 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 rounded-3xl">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100">
            Reporte de Inventario DISAL
          </h1>
          <div className="w-32 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
          Documentación completa de las actividades realizadas durante la toma de inventario del día 31 de agosto, incluyendo la
          organización de equipos, metodología implementada con aplicación móvil, y análisis detallado del desempeño y
          obstáculos identificados durante el proceso.
        </p>
        <div className="flex justify-center space-x-6">
          <div className="bg-white/80 dark:bg-slate-800/80 px-6 py-3 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">31 de Agosto 2024</span>
            </div>
          </div>
          <div className="bg-white/80 dark:bg-slate-800/80 px-6 py-3 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">36 Personas</span>
            </div>
          </div>
          <div className="bg-white/80 dark:bg-slate-800/80 px-6 py-3 rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <span className="font-semibold text-slate-700 dark:text-slate-300">12 Equipos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción y Objetivos */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">Introducción y Objetivos</h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            El presente informe documenta de manera integral las actividades realizadas durante la toma de inventario en las instalaciones de DISAL. Este proceso se llevó a cabo durante dos días consecutivos, implementando una metodología innovadora basada en el uso de aplicaciones móviles para optimizar la precisión y eficiencia del conteo.
          </p>
          <p>
            La jornada se estructuró con el objetivo de establecer un sistema de doble verificación que permitiera identificar discrepancias y garantizar la mayor confiabilidad posible en los resultados. Se describe detalladamente la organización de los equipos de trabajo, la metodología implementada y las observaciones generales sobre el desempeño del personal y los obstáculos técnicos identificados durante la ejecución.
          </p>
        </div>
          </div>

      {/* Información de Dirección y Fecha */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-3xl shadow-xl border-l-4 border-blue-500">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
          <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
          Información del Inventario
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center">
              <Target className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              Dirección del Inventario
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Instalaciones DISAL</strong><br/>
              Ubicación: Carretera a Sonsonate, km 28 ½, Cantón Lourdes, Colón, Departamento La Libertad, El Salvador<br/>
              Área de cobertura: Todas las zonas de almacén y bodegas
            </p>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center">
              <Clock className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
              Fecha y Duración
            </h3>
            <p className="text-slate-700 dark:text-slate-300">
              <strong>31 de Agosto 2024</strong><br/>
              Duración: 2 días consecutivos<br/>
              Horario: [Horario específico de trabajo]
            </p>
          </div>
        </div>
        </div>
        
      {/* Análisis Global */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-3xl shadow-xl border-l-4 border-green-500">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
          <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
          Análisis Global
        </h2>
        <div className="space-y-6">
          <div className="bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Resumen Ejecutivo</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              El inventario global mostró un desempeño satisfactorio con una precisión promedio del 94.2%. 
              Se identificaron áreas de mejora en la gestión de datos y estandarización de procesos que requieren 
              atención inmediata para optimizar futuras operaciones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/70 dark:bg-slate-800/70 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">94.2%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Precisión Global</div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">36</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Personas Participantes</div>
            </div>
            <div className="bg-white/70 dark:bg-slate-800/70 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">12</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Equipos de Trabajo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps para Mejora Continua */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-3xl shadow-xl border-l-4 border-orange-500">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
          <CheckSquare className="h-8 w-8 text-orange-600 dark:text-orange-400 mr-3" />
          Next Steps para Mejora Continua
        </h2>
        <div className="space-y-6">
          <div className="bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Acciones Inmediatas</h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Estandarización de Procesos:</strong> Implementar protocolos unificados para futuros inventarios</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Capacitación del Personal:</strong> Entrenamiento especializado en el uso de aplicaciones móviles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span><strong>Optimización de Apolo:</strong> Mejoras en la plataforma de gestión de inventarios</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Responsables</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-100">Chris RUN 🇲🇽</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Coordinación General</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <Target className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                <div>
                  <div className="font-semibold text-slate-800 dark:text-slate-100">Equipo DISAL</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Implementación Local</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Señal Móvil de RED de las SIMS */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-3xl shadow-xl border-l-4 border-purple-500">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
          <Wifi className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
          Señal Móvil de RED de las SIMS
        </h2>
        <div className="space-y-6">
          <div className="bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Análisis de Conectividad</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Problemas Identificados</h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Zonas con señal débil en áreas de almacén</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Interrupciones intermitentes en la transmisión de datos</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Lentitud en la sincronización de información</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Recomendaciones</h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Instalación de repetidores de señal en zonas críticas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Optimización de la configuración de red</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Implementación de sistema de respaldo offline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cambio de Reporte IA por Análisis de DATOS */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-3xl shadow-xl border-l-4 border-indigo-500">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
          <Database className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
          Análisis de DATOS (Actualización de Reporte IA)
        </h2>
        <div className="space-y-6">
          <div className="bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Transición Conceptual</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Se ha actualizado la terminología de "Reporte IA" a "Análisis de DATOS" para reflejar con mayor precisión 
              la naturaleza de los procesos implementados y las herramientas utilizadas en el inventario.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Antes: Reporte IA</h4>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Terminología que no reflejaba la realidad de los procesos de análisis de datos implementados.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Ahora: Análisis de DATOS</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Descripción precisa de los procesos de análisis estadístico y procesamiento de información.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white/70 dark:bg-slate-800/70 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Beneficios del Cambio</h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Mayor claridad en la comunicación de procesos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Alineación con las capacidades reales del sistema</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Expectativas más realistas para futuros proyectos</span>
              </li>
            </ul>
          </div>
        </div>
          </div>

      {/* Actividades Principales Realizadas */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Actividades Principales Realizadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Reunión de Coordinación</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Inicio de jornada con presentación de objetivos, asignación de responsables por área y entrega de dispositivos móviles con la aplicación de inventario.
              </p>
            </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Conteo Cruzado</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Ejecución del conteo de productos en zonas asignadas mediante sistema cruzado entre conteo 1 y conteo 2 para verificación.
              </p>
            </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Consolidación de Datos</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Generación de reportes automáticos mediante la aplicación para consolidar toda la información capturada.
              </p>
            </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold">04</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Validación Final</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Realización de conteo 3 para validar diferencias identificadas entre los primeros dos conteos y acompañamiento continuo al equipo.
              </p>
          </div>
        </div>
      </div>

      {/* Distribución y Organización del Equipo */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Distribución y Organización del Equipo</h2>
        <div className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Se conformaron 12 equipos de trabajo integrados por 3 personas cada uno, con roles claramente definidos para optimizar la eficiencia del proceso. Cada equipo contaba con un responsable de contar y digitar en el sistema, un verificador y un contador auditor.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            La distribución estratégica consistió en asignar 6 equipos para realizar el conteo 1 y los otros 6 equipos para ejecutar el conteo 2, estableciendo así un sistema de verificación cruzada que permitiera identificar discrepancias y errores humanos en el proceso de contabilización.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">12</div>
              <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Equipos Formados</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Grupos de trabajo especializados</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">36</div>
              <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Personas Involucradas</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Personal capacitado participante</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">6</div>
              <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Equipos por Conteo</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Sistema de verificación cruzada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metodología de Trabajo Implementada */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">Metodología de Trabajo Implementada</h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            La metodología se basó en realizar el conteo físico y registrar simultáneamente en el sistema mediante la aplicación móvil. Este enfoque permitió eliminar la transcripción posterior de datos.
          </p>
          <p>
            El sistema de doble verificación funcionó de la siguiente manera: 6 equipos realizaron el conteo 1 de los productos mientras los otros 6 equipos ejecutaron el conteo 2, verificando así las cantidades ingresadas por los primeros equipos para determinar las cantidades reales de cada producto dentro del almacén.
          </p>
          <p>
            Posteriormente se generó un reporte comparativo con las cantidades de ambos conteos para identificar variables debido a errores humanos al contar o ingresar información. Finalmente, se realizó un conteo 3 para identificar cuál conteo fue el correcto y confirmar las cantidades definitivas de los productos en el almacén.
          </p>
        </div>
        </div>
        
      {/* Desempeño y Adaptación del Equipo */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Desempeño y Adaptación del Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="h-8 w-8" />
                </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Colaboración Efectiva</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Los equipos demostraron buena colaboración durante los conteos. Algunos mostraron mayor agilidad debido a experiencia previa con la aplicación en inventarios anteriores.
                </p>
              </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8" />
                </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Curva de Aprendizaje</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Equipos nuevos mostraron resistencia inicial para utilizar dispositivos, pero con acompañamiento lograron adecuarse más al sistema durante la jornada.
                </p>
              </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8" />
                </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Involucramiento Total</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Todos los miembros se involucraron activamente, realizando ajustes de ubicaciones y reportando productos no encontrados en el sistema.
                </p>
              </div>
            </div>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          El personal demostró compromiso con el proceso, superando las dificultades iniciales para el uso del sistema mediante el acompañamiento continuo y la práctica constante con el sistema.
        </p>
      </div>

      {/* Uso del Sistema y Tecnología */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">Uso del Sistema y Tecnología</h2>
        <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            La implementación de la aplicación móvil facilitó significativamente el registro y generación de reportes con la información de los conteos realizados. El sistema permitió realizar comparaciones automáticas entre conteos, proporcionando filtros que brindaron datos más confiables y verificables.
          </p>
          <p>
            A pesar de las dificultades iniciales para comprender los procedimientos y capturar datos correctamente, la disposición positiva de los colaboradores contribuyó para lograr la comprensión del sistema durante la realización del inventario.
          </p>
          <p>
            Sin embargo, se presentaron retrasos significativos debido a diversos inconvenientes técnicos que afectaron la fluidez del proceso y requirieron intervenciones correctivas durante la ejecución.
          </p>
            </div>
          </div>

      {/* Inconvenientes Técnicos Identificados */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Inconvenientes Técnicos Identificados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6" />
                  </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Confusión en Escaneo</h4>
                </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
                  Dificultades al escanear códigos de barra de productos, generando errores en la identificación.
                </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Rendimiento de Dispositivos</h4>
                  </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
                  Interacción lenta en dispositivos handheld que retrasó el proceso de captura.
                </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-full flex items-center justify-center">
                <Wifi className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Problemas de Conectividad</h4>
                  </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
                  Conteo en zona de vinos más lento debido a señal deficiente en esa área específica.
                </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Inconsistencias de Códigos</h4>
                  </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Códigos de barras de productos generaban descripciones de otros productos diferentes. Posible error de escaneo.
            </p>
                </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Reprocesos Operativos</h4>
                  </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Desconocimiento para saber a que almacén colocar el conteo realizado.
                </p>
              </div>
            </div>
          </div>

      {/* Puntos de Mejora Identificados */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Puntos de Mejora Identificados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">1</div>
                  <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Administración de Permisos</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Implementar permisos de edición restringidos como se sugirió inicialmente para evitar modificaciones no autorizadas.
                    </p>
                  </div>
                </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">2</div>
                  <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Marcaje de Ubicaciones</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Evitar reconteos mediante marcaje de ubicaciones ya contabilizadas y acordonamiento de áreas procesadas.
                    </p>
                  </div>
                </div>
              </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">3</div>
                  <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Infraestructura Tecnológica</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                      Dispositivos y access points adecuados para disminuir retrasos por conectividad deficiente.
                    </p>
                  </div>
                </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">4</div>
                  <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Estandarización</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                      Estandarización de estiba de productos para facilitar conteos y reducir errores de ubicación.
                    </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Distribución de Equipos por Zona */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Distribución de Equipos por Zona</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-bold text-slate-800 dark:text-slate-100">Grupo</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-bold text-slate-800 dark:text-slate-100">Conteo 1</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-bold text-slate-800 dark:text-slate-100">Conteo 2</th>
                <th className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-left font-bold text-slate-800 dark:text-slate-100">Área Asignada</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">1</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Alexis Chávez<br/>Mauricio Figueroa</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Antonio Mejía<br/>Isaías Bonilla</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Zona Importados</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">2</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Marvin Arias<br/>Emerson Osorio</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Manuel Portillo<br/>Jostin Cruz</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Zona Cerveza y Premezclado</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">3</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Ronald Astorga<br/>Jeidy Caravantes</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Alexander Ortiz<br/>Andrea Contreras</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Zona Sure y No Alcohólicos</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">4</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Nelson Esquizabal<br/>Jorge Rodríguez</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Diego Román<br/>César Ruano</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Zona FDC y Botrán</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">5</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Juan Pérez<br/>Hernán García</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Gabriela García<br/>Manuel Estrada</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Zona Vinos</td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 font-semibold text-slate-800 dark:text-slate-100">6</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Santos Salguero<br/>Adolfo Esperanza</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Ramón Rosales<br/>Oscar Deras</td>
                <td className="border border-slate-300 dark:border-slate-600 px-4 py-3 text-slate-700 dark:text-slate-300">Zona Nacional</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        
      {/* Comentarios sobre la Ejecución */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Comentarios sobre la Ejecución</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Desempeño del Personal</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              El personal demostró una capacidad de adaptación durante todo el proceso para el uso del aplicativo pero dificultad a la hora de ingresar la información en el almacén adecuado. Para la implementación de APOLO se sugiere reforzar la capacitación y la lógica del sistema a través de ejercicios prácticos para la mejora continua.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Procesos y Procedimientos</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              La estandarización de procesos y la capacitación del personal son fundamentales para evitar confusiones, especialmente en el ingreso de productos a la bodega y manejo de ubicaciones.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Tecnología y Equipo</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Se identificó latencia en equipos y aplicación. El WiFi es vital en el nuevo almacén. Se recomienda simplificar la aplicación reduciendo opciones de selección de bodegas.
            </p>
          </div>
        </div>
      </div>
      {/* Problemas de Confiabilidad Detectados */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Problemas de Confiabilidad Detectados</h2>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Durante el análisis posterior se identificaron varios factores que comprometieron la confiabilidad del conteo realizado. Estos problemas sistémicos requieren atención prioritaria para futuros inventarios.
          </p>
          <p>
            Se solicitó cargar los almacenes actuales al software de toma de inventario, lo que ocasionó que el equipo no colocara correctamente el almacén para dar referencia de dónde se realizó el conteo, generando inconsistencias en el conteo registrado.
          </p>
          <p>
            Adicionalmente, se presentaron registros dobles de conteo 1 o 2 en distintos almacenes, lo que afectó la integridad de los datos y dificultó la consolidación final de la información.
          </p>
        </div>
      </div>

      {/* Inconsistencias en Datos Maestros */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Inconsistencias en Datos Maestros</h2>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            El documento compartido para la carga de productos presentó datos faltantes, ya que algunos productos no contaban con el StockAx (Inventario Físico), lo que dificultó las comparaciones entre inventario físico y sistema.
          </p>
          <p>
            Se tomó como referencia el código de producto ligado al código de barras, pero posteriormente se detectó que un código de barras puede hacer referencia a distintos códigos de productos, generando confusión y errores en la identificación.
          </p>
        </div>
      </div>

      {/* Problemas de Stock y Ubicación */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Problemas de Stock y Ubicación</h2>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            El Stock AX distribuido en distintos almacenes ocasionó que si los equipos colocaban el registro en el almacén equivocado, esto impactara directamente en el StockAX para la comparación versus el inventario físico, generando discrepancias artificiales en los reportes.
          </p>
          <p>
            Esta situación se vio agravada por la captura de información errónea por parte del personal durante la toma de inventario, tanto al momento de registrar las cantidades contabilizadas como al elegir el almacén al que pertenece cada producto.
          </p>
          <p>
            La falta de controles estrictos en la selección de ubicaciones permitió que se generaran inconsistencias que posteriormente fueron difíciles de rastrear y corregir, afectando la confiabilidad general del proceso.
          </p>
        </div>
      </div>

      {/* Registros Duplicados y Errores de Sistema */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Registros Duplicados y Errores de Sistema</h2>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p>
            Se identificaron múltiples registros duplicados que comprometieron la integridad de los datos. La imagen muestra claramente cómo se generaron entradas dobles para el mismo producto en diferentes ubicaciones, creando inconsistencias en el sistema de inventario.
          </p>
          <p>
            Adicionalmente, se realizó carga manual de productos dentro del sistema debido a una mala ejecución de búsqueda, lo que hacía pensar al personal que el producto no se encontraba en el sistema, ocasionando una captura manual innecesaria para poder registrar el conteo.
          </p>
          <p>
            En este punto específico se había sugerido no permitir esta opción en el sistema, limitando los ajustes solo a un administrador, pero por la magnitud del inventario se solicitó que cualquier integrante tuviera acceso a realizar dichas altas, generando inconsistencias adicionales.
          </p>
        </div>
      </div>

      {/* Impacto de los Errores Sistémicos */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Impacto de los Errores Sistémicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">1</span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Búsquedas Deficientes</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Mala ejecución de búsqueda que generó creación manual innecesaria de productos ya existentes en el sistema.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">2</span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Permisos</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Acceso generalizado para crear productos manualmente cuando debería estar restringido a administradores.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">3</span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">Duplicación de Datos</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Generación de registros duplicados que comprometieron la integridad y confiabilidad de la información.
            </p>
          </div>
        </div>
        <div className="p-6 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
          <p className="text-red-800 dark:text-red-200 font-medium text-center">
            Por todos estos motivos se considera que las diferencias finales no son 100% confiables, sin embargo se obtuvo información valiosa que debe ser trabajada para garantizar el próximo inventario.
          </p>
        </div>
      </div>
      {/* Recomendaciones Estratégicas */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Recomendaciones Estratégicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg">01</div>
                  <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Depuración de Datos Maestros</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ejecutar un plan integral de depuración antes de la próxima toma de inventario, consolidando SKU únicos y descripciones homologadas para eliminar duplicidades.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg">02</div>
                  <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Capacitación Reforzada</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fortalecer la capacitación del personal operativo y administrativo, asegurando comprensión tanto de la aplicación como de la lógica de control de inventarios.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg">03</div>
                  <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Controles de Aplicación</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Implementar controles estrictos en la aplicación para evitar registros manuales no autorizados y garantizar la trazabilidad.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg">04</div>
                  <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Infraestructura Tecnológica</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fortalecer la infraestructura en el almacén, eliminando zonas muertas de conectividad y mejorando el rendimiento de dispositivos móviles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* Recomendaciones Operativas */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Recomendaciones Operativas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Protocolos Operativos</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Diseñar protocolos claros para estibas, ubicación de productos y organización de conteos sistemáticos.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Inventarios Cíclicos</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Establecer programa enfocado en productos de alta rotación, alto valor o mayor historial de diferencias.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Roles y Responsabilidades</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Estandarizar roles en futuras jornadas, minimizando improvisación y reforzando disciplina operativa.
            </p>
                </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">Mejora Continua</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Implementar ciclos de retroalimentación para optimizar procesos y tecnología constantemente.
                  </p>
                </div>
              </div>
            </div>
            
      {/* Conclusiones del Inventario */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Conclusiones del Inventario</h2>
        <div className="space-y-8">
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-900/20 dark:to-amber-800/20 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Confiabilidad Limitada</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              El inventario realizado no puede ser considerado confiable para fines contables, debido a la combinación de inconsistencias en datos maestros, debilidades en procesos y limitaciones tecnológicas identificadas.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Valor Estratégico</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              No obstante, su valor estratégico es significativo, ya que ha permitido identificar riesgos críticos que afectan la confiabilidad de los inventarios futuros. El proceso ha generado un mapa claro de oportunidades de mejora en datos, procesos y tecnología que será fundamental para implementaciones posteriores.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Modelo de Mejora Continua</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Este inventario marca el punto de partida para establecer un modelo de mejora continua en la gestión de inventarios, proporcionando las bases necesarias para desarrollar un sistema más robusto y confiable en el futuro.
            </p>
                </div>

          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Información Valiosa</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Las diferencias identificadas proporcionan información valiosa sobre productos que requieren validación, sugiriéndose la implementación de un plan de conteos cíclicos para garantizar su stock en almacén de manera continua.
                  </p>
                </div>
              </div>
            </div>

      {/* Valor Estratégico y Próximos Pasos */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Valor Estratégico y Próximos Pasos</h2>
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
          <p>
            A pesar de las limitaciones identificadas, este proceso ha establecido las bases sólidas para desarrollar un sistema de inventarios más robusto, confiable y eficiente que garantice la precisión requerida para futuras operaciones de DISAL.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="h-8 w-8" />
                </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Identificación de Riesgos</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">Mapeo completo de riesgos críticos que afectan la confiabilidad de inventarios</p>
              </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="h-8 w-8" />
                </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Oportunidades de Mejora</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">Generación de roadmap claro para optimizar datos, procesos y tecnología</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <RefreshCw className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Mejora Continua</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">Establecimiento de modelo sostenible para gestión de inventarios futuros</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckSquare className="h-8 w-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Plan de Validación</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">Implementación de conteos cíclicos para productos identificados con diferencias</p>
          </div>
        </div>
      </div>

      {/* Anexo - Ampliaciones Sugeridas */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8">Anexo – Ampliaciones Sugeridas</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">1. Checklist Operativo para Próximas Tomas de Inventario</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Preparación (T-2 semanas):</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <li>Depuración de catálogo (SKU duplicados, EAN multi‑referencia)</li>
                  <li>Cierre de movimientos, congelamiento de transferencias durante el conteo</li>
                  <li>Etiquetado de ubicaciones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-3">Infraestructura:</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                  <li>Site survey WiFi (heatmap)</li>
                  <li>Densidad de AP por pasillo</li>
                  <li>MDM para handhelds</li>
                  <li>Pruebas de estrés de la app con 30+ usuarios concurrentes</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">2. Controles de Aplicación Propuestos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Roles:</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Lector, Contador, Verificador, Supervisor, Administrador</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Reglas:</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Creación/edición de productos solo por Administrador; obligatoriedad de seleccionar almacén/ubicación antes de capturar; validación EAN↔SKU con tabla de equivalencias; bloqueo de captura sin conectividad estable (modo offline con sincronización controlada)</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">3. Gobernanza de Datos Maestros (MDM)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Catálogo único de SKU</strong> con &quot;golden record&quot; por producto</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Tabla de equivalencias EAN↔SKU</strong> de cardinalidad N:1 controlada; reportes de EAN conflictivos; rutina semanal de saneamiento</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Glosario de atributos mínimos:</strong> SKU, EAN, descripción, unidad, factor, familia, estado, almacén por defecto</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">4. Inventarios Cíclicos (ABC/XYZ)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Clasificación ABC por valor anual y XYZ por variabilidad de demanda</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Frecuencias sugeridas: A/X semanal, A/Y quincenal, B/X mensual, B/Y bimestral, C/Z trimestral</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">KPI de precisión por clase con umbrales y alertas</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">5. KPIs y Umbrales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Exactitud de inventario:</strong> 1 − |AX − Físico| / MAX(AX, Físico)</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>% ubicaciones correctamente asignadas</strong></p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>% capturas con reconteo requerido</strong></p>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Tasa de duplicados por 1.000 lecturas</strong></p>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>MTTR de incidencias tecnológicas durante el conteo</strong></p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">6. Plan Anti‑Errores Recurrentes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Búsqueda:</strong> indexación fonética y por sinónimos; sugerencias de coincidencias; prevención de alta manual si existe candidato ≥90% de similitud</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>EAN multi‑map:</strong> alerta de conflicto y forzar selección de SKU correcto con evidencia</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Selección de almacén:</strong> dropdown dependiente por zona y bloqueo por geocerca WiFi</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">7. RACI de la Jornada</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Responsable:</strong> Supervisor de Inventarios</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Aprobador:</strong> Gerencia de Operaciones</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Consultados:</strong> TI/MDM, Seguridad, Compras</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Informados:</strong> Finanzas, Comercial</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">8. Plantillas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Bitácora de incidencias:</strong> (folio, zona, SKU/EAN, síntoma, responsable, estado, evidencia)</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm"><strong>Acta de cierre de zona:</strong> (hora inicio/fin, equipos, piezas contadas, diferencias preliminares, firmas)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
