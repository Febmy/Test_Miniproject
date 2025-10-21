import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Register() {
  const nav = useNavigate();
  const { register } = useAuth();
  const [form, setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "pistol",
  });
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const res = await register(form.email, form.password);
    if (res.ok) nav("/dashboard", { replace: true });
    else setErr(res.error || "Register failed");
  }

  return (
    <section className="container mx-auto px-4 py-10 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
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
          Create account
        </button>
      </form>
      <p className="mt-3 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </p>
    </section>
  );
}
