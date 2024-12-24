import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logocook.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState("/");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigation = (path) => {
    setActivePath(path);
    navigate(path);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <button onClick={() => handleNavigation("/")}>
            <img src={logo} alt="Logo" className="w-8 h-8" />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-12">
          {[
            { path: "/", label: "Beranda" },
            { path: "/resep", label: "Resep" },
            { path: "/produk", label: "Produk" },
            { path: "/komunitas", label: "Komunitas" },
            { path: "/about", label: "About" },
          ].map((item) => (
            <li key={item.path}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`text-gray-700 hover:font-bold hover:text-[#5956A9] ${
                  activePath === item.path ? "font-bold text-gray-800" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Login / Signup and Icons */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <button 
                onClick={() => handleNavigation("/register")} 
                className="text-gray-700"
              >
                Daftar
              </button>
              <button 
                onClick={() => handleNavigation("/login")} 
                className="text-white bg-[#5956A9] px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-[#474492] transition duration-300"
              >
                Masuk
              </button>
            </>
          ) : (
            <>
              {/* Notification Icon */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 17.25v1.5a2.25 2.25 0 11-4.5 0v-1.5m4.5 0a2.25 2.25 0 11-4.5 0m4.5 0h-4.5m-6-2.25v-3.5a6.75 6.75 0 0113.5 0v3.5m-13.5 0h13.5"
                  />
                </svg>
              </button>

              {/* Bookmark Icon */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 5.25v13.5L12 15l-5.25 3.75V5.25h10.5z"
                  />
                </svg>
              </button>

              {/* Profile Picture */}
              <button onClick={() => handleNavigation("/profil")}>
                <img
                  src="/path/to/profile.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
