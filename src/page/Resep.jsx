import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import RecipeCard from "../Components/Icon";

const Resep = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const recipes = [
    {
      image: "./src/assets/img/buburayam.jpg",
      title: "Bubur Ayam",
      time: "50 min",
      rating: "4.5",
      link: "/resepbuburayam",
    },
    {
      image: "./src/assets/img/pie.jpg",
      title: "Pie",
      time: "50 min",
      rating: "4.5",
      link: "/reseppie",
    },
    {
      image: "./src/assets/img/pecelsayur.jpg",
      title: "Pecel Sayur",
      time: "50 min",
      rating: "4.5",
      link: "/reseppecelsayur",
    },
    {
      image: "./src/assets/img/bakso.jpg",
      title: "Bakso",
      time: "50 min",
      rating: "4.5",
      link: "/resepbakso",
    },
    {
      image: "./src/assets/img/udangcrispy.jpg",
      title: "Udang Crispy",
      time: "50 min",
      rating: "4.5",
      link: "/resepudangcrispy",
    },
    {
      image: "./src/assets/img/gulaiayam.jpg",
      title: "Gulai Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepgulaiayam',

    },
    {
      image: "./src/assets/img/nasigoreng.jpg",
      title: "Nasi Goreng",
      time: "50 min",
      rating: "4.5",
      link: '/resepnasigoreng',

    },
    {
      image: "./src/assets/img/cekermercon.jpg",
      title: "Ceker Mercon",
      time: "50 min",
      rating: "4.5",
      link: '/resepcekermercon',

    },
    {
      image: "./src/assets/img/buburayam.jpg",
      title: "Bubur Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepbuburayam',

    },
    {
      image: "./src/assets/img/pie.jpg",
      title: "Pie",
      time: "50 min",
      rating: "4.5",
      link: '/reseppie',

    },
    {
      image: "./src/assets/img/pecelsayur.jpg",
      title: "Pecel Sayur",
      time: "50 min",
      rating: "4.5",
      link: '/reseppecelsayur',

    },
    {
      image: "./src/assets/img/bakso.jpg",
      title: "Bakso",
      time: "50 min",
      rating: "4.5",
      link: '/resepbakso',

    },
    {
      image: "./src/assets/img/udangcrispy.jpg",
      title: "Udang Crispy",
      time: "50 min",
      rating: "4.5",
      link: '/resepudangcrispy',

    },
    {
      image: "./src/assets/img/gulaiayam.jpg",
      title: "Gulai Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepgulaiayam',

    },
    {
      image: "./src/assets/img/nasigoreng.jpg",
      title: "Nasi Goreng",
      time: "50 min",
      rating: "4.5",
      link: '/resepnasigoreng',

    },
    {
      image: "./src/assets/img/cekermercon.jpg",
      title: "Ceker Mercon",
      time: "50 min",
      rating: "4.5",
      link: '/resepcekermercon',

    },
    {
      image: "./src/assets/img/buburayam.jpg",
      title: "Bubur Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepbuburayam',

    },
    {
      image: "./src/assets/img/pie.jpg",
      title: "Pie",
      time: "50 min",
      rating: "4.5",
      link: '/reseppie',

    },
    {
      image: "./src/assets/img/pecelsayur.jpg",
      title: "Pecel Sayur",
      time: "50 min",
      rating: "4.5",
      link: '/reseppecelsayur',

    },
    {
      image: "./src/assets/img/bakso.jpg",
      title: "Bakso",
      time: "50 min",
      rating: "4.5",
      link: '/resepbakso',

    },
    {
      image: "./src/assets/img/udangcrispy.jpg",
      title: "Udang Crispy",
      time: "50 min",
      rating: "4.5",
      link: '/resepudangcrispy',

    },
    {
      image: "./src/assets/img/gulaiayam.jpg",
      title: "Gulai Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepgulaiayam',

    },
    {
      image: "./src/assets/img/nasigoreng.jpg",
      title: "Nasi Goreng",
      time: "50 min",
      rating: "4.5",
      link: '/resepnasigoreng',

    },
    {
      image: "./src/assets/img/cekermercon.jpg",
      title: "Ceker Mercon",
      time: "50 min",
      rating: "4.5",
      link: '/resepcekermercon',

    },
    {
      image: "./src/assets/img/buburayam.jpg",
      title: "Bubur Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepbuburayam',

    },
    {
      image: "./src/assets/img/pie.jpg",
      title: "Pie",
      time: "50 min",
      rating: "4.5",
      link: '/reseppie',

    },
    {
      image: "./src/assets/img/pecelsayur.jpg",
      title: "Pecel Sayur",
      time: "50 min",
      rating: "4.5",
      link: '/reseppecelsayur',

    },
    {
      image: "./src/assets/img/bakso.jpg",
      title: "Bakso",
      time: "50 min",
      rating: "4.5",
      link: '/resepbakso',

    },
    {
      image: "./src/assets/img/udangcrispy.jpg",
      title: "Udang Crispy",
      time: "50 min",
      rating: "4.5",
      link: '/resepudangcrispy',

    },
    {
      image: "./src/assets/img/gulaiayam.jpg",
      title: "Gulai Ayam",
      time: "50 min",
      rating: "4.5",
      link: '/resepgulaiayam',

    },
    {
      image: "./src/assets/img/nasigoreng.jpg",
      title: "Nasi Goreng",
      time: "50 min",
      rating: "4.5",
      link: '/resepnasigoreng',

    },
    {
      image: "./src/assets/img/cekermercon.jpg",
      title: "Ceker Mercon",
      time: "50 min",
      rating: "4.5",
      link: '/resepcekermercon',
    },
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="p-8">
        {/* Search Bar */}
        <div className="flex justify-end mb-8">
          <input
            type="text"
            placeholder="Cari resep..."
            className="w-1/3 border border-gray-300 rounded-l-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#5956A9] text-white px-4 py-2 rounded-r-lg hover:bg-purple-700">
            <span className="material-icons">search</span>
          </button>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">Resep Terbaru</h2>
        <p className="text-gray-600 font-semibold mb-6">
          Ribuan pengguna sudah membuat resep ini, giliran Anda sekarang!
        </p>

        {/* Icon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe, index) => (
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
      <Footer />
    </>
  );
};

export default Resep;
