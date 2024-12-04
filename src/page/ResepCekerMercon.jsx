import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Komentar from "../Components/Komentar"


const ResepCekerMercon = () => {
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
              src="./src/assets/img/cekermercon.jpg"
              alt="Bakso"
              className="w-64 h-64 object-cover rounded-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Ceker Mercon</h1>

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
              <li>8 siung bawang merah</li>
              <li>5 siung bawang putih</li>
              <li>10 batang cabai rawit, dapat diubah sesuai selera</li>
              <li>3 batang cabai merah keriting, dapat diubah sesuai selera </li>
              <li>1 ruas kunyit, kurang lebih 2 cm</li>
              <li>1 ruas jahe</li>
              <li>3 buah kemiri sangrai</li>
              <li>1 batang sereh, geprek</li>
              <li>1 lembar daun jeruk</li>
              <li>1 lembar daun salam</li>
              <li>Garam</li>
              <li>Gula</li>
              <li>Penyedap rasa ayam</li>
              <li>1 gelas air putih</li>

            </ul>
          </div>
        </section>

        <section className="mt-8 bg-white shadow-md rounded-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Cara Membuat</h2>
          </div>

          <div className="mt-4 border-t border-gray-300 pt-4">
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Cuci bersih ceker yang telah dibuang kulit dan kukunya, kemudian rebus selama 15 menit</li>
              <li>Haluskan semua bahan bumbu kecuali sereh, daun jeruk, dan daun salam. Menghaluskan bumbu boleh dengan cobek atau blender</li>
              <li>Siapkan wajan dengan sedikit minyak, tumis bumbu halus hingga harum</li>
              <li>Masukkan sereh, daun salam, dan daun jeruk lalu masak sebentar</li>
              <li>Angkat ceker dan tiriskan, lalu masukkan pada wajan berisi bumbu dan aduk rata</li>
              <li>Tambahkan 1 gelas air lalu masak hingga air menyusut</li>
              <li>Beri garam, gula, dan penyedap rasa sesuai selera</li>
              <li>Ceker mercon siap dihidangkan</li>

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

export default ResepCekerMercon;
