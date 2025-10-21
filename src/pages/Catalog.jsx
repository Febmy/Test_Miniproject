import { useMemo, useState, useEffect } from "react";
import ProductGrid from "../components/ProductGrid.jsx";
import { getAllProducts } from "../services/productsService.js";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState("");
  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);
  const filtered = useMemo(
    () =>
      products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase())),
    [products, q]
  );

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Catalog</h1>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search shoes..."
          className="border rounded-lg px-3 py-2"
        />
      </div>
      <ProductGrid products={filtered} />
    </section>
  );
}
