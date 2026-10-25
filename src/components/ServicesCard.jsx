
import React from "react";
import Image from "../components/Image";

const ServicesCard = ({ src, text, className }) => {
  return (
    <div
      className={`service-card w-72.5 pb-30 pt-43 px-4
      box-border bg-deep-green cursor-pointer
      transition-all duration-300 ease-out
      hover:-translate-y-3 hover:scale-105
      hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.8)]
      ${className || ""}`}
    >
      <Image src={src} className="mx-auto mb-15 w-156" />

      <h1 className="font-roboto font-extrabold text-white
      text-center text-4xl leading-10 mx-auto">
        {text}
      </h1>
    </div>
  );
};

export default ServicesCard;


// import React from "react";
// import Image from '../components/Image'

// const ServicesCard = ({src, text, className}) => {
//   return (
//     <div className={`w-[290px] pb-30 pt-43 px-4 box-border bg-deep-green border-4 border-serviceborder cursor-pointer 
//     transition-all duration-300 ease-out
//     hover:-translate-y-3 hover:scale-105 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.8)] ${className
//     }`}>
//       <Image src={src} className={`mx-auto mb-15 w-156`} />
//       <h1 className="font-roboto font-extrabold text-white text-center text-4xl leading-10 mx-auto">
//         {text}
//       </h1>
//     </div>
//   );
// };

// export default ServicesCard;

{/* <div className={`w-[290px] pb-30 pt-43 px-4 box-border bg-deep-green border-4 border-serviceborder cursor-pointer 
    transition-all duration-300 ease-out
    hover:-translate-y-3 hover:scale-105 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.8)] ${className
    }`}></div> */}
