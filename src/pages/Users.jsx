import { useEffect, useState } from "react";
import { getUsers } from "../api/reqres";

export default function Users() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getUsers(1);
        setRows(data.data || []);
      } catch (e) {
        setError(
          e?.response?.data?.error || e.message || "Failed to fetch users"
        );
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading)
    return (
      <main className="container">
        <p>Loading…</p>
      </main>
    );
  if (error)
    return (
      <main className="container">
        <p className="error">{error}</p>
      </main>
    );

  return (
    <main className="container">
      <h2>Users (Reqres)</h2>
      <div className="grid users">
        {rows.map((u) => (
          <article className="card user" key={u.id}>
            <img src={u.avatar} alt={`${u.first_name} ${u.last_name}`} />
            <div className="card-body">
              <h3>
                {u.first_name} {u.last_name}
              </h3>
              <p className="muted">{u.email}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
