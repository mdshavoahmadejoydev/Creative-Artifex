import React from "react";
import Flex from "../components/Flex";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

export const ReviewsCard = ({yourName, prof, country, productLink, clientDes, Lprice, Hprice, duration, pastWorkingTime }) => {
  return (
    <div>
      {/* Profile */}
      <Flex className="items-center gap-3">
        <FaRegUserCircle className="h-60 w-60 shrink-0 text-[#444]" />

        <div>
          <Flex className="items-end gap-2">
            <h3 className="font-roboto font-bold text-2xl text-[#181818]">
              {yourName}
            </h3>

            <span className="font-roboto font-medium text-sm text-[#181818]">
              {country}
            </span>
          </Flex>
          <p className="font-roboto font-medium text-base text-[#181818]/90">
            {prof}
          </p>
        </div>
      </Flex>
      <Flex className="items-center gap-2 ml-17.5 -mt-2 text-[12px] leading-none text-starColor">
        <Flex className={`gap-0.5`}>
          <IoIosStar className="text-lg" />
          <IoIosStar className="text-lg" />
          <IoIosStar className="text-lg" />
          <IoIosStar className="text-lg" />
          <IoIosStar className="text-lg" />
        </Flex>
        <span className="font-medium text-lg">5</span>
      </Flex>

      {/* Product Name */}
      <p className="font-roboto  mt-6 font-bold text-lg text-black">
        Product name:{" "}
        <span className="text-black/80 font-medium">
          {productLink}
        </span>
      </p>

      {/* Review */}
      <p className="font-roboto font-medium text-lg leading-[1.45] text-black/90 w-143.5">
        <span className="font-roboto font-bold text-lg text-black">
          Client said:
        </span>{" "}
        {clientDes}
      </p>

      {/* Order Details */}
      <Flex className="mt-8 flex-wrap items-center gap-x-10 font-roboto font-medium text-lg text-2e2e2e">
        <p>${Lprice} - ${Hprice} | Price</p>
        <p>{duration} weeks | Duration</p>
        <p>{pastWorkingTime} month ago | Delivery</p>
      </Flex>
    </div>
  );
};
