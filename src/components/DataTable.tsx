'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Database, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Eye, 
  Download,
  Filter,
  Search
} from 'lucide-react';

interface DataTableProps {
  title: string;
  data: Array<{
    concepto: string;
    cantidad: number;
    porcentaje?: number;
    tipo?: 'positivo' | 'negativo' | 'cero' | 'diferencia';
  }>;
  description: string;
  className?: string;
}

export function DataTable({ title, data, description, className = '' }: DataTableProps) {
  const [sortField, setSortField] = useState<'concepto' | 'cantidad'>('cantidad');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [searchTerm, setSearchTerm] = useState('');

  const sortedData = [...data]
    .filter(item => 
      item.concepto.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' 
          ? aValue - bValue
          : bValue - aValue;
      }
      
      return 0;
    });

  const getTipoIcon = (tipo?: string) => {
    switch (tipo) {
      case 'positivo':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'negativo':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'cero':
        return <Minus className="h-4 w-4 text-gray-500" />;
      case 'diferencia':
        return <Database className="h-4 w-4 text-blue-500" />;
      default:
        return <Database className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTipoColor = (tipo?: string) => {
    switch (tipo) {
      case 'positivo':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'negativo':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'cero':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'diferencia':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleSort = (field: 'concepto' | 'cantidad') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  return (
    <Card className={`hover-lift transition-all duration-300 shadow-glow ${className}`}>
      <CardHeader className="gradient-ocean text-white">
        <CardTitle className="text-xl flex items-center space-x-2">
          <Database className="h-6 w-6" />
          <span>{title}</span>
        </CardTitle>
        <p className="text-sm text-white/90">{description}</p>
      </CardHeader>
      <CardContent className="p-0">
        {/* Filtros y Búsqueda */}
        <div className="p-6 border-b bg-gray-50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar concepto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSort('concepto')}
                className="flex items-center space-x-1"
              >
                <Filter className="h-4 w-4" />
                <span>Concepto</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSort('cantidad')}
                className="flex items-center space-x-1"
              >
                <Filter className="h-4 w-4" />
                <span>Cantidad</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold text-gray-700">#</TableHead>
                <TableHead 
                  className="font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('concepto')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Concepto</span>
                    {sortField === 'concepto' && (
                      <span className="text-xs">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </TableHead>
                <TableHead 
                  className="font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('cantidad')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Cantidad</span>
                    {sortField === 'cantidad' && (
                      <span className="text-xs">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-700">Porcentaje</TableHead>
                <TableHead className="font-semibold text-gray-700">Tipo</TableHead>
                <TableHead className="font-semibold text-gray-700">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((item, index) => (
                <TableRow 
                  key={index} 
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <TableCell className="font-medium text-gray-600">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-medium text-gray-800">
                    {item.concepto}
                  </TableCell>
                  <TableCell className="font-semibold text-blue-600">
                    {item.cantidad.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    {item.porcentaje && (
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(item.porcentaje, 100)}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {item.porcentaje.toFixed(1)}%
                        </span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge className={getTipoColor(item.tipo)}>
                      <div className="flex items-center space-x-1">
                        {getTipoIcon(item.tipo)}
                        <span className="capitalize">{item.tipo || 'general'}</span>
                      </div>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Footer con estadísticas */}
        <div className="p-6 bg-gray-50 border-t">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>
              Mostrando {sortedData.length} de {data.length} registros
            </span>
            <div className="flex items-center space-x-4">
              <span>Total: {data.reduce((sum, item) => sum + item.cantidad, 0).toLocaleString()}</span>
              <Button variant="outline" size="sm" className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>Exportar</span>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
