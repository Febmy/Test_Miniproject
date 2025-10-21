import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../api/reqres";
import { useAuth } from "../context/AuthContext";
import { products } from "../data/products";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total: 0,
    per_page: 0,
    total_pages: 1,
    countNow: 0,
  });
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUsers(1);
        setStats({
          total: data?.total ?? data?.data?.length ?? 0,
          per_page: data?.per_page ?? 0,
          total_pages: data?.total_pages ?? 1,
          countNow: data?.data?.length ?? 0,
        });
      } catch (e) {
        // leave stats as zeros; dashboard remains usable
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const featured = [...products].sort((a, b) => b.price - a.price)[0];
  const top3 = products.slice(0, 3);

  const goSearch = (e) => {
    e.preventDefault();
    navigate(`/products?q=${encodeURIComponent(q)}`);
  };

  return (
    <main className="container">
      <h2>Dashboard</h2>
      <div className="dash-grid">
        <article className="card stat">
          <div className="k">Signed in as</div>
          <div className="v">{user?.email ?? "Unknown"}</div>
          <div className="quick">
            <Link className="btn" to="/users">
              Open Users
            </Link>
            <Link className="btn" to="/products">
              Open Products
            </Link>
          </div>
        </article>

        <article className="card stat">
          <div className="k">Reqres Users (page 1)</div>
          <div className="v">
            {loading ? "…" : `${stats.countNow}/${stats.total}`}
          </div>
          <div className="muted">
            per_page: {stats.per_page} • pages: {stats.total_pages}
          </div>
        </article>

        <article className="card stat">
          <div className="k">Quick Product Search</div>
          <form className="quick" onSubmit={goSearch}>
            <input
              placeholder="Search shoes…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button className="btn">Go</button>
          </form>
        </article>

        <article className="card">
          <div className="card-body">
            <div className="section-title">Featured Shoe</div>
          </div>
          <img src={featured.image} alt={featured.name} />
          <div className="card-body">
            <strong>{featured.name}</strong>
            <div className="muted">
              {featured.brand} • {featured.category}
            </div>
          </div>
        </article>

        <article className="card">
          <div className="card-body">
            <div className="section-title">Quick Picks</div>
          </div>
          <div className="grid" style={{ padding: "0 12px 12px" }}>
            {top3.map((p) => (
              <article key={p.id} className="card">
                <img src={p.image} alt={p.name} />
                <div className="card-body">
                  <div className="muted">{p.brand}</div>
                  <strong>{p.name}</strong>
                </div>
              </article>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
