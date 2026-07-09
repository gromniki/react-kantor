import { CounterUI } from './CounterUI';
import { useCounter } from '../Counter/useCounter';

export const Counter = () => {
  const { value, increment, decrement } = useCounter();

  return (
    <CounterUI value={value} increment={increment} decrement={decrement} />
  );
};
