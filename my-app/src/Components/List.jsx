import React from 'react'

function List() {
    const items = [
        { name: 'Apple', price: 1.2 },
        { name: 'Banana', price: 0.5 },
        { name: 'Orange', price: 0.8 },
      ];
    
      return (
        <div>
          <h1>Item List</h1>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default List