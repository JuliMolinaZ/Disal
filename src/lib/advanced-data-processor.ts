export interface DataPoint {
  name: string;
  value: number;
  category?: string;
  percentage?: number;
}

export interface TableAnalysis {
  name: string;
  data: DataPoint[];
  total: number;
  topItems: DataPoint[];
  distribution: {
    mean: number;
    median: number;
    mode: number;
    standardDeviation: number;
  };
  quality: {
    completeness: number;
    consistency: number;
    outliers: number;
  };
}

export interface AdvancedChartData {
  // Tabla 1: Rangos vs Conceptos (Sección Izquierda)
  rangosVsConceptos: {
    rangos: TableAnalysis;
    conceptos: TableAnalysis;
  };
  
  // Tabla 2: Rangos vs Conceptos de Ubicaciones (Sección Derecha)
  ubicaciones: {
    rangos: TableAnalysis;
    conceptos: TableAnalysis;
  };
  
  // Análisis comparativo
  comparative: {
    totalRangos: number;
    totalConceptos: number;
    totalUbicaciones: number;
    dataQuality: number;
    consistencyScore: number;
  };
  
  // Insights y recomendaciones
  insights: {
    topRanges: DataPoint[];
    topConcepts: DataPoint[];
    dataIssues: string[];
    recommendations: string[];
  };
}

