// src/ItemList.js
import React from 'react';

// Sample array of items
const items = ['TABLE', 'CHAIR', 'BENCH', 'PENCIL', 'FRUIT'];

const ItemList = () => {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;