import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gambar from "../assets/img/LogoBeach.png";

const Navbar = () => {
  const navigate = useNavigate();

 

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={gambar} alt="Ocean Escape" className="w-16" />
          <span className="ml-4 font-bold text-lg">Ocean Escape</span>
        </div>

        {/* Menu Navigasi */}
        <ul className="flex space-x-8">
          <li>
            <button onClick={() => navigate("/")} className="text-gray-700 hover:text-blue-500">Beranda</button>
          </li>
          <li>
            <button onClick={() => navigate("/destinasi")} className="text-gray-700 hover:text-blue-500">Destinasi</button>
          </li>
          <li>
            <button onClick={() => navigate("/faq")} className="text-gray-700 hover:text-blue-500">FAQ</button>
          </li>
        </ul>

       
          {/* Tombol Login dan Profil */}
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Profil
          </button>
        </div>
        </nav>
  );
};

export default Navbar;
