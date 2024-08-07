import React, { useState } from 'react';

const CounterWithHooks = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter with Hooks</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterWithHooks;