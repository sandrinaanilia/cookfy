import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import komentarImg from "../assets/img/komentar.jpg"
import komentarImg2 from "../assets/img/komentar2.jpg"
import heartIcon from "../assets/img/heart.png"
import commentsIcon from "../assets/img/comments.png"
import shareIcon from "../assets/img/sharing.png"
import userIcon from "../assets/img/user.png"

// Data post
const posts = [
  {
    id: 1,
    user: "Mama Udin",
    time: "10 menit yang lalu",
    img: komentarImg,
    content: "Gimana cara membuat brownies agar tidak keras?",
    likes: 500,
    comments: 291,
    shares: 30,
  },
  {
    id: 2,
    user: "Mama Dedeh",
    time: "5 menit yang lalu",
    img: komentarImg2,
    content: "Cara memasak ikan agar tidak bau amis?",
    likes: 350,
    comments: 120,
    shares: 20,
  },
  {
    id: 3,
    user: "Mama Udin",
    time: "2 menit yang lalu",
    img: komentarImg,
    content: "Ada yang tahu resep sederhana untuk anak-anak?",
    likes: 800,
    comments: 450,
    shares: 50,
  },
  {
    id: 1,
    user: "Mama Dedeh",
    time: "10 menit yang lalu",
    img: komentarImg2,
    content: "Gimana cara membuat brownies agar tidak keras?",
    likes: 500,
    comments: 291,
    shares: 30,
  },
  {
    id: 2,
    user: "Mama Udin",
    time: "5 menit yang lalu",
    img: komentarImg,
    content: "Cara memasak ikan agar tidak bau amis?",
    likes: 350,
    comments: 120,
    shares: 20,
  },
  {
    id: 3,
    user: "Mama Dedeh",
    time: "2 menit yang lalu",
    img: komentarImg2,
    content: "Ada yang tahu resep sederhana untuk anak-anak?",
    likes: 800,
    comments: 450,
    shares: 50,
  },
];

// Komponen untuk setiap Post
const Post = ({ user, time, img, content, likes, comments, shares }) => {
  return (
    <div className="border-b border-gray-300 py-4">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <img
          src={img}
          alt={`Avatar ${user}`}
          className="w-12 h-12 rounded-full object-cover shadow"
        />
        {/* Konten Post */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-sm text-gray-500">{time}</p>
          <p className="mt-2 text-gray-700">{content}</p>
          {/* Statistik Post */}
          <div className="flex items-center space-x-6 mt-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <img
                src={heartIcon}
                alt="Like Icon"
                className="h-5 w-5 cursor-pointer"
              />
              <span>{likes} Likes</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={commentsIcon}
                alt="Comment Icon"
                className="h-5 w-5 cursor-pointer"
              />
              <span>{comments} Komentar</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={shareIcon}
                alt="Share Icon"
                className="h-5 w-5 cursor-pointer"
              />
              <span>{shares} Bagikan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen utama
const Komunitas = () => {
  const [newComment, setNewComment] = useState("");

  // Fungsi untuk menambahkan komentar baru
  const addComment = () => {
    if (newComment.trim() !== "") {
      alert(`Komentar baru: "${newComment}" telah ditambahkan.`);
      setNewComment(""); // Kosongkan input setelah menambahkan
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
        {/* Form Tambah Komentar */}
        <div className="mt-4 flex items-center space-x-4">
          <img
            src={userIcon}
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
      </div>
      <Footer />
    </>
  );
};

export default Komunitas;
