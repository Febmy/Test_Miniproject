import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Home from "../pages/Home.jsx"; // Users paginated
import Catalog from "../pages/Catalog.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import UserDetail from "../pages/UserDetail.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import NotFound from "../pages/NotFound.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

const ProductDetail = lazy(() => import("../pages/ProductDetail.jsx"));
const Landing = lazy(() => import("../pages/Landing.jsx"));

export default function RoutesRoot() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* alias /users -> / */}
        <Route path="/users" element={<Navigate to="/" replace />} />
        <Route path="/users/:id" element={<UserDetail />} />

        <Route path="/landing" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
}
