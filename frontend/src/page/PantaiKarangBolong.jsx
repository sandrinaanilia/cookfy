import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import Pantai1 from "../assets/img/PantaiKarangBolong1.webp";
import Pantai2 from "../assets/img/PantaiKarangBolong2.jpg";
import Pantai3 from "../assets/img/PantaiKarangBolong3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const PantaiKarangBolong = () => {
  return (
    <>
      <Navbar />
      <section className="news py-10">
        <div className="container mx-auto px-4">
          <div className="mx-4 lg:mx-20">
            <div className="relative">
              <img
                src={Pantai3}
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
                <h3 className="text-3xl font-bold mb-4">Pantai Karang Bolong</h3>
                <p className="text-gray-700 text-justify">
                Pantai Karangbolong berlokasi di Desa Karangbolong, Kecamatan Buayan. Pantai Karangbolong merupakan pantai landai berpasir yang cukup luas, yang dibatasi oleh perbukitan. 
                Di kawasan pantai juga terdapat Gua Karangbolong di sisi timur. Gua Karangbolong berukuran panjang 30 m, lebar 10 m dan tinggi sekitar 5 m. Kawasan Karangbolong dikenal dengan sarang burung waletnya. 
                Proses pengambilan sarang burung walet dilakukan secara tradisional yang dilakukan 4 kali dalam setahun didahului dengan serangkaian prosesi adat dan pertunjukkan kesenian daerah. 
                </p>
                <p className="mt-4 text-justify text-gray-700">
                Suasana di area pantai cukup tenang dan udaranya fresh. Pantai ini ramai dikunjungi para wisatawan terutama pada saat hari libur atau weekend. 
                Berbagai Fasilitas yang Terdapat di Pantai Karang Bolong Kebumen. Tidak hanya menyuguhkan pesona pantai yang alami, 
                pantai ini juga dilengkapi dengan berbagai fasilitas yang dapat menunjang aktivitas para wisatawan saat berkunjung. 
                Berikut ini adalah sejumlah fasilitas yang disediakannya.
                </p>
                <p className="mt text-justify text-gray-700"> ● Area parkir cukup luas</p>
                <p className="mt text-justify text-gray-700"> ● Toilet dan kamar mandi</p>
                <p className="mt text-justify text-gray-700"> ● Gazebo</p>
                <p className="mt text-justify text-gray-700"> ● Beberapa warung makan</p>
                <p className="mt text-justify text-gray-700"> ● Mushola</p>
                <p className="mt-4 text-justify text-gray-700 font-bold">Harga Tiket Masuk</p>
                <p className="text-justify text-gray-700 ">Jika kamu sedang mencari tempat wisata cantik yang akan menguras dompet, maka Pantai Karang Bolong bisa jadi jawabannya. 
                  Ini karena ketika berkunjung, kamu hanya perlu membayar tiket masuk sebesar sekitar Rp5.000 per orang. Jika bawa kendaraan, 
                  maka harus membayar uang parkir sekitar Rp5.000 untuk sepeda motor dan Rp10.000 untuk mobil.</p> 
              </div>
            </article>

            <div className="flex flex-col lg:flex-row justify-between mt-10">
              <div className="bg-white shadow-md rounded-lg overflow-hidden lg:w-1/2 p-4 lg:p-6 mb-6 lg:mb-0">
                <h4 className="text-2xl font-bold mb-4">Lokasi Pantai</h4>
                <div className="w-full h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.72845559508!2d110.3634856!3d-7.7972247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5d342d0e3b29%3A0x15d7083625fa2426!2sPantai%20Karang%20Bolong%2C%20Kabupaten%20Pacitan%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1692650927438!5m2!1sid!2sid"                   width="100%"
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

export default PantaiKarangBolong;
