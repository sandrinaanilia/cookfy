import React from "react";
import food from "../assets/img/food.png"; // Path gambar sesuai lokasi
import googleLogo from "../assets/img/logogoogle.png"; // Tambahkan logo Google

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Kontainer utama menggunakan grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg shadow-lg overflow-hidden w-3/4 max-w-4xl">
        {/* Kolom kiri: Gambar */}
        <div className="hidden md:flex items-center justify-start bg-blue-100 p-0">
          <img
            src={food}
            alt="salad"
            className="w-3/4 h-auto object-contain"
          />
        </div>

       {/* Kolom kanan: Form login */}
<div className="flex flex-col items-start justify-center p-8">
  {/* Judul */}
  <h2 className="text-2xl font-semibold text-[#5956A9] text-left font-encode">
    Selamat Datang!
  </h2>
  <p className="text-gray-600 text-left mt-2 font-encode">
    Ayo coba, sajikan menu favorit dengan sentuhan personal!
  </p>


          {/* Form */}
          <form className="mt-6 w-full">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1 font-encode"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email anda"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1 font-encode"
              >
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Masukkan kata sandi anda"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12c1.5-3.5 4.5-6 9-6s7.5 2.5 9 6c-1.5 3.5-4.5 6-9 6s-7.5-2.5-9-6z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-right text-sm mt-1">
                <a href="#" className="text-[#5956A9] hover:underline font-encode">
                  Lupa Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5956A9] hover:bg-purple-700 text-white py-2 rounded-lg font-encode"
            >
              Masuk
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6 w-full">
            <hr className="flex-1 border-gray-300" />
            <span className="px-4 text-gray-500 text-sm font-encode">Atau</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Login dengan Google */}
          <button
            type="button"
            className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-100 font-encode"
          >
            <img
              src={googleLogo}
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Masuk dengan Google
          </button>

            {/* Footer */}
            <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-center text-sm text-gray-600 font-encode">
                Belum punya akun?{" "}
                <a href="#" className="text-[#5956A9] hover:underline font-encode">
                Daftar
                </a>
            </p>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Login;
