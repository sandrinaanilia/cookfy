import React from "react";
import Navbar from "../Components/Navbar";

const RecipeCard = ({ image, title, time, rating }) => {
    
  return (
    
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover sm:h-48"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <span className="material-icons text-yellow-400">schedule</span>
            <span>{time}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="material-icons text-yellow-400">star</span>
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="text-red-500 material-icons">favorite</button>
          <button className="text-gray-500 material-icons">bookmark</button>
        </div>
      </div>
    </div>
  );
};

const RecipePage = () => {
  const recipes = [
    
    {
        image: "./src/assets/img/food6.jpg",
      title: "Bubur Ayam",
      time: "50 min",
      rating: "4.5",
    },
    {
        image: "./src/assets/img/food6.jpg",
      title: "Pie",
      time: "50 min",
      rating: "4.5",
    },
    {
        image: "./src/assets/img/food6.jpg",
      title: "Pecel Sayur",
      time: "50 min",
      rating: "4.5",
    },
    {
        image: "./src/assets/img/food6.jpg",
      title: "Bakso",
      time: "50 min",
      rating: "4.5",
    },
    {
        image: "./src/assets/img/food5.jpg",
      title: "Udang Crispy",
      time: "50 min",
      rating: "4.5",
    },
    {
        image: "./src/assets/img/food5.jpg",
      title: "Gulai Ayam",
      time: "50 min",
      rating: "4.5",
    },
    {
        image: "./src/assets/img/food5.jpg",
      title: "Nasi Goreng",
      time: "50 min",
      rating: "4.5",
    },
    {
        image: "./src/assets/img/food5.jpg",
      title: "Ceker Mercon",
      time: "50 min",
      rating: "4.5",
    },
    {
        image: "./src/assets/img/food7.jpg",
        title: "Bubur Ayam",
        time: "50 min",
        rating: "4.5",
      },
      {
        image: "./src/assets/img/food7.jpg",
        title: "Pie",
        time: "50 min",
        rating: "4.5",
      },
      {
        image: "./src/assets/img/food7.jpg",
        title: "Pecel Sayur",
        time: "50 min",
        rating: "4.5",
      },
      {
        image: "./src/assets/img/food7.jpg",
        title: "Bakso",
        time: "50 min",
        rating: "4.5",
      },
      {
        image: "./src/assets/img/food8.jpg",
        title: "Bubur Ayam",
        time: "50 min",
        rating: "4.5",
      },
      {
        image: "./src/assets/img/food8.jpg",
        title: "Pie",
        time: "50 min",
        rating: "4.5",
      },
      {
        image: "./src/assets/img/food8.jpg",
        title: "Pecel Sayur",
        time: "50 min",
        rating: "4.5",
      },
      {
        image: "./src/assets/img/food8.jpg",
        title: "Bakso",
        time: "50 min",
        rating: "4.5",
      },
  ];

  return (
    
    <>
      <Navbar />
      <div className="p-8">
        
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari resep..."
            className="w-2/3 border border-gray-300 rounded-l-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
          <button className="bg-[#5956A9] text-white px-4 py-2 rounded-r-lg hover:bg-purple-700">
            <span className="material-icons">search</span>
          </button>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">Resep Terbaru</h2>
        <p className="text-gray-600 mb-6">
          Ribuan pengguna sudah membuat resep ini, giliran Anda sekarang!
        </p>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              image={recipe.image}
              title={recipe.title}
              time={recipe.time}
              rating={recipe.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecipePage;
