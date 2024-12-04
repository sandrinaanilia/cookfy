import React, { useState } from "react";
import Navbar from "../Components/Navbar"; // Pastikan jalur benar
import Footer from "../Components/Footer"; // Pastikan jalur benar

const ResepPie = () => {
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
              src="./src/assets/img/pie.jpg"
              alt="Bakso"
              className="w-64 h-64 object-cover rounded-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Pie</h1>

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
          <h3 className="text-xl font-semibold text-gray-800">Bahan Kulit Pie</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>250 gr tepung terigu</li>
              <li>150 gr margarin</li>
              <li>2 butir kuning telur</li>
              <li>1 sdm gula pasir </li>
              <li>1/2 sdt vanili bubuk</li>
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold text-gray-800">Bahan Vla</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>250 ml susu uht </li>
              <li>3 sdm gula pasir</li>
              <li>1 sdt maizena</li>
              <li>1 sdt margarin</li>
              <li>1 butir kuning telur</li>
              <li>1/4 sdt garam</li>
              <li>1/2 sdt vanili bubuk</li>
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold text-gray-800">Bahan Agar-agar</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>1 sdt gula pasir</li>
              <li>1 sdt agar-agar plain</li>
              <li>150 ml air</li>
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold text-gray-800">Topping</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>jeruk kupas, stroberi, dan kiwi secukupnya</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 bg-white shadow-md rounded-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Cara Membuat</h2>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Campurkan semua bahan untuk kulit hingga bisa dipulung. Siapkan cetakan pie kecil. Oles tipis dengan minyak. </li>
              <li>Ambil adonan secukupnya, pipihkan merata di setiap cetakan. 
                Tusuk-tusuk kulit pie dengan garpu agar tidak gosong dan matang merata saat dipanggang. </li>
              <li>Panaskan oven, panggang selama kurang lebih 15 menit dengan suhu 180°C atau sesuaikan oven masing-masing.</li>
              <li>Selagi menunggu, buat vla. Bagi dua susu. Satu bagian campurkan dengan gula.
                 Satu bagian lagi campurkan dengan kuning telur, vanili dan maizena. Aduk rata hingga tidak ada yang bergerindil.</li>
              <li>Panaskan susu dan gula hingga larut. Tuang susu yang setengah lagi dan masak hingga mengental dan matang. Angkat.</li>
              <li>Keluarkan kulit pie yang sudah matang dari oven dan biarkan hingga dingin.</li>
              <li>Untuk agar-agar, masak semua bahan hingga matang. Angkat.</li>
              <li>Isi kulit pie dengan vla secukupnya. Hiasi dengan buah-buahan potong. 
                Siram 1 sdm agar-agar di atasnya agar pie tidak mudah rusak dan tampilannya mengkilap.</li>

            </ul>
          </div>
          </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ResepPie;
