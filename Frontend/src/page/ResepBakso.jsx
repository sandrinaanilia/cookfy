import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Komentar from "../Components/Komentar"
import bakso from "../assets/img/bakso.jpg"

const RecipeBakso = () => {
  const [rating, setRating] = useState(0); 

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
              src={bakso}
              alt="Bakso"
              className="w-64 h-64 object-cover rounded-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Bakso</h1>

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
            <li>1 kg daging sapi setengah beku, potong-potong</li>
              <li>300 gram serpihan es batu</li>
              <li>2 butir putih telur</li>
              <li>2 sdm bawang putih goreng</li>
              <li>4 sdm bawang merah goreng</li>
              <li>3 sdt garam</li>
              <li>2 sdt kaldu sapi bubuk</li>
              <li>2 sdt merica bubuk</li>
              <li>19 sdm tepung tapioka</li>
              <li>1 1/2 sdt baking powder</li>
              <li>3 liter air untuk merebus</li>

            </ul>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold text-gray-800">Bahan Tetelan</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>200 gram tetelan urat sapi giling</li>
              <li>200 gram tetelan urat sapi giling</li>
              <li>1 sdm garam</li>
              <li>1/2 sdm merica bubuk</li>
              <li>100 ml air</li>
              <li>minyak secukupnya</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 bg-white shadow-md rounded-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Cara Membuat</h2>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4">
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Panaskan minyak. Tumis tetelan hingga berubah warna. Masukkan air, garam, merica, dan saus teriyaki. Masak hingga air menyusut dan tetelan empuk. Angkat dan sisihkan.</li>
              <li>Masukkan daging sapi ke food processor. Haluskan. Tambahkan es batu, putih telur, bawang merah, bawang putih, garam, merica, dan kaldu bubuk. Haluskan kembali sampai tercampur rata. Tambahkan tepung tapioka dan baking powder. Proses sampai tercampur rata. </li>
              <li>Didihkan air di panci. Matikan api kompor.</li>
              <li>Bentuk adonan bakso bulat-bulat. Beri isian tetelan. Masukkan ke air panas dalam panci. Lakukan sampai semua bahan adonan habis.</li>
              <li>Rebus bakso tetelan sampai matang dan mengapung.</li>
              <li>Angkat bakso yang sudah matang, masukkan ke dalam air es.</li>
              <li>Bakso tetelan siap disajikan dengan kuah atau disimpan di dalam freezer untuk jadi stok di rumah</li>

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

export default RecipeBakso;
