import React, { Component } from 'react'
import ReviewsPageTitle from '../components/ReviewsPageTitle';
import P from '../components/P';
import creativeHero from '../assets/creativeherro.svg'
import { IoIosStar } from 'react-icons/io';
import Flex from '../components/Flex';
import Container from '../components/Container';
import Image from '../components/Image';

const ProductFullCard = ({productLink, productDes, Lprice, Hprice, duration, countReviews, stars, src}) => {
  return (
    <>
      <Flex className={`items-center`}>
        <div className="w-1/2">
          {/* Product Name */}
          <p className="font-roboto font-bold text-lg text-black">
            Product name:{" "}
            <span className="text-black/80 font-medium">
              {productLink}
            </span>
          </p>

          {/* company name */}
          <p className="font-roboto font-medium text-2e2e2e text-base my-4">
            Creative Artifex
          </p>

          {/* Review */}
          <p className="font-roboto font-medium text-lg leading-[1.45] text-black/90 w-143.5">
            <span className="font-roboto font-bold text-lg text-black">
              About Product:
            </span>{" "}
            {productDes}
          </p>

          {/* Order Details */}
          <Flex className="mt-8 flex-wrap items-center gap-x-10 font-roboto font-medium text-lg text-2e2e2e">
            <p>${Lprice} - ${Hprice} | Price</p>
            <p>{duration} weeks | Duration</p>
            <div className="flex items-center gap-1">
              <p>
                {countReviews} |{" "}
                <span className="text-xl text-black font-extrabold">
                  {stars}
                </span>{" "}
              </p>
              <IoIosStar className="text-base -ml-1 text-black inline-block" />
            </div>
          </Flex>
        </div>

        <div className="w-1/2 h-350 border border-white rounded-2xl shadow-[0px_2px_10px_4px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-110 duration-200">
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

export default ProductFullCard;
