import React from "react";
import Image from '../components/Image'

const ServicesCard = ({src, text, className}) => {
  return (
    <div className={`w-360 pb-30 pt-43 bg-deep-green border-4 border-serviceborder cursor-pointer 
    transition-all duration-300 ease-out
    hover:-translate-y-3 hover:scale-105 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.8)] ${className
    }`}>
      <Image src={src} className={`mx-auto mb-15 w-156`} />
      <h1 className="font-roboto font-extrabold text-white text-center text-45 leading-14 w-300 mx-auto">
        {text}
      </h1>
    </div>
  );
};

export default ServicesCard;
