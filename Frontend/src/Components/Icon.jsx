import { HeartIcon } from "@heroicons/react/16/solid";
import React from "react";
import { Link } from "react-router-dom";
import Heart from "../assets/img/heart.png"
import Rating from "../assets/img/star.png"
import Bookmark from "../assets/img/bookmark.png"
import Clock from "../assets/img/clock.png"

const Icon = ({ image, title, time, rating, link, onClick }) => {
  return (
    <Link to={link} onClick={onClick}>
      <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden relative cursor-pointer">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

    
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <div className="flex items-center space-x-2">
  
              <img
              src={Heart}
                alt="Heart Icon"
                className="h-6 w-6 cursor-pointer"
              />
              {/* Icon Bookmark */}
              <img
                src={Bookmark}
                alt="Bookmark Icon"
                className="h-6 w-6 cursor-pointer"
              />
            </div>
          </div>

          {/* Clock + Star */}
          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center space-x-1 rounded-lg bg-emerald-50 h-8 w-20">
              <img
                src={Clock}
                alt="Clock Icon"
                className="h-5 w-5"
              />
              <span>{time}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center bg-emerald-100 h-8 rounded-lg w-16 space-x-1">
              <img
                src={Rating}
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
