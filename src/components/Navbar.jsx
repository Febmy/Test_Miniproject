import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/index.css";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header className="navbar">
      <nav className="container">
        <Link className="logo" to="/">
          ShoeHub
        </Link>
        <ul className="menu">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="auth">
          {isAuthenticated ? (
            <button onClick={logout} className="btn">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
