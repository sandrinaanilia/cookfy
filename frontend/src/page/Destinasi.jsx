import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import RekomendasiCard from '../Components/RekomendasiCard.jsx';
import PantaiBanyu from '../assets/img/PantaiBanyu.jpg';
import PantaiAnyer from '../assets/img/PantaiAnyer.jpg';
import PantaiJungwok from '../assets/img/PantaiJungwok.jpg';
import PantaiKarangBolong from '../assets/img/PantaiKarangBolong.jpg';


const rekomendasi = [
  {
    image: PantaiBanyu,
    title: 'Pantai BanyuTibo',
    location: 'Pacitan, Jawa Timur.',
    description: 'Pacitan merupakan kabupaten di Jawa Timur yang terkenal...',  
    link: '/pantaibanyu',
    views: 653099,
    rating: 4.7,

  },
  {
    image: PantaiBanyu,
    title: 'Pantai BanyuTibo',
    location: 'Pacitan, Jawa Timur.',
    description: 'Pacitan merupakan kabupaten di Jawa Timur yang terkenal...',  
    link: '/pantaibanyu',
    views: 653099,
    rating: 4.7,

  },
  {
    image: PantaiBanyu,
    title: 'Pantai BanyuTibo',
    location: 'Pacitan, Jawa Timur.',
    description: 'Pacitan merupakan kabupaten di Jawa Timur yang terkenal...',  
    link: '/pantaibanyu',
    views: 653099,
    rating: 4.7,

  },
  {
    image: PantaiAnyer,
    title: 'Pantai Anyer',
    location: 'Serang, Banten.',
    description: 'Pantai Anyer merupakan titik awal jalur Pantai Selatan...',
    link: '/pantaianyer',
    views: 785400,
    rating: 4.7,

  },
  {
    image: PantaiAnyer,
    title: 'Pantai Anyer',
    location: 'Serang, Banten.',
    description: 'Pantai Anyer merupakan titik awal jalur Pantai Selatan...',
    link: '/pantaianyer',
    views: 785400,
    rating: 4.7,

  },
  {
    image: PantaiAnyer,
    title: 'Pantai Anyer',
    location: 'Serang, Banten.',
    description: 'Pantai Anyer merupakan titik awal jalur Pantai Selatan...',
    link: '/pantaianyer',
    views: 785400,
    rating: 4.7,

  },
  {
    image: PantaiJungwok,
    title: 'Pantai Jungwok',
    location: 'Yogyakarta',
    description: 'Pantai Jungwok adalah pantai berpasir putih yang sangat indah...',
    link: '/pantaijungwok',
    views: 98560,
    rating: 4.9,

  },
  {
    image: PantaiJungwok,
    title: 'Pantai Jungwok',
    location: 'Yogyakarta',
    description: 'Pantai Jungwok adalah pantai berpasir putih yang sangat indah...',
    link: '/pantaijungwok',
    views: 98560,
    rating: 4.9,

  },
  {
    image: PantaiJungwok,
    title: 'Pantai Jungwok',
    location: 'Yogyakarta',
    description: 'Pantai Jungwok adalah pantai berpasir putih yang sangat indah...',
    link: '/pantaijungwok',
    views: 98560,
    rating: 4.9,
  },
  {
    image: PantaiKarangBolong,
    title: 'Pantai Karang Bolong',
    location: 'Pacitan, Jawa Timur',
    description: 'Pantai Karang Bolong menjadi salah satu pantai dengan...',
    link: '/pantaikarangbolong',
    views: 98560,
    rating: 4.9,
  },
  {
    image: PantaiKarangBolong,
    title: 'Pantai Karang Bolong',
    location: 'Pacitan, Jawa Timur',
    description: 'Pantai Karang Bolong menjadi salah satu pantai dengan...',
    link: '/pantaikarangbolong',
    views: 98560,
    rating: 4.9,
  },
  {
    image: PantaiKarangBolong,
    title: 'Pantai Karang Bolong',
    location: 'Pacitan, Jawa Timur',
    description: 'Pantai Karang Bolong menjadi salah satu pantai dengan...',
    link: '/pantaikarangbolong',
    views: 98560,
    rating: 4.9,

  },
  
];

const Destinasi = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Rekomendasi Ekowisata Terbaik</h1>
        <div className="flex flex-wrap justify-center">
          {rekomendasi.map((rekomendasi, index) => (
            <RekomendasiCard
              key={index}
              image={rekomendasi.image}
              title={rekomendasi.title}
              location={rekomendasi.location}
              description={rekomendasi.description}
              link={rekomendasi.link}
              views={rekomendasi.views} // Mengoper nilai views ke RekomendasiCard
              rating={rekomendasi.rating}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Destinasi;
