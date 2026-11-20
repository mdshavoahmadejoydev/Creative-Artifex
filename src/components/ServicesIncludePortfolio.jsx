
import Flex from "./Flex";
import Image from "./Image";
import { useState } from "react";

const ServicesIncludePortfolio = ({ images = [] }) => {

  const [visibleCount, setVisibleCount] = useState(8);


  return (
    <div className="mt-10">
      <div className="font-poppins font-bold text-45 text-center text-black/80">
        Our Portfolio Projects
      </div>
      <div className="font-roboto font-semibold text-base w-[900px] mx-auto text-center text-black/80">
        Explore our creative work and successful projects, showcasing our expertise in graphic design, branding, and web development. Every project reflects our creativity, quality, and commitment to excellence.
      </div>

      <Flex className="justify-around mt-8 flex-wrap gap-y-4">
        {images.slice(0, visibleCount).map((img, index) => (
          <div
            key={index}
            className="w-300 h-44.75 bg-black/30 rounded-md border-2 border-sky-500 border-solid    hover:scale-110 duration-200 cursor-pointer overflow-hidden"
          >
            <Image
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full rounded-md object-cover object-center"
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
