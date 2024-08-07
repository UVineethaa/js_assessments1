import React, { useState, useCallback } from 'react';
import ListItem from './ListItem';

const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [count, setCount] = useState(0);

  const handleAddItem = useCallback(() => {
    setItems(prevItems => [...prevItems, `Item ${prevItems.length + 1}`]);
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment Count: {count}</button>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
