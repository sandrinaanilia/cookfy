import React from "react";

const IconBuy = ({ image, title, time, rating }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        {/* Title + Icons */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <div className="flex items-center space-x-2">
            {/* Favorite (Heart) */}
            <img
              src="./src/assets/img/heart.png"
              alt="Heart Icon"
              className="h-6 w-6 cursor-pointer"
            />
            {/* Bookmark */}
            <img
              src="./src/assets/img/bookmark.png"
              alt="Bookmark Icon"
              className="h-6 w-6 cursor-pointer"
            />
          </div>
        </div>
        {/* Star */}
        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
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

      {/* Buy Button - Positioned at the bottom right */}
      <button className="absolute bottom-2 right-2 px-6 py bg-[#ACC47C] font-semibold text-Black rounded hover:bg-green-500">
        Beli
      </button>
    </div>
  );
};

export default IconBuy;
