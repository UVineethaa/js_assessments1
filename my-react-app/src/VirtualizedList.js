// src/VirtualizedList.js
import React from 'react';
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style} className="list-item">
    Item {index + 1}
  </div>
);

const VirtualizedList = ({ itemCount }) => {
  console.log("Rendering VirtualizedList with itemCount:", itemCount); // Debugging line
  return (
    <List
      height={400}
      itemCount={itemCount}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;
