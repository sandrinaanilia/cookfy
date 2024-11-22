import { Routes, Route, Navigate } from "react-router-dom";
import Beranda from "./page/Beranda.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import Resep from "./page/Resep.jsx";
import Produk from "./page/Produk.jsx";



function App() {
  const token = true;
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resep" element={<Resep />} />
      <Route path="/produk" element={<Produk />} />

    </Routes>
  );
}

export default App;
