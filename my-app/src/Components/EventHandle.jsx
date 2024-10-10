import React, { useState } from 'react';
import Card from './Card';
function EventHandle() {
    const [items, setItems] = useState([
        { name: 'Apple', price: 1.2 },
        { name: 'Banana', price: 0.5 },
        { name: 'Orange', price: 0.8 },
      ]);
    
      const handleAddItem = () => {
        const newItem = { name: 'Grape', price: 2.0 };
        setItems([...items, newItem]);
      };
    
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">Item List</h1>
            
            // App.js or the relevant file
<ul className="list-disc list-inside space-y-2 mb-4">
  {items.map((item, index) => (
    <li key={index} className="text-lg">
      <Card title={item.name} price={item.price} />
    </li>
  ))}
</ul>

    
            <button
              onClick={handleAddItem}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Add Grape
            </button>
          </div>
        </div>
      );
    };

export default EventHandle