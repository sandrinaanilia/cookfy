import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import iconwa from "../assets/img/iconwa.png";
import iconpanah from "../assets/img/iconpanah.png";
import bgImage from "../assets/img/Pantai2.jpg"; // Ganti dengan path ke gambar yang diinginkan

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/089601060186', '_blank'); 
  };

  const toggleExpansion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqItems = [
    {
      question: "Apa saja pantai terkenal di Pulau Jawa??",
      answer: "Beberapa pantai terkenal di Pulau Jawa antara lain Pantai Parangtritis (Yogyakarta), Pantai Pangandaran (Jawa Barat), Pantai Anyer (Banten), Pantai Karimunjawa (Jawa Tengah), dan Pantai Balekambang (Jawa Timur).",
    },
    {
      question: "Apakah pantai-pantai di Pulau Jawa aman untuk berenang?",
      answer: "PKebanyakan pantai di Pulau Jawa aman untuk berenang, namun selalu perhatikan tanda-tanda peringatan dan instruksi dari penjaga pantai. Beberapa pantai memiliki ombak yang cukup besar sehingga perlu berhati-hati.",
    },
    {
      question: "Apa kegiatan yang bisa dilakukan di pantai-pantai Pulau Jawa selain berenang?",
      answer: "Selain berenang, Anda bisa melakukan berbagai kegiatan seperti snorkeling, diving, surfing, memancing, bermain pasir, berjemur, dan menikmati pemandangan matahari terbenam.",
    },
    {
      question: "Apakah ada pantai tersembunyi atau kurang terkenal yang layak dikunjungi di Pulau Jawa?",
      answer: "Ya, ada beberapa pantai tersembunyi yang indah seperti Pantai Nglambor (Yogyakarta), Pantai Menganti (Jawa Tengah), dan Pantai Klayar (Jawa Timur) yang menawarkan pemandangan spektakuler dan suasana yang lebih sepi.",
    },
    {
      question: "Bagaimana kondisi cuaca di pantai-pantai Pulau Jawa?",
      answer: "Kondisi cuaca di pantai-pantai Pulau Jawa biasanya tropis dengan suhu berkisar antara 25°C hingga 30°C. Musim kemarau terjadi sekitar bulan April hingga Oktober, sementara musim hujan berlangsung dari November hingga Maret.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-80 flex items-center justify-center" 
           style={{
             backgroundImage: `url(${bgImage})`,
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundRepeat: 'no-repeat'
           }}>
        <h1 className="text-white font-bold text-4xl text-center">FAQ</h1>
      </div>
      <div className="flex-1 p-5">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-10 border border-gray-400 rounded">
            <label className="flex items-center justify-between w-full p-3 cursor-pointer" onClick={() => toggleExpansion(index)}>
              {item.question}
              <img
                src={iconpanah}
                alt="Toggle"
                width="20px"
                height="20px"
                className={`ml-auto transform transition-transform ${expanded === index ? 'rotate-180' : ''}`}
              />
            </label>
            {expanded === index && (
              <div className="p-3 border-t border-gray-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center justify-center mt-10">
          <button
            onClick={handleWhatsAppClick}
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-4 rounded-3xl focus:outline-none focus:shadow-outline flex items-center"
          >
            Hubungi kami
            <img src={iconwa} alt="WhatsApp" width="30px" height="30px" className="ml-2" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
