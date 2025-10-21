import { useEffect, useState, useCallback } from "react";
export default function useSlider(length, interval = 3000) {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + length) % length),
    [length]
  );

  useEffect(() => {
    if (!length) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [length, interval, next]);

  return { index, next, prev };
}
