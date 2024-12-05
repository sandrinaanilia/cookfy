import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import RecipeCard from "../Components/Icon";
import BuburAyam from "../assets/img/buburayam.jpg";
import Pie from "../assets/img/pie.jpg";
import PecelSayur from "../assets/img/pecelsayur.jpg";
import Bakso from "../assets/img/bakso.jpg";
import RoycoAyam from "../assets/img/roycoayam.jpg";
import KecapBango from "../assets/img/kecapbango.jpg";
import RacikSayurLodeh from "../assets/img/raciksayurlodeh.jpg";
import Garam from "../assets/img/garam.jpg";



const Beranda = () => {
  const recipes = [
    {
      image: BuburAyam,
      title: "Bubur Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepbuburayam',
    },
    {
      image: Pie,
      title: "Pie",
      time: "50 min",
      rating: "4.5",
      link: '/reseppie',

    },
    {
      image: PecelSayur,
      title: "Pecel Sayur",
      time: "50 min",
      rating: "4.5",
      link: '/reseppecelsayur',

    },
    {
      image: Bakso,
      title: "Bakso",
      time: "50 min",
      rating: "4.5",
      link: '/resepbakso',

    },
  ];

  const recommendations = [
    {
      image: BuburAyam,
      title: "Bubur Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepbuburayam',

    },
    {
      image: Pie,
      title: "Pie",
      time: "50 min",
      rating: "4.5",
      link: '/reseppie',

    },
    {
      image: PecelSayur,
      title: "Pecel Sayur",
      time: "50 min",
      rating: "4.5",
      link: '/reseppecelsayur',

    },
    {
      image: Bakso,
      title: "Bakso",
      time: "50 min",
      rating: "4.5",
      link: '/resepbakso',

    },
  ];

  const products = [
    {
      image: RoycoAyam,
      title: "Royco Ayam",
      rating: "4.5",

    },
    {
      image: KecapBango,
      title: "Kecap Bango",
      rating: "4.6",

    },
    {
      image: RacikSayurLodeh,
      title: "Racik Sayur Lodeh",
      rating: "4.8",

    },
    {
      image: Garam,
      title: "Garam Masak",
      rating: "4.7",

    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-blue-100 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              Yuk, temukan inspirasi masakan di Cookfy!
            </h2>
            <form className="flex justify-center md:justify-start items-center mt-4">
              <input
                type="text"
                className="w-64 md:w-80 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-purple-200 placeholder-gray-500"
                placeholder="Cari resep mu di sini"
              />
              <button
                type="submit"
                className="bg-[#5956A9] hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.61-10.61 7.5 7.5 0 0010.61 10.61z"
                  />
                </svg>
              </button>
            </form>
            <p className="text-gray-600 mt-2">
              Masak jadi mudah dan menyenangkan di Cookify!
            </p>
          </div>
          <div className="flex-1 mt-6 md:mt-0 relative">
            <img
              src="./src/assets/img/food2.png"
              alt="Inspirasi Masakan"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Resep Terbaru */}
      <section className="py-5 text-gray-800">
        <div className="container mx-auto">
          <h3 className="mb-4 text-center font-bold text-2xl">Resep Terbaru</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {recipes.map((recipe, index) => (
              <RecipeCard
                key={index}
                image={recipe.image}
                title={recipe.title}
                time={recipe.time}
                rating={recipe.rating}
                link={recipe.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rekomendasi */}
      <section className="py-5 text-gray-800">
        <div className="container mx-auto">
          <h3 className="mb-4 text-center font-bold text-2xl">Rekomendasi</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {recommendations.map((recipe, index) => (
              <RecipeCard
                key={index}
                image={recipe.image}
                title={recipe.title}
                time={recipe.time}
                rating={recipe.rating}
                link={recipe.link}

              />
            ))}
          </div>
        </div>
      </section>

      {/* Produk */}
      <section className="py-5 mb-10 bg-[#5956A9] text-white">
        <div className="container mx-auto">
          <h3 className="mb-4 text-center font-bold text-3xl">Produk</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
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

      <Footer />
    </div>
  );
};

export default Beranda;
