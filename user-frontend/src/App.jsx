import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import ProductPage from "./pages/ProductPage";
import AdminPage from "./pages/AdminPage";

import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";

import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
