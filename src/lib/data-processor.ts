export interface DataPoint {
  name: string;
  value: number;
  category?: string;
}

export interface ChartData {
  rangos: DataPoint[];
  conceptos: DataPoint[];
  rangosUbicaciones: DataPoint[];
  conceptosUbicaciones: DataPoint[];
}

export function processCSVData(csvContent: string): ChartData {
  const lines = csvContent.split('\n');
  
  // Procesar datos de rangos (primera sección)
  const rangos: DataPoint[] = [];
  const conceptos: DataPoint[] = [];
  
  // Procesar datos de ubicaciones (segunda sección)
  const rangosUbicaciones: DataPoint[] = [];
  const conceptosUbicaciones: DataPoint[] = [];
  
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const columns = line.split(',');
    
    // Procesar primera sección (rangos y conceptos)
    if (columns[0] && columns[1]) {
      const rango = columns[0].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[1].replace(/"/g, '').trim());
      if (!isNaN(cantidad)) {
        rangos.push({ name: rango, value: cantidad });
      }
    }
    
    if (columns[3] && columns[5]) {
      const concepto = columns[3].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[5].replace(/"/g, '').trim());
      if (!isNaN(cantidad)) {
        conceptos.push({ name: concepto, value: cantidad });
      }
    }
    
    // Procesar segunda sección (rangos y conceptos de ubicaciones)
    if (columns[6] && columns[7]) {
      const rango = columns[6].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[7].replace(/"/g, '').trim());
      if (!isNaN(cantidad)) {
        rangosUbicaciones.push({ name: rango, value: cantidad });
      }
    }
    
    if (columns[9] && columns[10]) {
      const concepto = columns[9].replace(/"/g, '').trim();
      const cantidad = parseInt(columns[10].replace(/"/g, '').trim());
      if (!isNaN(cantidad)) {
        conceptosUbicaciones.push({ name: concepto, value: cantidad });
      }
    }
  }
  
  return {
    rangos: rangos.filter(item => item.value > 0),
    conceptos: conceptos.filter(item => item.value > 0),
    rangosUbicaciones: rangosUbicaciones.filter(item => item.value > 0),
    conceptosUbicaciones: conceptosUbicaciones.filter(item => item.value > 0)
  };
}

export function getTotalValue(data: DataPoint[]): number {
  return data.reduce((sum, item) => sum + item.value, 0);
}

export function getTopItems(data: DataPoint[], limit: number = 5): DataPoint[] {
  return [...data].sort((a, b) => b.value - a.value).slice(0, limit);
}
