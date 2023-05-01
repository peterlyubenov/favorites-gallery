import { useEffect, useState } from "react";

/**
 * Custom React Hook for Debouncing a value
 *
 * @param value the value to be debounced
 * @param delay the amount of time, in milliseconds, to delay before updating the debounced value
 * @returns the debounced value
 */
export default function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
