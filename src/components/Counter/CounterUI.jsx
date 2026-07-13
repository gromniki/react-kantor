export const CounterUI = ({ value, increment, decrement }) => (
  <div className="counter">
    <button className="counter__btn" onClick={decrement}>
      -
    </button>
    <span className="counter__value">{value}</span>
    <button className="counter__btn" onClick={increment}>
      +
    </button>
  </div>
);
