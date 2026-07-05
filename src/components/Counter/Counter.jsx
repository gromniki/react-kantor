import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => Math.min(prev + 1, 5));
  const decrement = () => setCount((prev) => Math.max(prev - 1, 0));

  return (
    <div className="counter">
      <button className="counter__btn" onClick={increment}>
        +
      </button>
      <span className="counter__value">{count}</span>
      <button className="counter__btn" onClick={decrement}>
        -
      </button>
    </div>
  );
};
