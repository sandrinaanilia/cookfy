import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Komentar from "../Components/Komentar"


const ResepBuburAyam = () => {
  const [rating, setRating] = useState(0)

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
              src="./src/assets/img/buburayam.jpg"
              alt="Bakso"
              className="w-64 h-64 object-cover rounded-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Bubur Ayam</h1>

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
            <li>200 gr beras yang sudah dicuci bersih</li>
              <li>1 buah dada ayam fillet</li>
              <li>4 siung bawang putih, cincang</li>
              <li>2 siung bawang merah, cincang</li>
              <li>1 sdt saus tiram</li>
              <li>1 batang daun bawang</li>
              <li>1 batang seledri</li>
              <li>1/2 sdt garam</li>
              <li>1/2 sdt merica</li>
              <li>air secukupnya</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 bg-white shadow-md rounded-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Cara Membuat</h2>
          </div>
          <div className="mt-4 border-t border-gray-300 pt-4">
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Blender sebentar beras dengan sedikit air hingga beras terpotong-potong, jangan terlalu halus.</li>
              <li>Masak dengan air secukupnya, tambahkan sedikit garam dan aduk-aduk hingga matang.</li>
              <li>Potong-potong kecil daging ayam. 
              Tumis bawang putih dan bawang merah. Masukkan daging ayam dan tumis hingga daging berubah warna.</li>
              <li>Tuang sedikit air, masukkan saus tiram, garam, merica dan sedikit penyedap rasa. Masak hingga air habis.</li>
              <li>Siapkan bubur di mangkuk, siram dengan topping ayam, irisan daun bawang dan seledri.</li>
              <li>Bisa juga ditambahkan potongan cakwe, bawang goreng dan kecap manis.</li>

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

export default ResepBuburAyam;
