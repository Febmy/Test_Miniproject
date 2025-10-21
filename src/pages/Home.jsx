import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getUsers } from "../services/reqres";
import { parseAxiosError } from "../services/api";

export default function Home() {
  const [sp, setSp] = useSearchParams();
  const page = Number(sp.get("page") || 1);
  const [state, setState] = useState({
    data: [],
    total_pages: 1,
    loading: true,
    error: "",
  });

  useEffect(() => {
    let mounted = true;
    setState((s) => ({ ...s, loading: true, error: "" }));
    getUsers({ page, per_page: 6 })
      .then(
        (res) =>
          mounted &&
          setState({
            data: res.data,
            total_pages: res.total_pages,
            loading: false,
            error: "",
          })
      )
      .catch(
        (err) =>
          mounted &&
          setState({
            data: [],
            total_pages: 1,
            loading: false,
            error: parseAxiosError(err),
          })
      );
    return () => (mounted = false);
  }, [page]);

  function go(p) {
    setSp({ page: String(p) });
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      {state.loading && <p>Loading...</p>}
      {state.error && <p className="text-red-600">{state.error}</p>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.data.map((u) => (
          <Link
            key={u.id}
            to={`/users/${u.id}`}
            className="rounded-xl border p-4 hover:shadow focus:outline-none focus:ring"
          >
            <img
              src={u.avatar}
              alt={`${u.first_name} ${u.last_name}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-3 font-semibold">
              {u.first_name} {u.last_name}
            </h3>
            <p className="text-sm text-gray-600">{u.email}</p>
          </Link>
        ))}
      </div>
      <div
        className="mt-8 flex items-center gap-2"
        role="navigation"
        aria-label="Pagination"
      >
        <button
          disabled={page <= 1}
          onClick={() => go(page - 1)}
          className="px-3 py-2 border rounded-lg disabled:opacity-50"
          aria-label="Previous page"
        >
          Prev
        </button>
        <span className="px-3 py-2">
          Page {page} / {state.total_pages}
        </span>
        <button
          disabled={page >= state.total_pages}
          onClick={() => go(page + 1)}
          className="px-3 py-2 border rounded-lg disabled:opacity-50"
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </section>
  );
}
