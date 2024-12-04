import React from "react";
import { Link } from "react-router-dom";

const Icon = ({ image, title, time, rating, link, onClick }) => {
  return (
    <Link to={link} onClick={onClick}>
      <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden relative cursor-pointer">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        {/* Konten */}
        <div className="p-4">
          {/* Title + Icons */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <div className="flex items-center space-x-2">
              {/* Icon Favorite (Heart) */}
              <img
                src="./src/assets/img/heart.png"
                alt="Heart Icon"
                className="h-6 w-6 cursor-pointer"
              />
              {/* Icon Bookmark */}
              <img
                src="./src/assets/img/bookmark.png"
                alt="Bookmark Icon"
                className="h-6 w-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Clock + Star */}
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
            {/* Waktu */}
            <div className="flex items-center space-x-1 rounded-lg bg-emerald-50 h-8 w-20">
              <img
                src="./src/assets/img/clock.png"
                alt="Clock Icon"
                className="h-5 w-5"
              />
              <span>{time}</span>
            </div>
            {/* Rating */}
            <div className="flex items-center bg-emerald-100 h-8 rounded-lg w-16 space-x-1">
              <img
                src="./src/assets/img/star.png"
                alt="Star Icon"
                className="h-5 w-5"
              />
              <span>{rating}/5</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Icon;
