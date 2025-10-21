import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const nav = useNavigate();
  const loc = useLocation();
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const res = await login(form.email, form.password);
    if (res.ok) {
      const dest = loc.state?.from?.pathname || "/dashboard";
      nav(dest, { replace: true });
    } else {
      setErr(res.error || "Login failed");
    }
  }

  return (
    <section className="container mx-auto px-4 py-10 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {err && <p className="text-sm text-red-600">{err}</p>}
        <button className="w-full rounded-lg bg-black text-white py-2">
          Sign in
        </button>
      </form>
      <p className="mt-3 text-sm">
        No account?{" "}
        <Link to="/register" className="underline">
          Register
        </Link>
      </p>
    </section>
  );
}
