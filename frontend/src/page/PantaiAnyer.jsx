import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Pantai from "../assets/img/PantaiAnyer.jpg";
import Pantai1 from "../assets/img/PantaiAnyer1.jpg";
import Pantai2 from "../assets/img/PantaiAnyer2.jpg";
import Pantai3 from "../assets/img/PantaiAnyer3.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const PantaiAnyer = () => {
  return (
    <>
      <Navbar />
      <section className="news py-10">
        <div className="container mx-auto px-4">
          <div className="mx-4 lg:mx-20">
            <div className="relative">
              <img
                src={Pantai}
                alt="Pantai BanyuTibo"
                className="w-full h-auto mb-6 rounded-lg shadow-md"
              />
              <div className="flex justify-center mt-4 space-x-4">
                <img
                  src={Pantai1}
                  alt="Pantai Banyu"
                  className="w-1/6 h-auto rounded-lg cursor-pointer shadow-sm"
                />
                <img
                  src={Pantai2}
                  alt="BanyuTibo"
                  className="w-1/6 h-auto rounded-lg cursor-pointer shadow-sm"
                />
                <img
                  src={Pantai3}
                  alt="BanyuTibo"
                  className="w-1/6 h-auto rounded-lg cursor-pointer shadow-sm"
                />
                <img
                  src={Pantai1}
                  alt="Pantai Banyu"
                  className="w-1/6 h-auto rounded-lg cursor-pointer shadow-sm"
                />
                <img
                  src={Pantai2}
                  alt="BanyuTibo"
                  className="w-1/6 h-auto rounded-lg cursor-pointer shadow-sm"
                />
                <img
                  src={Pantai3}
                  alt="BanyuTibo"
                  className="w-1/6 h-auto rounded-lg cursor-pointer shadow-sm"
                />
              </div>
            </div>

            <article className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-4/4 mx-auto mt-8">
              <div className="p-4 lg:p-6">
                <h3 className="text-3xl font-bold mb-4">Pantai Anyer</h3>
                <p className="text-gray-700 text-justify">
                Pantai Anyer merupakan titik awal jalur Pantai Selatan di Pulau Jawa, 
                terkenal dengan hamparan pasir putihnya yang luas dan air laut biru jernih, 
                menjadikannya tempat yang ideal untuk berjemur, berenang, dan bermain air.
                </p>
                <p className="text-justify text-gray-700 mt-4 font-bold">Jam Buka Pantai Anyer</p>
                <p className="text-justify text-gray-700">
                Destinasi wisata satu ini buka selama 24 jam setiap hari. Artinya, kamu dapat menikmati keindahan pantai ini kapanpun kamu inginkan, 
                baik pagi, siang, sore, maupun malam hari. Apakah kamu ingin bersantai di bawah sinar matahari pagi yang hangat, 
                berenang di laut biru jernih saat siang hari, menikmati sunset yang romantis di sore hari, atau berburu foto dan suasana malam yang tenang, 
                Pantai Anyer selalu siap menyambut kamu.
                </p>
                <p className="text-justify text-gray-700 mt-4 font-bold">Harga Tiket Masuk Pantai Anyer</p>
                <p className="text-justify text-gray-700">
                Kamu hanya perlu membayar tiket yang cukup terjangkau. Berikut adalah rincian harga tiket Pantai Anyer:
                <p className="text-justify text-gray-700 mt-4">Harga tiket masuk Pantai Anyer: Rp10.000 per orang
                </p>
                <p className="text-justify text-gray-700 mt-4">Harga tiket masuk sepeda motor termasuk orang: Rp25.000</p>
                <p className="text-justify text-gray-700 mt-4">Harga tiket masuk sedan/kijang termasuk orang: Rp100.000</p>
                <p className="text-justify text-gray-700 mt-4">Harga tiket masuk elf termasuk orang: Rp250.000</p>
                <p className="text-justify text-gray-700 mt-4">Harga tiket masuk bus kecil termasuk orang: Rp500.000</p>
                <p className="text-justify text-gray-700 mt-4">Harga tiket masuk bus long medium termasuk orang: Rp600.000</p>
                <p className="text-justify text-gray-700 mt-4">Harga tiket masuk bus besar termasuk orang: Rp900.000</p>
                </p>
              </div>
            </article>

            <div className="flex flex-col lg:flex-row justify-between mt-10">
              <div className="bg-white shadow-md rounded-lg overflow-hidden lg:w-1/2 p-4 lg:p-6 mb-6 lg:mb-0">
                <h4 className="text-2xl font-bold mb-4">Lokasi Pantai</h4>
                <div className="w-full h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7941.757223284673!2d105.86764140202043!3d-6.068671293686013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e420c63019d3303%3A0xb20eeb5450290f64!2sPantai%20Anyer!5e0!3m2!1sen!2sid!4v1628270711229!5m2!1sen!2sid"                   width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    title="Pantai BanyuTibo Location"
                  ></iframe>
                </div>
              </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden w-80 h-40 p-4 lg:p-6 bg-bottom">
                  <h4 className="text-2xl font-bold mb-4">Rating</h4>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold text-yellow-500">4.8</span>
                    <div className="flex ml-2 text-yellow-500">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">65,03,099 Views</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PantaiAnyer;
