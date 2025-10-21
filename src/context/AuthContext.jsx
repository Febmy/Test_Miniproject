import { createContext, useContext, useState } from "react";
import { loginReqres } from "../routes/api/reqres";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(false);

  const isAuthenticated = !!token;

  const login = async (email, password) => {
    setLoading(true);
    try {
      const data = await loginReqres({ email, password });
      const t = data.token;
      setToken(t);
      localStorage.setItem("token", t);
      const u = { email };
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
      return { ok: true };
    } catch (err) {
      console.error(err);
      return {
        ok: false,
        message: err?.response?.data?.error || err.message || "Login failed",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = { token, user, isAuthenticated, login, logout, loading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export default AuthContext;
