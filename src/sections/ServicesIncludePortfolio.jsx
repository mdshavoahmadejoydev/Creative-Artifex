
import Flex from "../components/Flex";
import Image from "../components/Image";
import { useState } from "react";

const ServicesIncludePortfolio = ({ images = [] }) => {

  const [visibleCount, setVisibleCount] = useState(8);


  return (
    <div className="mt-10">
      <div className="font-poppins font-bold text-45 text-center">
        Our Portfolio Projects
      </div>

      <Flex className="justify-around mt-4 flex-wrap gap-y-4">
        {images.slice(0, visibleCount).map((img, index) => (
          <div
            key={index}
            className="w-300 h-44.75 bg-black/30 rounded-xl hover:scale-110 duration-200 cursor-pointer overflow-hidden"
          >
            <Image
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full rounded-xl object-cover object-center"
            />
          </div>
        ))}
      </Flex>


      {visibleCount < images.length && (
        <Flex className="justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="bg-006F9F! hover:bg-07506B! duration-200 mt-8 px-6.25 py-2 font-poppins text-white italic font-extrabold border border-white rounded-xl text-2xl cursor-pointer hover:border-red-500"
          >
            View More
          </button>
        </Flex>
      )}
    </div>
  );
};

export default ServicesIncludePortfolio;
