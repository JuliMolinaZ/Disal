import { Dashboard } from '@/components/Dashboard';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function Home() {
  // Leer el archivo CSV desde la carpeta public
  const csvPath = join(process.cwd(), 'public', 'GraficasFinales - General.csv');
  const csvData = readFileSync(csvPath, 'utf-8');

  return (
    <main className="min-h-screen">
      <Dashboard csvData={csvData} />
    </main>
  );
}