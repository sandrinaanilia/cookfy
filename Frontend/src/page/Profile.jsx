import React from "react";
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import User from "../assets/img/sandrina.jpg"

const Profile = () => {
  return (
    <div>
      <Navbar />
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Profil Saya</h2>
      <div className="flex flex-col md:flex-row">
        {/* Form */}
        <div className="flex-1 md:mr-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nama Lengkap"
              defaultValue="Bernadya"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Nomor Telepon"
              defaultValue="089768676577"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Email"
              defaultValue="bernadyaaja123@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Alamat</label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Alamat"
              rows="3"
              defaultValue="Perum Jakarta Saray, No 76, RT 08 RW 11"
            ></textarea>
          </div>
          <button className="w-full bg-[#ACC47C] text-white py-3 rounded-lg hover:bg-green-500">
            Simpan
          </button>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <div className="w-32 h-32 rounded-full flex items-center justify-center">
            <img
              src={User}
              alt="User Avatar"
              className="w-28 h-28 rounded-full"
            />
          </div>
          <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            Ganti Gambar
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
