import { useCallback, useState } from "react";
export default function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  const off = useCallback(() => setOn(false), []);
  const onFn = useCallback(() => setOn(true), []);
  return { on, toggle, off, onFn };
}
