import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Import gambar anggota tim
import sandrina from "../assets/img/sandrina.jpg";
import netania from "../assets/img/netania.jpg";
import azvin from "../assets/img/aspin.jpg";
import rifa from "../assets/img/rifa.jpg";
import virziawan from "../assets/img/virziawan.jpg";
import esangrahito from "../assets/img/esan.jpg";

const About = () => {
  // Data anggota tim
  const teamMembers = [
    { name: "Sandrina Anilia", img: sandrina },
    { name: "Netania Indria", img: netania },
    { name: "Azvin Andika", img: azvin },
    { name: "M Rifa Maulana", img: rifa },
    { name: "Virziawan Adi Listato", img: virziawan },
    { name: "Esangrahito", img: esangrahito },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold text-[#EABA20] mb-4">Tentang Cookfy </h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-12">
            <p className="text-lg text-justify text-gray-700 leading-relaxed lg:w-2/3">
              Selamat datang di Cookfy, platform resep masakan yang hadir untuk
              memenuhi kebutuhan Anda dalam menciptakan sajian kuliner unik! Kami
              berusaha untuk membantu Anda menemukan ide dan kreasi kuliner,
              sekaligus solusi yang cocok untuk gaya hidup dan kebutuhan. Dengan
              demikian, kami memperkaya dunia kuliner yang serba dinamis ini
              dengan berbagai kategori resep, mulai dari sajian sehat, camilan,
              masakan tradisional hingga masakan modern.
            </p>
            <img
              src="./src/assets/img/chefcook.jpg"
              alt="Tentang Cookfy"
              className="w-80 h-80 max-w-xs lg:max-w-xs mt-6 rounded-lg shadow-lg"            />
          </div>

          <h2 className="text-3xl font-bold text-[#EABA20] mb-6">
            Mengapa Memilih Cookfy?
          </h2>
          <p className="text-lg text-justify text-gray-700 leading-relaxed lg:w-2/3">
          Cookfy hadir untuk menginspirasi dan memudahkan semua orang memasak
            dengan menyenangkan! Kami percaya bahwa memasak tidak hanya soal rasa,
            tetapi juga tentang pengalaman. Resep yang mudah dipahami, inspirasi
            dari berbagai tradisi kuliner dunia, dan fitur-fitur tambahan lainnya
            menjadikan Cookfy sebagai solusi memasak modern yang terpercaya.
          </p>
          <p className="text-lg text-justify text-gray-700 leading-relaxed lg:w-2/3">
          Kami tak hanya sekadar menjadi penyedia resep masak di Cookfy, tapi
            bersama dengan Anda, kami siap membangun komunitas kuliner Indonesia
            untuk menjadi lebih dinamis!
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            Cookfy - Dari Dapur untuk Dunia!
          </p>
        

        {/* Tim Cookfy Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-[#EABA20] mb-8">
            Tim Cookfy
          </h2>
          <p className="text-lg text-center text-gray-700 leading-relaxed mb-8">
            Di balik platform Cookfy, ada tim yang berdedikasi dan bersemangat
            untuk menciptakan pengalaman terbaik bagi penggunanya. Tim kami terdiri
            dari individu dengan latar belakang beragam, mulai dari ahli IT, chef,
            marketing, hingga seni, yang selalu menghadirkan ide-ide berkualitas
            tinggi dan fitur yang bermanfaat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover shadow-md"
                />
                <p className="text-lg text-gray-800 font-medium">
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
