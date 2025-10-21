import axios from "axios";

export const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: { Accept: "application/json" },
  withCredentials: false, // penting: jangan kirim cookie/cred ke domain publik
});

// Util agar pemanggil lama yang memanggil parseAxiosError tetap aman
export function parseAxiosError(err) {
  if (err?.response?.data?.error) return err.response.data.error;
  if (typeof err?.message === "string") return err.message;
  try {
    return JSON.stringify(err);
  } catch {
    return "Unexpected error";
  }
}

export default api;
