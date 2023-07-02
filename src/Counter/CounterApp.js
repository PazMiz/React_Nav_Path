import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file for styling

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1 className="counter-title">Counter App</h1>
      <div className="counter-container">
        <button className="counter-btn" onClick={decrement}>-</button>
        <p className="counter-value">{count}</p>
        <button className="counter-btn" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
