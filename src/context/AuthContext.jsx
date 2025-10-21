import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { loginReqres, registerReqres } from "../services/reqres";
import { parseAxiosError } from "../services/api";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage("auth", null);

  async function login(email, password) {
    try {
      const { token } = await loginReqres({ email, password });
      setAuth({ token, email });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: parseAxiosError(e) };
    }
  }

  async function register(email, password) {
    try {
      const { token } = await registerReqres({ email, password });
      setAuth({ token, email });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: parseAxiosError(e) };
    }
  }

  function logout() {
    setAuth(null);
  }

  const value = useMemo(
    () => ({
      user: auth,
      isAuthenticated: !!auth?.token,
      login,
      register,
      logout,
    }),
    [auth]
  );

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export const useAuth = () => useContext(AuthCtx);
