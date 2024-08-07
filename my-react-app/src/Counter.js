// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle the button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;