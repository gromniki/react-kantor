import { useCallback, useState } from 'react';

export const useCounter = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const decrement = useCallback(
    () => setValue((current) => Math.max(current - 1, min)),
    [min],
  );

  const increment = useCallback(
    () => setValue((current) => Math.min(current + 1, max)),
    [max],
  );

  return { decrement, increment, value };
};
