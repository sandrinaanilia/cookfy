import React, { useState } from "react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Komentar from "../Components/Komentar"
import udangcrispy from "../assets/img/udangcrispy.jpg"

const ResepUdangCrispy = () => {
  const [rating, setRating] = useState(0); // State untuk menyimpan rating yang dipilih

  // Fungsi untuk mengubah rating
  const handleRating = (star) => {
    setRating(star);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Recipe Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={udangcrispy}
              alt="udangcrispy"
              className="w-64 h-64 object-cover rounded-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Udang Crispy</h1>

              {/* Star Rating Section */}
              <div className="flex items-center space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer text-lg ${
                      star <= rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    onClick={() => handleRating(star)} // Set rating saat diklik
                  >
                    ★
                  </span>
                ))}
                <span className="text-gray-600 text-sm">({rating}/5)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="text-gray-500 hover:text-red-500">
              <i className="fas fa-heart"></i>
            </button>
            <button className="text-gray-500 hover:text-gray-800">
              <i className="far fa-bookmark"></i>
            </button>
          </div>
        </div>

        
        {/* Ingredients Section */}
        <section className="mt-8 bg-white shadow-md rounded-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Bahan - bahan</h2>
            <button className="bg-[#5956A9] hover:bg-purple-900 text-white py-2 px-4 rounded-md">
              Pesan bahan
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-2">⏱️ 60 menit</p>

          {/* Ingredients List */}
          <div className="mt-4 border-t border-gray-300 pt-4">
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>250 g udang</li>
              <li>1 butir telur</li>
              <li>5 sdm tepung terigu</li>
              <li>1 sdm tepung maizena</li>
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold text-gray-800">Bumbu Halus</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>3 siung bawang putih</li>
              <li>Secukupnya kaldu bubuk dan merica</li>
              <li>Sedikit garam</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 bg-white shadow-md rounded-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Cara Membuat</h2>
          </div>

          <div className="mt-4 border-t border-gray-300 pt-4">
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Cuci bersih udang, buang kepala, kulit, kotorannya. Lalu beri bumbu halus diamkan beberapa jam/semalaman di kulkas.</li>
              <li>Siapkan 2 wadah, 1 wadah gunakan untuk telur lalu kocok lepas, satu lagi untuk campuran tepung dan maizena (satukan dan aduk rata).</li>
              <li>Panaskan minyak, lalu celupkan udang di kocokan telur lalu gulingkan di campuran tepung sambil ditekan-tekan agar tepung menempel.</li>
              <li>Goreng udang sampai matang, tiriskan.</li>
              <li>Sajikan.</li>
            </ul>
          </div>
          </section>
          <Komentar />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ResepUdangCrispy;
