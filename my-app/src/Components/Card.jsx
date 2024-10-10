import React from 'react';

// Destructure title and price from props
function Card({ title, price }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
      <h2 className="text-2xl font-semibold mb-2 text-center">{title}</h2>
      <p className="text-lg text-gray-600 text-center">{price}</p>
    </div>
  );
}

export default Card;
