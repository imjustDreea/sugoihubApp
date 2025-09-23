
import React from 'react';

interface SquareItem {
  id: string;
  title: string;
  value: string;
  subValue?: string;
}

interface LayoutGridProps {
  items: SquareItem[];
}

const LayoutGrid: React.FC<LayoutGridProps> = ({ items }) => {
  // Organizar los elementos en grupos para crear la estructura visual
  const mainItem = items[0]; // El primer elemento es más grande
  const secondaryItems = items.slice(1, 5); // Siguientes 4 elementos
  const remainingItems = items.slice(5); // Resto de elementos

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">TFTG MAW</h1>
          <div className="mt-4 text-gray-600">
            <p>The group with the user on all mail posts</p>
            <p>an administrator with the range server from Instagram to online</p>
            <ul className="list-disc list-inside ml-4">
              <li>Ralph</li>
              <li>Steven & gerson@tftg.com</li>
            </ul>
            <p>Internet or internet tips match</p>
            <p>Things API, Tech, Bono and you go</p>
            <p>Online for anytime</p>
          </div>
        </header>

        {/* Executive Panel Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Executive panel dd pressure</h2>
          
          {/* User Section */}
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-3">User</h3>
            
            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Main Square (larger) */}
              <div className="md:col-span-2 bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                <h4 className="font-bold text-lg mb-2">{mainItem?.title}</h4>
                <div className="text-3xl font-bold text-gray-800">{mainItem?.value}</div>
                {mainItem?.subValue && (
                  <div className="text-sm text-gray-500 mt-1">{mainItem.subValue}</div>
                )}
              </div>
              
              {/* Secondary Squares */}
              <div className="grid grid-cols-2 gap-4">
                {secondaryItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-4">
                    <h5 className="font-semibold text-sm mb-1">{item.title}</h5>
                    <div className="text-xl font-bold text-gray-800">{item.value}</div>
                    {item.subValue && (
                      <div className="text-xs text-gray-500 mt-1">{item.subValue}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Remaining Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {remainingItems.map((item) => (
                <div key={item.id} className="bg-white rounded shadow p-3">
                  <h5 className="font-medium text-xs mb-1 truncate">{item.title}</h5>
                  <div className="text-lg font-bold text-gray-800">{item.value}</div>
                  {item.subValue && (
                    <div className="text-xs text-gray-500 mt-1">{item.subValue}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LayoutGrid;