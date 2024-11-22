import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RekomendasiCard = ({ image, title, location, description, link, views, rating }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          <span className="block font-semibold">{location}</span>
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-gray-600 text-sm">
          {views.toLocaleString()} Views
        </span>
        <span className="flex items-center text-yellow-500">
          <span className="text-lg text-black font-semibold">{rating}</span>
          <FontAwesomeIcon icon={faStar} className="ml-1" />
        </span>
      </div>
      {link && (
        <div className="px-6 pt-4 pb-2">
          <a href={link} className="text-blue-500 hover:underline">
            Baca Selengkapnya
          </a>
        </div>
      )}
    </div>
  );
};

export default RekomendasiCard;
