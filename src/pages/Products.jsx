import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products as base } from "../data/products";

function currency(n) {
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `Rp ${n}`;
  }
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") || "");

  useEffect(() => {
    if (q) setSearchParams({ q });
    else setSearchParams({});
  }, [q, setSearchParams]);

  const list = useMemo(() => {
    const k = q.trim().toLowerCase();
    if (!k) return base;
    return base.filter((p) =>
      [p.name, p.brand, p.category].some((v) => v.toLowerCase().includes(k))
    );
  }, [q]);

  return (
    <main className="container">
      <div className="bar">
        <input
          className="input"
          placeholder="Search shoes by name, brand, or category…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      <div className="grid">
        {list.map((p) => (
          <article className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="card-body">
              <h3>{p.name}</h3>
              <p className="muted">
                {p.brand} • {p.category}
              </p>
              <strong>{currency(p.price)}</strong>
            </div>
          </article>
        ))}
        {list.length === 0 && <p>No products match your search.</p>}
      </div>
    </main>
  );
}
