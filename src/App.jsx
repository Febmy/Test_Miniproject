import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import RoutesRoot from "./routes/index.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-1">
            <RoutesRoot />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
