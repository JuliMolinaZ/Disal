import { Dashboard } from '@/components/Dashboard';

export default function Home() {
  // Datos mockeados para evitar errores de archivos CSV en Vercel
  const csvData = `concepto,ubicacion,cantidad
Producto A,Zona 1,100
Producto B,Zona 2,150
Producto C,Zona 3,200`;

  return (
    <main className="min-h-screen">
      <Dashboard csvData={csvData} />
    </main>
  );
}