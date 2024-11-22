import React, { useState } from "react"; // Tambahkan useState
import { useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import PantaiBanyu from "../assets/img/PantaiBanyu.jpg";
import Pantai1 from "../assets/img/Pantai.jpg";
import PantaiAnyer from "../assets/img/PantaiAnyer.jpg";
import PantaiJungwok from "../assets/img/PantaiJungwok.jpg";
import PantaiKarangBolong from "../assets/img/PantaiKarangBolong.jpg";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Beranda = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State untuk menyimpan query pencarian
  const navigate = useNavigate(); // Inisialisasi navigate

  // Fungsi untuk menangani pencarian
  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchQuery.trim()) {
        navigate(`/search?query=${searchQuery}`); // Mengarahkan ke halaman hasil pencarian
      }
    }
  };

  return (
    <>
      <Navbar />

      <section className="relative bg-cover bg-center h-[600px] text-white" style={{ backgroundImage: `url(${Pantai1})` }}>
        {/* Overlay Background */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">Jelajahi Keindahan Pesisir Tanah Jawa</h1>
          <p className="text-lg md:text-2xl mt-4 text-center">Bersama Ocean Escape</p>

          {/* Pencarian */}
          <div className="flex items-center space-x-4 mt-6">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-800 rounded-md text-gray-800 py-2 px-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch} // Menghandle ketika Enter ditekan
            />
            <button
              onClick={handleSearch} // Menghandle ketika tombol pencarian diklik
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* Section Wisata Populer */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Wisata Populer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Pantai Banyutibo, Pacitan, Jawa Timur",
              img: PantaiBanyu,
              desc: "Pantai Banyu Tibo memiliki fenomena alam unik: air terjun yang jatuh langsung ke pantai.",
              views: "65,03,099",
              rating: "4.8",
              href: "/pantaibanyu"
            },
            {
              title: "Pantai Anyer, Banten",
              img: PantaiAnyer,
              desc: "Pantai Anyer terkenal dengan hamparan pasir putih luas dan air laut biru jernih.",
              views: "65,03,099",
              rating: "4.8",
              href: "/pantaianyer"
            },
            {
              title: "Pantai Jungwok, Yogyakarta",
              img: PantaiJungwok,
              desc: "Pantai Jungwok adalah destinasi alam yang populer dengan keindahan pasir putih.",
              views: "65,03,099",
              rating: "4.8",
              href: "/pantaijungwok"
            },
            {
              title: "Pantai Karangbolong, Pacitan, Jawa Timur",
              img: PantaiKarangBolong,
              desc: "Pantai Karang Bolong terkenal dengan tebing berlubang yang ikonik.",
              views: "65,03,099",
              rating: "4.8",
              href: "/pantaikarangbolong"
            }
          ].map((destinasi, index) => (
            <a key={index} href={destinasi.href} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img src={destinasi.img} alt={destinasi.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{destinasi.title}</h3>
                <p className="text-gray-600 mb-4">{destinasi.desc}</p>
                <div className="flex justify-between items-center text-sm">
                  <span>{destinasi.views} Views</span>
                  <div className="flex items-center">
                    <span className="mr-1">{destinasi.rating}</span>
                    <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/destinasi" className="text-blue-500 hover:underline flex items-center justify-center">
            Lihat semua Wisata Populer <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Beranda;
