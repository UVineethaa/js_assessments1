import React from 'react';

const LazyComponent = () => {
  return (
    <div>
      <h1>This is a lazily loaded component!</h1>
      <p>It was loaded only when needed.</p>
    </div>
  );
};

export default LazyComponent;