export function processAdvancedCSVData(csvContent: string): AdvancedChartData {
  const lines = csvContent.split('\n');
  
  // Procesar Tabla 1: Rangos vs Conceptos (columnas 0-5)
  const rangosTabla1: DataPoint[] = [];
  const conceptosTabla1: DataPoint[] = [];
  
  // Procesar Tabla 2: Ubicaciones (columnas 6-10)
  const rangosUbicaciones: DataPoint[] = [];
  const conceptosUbicaciones: DataPoint[] = [];
  
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const columns = line.split(',');
    
    // Procesar Tabla 1 - Rangos (columna 0-1)
    if (columns[0] && columns[1]) {
      const rango = columns[0].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[1].replace(/"/g, '').trim());
      if (!isNaN(cantidad) && cantidad > 0) {
        rangosTabla1.push({ name: rango, value: cantidad });
      }
    }
    
    // Procesar Tabla 1 - Conceptos (columna 3-5)
    if (columns[3] && columns[5]) {
      const concepto = columns[3].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[5].replace(/"/g, '').trim());
      if (!isNaN(cantidad) && cantidad > 0) {
        conceptosTabla1.push({ name: concepto, value: cantidad });
      }
    }
    
    // Procesar Tabla 2 - Rangos Ubicaciones (columna 6-7)
    if (columns[6] && columns[7]) {
      const rango = columns[6].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[7].replace(/"/g, '').trim());
      if (!isNaN(cantidad) && cantidad > 0) {
        rangosUbicaciones.push({ name: rango, value: cantidad });
      }
    }
    
    // Procesar Tabla 2 - Conceptos Ubicaciones (columna 9-10)
    if (columns[9] && columns[10]) {
      const concepto = columns[9].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[10].replace(/"/g, '').trim());
      if (!isNaN(cantidad) && cantidad > 0) {
        conceptosUbicaciones.push({ name: concepto, value: cantidad });
      }
    }
  }
  
  // Crear análisis para cada tabla
  const rangosAnalysis = createTableAnalysis('Rangos Generales', rangosTabla1);
  const conceptosAnalysis = createTableAnalysis('Conceptos Generales', conceptosTabla1);
  const rangosUbicacionesAnalysis = createTableAnalysis('Rangos Ubicaciones', rangosUbicaciones);
  const conceptosUbicacionesAnalysis = createTableAnalysis('Conceptos Ubicaciones', conceptosUbicaciones);
  
  // Calcular métricas comparativas
  const totalRangos = rangosAnalysis.total + rangosUbicacionesAnalysis.total;
  const totalConceptos = conceptosAnalysis.total + conceptosUbicacionesAnalysis.total;
  const totalUbicaciones = rangosUbicacionesAnalysis.total + conceptosUbicacionesAnalysis.total;
  
  const dataQuality = calculateDataQuality([
    rangosAnalysis,
    conceptosAnalysis,
    rangosUbicacionesAnalysis,
    conceptosUbicacionesAnalysis
  ]);
  
  const consistencyScore = calculateConsistencyScore([
    rangosAnalysis,
    conceptosAnalysis,
    rangosUbicacionesAnalysis,
    conceptosUbicacionesAnalysis
  ]);
  
  // Generar insights
  const insights = generateInsights([
    rangosAnalysis,
    conceptosAnalysis,
    rangosUbicacionesAnalysis,
    conceptosUbicacionesAnalysis
  ]);
  
  return {
    rangosVsConceptos: {
      rangos: rangosAnalysis,
      conceptos: conceptosAnalysis
    },
    ubicaciones: {
      rangos: rangosUbicacionesAnalysis,
      conceptos: conceptosUbicacionesAnalysis
    },
    comparative: {
      totalRangos,
      totalConceptos,
      totalUbicaciones,
      dataQuality,
      consistencyScore
    },
    insights
  };
}

function createTableAnalysis(name: string, data: DataPoint[]): TableAnalysis {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  
  // Calcular porcentajes
  const dataWithPercentages = data.map(item => ({
    ...item,
    percentage: (item.value / total) * 100
  }));
  
  // Top 3 items
  const topItems = sortedData.slice(0, 3);
  
  // Estadísticas descriptivas
  const values = data.map(item => item.value);
  const distribution = calculateDistribution(values);
  
  // Calidad de datos
  const quality = calculateTableQuality(data, total);
  
  return {
    name,
    data: dataWithPercentages,
    total,
    topItems,
    distribution,
    quality
  };
}

function calculateDistribution(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  const n = values.length;
  
  // Media
  const mean = values.reduce((sum, val) => sum + val, 0) / n;
  
  // Mediana
  const median = n % 2 === 0 
    ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2
    : sorted[Math.floor(n / 2)];
  
  // Moda (valor más frecuente)
  const frequency: { [key: number]: number } = {};
  values.forEach(val => {
    frequency[val] = (frequency[val] || 0) + 1;
  });
  const mode = Object.keys(frequency).reduce((a, b) => 
    frequency[parseInt(a)] > frequency[parseInt(b)] ? a : b
  );
  
  // Desviación estándar
  const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / n;
  const standardDeviation = Math.sqrt(variance);
  
  return {
    mean: Math.round(mean * 100) / 100,
    median: Math.round(median * 100) / 100,
    mode: parseInt(mode),
    standardDeviation: Math.round(standardDeviation * 100) / 100
  };
}

function calculateTableQuality(data: DataPoint[], total: number) {
  // Completitud: % de datos no vacíos
  const completeness = data.length > 0 ? 100 : 0;
  
  // Consistencia: variación en los datos
  const values = data.map(item => item.value);
  const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
  const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
  const consistency = Math.max(0, 100 - (Math.sqrt(variance) / mean) * 100);
  
  // Outliers: valores que se desvían mucho de la media
  const outliers = values.filter(val => Math.abs(val - mean) > 2 * Math.sqrt(variance)).length;
  
  return {
    completeness,
    consistency: Math.round(consistency * 100) / 100,
    outliers
  };
}

function calculateDataQuality(analyses: TableAnalysis[]): number {
  const avgCompleteness = analyses.reduce((sum, analysis) => sum + analysis.quality.completeness, 0) / analyses.length;
  const avgConsistency = analyses.reduce((sum, analysis) => sum + analysis.quality.consistency, 0) / analyses.length;
  const totalOutliers = analyses.reduce((sum, analysis) => sum + analysis.quality.outliers, 0);
  const outlierPenalty = Math.min(20, totalOutliers * 2); // Máximo 20 puntos de penalización
  
  return Math.round((avgCompleteness + avgConsistency - outlierPenalty) / 2);
}

function calculateConsistencyScore(analyses: TableAnalysis[]): number {
  // Comparar consistencia entre tablas relacionadas
  const rangosConsistency = Math.abs(analyses[0].total - analyses[2].total) / Math.max(analyses[0].total, analyses[2].total);
  const conceptosConsistency = Math.abs(analyses[1].total - analyses[3].total) / Math.max(analyses[1].total, analyses[3].total);
  
  const avgConsistency = (rangosConsistency + conceptosConsistency) / 2;
  return Math.round((1 - avgConsistency) * 100);
}

function generateInsights(analyses: TableAnalysis[]): {
  topRanges: DataPoint[];
  topConcepts: DataPoint[];
  dataIssues: string[];
  recommendations: string[];
} {
  const [rangos, conceptos, rangosUbicaciones, conceptosUbicaciones] = analyses;
  
  // Top ranges combinados
  const allRanges = [...rangos.data, ...rangosUbicaciones.data];
  const topRanges = [...allRanges]
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);
  
  // Top concepts combinados
  const allConcepts = [...conceptos.data, ...conceptosUbicaciones.data];
  const topConcepts = [...allConcepts]
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);
  
  // Identificar problemas de datos
  const dataIssues: string[] = [];
  
  if (rangos.quality.outliers > 0) {
    dataIssues.push(`Se encontraron ${rangos.quality.outliers} valores atípicos en rangos generales`);
  }
  
  if (conceptos.quality.outliers > 0) {
    dataIssues.push(`Se encontraron ${conceptos.quality.outliers} valores atípicos en conceptos generales`);
  }
  
  if (rangos.quality.consistency < 70) {
    dataIssues.push('Baja consistencia en datos de rangos generales');
  }
  
  if (conceptos.quality.consistency < 70) {
    dataIssues.push('Baja consistencia en datos de conceptos generales');
  }
  
  // Generar recomendaciones
  const recommendations: string[] = [];
  
  if (topRanges[0] && topRanges[0].value > topRanges[1]?.value * 2) {
    recommendations.push(`El rango "${topRanges[0].name}" domina con ${topRanges[0].value} registros. Considerar análisis más granular.`);
  }
  
  if (conceptos.quality.outliers > 2) {
    recommendations.push('Revisar y validar los valores atípicos en conceptos para mejorar la calidad de datos.');
  }
  
  if (rangosUbicaciones.total > rangos.total * 1.5) {
    recommendations.push('Los datos de ubicaciones superan significativamente los datos generales. Verificar consistencia.');
  }
  
  if (dataIssues.length === 0) {
    recommendations.push('Los datos muestran buena calidad general. Proceder con análisis detallado.');
  }
  
  return {
    topRanges,
    topConcepts,
    dataIssues,
    recommendations
  };
}

export function getDataValidationSummary(data: AdvancedChartData): {
  totalTables: number;
  totalRecords: number;
  qualityScore: number;
  consistencyScore: number;
  issuesCount: number;
  recommendationsCount: number;
} {
  return {
    totalTables: 4,
    totalRecords: data.comparative.totalRangos + data.comparative.totalConceptos + data.comparative.totalUbicaciones,
    qualityScore: data.comparative.dataQuality,
    consistencyScore: data.comparative.consistencyScore,
    issuesCount: data.insights.dataIssues.length,
    recommendationsCount: data.insights.recommendations.length
  };
}
