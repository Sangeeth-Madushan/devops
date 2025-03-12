

import React from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "../../components/Button";

const Card = ({ _id, title, image }) => {  
  const url = `/view/${_id}`;

  return (
    <div 
      className="w-[275px] h-[300px] bg-gray-100 border-gray-200 rounded-lg shadow-lg border flex flex-col items-center justify-between p-3 
                 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
    >  
      {/* ✅ Increased card size (w:230px, h:230px) & Added Hover Focus Effect */}
      {image && (
        <div className="w-[85%] h-[85%] flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="object-contain w-full h-full rounded-lg"
          />
        </div>
      )}
      <h2 className="mt-2 text-sm font-semibold text-center">{title}</h2>  
      
      <Button
        as={NavLink}
        to={url}
        className={twMerge(
          "bg-teal-800 border-teal-700 border-2 border-solid px-3 py-1 text-xs font-bold uppercase tracking-wide hover:scale-110"
        )}
      >
        View
      </Button>  
    </div>
  );
};

export default Card;

