import useLocalStorage from "./useLocalStorage";
export default function useCart() {
  const [items, setItems] = useLocalStorage("cart", []);
  const addItem = (p) =>
    setItems((prev) => {
      const found = prev.find((x) => x.id === p.id);
      return found
        ? prev.map((x) => (x.id === p.id ? { ...x, qty: (x.qty || 1) + 1 } : x))
        : [...prev, { ...p, qty: 1 }];
    });
  const removeItem = (id) =>
    setItems((prev) => prev.filter((x) => x.id !== id));
  const clear = () => setItems([]);
  const itemsCount = items.reduce((a, b) => a + (b.qty || 1), 0);
  return { items, addItem, removeItem, clear, itemsCount };
}
