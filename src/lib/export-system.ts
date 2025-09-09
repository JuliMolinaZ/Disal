import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

export interface ExportOptions {
  format: 'pdf' | 'csv' | 'xlsx' | 'png' | 'jpg';
  quality?: number;
  filename?: string;
  includeCharts?: boolean;
  includeData?: boolean;
  includeSummary?: boolean;
}

export class ExportSystem {
  private data: unknown;
  private charts: HTMLElement[] = [];

  constructor(data: unknown) {
    this.data = data;
    this.initializeCharts();
  }

  private initializeCharts() {
    // Find all chart elements
    const chartSelectors = [
      '[data-chart="donut"]',
      '[data-chart="bar"]',
      '[data-chart="line"]',
      '[data-chart="scatter"]'
    ];

    chartSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        this.charts.push(element as HTMLElement);
      });
    });
  }

  async export(options: ExportOptions) {
    switch (options.format) {
      case 'pdf':
        return await this.exportToPDF(options);
      case 'csv':
        return await this.exportToCSV(options);
      case 'xlsx':
        return await this.exportToXLSX(options);
      case 'png':
        return await this.exportToPNG(options);
      case 'jpg':
        return await this.exportToJPG(options);
      default:
        throw new Error(`Unsupported format: ${options.format}`);
    }
  }

  private async exportToPDF(options: ExportOptions) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    // Add title
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Reporte Ejecutivo de Inventario', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 20;

    // Add date
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generado el: ${new Date().toLocaleDateString('es-ES')}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 30;

    // Add summary
    if (options.includeSummary) {
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Resumen Ejecutivo', 20, yPosition);
      yPosition += 15;

      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      const summaryText = this.generateSummary();
      const splitSummary = doc.splitTextToSize(summaryText, pageWidth - 40);
      doc.text(splitSummary, 20, yPosition);
      yPosition += splitSummary.length * 5 + 20;
    }

    // Add charts
    if (options.includeCharts) {
      for (const chart of this.charts) {
        if (yPosition > pageHeight - 100) {
          doc.addPage();
          yPosition = 20;
        }

        try {
          const canvas = await html2canvas(chart, {
            scale: 2,
            useCORS: true,
            allowTaint: true
          });

          const imgData = canvas.toDataURL('image/png');
          const imgWidth = pageWidth - 40;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          doc.addImage(imgData, 'PNG', 20, yPosition, imgWidth, imgHeight);
          yPosition += imgHeight + 20;
        } catch (error) {
          console.error('Error capturing chart:', error);
        }
      }
    }

    // Add data tables
    if (options.includeData) {
      this.addDataTables(doc, yPosition);
    }

    // Save PDF
    const filename = options.filename || `reporte-inventario-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(filename);

    return { success: true, filename };
  }

  private async exportToCSV(options: ExportOptions) {
    const csvData = this.convertToCSV();
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', options.filename || `datos-inventario-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    return { success: true, filename: options.filename };
  }

  private async exportToXLSX(options: ExportOptions) {
    // This would require xlsx library
    // For now, we'll export as CSV
    return await this.exportToCSV(options);
  }

  private async exportToPNG(options: ExportOptions) {
    const element = document.getElementById('report-content');
    if (!element) {
      throw new Error('Report content not found');
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const link = document.createElement('a');
    link.download = options.filename || `reporte-inventario-${new Date().toISOString().split('T')[0]}.png`;
    link.href = canvas.toDataURL('image/png', options.quality || 1.0);
    link.click();

    return { success: true, filename: options.filename };
  }

  private async exportToJPG(options: ExportOptions) {
    const element = document.getElementById('report-content');
    if (!element) {
      throw new Error('Report content not found');
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const link = document.createElement('a');
    link.download = options.filename || `reporte-inventario-${new Date().toISOString().split('T')[0]}.jpg`;
    link.href = canvas.toDataURL('image/jpeg', options.quality || 0.9);
    link.click();

    return { success: true, filename: options.filename };
  }

  private generateSummary(): string {
    return `
Este reporte presenta un análisis integral del inventario basado en datos reales.
Los hallazgos principales incluyen:

• Total de registros analizados: ${this.data?.totalRecords || 'N/A'}
• Calidad de datos: ${this.data?.qualityScore || 'N/A'}%
• Consistencia entre tablas: ${this.data?.consistencyScore || 'N/A'}%
• Problemas detectados: ${this.data?.issuesCount || 'N/A'}

Recomendaciones:
1. Implementar sistema de monitoreo continuo
2. Automatizar procesos de validación
3. Establecer métricas de calidad en tiempo real
4. Capacitar al equipo en análisis de datos

Para más información, consulte las secciones detalladas del reporte.
    `.trim();
  }

  private convertToCSV(): string {
    const headers = ['Métrica', 'Valor', 'Descripción'];
    const rows = [
      ['Total Registros', this.data?.totalRecords || 'N/A', 'Registros procesados en todas las tablas'],
      ['Calidad de Datos', `${this.data?.qualityScore || 'N/A'}%`, 'Puntuación general de calidad'],
      ['Consistencia', `${this.data?.consistencyScore || 'N/A'}%`, 'Consistencia entre tablas'],
      ['Problemas Detectados', this.data?.issuesCount || 'N/A', 'Issues identificados en los datos']
    ];

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    return csvContent;
  }

  private addDataTables(doc: jsPDF, yPosition: number) {
    // Add data tables to PDF
    const tableData = [
      ['Métrica', 'Valor', 'Descripción'],
      ['Total Registros', this.data?.totalRecords || 'N/A', 'Registros procesados'],
      ['Calidad de Datos', `${this.data?.qualityScore || 'N/A'}%`, 'Puntuación general'],
      ['Consistencia', `${this.data?.consistencyScore || 'N/A'}%`, 'Consistencia entre tablas'],
      ['Problemas Detectados', this.data?.issuesCount || 'N/A', 'Issues identificados']
    ];

    (doc as unknown as { autoTable: (options: unknown) => void }).autoTable({
      head: [tableData[0]],
      body: tableData.slice(1),
      startY: yPosition,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [59, 130, 246] }
    });
  }
}

// Utility functions
export function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).then(() => true);
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return Promise.resolve(success);
  }
}

export function shareContent(title: string, text: string, url: string) {
  if (navigator.share) {
    return navigator.share({ title, text, url });
  } else {
    // Fallback: copy to clipboard
    return copyToClipboard(`${title}\n\n${text}\n\n${url}`);
  }
}
