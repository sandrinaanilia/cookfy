import React, { useState } from "react"
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import RecipeCard from "../Components/IconBuy.jsx"
// Import semua gambar yang digunakan
import royco from "../assets/img/roycoayam.jpg"
import kecapbango from "../assets/img/kecapbango.jpg"
import raciksayurlodeh from "../assets/img/raciksayurlodeh.jpg"
import garam from "../assets/img/garam.jpg"
import raciktempegoreng from "../assets/img/raciktempegoreng.jpg"
import ladaku from "../assets/img/ladaku.jpg"
import ketumbarbubuk from "../assets/img/ketumbarbubuk.jpg"
import minyakgoreng from "../assets/img/minyakgoreng.jpg"
import berasmaknyuss from "../assets/img/berasmaknyuss.jpg"
import sasa from "../assets/img/sasa.jpg"
import sunkara from "../assets/img/sunkara.jpg"
import sasasantan from "../assets/img/sasasantanbubuk.jpg"
import pancakemix from "../assets/img/pancakemix.jpg"
import saorisaus from "../assets/img/saorisaustiram.jpg"
import gulaku from "../assets/img/gulaku.jpg"
import blueband from "../assets/img/blueband.jpg"

const Produk = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const products = [
    {
      image: royco,
      title: "Royco Ayam",
      rating: "4.5",
    },
    {
      image: kecapbango,
      title: "Kecap Bango",
      rating: "4.6",
    },
    {
      image: raciksayurlodeh,
      title: "Racik Sayur Lodeh",
      rating: "4.8",
    },
    {
      image: garam,
      title: "Garam Masak",
      rating: "4.7",
    },
    {
      image: raciktempegoreng,
      title: "Racik Tempe Goreng",
      rating: "4.5",
    },
    {
      image: ladaku,
      title: "Ladaku",
      rating: "4.6",
    },
    {
      image: ketumbarbubuk,
      title: "Ketumbar Bubuk",
      rating: "4.8",
    },
    {
      image: minyakgoreng,
      title: "Minyak Goreng Sania",
      rating: "4.7",
    },
    {
      image: berasmaknyuss,
      title: "Beras Maknyuss",
      rating: "4.5",
    },
    {
      image: sasa,
      title: "Sasa",
      rating: "4.6",
    },
    {
      image: sunkara,
      title: "Sun Kara",
      rating: "4.8",
    },
    {
      image: sasasantan,
      title: "Santan Bubuk",
      rating: "4.7",
    },
    {
      image: pancakemix,
      title: "Pancake Mix",
      rating: "4.7",
    },
    {
      image: saorisaus,
      title: "Saori Saus Tiram",
      rating: "4.5",
    },
    {
      image: gulaku,
      title: "Gulaku",
      rating: "4.6",
    },
    {
      image: blueband,
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
