const BASE = "https://reqres.in/api";

// ==== Auth (Reqres tidak butuh token untuk akses endpoint ini) ====

export const loginReqres = async ({ email, password }) => {
  const url = `${BASE}/login`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "omit",
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status} - ${url}`);
  return data; // { token }
};

export const registerReqres = async ({ email, password }) => {
  const res = await fetch(`${BASE}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    credentials: "omit",
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  return data; // { id, token }
};

// ==== Users (GET publik; tanpa Authorization, tanpa cookie) ====

export const getUsers = async ({ page = 1, per_page = 6 }) => {
  const url = `${BASE}/users?page=${page}&per_page=${per_page}`;
  const res = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
    credentials: "omit",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  return data; // { page, per_page, total, total_pages, data: [...] }
};

export const getUserById = async (id) => {
  const res = await fetch(`${BASE}/users/${id}`, {
    method: "GET",
    headers: { Accept: "application/json" },
    credentials: "omit",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
  return data.data; // { id, email, first_name, last_name, avatar }
};
