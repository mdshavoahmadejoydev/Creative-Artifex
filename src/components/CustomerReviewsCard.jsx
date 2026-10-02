import React from "react";
import Flex from "./Flex";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";

const CustomerReviewsCard = ({name, proff, des}) => {
  return (
    <div className="w-306 px-20 py-20 bg-white cursor-pointer rounded-2xl duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.2)]">
      <Flex className="w-full min-w-0">
        <RiAccountCircleFill className="text-[#2B2B2B] text-6xl cursor-pointer box-content shrink-0" />

        <div className="min-w-0 flex-1 mt-1 ml-3">
          <p className="text-xl font-semibold font-poppins text-black truncate">{name}
          </p>

          <p className="text-base font-medium font-poppins text-black/80 truncate mt-1.5">{proff}</p>
          <Flex className={`gap-0.5 mt-1`}>
            <IoIosStar className="text-yellow-600 text-xl"/>
            
            <IoIosStar className="text-yellow-600 text-xl"/>
            <IoIosStar className="text-yellow-600 text-xl"/>
            <IoIosStar className="text-yellow-600 text-xl"/>
            <IoIosStar className="text-yellow-600 text-xl"/>
            <div className="">
              <span className="font-poppins  font-bold text-black">5.0</span>
              <span className="font-poppins font-medium text-black/80">(60)</span>
            </div>
            
          </Flex>
        </div>
      </Flex>
      <p className="text-black/70 line-clamp-10 font-poppins text-base mt-4">{des}</p>
    </div>
  );
};

export default CustomerReviewsCard;
