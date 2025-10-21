import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productsService.js";
import { useCartContext } from "../context/CartContext.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useCartContext();

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);
  if (!product)
    return <div className="container mx-auto px-4 py-10">Loading...</div>;

  return (
    <section className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.category}</p>
        <div className="mt-4 text-2xl font-bold">
          ${product.price.toFixed(2)}
        </div>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <button
          onClick={() => addItem(product)}
          className="mt-6 rounded-lg bg-black text-white px-5 py-3"
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}
