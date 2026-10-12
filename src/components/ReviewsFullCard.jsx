import React from "react";
import { ReviewsCard } from '../sections/ReviewsCard';
import Image from "./Image";
import Flex from "./Flex";

const ReviewsFullCard = ({yourName, prof, country, productLink, clientDes, Lprice, Hprice, duration, pastWorkingTime, src }) => {
  return (
    <>
    <Flex className={`items-center`}>
      <div className="w-1/2">
        <ReviewsCard yourName={yourName} country={country} prof={prof} productLink={productLink} clientDes={clientDes} Lprice={Lprice} Hprice={Hprice} duration={duration} pastWorkingTime={pastWorkingTime} />
      </div>

      <div className="bg-red-500 w-1/2 h-[350px] border border-white rounded-2xl shadow-[0px_2px_10px_4px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-110 duration-200">
        <Image
          src={src}
          className={`w-full h-full object-cover object-center rounded-2xl`}
        />
      </div>
    </Flex>
    <div className="w-full h-0.5 bg-black/10 my-10"></div>
    </>
  );
};

export default ReviewsFullCard;
