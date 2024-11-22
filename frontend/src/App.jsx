import Beranda from "./page/Beranda.jsx";
import Login from "./page/Login.jsx";
import Register from "./page/Register.jsx";
import Destinasi from "./page/Destinasi.jsx";
import PantaiBanyu from "./page/PantaiBanyu.jsx";
import PantaiAnyer from "./page/PantaiAnyer.jsx";
import PantaiJungwok from "./page/PantaiJungwok.jsx";
import PantaiKarangBolong from "./page/PantaiKarangBolong.jsx";
import FAQ from "./page/FAQ.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const token = true;
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/destinasi" element={<Destinasi />} />
      <Route path="/pantaibanyu" element={<PantaiBanyu />} />
      <Route path="/pantaianyer" element={<PantaiAnyer />} />
      <Route path="/pantaijungwok" element={<PantaiJungwok />} />
      <Route path="/pantaikarangbolong" element={<PantaiKarangBolong />} />
      <Route path="/faq" element={<FAQ />} />

    </Routes>
  );
}

export default App;
