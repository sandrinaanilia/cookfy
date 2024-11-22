import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Pantai from "../assets/img/PantaiBanyu.jpg";
import Pantai1 from "../assets/img/PantaiBanyu1.jpeg";
import Pantai2 from "../assets/img/PantaiBanyu2.webp";
import Pantai3 from "../assets/img/PantaiBanyu3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const PantaiBanyu = () => {
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
x                <img
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
                <h3 className="text-3xl font-bold mb-4">Pantai BanyuTibo</h3>
                <p className="text-gray-700 text-justify">
                Pacitan merupakan kabupaten di Jawa Timur yang terkenal dengan keindahan pantai-pantainya yang menawan. Salah satu yang paling menarik perhatian adalah Pantai Banyu Tibo, yang memiliki keunikan tersendiri dibandingkan pantai-pantai lainnya.
                Pantai Banyu Tibo menawarkan pemandangan yang luar biasa, yaitu air terjun yang mengalir langsung ke laut. Fenomena ini sangat jarang ditemukan di pantai lain dan menjadi magnet bagi para pengunjung yang ingin menyaksikan keajaiban alam ini.
                Nama "Banyu Tibo" berasal dari bahasa Jawa, yang berarti "air yang terjatuh". Air terjun ini menjadi ciri khas dan simbol dari Pantai Banyu Tibo.
                </p>
                <p className="mt-4 text-justify text-gray-700">
                Pantai Banyu Tibo menjadi salah satu pantai di Jawa Timur yang memiliki pesona air terjun. Menjadi pemandangan yang unik dan tidak biasa, 
                air terjun di pantai ini terlihat mengalir langsung ke pasir putih di pantai dan menuju ke lautan. Oleh karena itu, Pantai Banyu Tibo akan menjadi favorit mereka yang mencari wisata pantai anti-mainstream.
                Bagaimana? Apakah kamu sudah menjadi semakin penasaran dengan panorama air terjun di Pantai Banyu Tibo ini? Tidak perlu berlama-lama, kamu dapat membaca beberapa hal yang sudah Traveloka rangkum mengenai Pantai Banyu Tibo berikut ini.
                </p>
                <p className="mt-4 text-justify text-gray-700 font-bold">Harga Tiket Masuk dan Jam Buka</p>
                <p className="text-justify text-gray-700">Untuk dapat memasuki area Pantai Banyu Tibo, kamu akan dikenakan biaya tiket masuk sebesar Rp 8.000 saja per orang. Selain itu, kamu juga perlu menyiapkan biaya tambahan untuk parkir kendaraan. 
                Untuk kendaraan roda dua, kamu perlu membayar sebesar Rp 2.000. Sedangkan, untuk kendaraan roda empat, kamu perlu membayar sebesar Rp 5.000.
                Pantai Banyu Tibo dapat kamu kunjungi dengan leluasa karena buka setiap hari selama 24 jam non-stop. Setiap akhir pekan, lokasi ini cukup ramai pengunjung. Sehingga, jika kamu mencari ketenangan, kamu dapat berkunjung di hari kerja.
                Hindari juga waktu berkunjung di musim kemarau atau malam hari karena air laut yang pasang.</p>

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.72845559508!2d110.3634856!3d-7.7972247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5899b50ed2db%3A0x678b213028a9393a!2sPantai%20Banyutibo!5e0!3m2!1sen!2sid!4v1628270693402!5m2!1sen!2sid"
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

export default PantaiBanyu;
