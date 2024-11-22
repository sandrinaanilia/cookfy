import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Pantai from "../assets/img/PantaiJungwok1.jpg";
import Pantai1 from "../assets/img/PantaiJungwok1.jpg";
import Pantai2 from "../assets/img/PantaiJungwok2.jpg";
import Pantai3 from "../assets/img/PantaiJungwok3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const PantaiJungwok = () => {
  return (
    <>
      <Navbar />
      <section className="news py-10">
        <div className="container mx-auto px-4">
          <div className="mx-4 lg:mx-20">
            {/* Main Image */}
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
                <h3 className="text-3xl font-bold mb-4">Pantai Jungwok</h3>
                <p className="text-gray-700 text-justify">
                Pantai Jungwok di Gunungkidul, Yogyakarta merupakan daerah yang terkenal dengan pesona alamnya yang memukau. 
                Pantai Jungwok adalah salah satu destinasi wisata di wilayah ini. Meskipun belum sepenuhnya terjamah oleh wisatawan,
                keindahan alamnya yang luar biasa dan budaya lokal yang unik membuatnya menjadi destinasi yang menarik untuk dieksplorasi. 
                </p>
                <p className="mt-4 text-justify text-gray-700">
                Sebelum kita memasuki petualangan ke Pantai Jungwok, penting untuk memahami sejarah tempat ini. Pantai Jungwok adalah salah satu pantai yang belum begitu terkenal di Gunungkidul, Yogyakarta. Dahulu, pantai ini hanya dikenal oleh sebagian kecil masyarakat lokal.
                Namun, dengan upaya promosi dan kemudahan aksesibilitas yang semakin baik, Pantai Jungwok mulai dikenal oleh wisatawan dari berbagai daerah.
                Pantai Jungwok mengambil namanya dari peristiwa sejarah yang terkait dengan Gunung Manjung di Gunungkidul. Gunung ini mengalami letusan monumental sekali dalam sejarahnya, tepatnya sekitar 400 juta tahun yang lalu. Akibat letusan dahsyat tersebut, 
                sebagian besar daratan patah dan membentuk sebuah pulau yang kini dikenal sebagai Pulau Kalong. Pulau Kalong ini terletak tidak jauh dari Pantai. 
                Nama “Jungwok” sendiri merupakan kombinasi dari kata “Jung” yang mengacu pada Gunung Manjung dan “Wok” yang berasal dari kata “Krowok” dalam bahasa Jawa, yang berarti lubang dan patah, mengingatkan kita pada peristiwa dahsyat tersebut.
                </p>
                <p className="text-justify font-bold text-gray-700 mt-4">Harga Tiket Masuk</p>
                <p className="text-justify text-gray-700">Anda hanya perlu membayar untuk tiket masuk ke Pantai Jungwok sebagai berikut:k</p>
                <p className="text-justify text-gray-700 mt-1">Tiket Masuk: Rp 10.000</p>
                <p className="text-justify text-gray-700 mt-1">Tiket Masuk: Rp 2.000</p>
                <p className="text-justify text-gray-700 mt-1">Tiket Masuk: Rp 5.000</p>

              </div>
            </article>

            {/* Map and Ratings */}
            <div className="flex flex-col lg:flex-row justify-between mt-10">
              <div className="bg-white shadow-md rounded-lg overflow-hidden lg:w-1/2 p-4 lg:p-6 mb-6 lg:mb-0">
                <h4 className="text-2xl font-bold mb-4">Lokasi Pantai</h4>
                {/* Map placeholder */}
                <div className="w-full h-64 bg-gray-200">
                  {/* Insert actual map component or iframe here */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.710217159878!2d110.68501271471994!3d-8.179646884089188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7be857efab2bd3%3A0x951a5f8757df44b2!2sPantai%20Jungwok!5e0!3m2!1sen!2sid!4v1692599003940!5m2!1sen!2sid"
                  width="100%"
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

export default PantaiJungwok;
