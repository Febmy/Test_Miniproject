import data from "../data/products";
export async function getAllProducts() {
  return Promise.resolve(data);
}
export async function getFeaturedProducts() {
  return Promise.resolve(data.slice(0, 3));
}
export async function getProductById(id) {
  return Promise.resolve(data.find((p) => String(p.id) === String(id)) || null);
}
