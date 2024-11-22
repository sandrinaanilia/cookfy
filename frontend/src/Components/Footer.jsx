import React from "react";
import email from "../assets/img/email.jpeg";
import ig from "../assets/img/ig.jpg";
import youtube from "../assets/img/Youtube.jpg";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://www.instagram.com/sndrina_anilia?igsh=cGJ4dmpjeHRyaDRm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          >
            <img src={ig} alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://youtube.com/@example"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          >
            <img src={youtube} alt="YouTube" className="w-6 h-6" />
          </a>
          <a
            href="mailto:sandrinaanilia04@gmail.com"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          >
            <img src={email} alt="Email" className="w-6 h-6" />
          </a>
        </div>
        {/* Footer Text */}
        <div className="text-center md:text-right">
          <p>&#169; 2024 Ocean Escape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
