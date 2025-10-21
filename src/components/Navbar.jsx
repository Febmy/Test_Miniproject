import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Dropdown from "./Dropdown.jsx";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          Shoes.
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/landing">Landing</NavLink>
          </li>
          <li>
            <a href="/landing#top-selling">Products</a>
          </li>
          <li>
            <a href="/landing#testimonials">Testimonial</a>
          </li>
          <li>
            <a href="/landing#newsletter">Contact</a>
          </li>
          <li>
            <Dropdown
              label="Collections"
              items={[
                { label: "Running", to: "/catalog?cat=running" },
                { label: "Training", to: "/catalog?cat=training" },
                { label: "Lifestyle", to: "/catalog?cat=lifestyle" },
              ]}
            />
          </li>
        </ul>

        {!isAuthenticated ? (
          <div className="flex items-center gap-3">
            <NavLink to="/login" className="px-3 py-2">
              Sign in
            </NavLink>
            <NavLink
              to="/register"
              className="px-3 py-2 rounded-lg bg-black text-white"
            >
              Sign up
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <NavLink to="/dashboard" className="px-3 py-2">
              Dashboard
            </NavLink>
            <button onClick={logout} className="px-3 py-2 rounded-lg border">
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
