import React from "react";
import Image from '../components/Image'

const ServicesCard = ({src, text, className}) => {
  return (
    <div className={`w-417 pb-30 pt-43 bg-deep-green border-4 border-light-aqua hover:border-red-500 duration-200 cursor-pointer ${className
    }`}>
      <Image src={src} className={`mx-auto mb-15`} />
      <h1 className="font-roboto font-extrabold text-white text-center text-55 leading-14">
        {text}
      </h1>
    </div>
  );
};

export default ServicesCard;
