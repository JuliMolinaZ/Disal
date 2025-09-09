export interface ConteoData {
  concepto: string;
  conteoRealizado: number;
  porcentajeDiferencia: number;
}

export interface ComparacionPositivosNegativos {
  tipo: 'Positivos' | 'Negativos' | 'Ceros';
  cantidad: number;
  porcentaje: number;
}

export interface SeccionesCantidad {
  seccion: string;
  cantidad: number;
  porcentaje: number;
  rango: {
    min: number;
    max: number;
  };
}

export interface SpecificChartsData {
  conteoRealizados: ConteoData[];
  comparacionPositivosNegativos: ComparacionPositivosNegativos[];
  seccionesCantidad: SeccionesCantidad[];
  resumen: {
    totalConteos: number;
    totalDiferencias: number;
    totalPositivos: number;
    totalNegativos: number;
    totalCeros: number;
  };
}

export function processSpecificChartsData(csvContent: string): SpecificChartsData {
  const lines = csvContent.split('\n');
  
  // Procesar datos de conteo realizados y diferencias
  const conteoRealizados: ConteoData[] = [];
  const comparacionPositivosNegativos: ComparacionPositivosNegativos[] = [];
  const seccionesCantidad: SeccionesCantidad[] = [];
  
  // Datos de la primera tabla (columnas 0-5)
  const rangosGenerales: { [key: string]: number } = {};
  const conceptosGenerales: { [key: string]: number } = {};
  
  // Datos de la segunda tabla (columnas 6-10)
  const rangosUbicaciones: { [key: string]: number } = {};
  const conceptosUbicaciones: { [key: string]: number } = {};
  
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const columns = line.split(',');
    
    // Procesar primera tabla - Rangos (columna 0-1)
    if (columns[0] && columns[1]) {
      const rango = columns[0].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[1].replace(/"/g, '').trim());
      if (!isNaN(cantidad)) {
        rangosGenerales[rango] = cantidad;
      }
    }
    
    // Procesar primera tabla - Conceptos (columna 3-5)
    if (columns[3] && columns[5]) {
      const concepto = columns[3].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[5].replace(/"/g, '').trim());
      if (!isNaN(cantidad)) {
        conceptosGenerales[concepto] = cantidad;
      }
    }
    
    // Procesar segunda tabla - Rangos (columna 6-7)
    if (columns[6] && columns[7]) {
      const rango = columns[6].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[7].replace(/"/g, '').trim());
      if (!isNaN(cantidad)) {
        rangosUbicaciones[rango] = cantidad;
      }
    }
    
    // Procesar segunda tabla - Conceptos (columna 9-10)
    if (columns[9] && columns[10]) {
      const concepto = columns[9].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[10].replace(/"/g, '').trim());
      if (!isNaN(cantidad)) {
        conceptosUbicaciones[concepto] = cantidad;
      }
    }
  }
  
  // 1. Gráfica de conteo realizados y porcentaje de diferencias
  // Comparar conceptos entre tablas generales y ubicaciones
  const conceptosComunes = new Set([
    ...Object.keys(conceptosGenerales),
    ...Object.keys(conceptosUbicaciones)
  ]);
  
  conceptosComunes.forEach(concepto => {
    const conteoGeneral = conceptosGenerales[concepto] || 0;
    const conteoUbicacion = conceptosUbicaciones[concepto] || 0;
    const totalConteo = conteoGeneral + conteoUbicacion;
    
    if (totalConteo > 0) {
      const diferencia = Math.abs(conteoGeneral - conteoUbicacion);
      const porcentajeDiferencia = conteoGeneral > 0 ? (diferencia / conteoGeneral) * 100 : 0;
      
      conteoRealizados.push({
        concepto,
        conteoRealizado: totalConteo,
        porcentajeDiferencia: Math.round(porcentajeDiferencia * 100) / 100
      });
    }
  });
  
  // 2. Gráfica de comparación negativos y positivos
  const totalPositivos = (conceptosGenerales['Positivos (solo números > 0)'] || 0) + 
                        (conceptosUbicaciones['Positivos (solo números > 0)'] || 0);
  const totalNegativos = (conceptosGenerales['Negativos (solo números < 0)'] || 0) + 
                        (conceptosUbicaciones['Negativos (solo números < 0)'] || 0);
  const totalCeros = (conceptosGenerales['Ceros (solo números = 0)'] || 0) + 
                    (conceptosUbicaciones['Ceros (solo números = 0)'] || 0);
  
  const totalComparacion = totalPositivos + totalNegativos + totalCeros;
  
  if (totalComparacion > 0) {
    comparacionPositivosNegativos.push(
      {
        tipo: 'Positivos',
        cantidad: totalPositivos,
        porcentaje: Math.round((totalPositivos / totalComparacion) * 100 * 100) / 100
      },
      {
        tipo: 'Negativos',
        cantidad: totalNegativos,
        porcentaje: Math.round((totalNegativos / totalComparacion) * 100 * 100) / 100
      },
      {
        tipo: 'Ceros',
        cantidad: totalCeros,
        porcentaje: Math.round((totalCeros / totalComparacion) * 100 * 100) / 100
      }
    );
  }
  
  // 3. Gráfica con cantidades divididas por secciones
  const secciones = [
    { nombre: '> 1000', min: 1000, max: Infinity },
    { nombre: '500 - 999', min: 500, max: 999 },
    { nombre: '100 - 499', min: 100, max: 499 },
    { nombre: '1 - 99', min: 1, max: 99 }
  ];
  
  const totalRangos = Object.values(rangosGenerales).reduce((sum, val) => sum + val, 0) +
                     Object.values(rangosUbicaciones).reduce((sum, val) => sum + val, 0);
  
  secciones.forEach(seccion => {
    const cantidadGeneral = rangosGenerales[seccion.nombre] || 0;
    const cantidadUbicacion = rangosUbicaciones[seccion.nombre] || 0;
    const cantidadTotal = cantidadGeneral + cantidadUbicacion;
    
    if (cantidadTotal > 0) {
      const porcentaje = totalRangos > 0 ? (cantidadTotal / totalRangos) * 100 : 0;
      
      seccionesCantidad.push({
        seccion: seccion.nombre,
        cantidad: cantidadTotal,
        porcentaje: Math.round(porcentaje * 100) / 100,
        rango: {
          min: seccion.min,
          max: seccion.max === Infinity ? 10000 : seccion.max
        }
      });
    }
  });
  
  // Calcular resumen
  const totalConteos = conteoRealizados.reduce((sum, item) => sum + item.conteoRealizado, 0);
  const totalDiferencias = conteoRealizados.reduce((sum, item) => sum + item.porcentajeDiferencia, 0);
  
  return {
    conteoRealizados: conteoRealizados.sort((a, b) => b.conteoRealizado - a.conteoRealizado),
    comparacionPositivosNegativos,
    seccionesCantidad: seccionesCantidad.sort((a, b) => b.cantidad - a.cantidad),
    resumen: {
      totalConteos,
      totalDiferencias,
      totalPositivos,
      totalNegativos,
      totalCeros
    }
  };
}
