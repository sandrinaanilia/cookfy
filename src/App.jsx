import { Routes, Route, Navigate } from "react-router-dom"
import Beranda from "./page/Beranda.jsx"
import Login from "./page/Login.jsx"
import Register from "./page/Register.jsx"
import Resep from "./page/Resep.jsx"
import ResepPie from "./page/ResepPie.jsx"
import ResepBuburAyam from "./page/ResepBuburAyam.jsx"
import ResepPecelSayur from "./page/ResepPecelSayur.jsx"
import ResepNasiGoreng from "./page/ResepNasiGoreng.jsx"
import ResepCekerMercon from "./page/ResepCekerMercon.jsx"
import ResepGulaiAyam from "./page/ResepGulaiAyam.jsx"
import ResepUdangCrispy from "./page/ResepUdangCrispy.jsx"
import ResepBakso from "./page/ResepBakso.jsx"
import Produk from "./page/Produk.jsx"
import About from "./page/About.jsx"
import Komunitas from "./page/Komunitas.jsx"






function App() {
  const token = true;
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resep" element={<Resep />} />
      <Route path="/reseppie" element={<ResepPie />} />
      <Route path="/resepbuburayam" element={<ResepBuburAyam/>} />
      <Route path="/reseppecelsayur" element={<ResepPecelSayur/>} />
      <Route path="/resepnasigoreng" element={<ResepNasiGoreng/>} />
      <Route path="/resepcekermercon" element={<ResepCekerMercon/>} />
      <Route path="/resepgulaiayam" element={<ResepGulaiAyam/>} />
      <Route path="/resepudangcrispy" element={<ResepUdangCrispy/>} />
      <Route path="/resepbakso" element={<ResepBakso/>} />

      <Route path="/produk" element={<Produk />} />
      <Route path="/about" element={<About />} />
      <Route path="/komunitas" element={<Komunitas />} />



    </Routes>
  );
}

export default App;
