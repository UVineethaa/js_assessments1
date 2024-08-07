import React from 'react';

// Memoized ListItem component
const ListItem = React.memo(({ item }) => {
  console.log('Rendering:', item); // Log to see when it re-renders
  return <li>{item}</li>;
});

export default ListItem;