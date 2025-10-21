import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/products";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await login(email, password);
    if (res.ok) navigate(from, { replace: true });
    else setError(res.message || "Invalid credentials");
  };

  return (
    <main className="container auth-page">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email</span>
          <input
            type="email"
            placeholder="eve.holt@reqres.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            placeholder="cityslicka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button className="btn" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
        <p className="hint">
          Use sample creds: eve.holt@reqres.in / cityslicka
        </p>
      </form>
    </main>
  );
}
