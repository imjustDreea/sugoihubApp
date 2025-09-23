// App.tsx (ejemplo de uso)
import React from 'react';
import LayoutGrid from './components/layout/layout.tsx';

// Datos de ejemplo basados en el boceto
const sampleData = [
  { id: 'a1', title: 'A1', value: '2.5m/s', subValue: '(0.3m/s)' },
  { id: 'a2', title: 'A2', value: '1.7m/s', subValue: '(0.3m/s)' },
  { id: 'a3', title: 'A3', value: '1.6m/s', subValue: '(0.3m/s)' },
  { id: 'a4', title: 'A4', value: '1.8m/s', subValue: '(0.3m/s)' },
  { id: 'a5', title: 'A5', value: '1.9m/s', subValue: '(0.3m/s)' },
  // Agregar más elementos según sea necesario
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `a${i + 6}`,
    title: `A${i + 6}`,
    value: '1.1m/s',
    subValue: '(0.3m/s)'
  }))
];

const App: React.FC = () => {
  return (
    <div className="App">
      <LayoutGrid items={sampleData} />
    </div>
  );
};

export default App;
