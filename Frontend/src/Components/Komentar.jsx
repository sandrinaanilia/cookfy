import React, { useState } from "react"
import komentarImg from "../assets/img/komentar.jpg"
import user from "../assets/img/user.png"


const Komentar = () => {
  const [comments, setComments] = useState([
    {
      name: "Mama Udin",
      img: komentarImg,
      text: "Resep nya sangat membantu sekali. Terima kasih sudah berbagi resep ini.",
      time: "sebulan yang lalu",
    },
  ]);
  const [newComment, setNewComment] = useState("");

  // Fungsi untuk menambahkan komentar baru
  const addComment = () => {
    if (newComment.trim() !== "") {
      const newCommentData = {
        name: "User", // Nama user (bisa diganti dengan nama dinamis jika ada autentikasi)
        time: new Date().toLocaleString(), // Waktu komentar
        text: newComment, // Isi komentar
        img: komentarImg,
      };
      setComments([newCommentData, ...comments]); // Tambahkan komentar baru ke daftar komentar
      setNewComment(""); // Kosongkan input setelah menambahkan
    }
  };

  return (
    <section className="mt-8 bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Komentar</h2>

      {/* Daftar Komentar */}
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 border-b pb-4"
          >
            <img
              src={comment.img}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-gray-800">{comment.name}</p>
              <p className="text-gray-400 text-sm">{comment.time}</p>
              <p className="text-gray-600">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form Tambah Komentar */}
      <div className="mt-4 flex items-center space-x-4">
        <img
              src={user}
              alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-md px-4 py-2"
          placeholder="Beri komentar"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={addComment}
          className="bg-[#5956A9] hover:bg-purple-600 text-white py-2 px-4 rounded-md"
        >
          Kirim
        </button>
      </div>
    </section>
  );
};

export default Komentar;
