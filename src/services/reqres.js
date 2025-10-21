import axios from "axios";

const BASE = import.meta.env.VITE_REQRES_BASE_URL || "https://reqres.in/api";
const SEND_KEY =
  (import.meta.env.VITE_REQRES_SEND_API_KEY ?? "true") !== "false";

const api = axios.create({
  baseURL: BASE,
  withCredentials: false,
  headers: SEND_KEY
    ? { "x-api-key": import.meta.env.VITE_REQRES_API_KEY || "reqres-free-v1" }
    : {},
});

// Helpful logs to debug 500s
api.interceptors.request.use((cfg) => {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(
      "[REQRES]",
      cfg.method?.toUpperCase(),
      cfg.baseURL + cfg.url,
      cfg.headers
    );
  }
  return cfg;
});
api.interceptors.response.use(
  (r) => r,
  (err) => {
    const status = err?.response?.status;
    const msg = err?.response?.data?.error || err.message || "Request failed";
    // eslint-disable-next-line no-console
    console.error(`[REQRES ${status}]`, msg);
    return Promise.reject(err);
  }
);

export default api;

// Wrapper helpers with graceful fallbacks
export async function loginReqres({ email, password }) {
  try {
    const res = await api.post(
      "/login",
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data; // { token }
  } catch (err) {
    // retry once WITHOUT the api-key header (in case 5xx due to header)
    try {
      const res = await fetch(`${BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error(`Fallback login failed: ${res.status}`);
      return await res.json();
    } catch (e2) {
      throw err; // keep original error for clarity
    }
  }
}

export async function getUsers(page = 1) {
  try {
    const res = await api.get("/users", { params: { page } });
    return res.data; // { data, page, total, ... }
  } catch (err) {
    try {
      const res = await fetch(`${BASE}/users?page=${page}`);
      if (!res.ok) throw new Error(`Fallback users failed: ${res.status}`);
      return await res.json();
    } catch (e2) {
      throw err;
    }
  }
}
