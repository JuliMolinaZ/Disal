import { Dashboard } from '@/components/Dashboard';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function Home() {
  // Leer el archivo CSV desde el directorio raíz
  const csvPath = join(process.cwd(), '..', 'GraficasFinales - General.csv');
  const csvData = readFileSync(csvPath, 'utf-8');

  return (
    <main className="min-h-screen">
      <Dashboard csvData={csvData} />
    </main>
  );
}