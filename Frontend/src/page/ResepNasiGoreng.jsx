import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Komentar from "../Components/Komentar"
import nasigoreng from "../assets/img/nasigoreng.jpg"

const ResepNasiGoreng = () => {
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
              src={nasigoreng}
              alt="nasigoreng"
              className="w-64 h-64 object-cover rounded-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Nasi Goreng</h1>

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
              <li>2 porsi nasi</li>
              <li>50gr daging ayam potong dadu</li>
              <li>2 butir telur</li>
              <li>30gr Udang</li>
              <li>2 bawang putih, cincang kecil</li>
              <li>2 batang daun bawang, potong</li>
              <li>1 buah cabai keriting</li>
              <li>1 sdm kecap manis</li>
              <li>2 sdm kecap ikan</li>
              <li>1 sdm saus tiram</li>
              <li>1/2 sdt kecap asin</li>
              <li>1/2-1 sdm gula</li>
              <li>1/2 sdt merica</li>
              <li>1/2 sdt margarin</li>
              <li>Minyak untuk menumis</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 bg-white shadow-md rounded-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Cara Membuat</h2>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Panaskan sedikit minyak di wajan, lalu tumis ayam hingga matang dan kemudian  sisihkan.</li>
              <li>Di wajan yang sama, panaskan sedikit minyak dan orak-arik telur sampai matang. 
                Kemudian, masukkan semua bawang dan cabai. Aduk dan tumis hingga matang.</li>
              <li>Masukan nasi, aduk hingga rata. Lalu, masukkan ayam suwir, 
                dan semua bahan kecap, garam, merica, dan kaldu jamur, aduk kembali sampai rata. </li>
                <li>Jika sudah pas, angkat dan sajikan dengan lalapan timun atau selada.</li>
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

export default ResepNasiGoreng;
