import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/reqres";
import { parseAxiosError } from "../services/api";

export default function UserDetail() {
  const { id } = useParams();
  const [state, setState] = useState({ user: null, loading: true, error: "" });

  useEffect(() => {
    let mounted = true;
    getUserById(id)
      .then((u) => mounted && setState({ user: u, loading: false, error: "" }))
      .catch(
        (err) =>
          mounted &&
          setState({ user: null, loading: false, error: parseAxiosError(err) })
      );
    return () => (mounted = false);
  }, [id]);

  if (state.loading)
    return <div className="container mx-auto px-4 py-10">Loading...</div>;
  if (state.error)
    return (
      <div className="container mx-auto px-4 py-10 text-red-600">
        {state.error}
      </div>
    );
  const u = state.user;

  return (
    <section className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      <img
        src={u.avatar}
        alt={u.first_name}
        className="w-full rounded-xl object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold">
          {u.first_name} {u.last_name}
        </h1>
        <p className="text-gray-600 mt-2">{u.email}</p>
        <p className="mt-4 text-gray-700">
          This is a mock profile from Reqres API.
        </p>
      </div>
    </section>
  );
}
