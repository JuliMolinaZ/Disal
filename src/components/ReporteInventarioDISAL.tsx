'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, CheckCircle, AlertTriangle, TrendingUp, FileText, Settings, BookOpen, Shield } from 'lucide-react';

export function ReporteInventarioDISAL() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Principal */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold text-slate-900">
            Reporte de Inventario DISAL
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Documentación completa de las actividades realizadas durante la toma de inventario del día 31 de agosto, 
            incluyendo la organización de equipos, metodología implementada con aplicación móvil, y análisis detallado 
            del desempeño y obstáculos identificados durante el proceso.
          </p>
        </motion.div>

        {/* Introducción y Objetivos */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Introducción y Objetivos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                El presente informe documenta de manera integral las actividades realizadas durante la toma de inventario 
                en las instalaciones de DISAL. Este proceso se llevó a cabo durante dos días consecutivos, implementando 
                una metodología innovadora basada en el uso de aplicaciones móviles para optimizar la precisión y 
                eficiencia del conteo.
              </p>
              <p className="text-slate-700 leading-relaxed">
                La jornada se estructuró con el objetivo de establecer un sistema de doble verificación que permitiera 
                identificar discrepancias y garantizar la mayor confiabilidad posible en los resultados. Se describe 
                detalladamente la organización de los equipos de trabajo, la metodología implementada y las observaciones 
                generales sobre el desempeño del personal y los obstáculos técnicos identificados durante la ejecución.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Actividades Principales */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                Actividades Principales Realizadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold">01</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Reunión de Coordinación</h4>
                  <p className="text-sm text-slate-600">
                    Inicio de jornada con presentación de objetivos, asignación de responsables por área y 
                    entrega de dispositivos móviles con la aplicación de inventario.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">02</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Conteo Cruzado</h4>
                  <p className="text-sm text-slate-600">
                    Ejecución del conteo de productos en zonas asignadas mediante sistema cruzado entre 
                    conteo 1 y conteo 2 para verificación.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-bold">03</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Consolidación de Datos</h4>
                  <p className="text-sm text-slate-600">
                    Generación de reportes automáticos mediante la aplicación para consolidar toda la 
                    información capturada.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm font-bold">04</span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Validación Final</h4>
                  <p className="text-sm text-slate-600">
                    Realización de conteo 3 para validar diferencias identificadas entre los primeros dos 
                    conteos y acompañamiento continuo al equipo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Distribución y Organización del Equipo */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-indigo-600" />
                Distribución y Organización del Equipo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Se conformaron 12 equipos de trabajo integrados por 3 personas cada uno, con roles claramente definidos 
                para optimizar la eficiencia del proceso. Cada equipo contaba con un responsable de contar y digitar en 
                el sistema, un verificador y un contador auditor.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                La distribución estratégica consistió en asignar 6 equipos para realizar el conteo 1 y los otros 6 equipos 
                para ejecutar el conteo 2, estableciendo así un sistema de verificación cruzada que permitiera identificar 
                discrepancias y errores humanos en el proceso de contabilización.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                  <div className="text-slate-700 font-semibold">Equipos Formados</div>
                  <div className="text-sm text-slate-600 mt-1">Grupos de trabajo especializados</div>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">36</div>
                  <div className="text-slate-700 font-semibold">Personas Involucradas</div>
                  <div className="text-sm text-slate-600 mt-1">Personal capacitado participante</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Metodología de Trabajo */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-teal-600" />
                Metodología de Trabajo Implementada
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                La metodología se basó en realizar el conteo físico y registrar simultáneamente en el sistema mediante 
                la aplicación móvil. Este enfoque permitió eliminar la transcripción posterior de datos.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                El sistema de doble verificación funcionó de la siguiente manera: 6 equipos realizaron el conteo 1 de los 
                productos mientras los otros 6 equipos ejecutaron el conteo 2, verificando así las cantidades ingresadas 
                por los primeros equipos para determinar las cantidades reales de cada producto dentro del almacén.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Posteriormente se generó un reporte comparativo con las cantidades de ambos conteos para identificar 
                variables debido a errores humanos al contar o ingresar información. Finalmente, se realizó un conteo 3 
                para identificar cuál conteo fue el correcto y confirmar las cantidades definitivas de los productos en el almacén.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Desempeño y Adaptación del Equipo */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
                Desempeño y Adaptación del Equipo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-bold text-emerald-800 mb-3">Colaboración Efectiva</h4>
                  <p className="text-sm text-slate-700">
                    Los equipos demostraron buena colaboración durante los conteos. Algunos mostraron mayor agilidad 
                    debido a experiencia previa con la aplicación en inventarios anteriores.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3">Curva de Aprendizaje</h4>
                  <p className="text-sm text-slate-700">
                    Equipos nuevos mostraron resistencia inicial para utilizar dispositivos, pero con acompañamiento 
                    lograron adecuarse mas al sistema durante la jornada.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3">Involucramiento Total</h4>
                  <p className="text-sm text-slate-700">
                    Todos los miembros se involucraron activamente, realizando ajustes de ubicaciones y reportando 
                    productos no encontrados en el sistema.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-700 leading-relaxed">
                  El personal demostró compromiso con el proceso, superando las dificultades iniciales para el uso del 
                  sistema mediante el acompañamiento continuo y la práctica constante con el sistema.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Uso del Sistema y Tecnología */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-6 w-6 text-cyan-600" />
                Uso del Sistema y Tecnología
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                La implementación de la aplicación móvil facilitó significativamente el registro y generación de reportes 
                con la información de los conteos realizados. El sistema permitió realizar comparaciones automáticas entre 
                conteos, proporcionando filtros que brindaron datos más confiables y verificables.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                A pesar de las dificultades iniciales para comprender los procedimientos y capturar datos correctamente, 
                la disposición positiva de los colaboradores contribuyó para lograr la comprensión del sistema durante 
                la realización del inventario.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Sin embargo, se presentaron retrasos significativos debido a diversos inconvenientes técnicos que afectaron 
                la fluidez del proceso y requirieron intervenciones correctivas durante la ejecución.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Inconvenientes Técnicos */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Inconvenientes Técnicos Identificados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">Confusión en Escaneo</h4>
                  <p className="text-sm text-slate-700">
                    Dificultades al escanear códigos de barra de productos, generando errores en la identificación.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">Rendimiento de Dispositivos</h4>
                  <p className="text-sm text-slate-700">
                    Interacción lenta en dispositivos handheld que retrasó el proceso de captura.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">Problemas de Conectividad</h4>
                  <p className="text-sm text-slate-700">
                    Conteo en zona de vinos más lento debido a señal deficiente en esa área específica.
                  </p>
                </div>
                
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                  <h4 className="font-bold text-pink-800 mb-2">Inconsistencias de Códigos</h4>
                  <p className="text-sm text-slate-700">
                    Códigos de barras de productos generaban descripciones de otros productos diferentes. 
                    Posible error de escaneo.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-800 mb-2">Reprocesos Operativos</h4>
                  <p className="text-sm text-slate-700">
                    Desconocimiento para saber a que almacén colocar el conteo realizado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Puntos de Mejora */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-indigo-600" />
                Puntos de Mejora Identificados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-indigo-800 mb-3">Administración de Permisos</h4>
                  <p className="text-sm text-slate-700">
                    Implementar permisos de edición restringidos como se sugirió inicialmente para evitar 
                    modificaciones no autorizadas.
                  </p>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-bold text-teal-800 mb-3">Marcaje de Ubicaciones</h4>
                  <p className="text-sm text-slate-700">
                    Evitar reconteos mediante marcaje de ubicaciones ya contabilizadas y acordonamiento de 
                    áreas procesadas.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3">Infraestructura Tecnológica</h4>
                  <p className="text-sm text-slate-700">
                    Dispositivos y access points adecuados para disminuir retrasos por conectividad deficiente.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3">Estandarización</h4>
                  <p className="text-sm text-slate-700">
                    Estandarización de estiba de productos para facilitar conteos y reducir errores de ubicación.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Distribución de Equipos por Zona */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-slate-600" />
                Distribución de Equipos por Zona
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 px-4 py-2 text-left">Grupo</th>
                      <th className="border border-slate-300 px-4 py-2 text-left">Conteo 1</th>
                      <th className="border border-slate-300 px-4 py-2 text-left">Conteo 2</th>
                      <th className="border border-slate-300 px-4 py-2 text-left">Área Asignada</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-4 py-2 font-semibold">1</td>
                      <td className="border border-slate-300 px-4 py-2">Alexis Chávez<br/>Mauricio Figueroa</td>
                      <td className="border border-slate-300 px-4 py-2">Antonio Mejía<br/>Isaías Bonilla</td>
                      <td className="border border-slate-300 px-4 py-2">Zona Importados</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-2 font-semibold">2</td>
                      <td className="border border-slate-300 px-4 py-2">Marvin Arias<br/>Emerson Osorio</td>
                      <td className="border border-slate-300 px-4 py-2">Manuel Portillo<br/>Jostin Cruz</td>
                      <td className="border border-slate-300 px-4 py-2">Zona Cerveza y Premezclado</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-2 font-semibold">3</td>
                      <td className="border border-slate-300 px-4 py-2">Ronald Astorga<br/>Jeidy Caravantes</td>
                      <td className="border border-slate-300 px-4 py-2">Alexander Ortiz<br/>Andrea Contreras</td>
                      <td className="border border-slate-300 px-4 py-2">Zona Sure y No Alcohólicos</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-2 font-semibold">4</td>
                      <td className="border border-slate-300 px-4 py-2">Nelson Esquizabal<br/>Jorge Rodríguez</td>
                      <td className="border border-slate-300 px-4 py-2">Diego Román<br/>César Ruano</td>
                      <td className="border border-slate-300 px-4 py-2">Zona FDC y Botrán</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-2 font-semibold">5</td>
                      <td className="border border-slate-300 px-4 py-2">Juan Pérez<br/>Hernán García</td>
                      <td className="border border-slate-300 px-4 py-2">Gabriela García<br/>Manuel Estrada</td>
                      <td className="border border-slate-300 px-4 py-2">Zona Vinos</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 px-4 py-2 font-semibold">6</td>
                      <td className="border border-slate-300 px-4 py-2">Santos Salguero<br/>Adolfo Esperanza</td>
                      <td className="border border-slate-300 px-4 py-2">Ramón Rosales<br/>Oscar Deras</td>
                      <td className="border border-slate-300 px-4 py-2">Zona Nacional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Comentarios sobre la Ejecución */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-gray-600" />
                Comentarios sobre la Ejecución
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-3">Desempeño del Personal</h4>
                  <p className="text-sm text-slate-700">
                    El personal demostró una capacidad de adaptación durante todo el proceso para el uso del aplicativo 
                    pero dificultad a la hora de ingresar la información en el almacén adecuado. Para la implementación 
                    de APOLO se sugiere reforzar la capacitación y la lógica del sistema a través de ejercicios prácticos 
                    para la mejora continua.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3">Procesos y Procedimientos</h4>
                  <p className="text-sm text-slate-700">
                    La estandarización de procesos y la capacitación del personal son fundamentales para evitar 
                    confusiones, especialmente en el ingreso de productos a la bodega y manejo de ubicaciones.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-bold text-purple-800 mb-3">Tecnología y Equipo</h4>
                  <p className="text-sm text-slate-700">
                    Se identificó latencia en equipos y aplicación. El WiFi es vital en el nuevo almacén. Se recomienda 
                    simplificar la aplicación reduciendo opciones de selección de bodegas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Problemas de Confiabilidad */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Card className="shadow-lg border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                Problemas de Confiabilidad Detectados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Durante el análisis posterior se identificaron varios factores que comprometieron la confiabilidad del 
                conteo realizado. Estos problemas sistémicos requieren atención prioritaria para futuros inventarios.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Se solicitó cargar los almacenes actuales al software de toma de inventario, lo que ocasionó que el equipo 
                no colocara correctamente el almacén para dar referencia de dónde se realizó el conteo, generando 
                inconsistencias en el conteo registrado.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Adicionalmente, se presentaron registros dobles de conteo 1 o 2 en distintos almacenes, lo que afectó la 
                integridad de los datos y dificultó la consolidación final de la información.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Inconsistencias en Datos Maestros */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Card className="shadow-lg border-l-4 border-l-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                Inconsistencias en Datos Maestros
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                El documento compartido para la carga de productos presentó datos faltantes, ya que algunos productos 
                no contaban con el StockAx (Inventario Físico), lo que dificultó las comparaciones entre inventario 
                físico y sistema.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Se tomó como referencia el código de producto ligado al código de barras, pero posteriormente se detectó 
                que un código de barras puede hacer referencia a distintos códigos de productos, generando confusión y 
                errores en la identificación.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Problemas de Stock y Ubicación */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <Card className="shadow-lg border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                Problemas de Stock y Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                El Stock AX distribuido en distintos almacenes ocasionó que si los equipos colocaban el registro en el 
                almacén equivocado, esto impactara directamente en el StockAX para la comparación versus el inventario 
                físico, generando discrepancias artificiales en los reportes.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Esta situación se vio agravada por la captura de información errónea por parte del personal durante la 
                toma de inventario, tanto al momento de registrar las cantidades contabilizadas como al elegir el almacén 
                al que pertenece cada producto.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                La falta de controles estrictos en la selección de ubicaciones permitió que se generaran inconsistencias 
                que posteriormente fueron difíciles de rastrear y corregir, afectando la confiabilidad general del proceso.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Registros Duplicados */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Card className="shadow-lg border-l-4 border-l-pink-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-pink-600" />
                Registros Duplicados y Errores de Sistema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 leading-relaxed">
                Se identificaron múltiples registros duplicados que comprometieron la integridad de los datos. La imagen 
                muestra claramente cómo se generaron entradas dobles para el mismo producto en diferentes ubicaciones, 
                creando inconsistencias en el sistema de inventario.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Adicionalmente, se realizó carga manual de productos dentro del sistema debido a una mala ejecución de 
                búsqueda, lo que hacía pensar al personal que el producto no se encontraba en el sistema, ocasionando 
                una captura manual innecesaria para poder registrar el conteo.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                En este punto específico se había sugerido no permitir esta opción en el sistema, limitando los ajustes 
                solo a un administrador, pero por la magnitud del inventario se solicitó que cualquier integrante tuviera 
                acceso a realizar dichas altas, generando inconsistencias adicionales.
              </p>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-red-800 mb-4">Impacto de los Errores Sistémicos</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border-l-4 border-l-red-500">
                    <div className="font-bold text-red-700 mb-1">1</div>
                    <h5 className="font-semibold text-red-800 mb-2">Búsquedas Deficientes</h5>
                    <p className="text-sm text-slate-700">
                      Mala ejecución de búsqueda que generó creación manual innecesaria de productos ya 
                      existentes en el sistema.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-l-orange-500">
                    <div className="font-bold text-orange-700 mb-1">2</div>
                    <h5 className="font-semibold text-orange-800 mb-2">Permisos</h5>
                    <p className="text-sm text-slate-700">
                      Acceso generalizado para crear productos manualmente cuando debería estar restringido 
                      a administradores.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-l-yellow-500">
                    <div className="font-bold text-yellow-700 mb-1">3</div>
                    <h5 className="font-semibold text-yellow-800 mb-2">Duplicación de Datos</h5>
                    <p className="text-sm text-slate-700">
                      Generación de registros duplicados que comprometieron la integridad y confiabilidad 
                      de la información.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg">
                <p className="text-slate-800 font-medium">
                  Por todos estos motivos se considera que las diferencias finales no son 100% confiables, sin embargo 
                  se obtuvo información valiosa que debe ser trabajada para garantizar el próximo inventario.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Recomendaciones Estratégicas */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Card className="shadow-lg border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Recomendaciones Estratégicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-green-600">01</Badge>
                    <h4 className="font-bold text-green-800">Depuración de Datos Maestros</h4>
                  </div>
                  <p className="text-sm text-slate-700">
                    Ejecutar un plan integral de depuración antes de la próxima toma de inventario, consolidando 
                    SKU únicos y descripciones homologadas para eliminar duplicidades.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-blue-600">02</Badge>
                    <h4 className="font-bold text-blue-800">Capacitación Reforzada</h4>
                  </div>
                  <p className="text-sm text-slate-700">
                    Fortalecer la capacitación del personal operativo y administrativo, asegurando comprensión 
                    tanto de la aplicación como de la lógica de control de inventarios.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-purple-600">03</Badge>
                    <h4 className="font-bold text-purple-800">Controles de Aplicación</h4>
                  </div>
                  <p className="text-sm text-slate-700">
                    Implementar controles estrictos en la aplicación para evitar registros manuales no autorizados 
                    y garantizar la trazabilidad de cada captura realizada.
                  </p>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-teal-600">04</Badge>
                    <h4 className="font-bold text-teal-800">Infraestructura Tecnológica</h4>
                  </div>
                  <p className="text-sm text-slate-700">
                    Fortalecer la infraestructura en el almacén, eliminando zonas muertas de conectividad y 
                    mejorando el rendimiento de dispositivos móviles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Recomendaciones Operativas */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-indigo-600" />
                Recomendaciones Operativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h4 className="font-bold text-indigo-800 mb-3">Protocolos Operativos</h4>
                  <p className="text-sm text-slate-700">
                    Diseñar protocolos claros para estibas, ubicación de productos y organización de 
                    conteos sistemáticos.
                  </p>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h4 className="font-bold text-teal-800 mb-3">Inventarios Cíclicos</h4>
                  <p className="text-sm text-slate-700">
                    Establecer programa enfocado en productos de alta rotación, alto valor o mayor 
                    historial de diferencias.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-bold text-orange-800 mb-3">Roles y Responsabilidades</h4>
                  <p className="text-sm text-slate-700">
                    Estandarizar roles en futuras jornadas, minimizando improvisación y reforzando 
                    disciplina operativa.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-3">Mejora Continua</h4>
                  <p className="text-sm text-slate-700">
                    Implementar ciclos de retroalimentación para optimizar procesos y tecnología 
                    constantemente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Conclusiones */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          <Card className="shadow-lg border-l-4 border-l-slate-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-slate-600" />
                Conclusiones del Inventario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-3">Confiabilidad Limitada</h4>
                <p className="text-slate-700 leading-relaxed mb-4">
                  El inventario realizado no puede ser considerado confiable para fines contables, debido a la 
                  combinación de inconsistencias en datos maestros, debilidades en procesos y limitaciones 
                  tecnológicas identificadas.
                </p>
                
                <p className="text-slate-700 leading-relaxed">
                  No obstante, su valor estratégico es significativo, ya que ha permitido identificar riesgos críticos 
                  que afectan la confiabilidad de los inventarios futuros. El proceso ha generado un mapa claro de 
                  oportunidades de mejora en datos, procesos y tecnología que será fundamental para implementaciones posteriores.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Este inventario marca el punto de partida para establecer un modelo de mejora continua en la gestión 
                de inventarios, proporcionando las bases necesarias para desarrollar un sistema más robusto y confiable 
                en el futuro.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Las diferencias identificadas proporcionan información valiosa sobre productos que requieren validación, 
                sugiriéndose la implementación de un plan de conteos cíclicos para garantizar su stock en almacén de 
                manera continua.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Valor Estratégico */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                Valor Estratégico y Próximos Pasos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-700 leading-relaxed font-medium">
                A pesar de las limitaciones identificadas, este proceso ha establecido las bases sólidas para desarrollar 
                un sistema de inventarios más robusto, confiable y eficiente que garantice la precisión requerida para 
                futuras operaciones de DISAL.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-blue-800 mb-3">Identificación de Riesgos</h4>
                  <p className="text-sm text-slate-700">
                    Mapeo completo de riesgos críticos que afectan la confiabilidad de inventarios
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-green-800 mb-3">Oportunidades de Mejora</h4>
                  <p className="text-sm text-slate-700">
                    Generación de roadmap claro para optimizar datos, procesos y tecnología
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-purple-800 mb-3">Mejora Continua</h4>
                  <p className="text-sm text-slate-700">
                    Establecimiento de modelo sostenible para gestión de inventarios futuros
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-teal-800 mb-3">Plan de Validación</h4>
                  <p className="text-sm text-slate-700">
                    Implementación de conteos cíclicos para productos identificados con diferencias
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* ANEXO - Ampliaciones Sugeridas */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
        >
          <Card className="shadow-lg bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-dashed border-slate-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-slate-600" />
                Anexo – Ampliaciones sugeridas
              </CardTitle>
              <p className="text-sm text-slate-500 italic">
                (agregado por ChatGPT; no forma parte del informe original)
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* 1. Checklist operativo */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-lg">1. Checklist operativo para próximas tomas de inventario</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-blue-800 mb-2">Preparación (T-2 semanas):</h5>
                    <p className="text-sm text-slate-700">
                      depuración de catálogo (SKU duplicados, EAN multi‑referencia), cierre de movimientos, 
                      congelamiento de transferencias durante el conteo, etiquetado de ubicaciones.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Infraestructura:</h5>
                    <p className="text-sm text-slate-700">
                      site survey WiFi (heatmap), densidad de AP por pasillo, MDM para handhelds, 
                      pruebas de estrés de la app con 30+ usuarios concurrentes.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">Capacitación:</h5>
                    <p className="text-sm text-slate-700">
                      guías rápidas impresas (1 página), videos de 3 minutos, simulacro de conteo por zona.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">Durante:</h5>
                    <p className="text-sm text-slate-700">
                      marcaje físico de áreas concluidas (cintas/colas), bloqueo lógico de ubicaciones contadas, 
                      doble validación con muestreo AQL.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-2">Cierre:</h5>
                    <p className="text-sm text-slate-700">
                      conciliación 3 vías (Conteo1/Conteo2/AX), bitácora de incidencias, plan de reconteo focalizado.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Controles de aplicación */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-lg">2. Controles de aplicación propuestos</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-indigo-800 mb-2">Roles:</h5>
                    <p className="text-sm text-slate-700">
                      Lector, Contador, Verificador, Supervisor, Administrador.
                    </p>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-teal-800 mb-2">Reglas:</h5>
                    <p className="text-sm text-slate-700">
                      creación/edición de productos solo por Administrador; obligatoriedad de seleccionar almacén/ubicación 
                      antes de capturar; validación EAN↔SKU con tabla de equivalencias; bloqueo de captura sin conectividad 
                      estable (modo offline con sincronización controlada).
                    </p>
                  </div>
                  
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-cyan-800 mb-2">Trazabilidad:</h5>
                    <p className="text-sm text-slate-700">
                      auditoría por usuario, dispositivo, ubicación, timestamp; hash de lote de carga; 
                      exportación CSV/JSON firmada.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Gobernanza de datos maestros */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-lg">3. Gobernanza de datos maestros (MDM)</h4>
                
                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-slate-700">
                    • Catálogo único de SKU con &quot;golden record&quot; por producto.
                  </p>
                  <p className="text-sm text-slate-700">
                    • Tabla de equivalencias EAN↔SKU de cardinalidad N:1 controlada; reportes de EAN conflictivos; 
                    rutina semanal de saneamiento.
                  </p>
                  <p className="text-sm text-slate-700">
                    • Glosario de atributos mínimos: SKU, EAN, descripción, unidad, factor, familia, estado, almacén por defecto.
                  </p>
                </div>
              </div>

              {/* 4. Inventarios cíclicos */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-lg">4. Inventarios cíclicos (ABC/XYZ)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2">Clasificación:</h5>
                    <p className="text-sm text-slate-700">
                      ABC por valor anual y XYZ por variabilidad de demanda.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Frecuencias sugeridas:</h5>
                    <p className="text-sm text-slate-700">
                      A/X semanal, A/Y quincenal, B/X mensual, B/Y bimestral, C/Z trimestral.
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-slate-700">
                  KPI de precisión por clase con umbrales y alertas.
                </p>
              </div>

              {/* 5. KPIs y umbrales */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-lg">5. KPIs y umbrales</h4>
                
                <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                  <p className="text-sm text-slate-700">
                    • Exactitud de inventario = 1 − |AX − Físico| / MAX(AX, Físico).
                  </p>
                  <p className="text-sm text-slate-700">
                    • % ubicaciones correctamente asignadas.
                  </p>
                  <p className="text-sm text-slate-700">
                    • % capturas con reconteo requerido.
                  </p>
                  <p className="text-sm text-slate-700">
                    • Tasa de duplicados por 1.000 lecturas.
                  </p>
                  <p className="text-sm text-slate-700">
                    • MTTR de incidencias tecnológicas durante el conteo.
                  </p>
                </div>
              </div>

              {/* 6. Plan anti‑errores */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-lg">6. Plan anti‑errores recurrentes</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-2">Búsqueda:</h5>
                    <p className="text-sm text-slate-700">
                      indexación fonética y por sinónimos; sugerencias de coincidencias; prevención de alta manual 
                      si existe candidato ≥90% de similitud.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-800 mb-2">EAN multi‑map:</h5>
                    <p className="text-sm text-slate-700">
                      alerta de conflicto y forzar selección de SKU correcto con evidencia.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-purple-800 mb-2">Selección de almacén:</h5>
                    <p className="text-sm text-slate-700">
                      dropdown dependiente por zona y bloqueo por geocerca WiFi.
                    </p>
                  </div>
                </div>
              </div>

              {/* 7. RACI */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-lg">7. RACI de la jornada</h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-green-50 p-3 rounded text-center">
                    <h5 className="font-semibold text-green-800 text-sm">Responsable</h5>
                    <p className="text-xs text-slate-700">Supervisor de Inventarios</p>
                  </div>
                  
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <h5 className="font-semibold text-blue-800 text-sm">Aprobador</h5>
                    <p className="text-xs text-slate-700">Gerencia de Operaciones</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded text-center">
                    <h5 className="font-semibold text-yellow-800 text-sm">Consultados</h5>
                    <p className="text-xs text-slate-700">TI/MDM, Seguridad, Compras</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded text-center">
                    <h5 className="font-semibold text-purple-800 text-sm">Informados</h5>
                    <p className="text-xs text-slate-700">Finanzas, Comercial</p>
                  </div>
                </div>
              </div>

              {/* 8. Plantillas */}
              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-lg">8. Plantillas</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-800 mb-2">Bitácora de incidencias:</h5>
                    <p className="text-sm text-slate-700">
                      (folio, zona, SKU/EAN, síntoma, responsable, estado, evidencia).
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-800 mb-2">Acta de cierre de zona:</h5>
                    <p className="text-sm text-slate-700">
                      (hora inicio/fin, equipos, piezas contadas, diferencias preliminares, firmas).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-4">
                <p className="text-sm text-slate-600 italic">
                  Estas ampliaciones son propuestas adicionales para reforzar datos, procesos y tecnología de cara 
                  a la siguiente ejecución; el texto anterior reproduce fielmente el informe original.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}