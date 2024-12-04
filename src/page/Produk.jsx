import React, { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import RecipeCard from "../Components/IconBuy"; // Pastikan RecipeCard diimpor dengan benar

const Produk = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      image: "./src/assets/img/roycoayam.jpg",
      title: "Royco Ayam",
      rating: "4.5",
    },
    {
      image: "./src/assets/img/kecapbango.jpg",
      title: "Kecap Bango",
      rating: "4.6",
    },
    {
      image: "./src/assets/img/raciksayurlodeh.jpg",
      title: "Racik Sayur Lodeh",
      rating: "4.8",
    },
    {
      image: "./src/assets/img/garam.jpg",
      title: "Garam Masak",
      rating: "4.7",
    },
    {
      image: "./src/assets/img/raciktempegoreng.jpg",
      title: "Racik Tempe Goreng",
      rating: "4.5",
    },
    {
      image: "./src/assets/img/ladaku.jpg",
      title: "Ladaku",
      rating: "4.6",
    },
    {
      image: "./src/assets/img/ketumbarbubuk.jpg",
      title: "Ketumbar Bubuk",
      rating: "4.8",
    },
    {
      image: "./src/assets/img/minyakgoreng.jpg",
      title: "Minyak Goreng Sania",
      rating: "4.7",
    },
    {
      image: "./src/assets/img/berasmaknyuss.jpg",
      title: "Beras Maknyuss",
      rating: "4.5",
    },
    {
      image: "./src/assets/img/sasa.jpg",
      title: "Sasa",
      rating: "4.6",
    },
    {
      image: "./src/assets/img/sunkara.jpg",
      title: "Sun Kara",
      rating: "4.8",
    },
    {
      image: "./src/assets/img/sasasantanbubuk.jpg",
      title: "Santan Bubuk",
      rating: "4.7",
    },
    {
      image: "./src/assets/img/pancakemix.jpg",
      title: "Pancake Mix",
      rating: "4.7",
    },
    {
      image: "./src/assets/img/saorisaustiram.jpg",
      title: "Saori Saus Tiram",
      rating: "4.5",
    },
    {
      image: "./src/assets/img/gulaku.jpg",
      title: "Gulaku",
      rating: "4.6",
    },
    {
      image: "./src/assets/img/blueband.jpg",
      title: "Blue Band",
      rating: "4.8",
    },
  ]

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="p-8">

      {/* Search Bar */}
      <div className="flex justify-end mb-8">
      <input
    type="text"
    placeholder="Cari produk..."
    className="w-1/3 border border-gray-300 rounded-l-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button className="bg-[#5956A9] text-white px-4 py-2 rounded-r-lg hover:bg-purple-700">
    <span className="material-icons">search</span>
  </button>
</div>
 </div>

      {/* Produk */}
      <section className="py-5 text-gray-800">
        <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-2">Produk</h2>
        <p className="text-gray-600 font-semibold mb-6">
kreasikan masakan lezatmu dengan produk kebanggan indonesia.        </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredProducts.map((product, index) => (
              <RecipeCard
                key={index}
                image={product.image}
                title={product.title}
                rating={product.rating}
              />
            ))}
          </div>
         
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Produk;
