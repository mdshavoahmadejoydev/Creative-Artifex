import React from 'react'
import Flex from '../components/Flex'
import { FaCheck } from 'react-icons/fa'
import { MdAccessTime } from "react-icons/md";
import { BiRevision } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';



const PackageItemCard = ({
  packagename,
  pricemoney,
  provide1,
  provide2,
  provide3,
  provide4,
  provide5,
  provide6,
  provide7,
  provide8,
  provide9,
  provide10,
  provide11,
  provide12,
  provide13,
  notprovide1,
  notprovide2,
  notprovide3,
  notprovide4,
  notprovide5,
  notprovide6,
  notprovide7,
  notprovide8,
  notprovide9,
  notprovide10,
  notprovide11,
  notprovide12,
  notprovide13,
  time,
  aboutPackage,

  id,
  onContinue,
}) => {


  
let navigate = useNavigate();

  return (
    <div className="w-91.75 bg-white px-6.25 py-15 rounded-4xl font-poppins border border-D9EFF7 hover:shadow-[0px_2px_10px_2px_rgba(0,0,0,0.3)] duration-200">
      <h5 className="font-bold text-25 text-07506B">{packagename}</h5>
      <p className="font-semibold text-xl text-079FD3 mt-1 -mb-2">
        {pricemoney}
      </p>

      <p className="font-poppins font-semibold text-sm text-black/80 my-2">
        {aboutPackage}
      </p>

      <p className="font-semibold text-2xl text-black/80">Our services :</p>

      <Flex
        className={`list-none flex-col gap-y-0.5 font-poppins font-semibold text-base text-black/80 mt-1`}
      >
        {provide1 && (
          <li
            className={`flex items-center gap-2 ${notprovide1 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide1}
          </li>
        )}
        {provide2 && (
          <li
            className={`flex items-center gap-2 ${notprovide2 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide2}
          </li>
        )}

        {provide3 && (
          <li
            className={`flex items-center gap-2 ${notprovide3 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide3}
          </li>
        )}

        {provide4 && (
          <li
            className={`flex items-center gap-2 ${notprovide4 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide4}
          </li>
        )}

        {provide5 && (
          <li
            className={`flex items-center gap-2 ${notprovide5 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide5}
          </li>
        )}

        {provide6 && (
          <li
            className={`flex items-center gap-2 ${notprovide6 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide6}
          </li>
        )}

        {provide7 && (
          <li
            className={`flex items-center gap-2 ${notprovide7 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide8} {provide7}
          </li>
        )}

        {provide8 && (
          <li
            className={`flex items-center gap-2 ${notprovide8 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide8}
          </li>
        )}

        {provide9 && (
          <li
            className={`flex items-center gap-2 ${notprovide9 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide9}
          </li>
        )}

        {provide10 && (
          <li
            className={`flex items-center gap-2 ${notprovide10 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide10}
          </li>
        )}

        {provide11 && (
          <li
            className={`flex items-center gap-2 ${notprovide11 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide11}
          </li>
        )}

        {provide12 && (
          <li
            className={`flex items-center gap-2 ${notprovide12 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide12}
          </li>
        )}
        {provide13 && (
          <li
            className={`flex items-center gap-2 ${notprovide13 && "text-black/30"}`}
          >
            <FaCheck className="inline-block " /> {provide13}
          </li>
        )}
      </Flex>

      <Flex className="gap-4 mt-3 font-poppins font-semibold text-sm text-black/80">
        <span className="flex items-center gap-0.5">
          {" "}
          <MdAccessTime className="inline text-lg text-black/50" /> {time}-day
          delivery
        </span>
        <span className="flex items-center gap-0.5">
          {" "}
          <BiRevision className="inline text-lg text-black/50" /> Unlimited
          Revisions
        </span>
      </Flex>

      <button
        onClick={() => onContinue(id, pricemoney, packagename, time)}
        className="font-poppins font-semibold text-2xl text-white bg-006F9F hover:bg-07506B duration-200 w-full py-1 rounded-full my-2 cursor-pointer"
      >
        Continue
      </button>

      <button
        onClick={() => navigate("/contact")}
        className="font-poppins font-semibold text-2xl text-079CC8 border-2 border-079CC8 w-full py-1 rounded-full   cursor-pointer "
      >
        Contact Us
      </button>
    </div>
  );
};

export default PackageItemCard;
