import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addItem } = useCartContext();
  return (
    <div className="rounded-xl border p-4 group">
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="mt-3 font-semibold">{product.name}</h3>
      </Link>
      <div className="mt-1 text-gray-600">{product.category}</div>
      <div className="mt-2 font-bold">${product.price.toFixed(2)}</div>
      <button
        onClick={() => addItem(product)}
        className="mt-3 w-full rounded-lg bg-black text-white py-2 hover:bg-gray-900"
      >
        Add to cart
      </button>
    </div>
  );
}
