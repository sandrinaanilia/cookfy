import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const Beranda = () => {
  const recipes = Array(4).fill({
    title: "Bakso Ayam",
    time: "30 menit",
    image: "./src/assets/img/food5.jpg",
  });

  const recommendations = Array(4).fill({
    title: "Pindang Ikan",
    time: "25 menit",
    image: "./src/assets/img/food4.jpg",
  });

  const products = Array(4).fill({
    title: "Bumbu Instan",
    price: "Rp 25.000",
    image: "./src/assets/img/produk1.jpg",
  });

  return (
    <div className="">
      <Navbar />

      <section className="relative bg-blue-100 py-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="text-center md:text-left flex-1">
      <h2 className="text-2xl font-semibold text-gray-800">
        Yuk, temukan inspirasi masakan di Cookfy!
      </h2>
      <form className="flex justify-center md:justify-start items-center mt-4">
        <input
          type="text"
          className="w-64 md:w-80 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring focus:ring-purple-200 placeholder-gray-500"
          placeholder="Cari resep mu di sini"
        />
        <button
          type="submit"
          className="bg-[#5956A9] hover:bg-purple-700 text-white px-4 py-2 rounded-r-full flex items-center justify-center"
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
        Masak jadi mudah dan menyenangkan di Cookfy!
      </p>
    </div>

     {/* Image Section */}
     <div className="flex-1 mt-6 md:mt-0 relative">
      <div className="relative">
        <img
          src="./src/assets/img/food2.png" 
          alt="Inspirasi Masakan"
          className="w-full max-w-sm mx-auto relative z-10"
        />
        {/* Gambar Dekoratif di Bawah */}
        <img
          src="./src/assets/img/food3.png"
          alt="Dekorasi"
          className="absolute bottom-0 left-1/4 transform -translate-x-3 mt-6 w-80"        />
      </div>
    </div>
  </div>
</section>


      {/* Resep Terbaru */}
      <Section title="Resep Terbaru" items={recipes} />

      {/* Rekomendasi */}
      <Section title="Rekomendasi" items={recommendations} />

      {/* Produk */}
      <section className="py-5 bg-[#5956A9] text-white">
        <div className="container mx-auto">
          <h3 className="mb-4 text-center font-bold text-2xl">Produk</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h5 className="font-bold">{product.title}</h5>
                  <p className="text-gray-600">{product.price}</p>
                  <button className="mt-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                    Beli
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Section = ({ title, items }) => (
  <section className="container mx-auto my-5">
    <h3 className="mb-4 text-2xl text-center font-bold">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h5 className="font-bold">{item.title}</h5>
            <p className="text-gray-600 flex items-center">
              <svg
                img="./src/assets/img/logogoogle.png"
s                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m-4-8a9 9 0 11-9 9 9 9 0 019-9z"
                />
              </svg>
              {item.time}
            </p>
            <button className="mt-3 px-4 py-2 border border-red-500 text-red-500 rounded-md flex items-center justify-center">
              <svg
                img="./src/assets/img/logogoogle.png"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6.5a3.5 3.5 0 01-4.95 0L12 5.45l-.55.55a3.5 3.5 0 11-4.95-4.95l5-5a3.5 3.5 0 014.95 0l5 5a3.5 3.5 0 01-4.95 4.95z"
                />
              </svg>
              Suka
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Beranda;
