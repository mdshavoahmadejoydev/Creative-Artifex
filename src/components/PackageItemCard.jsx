import React from 'react'
import Flex from '../components/Flex'
import { FaCheck } from 'react-icons/fa'

const PackageItemCard = ({packagename,pricemoney,provive1,provive2, provive3, provive4, provive5, provive6, provive7,provive8, notprovide1, notprovide2, notprovide3, notprovide4, notprovide5, notprovide6, notprovide7, notprovide8, icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8,}) => {
  return (
    <div className="w-[367px] bg-white px-[25px] py-[15px] rounded-4xl font-poppins border border-[#D9EFF7] hover:shadow-[0px_2px_10px_2px_rgba(0,0,0,0.3)] duration-200">
      <h5 className="font-bold text-[25px] text-[#07506B]">{packagename}</h5>
      <p className="font-semibold text-[20px] text-[#079FD3] mt-1 -mb-2">
        $ {pricemoney}
      </p>
      <p className="font-semibold text-[24px] text-black/80">Our services :</p>

      <Flex
        className={`list-none flex-col gap-y-0.5 font-poppins font-semibold text-base text-black/80 mt-1`}
      >
        <li className={`flex items-center gap-2 ${notprovide1 && "text-black/30" }`}>
          {!icon1 && <FaCheck className="inline-block " />} {provive1}
        </li>

        <li className={`flex items-center gap-2 ${notprovide2 && "text-black/30" }`}>
          {!icon2 && <FaCheck className="inline-block " />} {provive2}
        </li>

        <li className={`flex items-center gap-2 ${notprovide3 && "text-black/30" }`}>
          {!icon3 && <FaCheck className="inline-block " />} {provive3}
        </li>

        <li className={`flex items-center gap-2 ${notprovide4 && "text-black/30" }`}>
          {!icon4 && <FaCheck className="inline-block " />} {provive4}
        </li>

        <li className={`flex items-center gap-2 ${notprovide5 && "text-black/30" }`}>
          {!icon5 && <FaCheck className="inline-block " />} {provive5}
        </li>

        <li className={`flex items-center gap-2 ${notprovide6 && "text-black/30" }`}>
          {!icon6 && <FaCheck className="inline-block " />} {provive6}
        </li>

        <li className={`flex items-center gap-2 ${notprovide7 && "text-black/30" }`}>
          {!icon7 && <FaCheck className="inline-block " />} {provive8} {provive7}
        </li>

        <li className={`flex items-center gap-2 ${notprovide8 && "text-black/30" }`}>
          {!icon8 && <FaCheck className="inline-block " />} {provive8}
        </li>
      </Flex>

      <button className="font-poppins font-semibold text-2xl text-white bg-[#006F9F] hover:bg-[#07506B] duration-200 w-full py-1 rounded-full mb-2 mt-4 cursor-pointer">
        Order Now
      </button>

      <button className="font-poppins font-semibold text-2xl text-[#079CC8] border-2 border-[#079CC8] w-full py-1 rounded-full   cursor-pointer ">
        Contact Us
      </button>
    </div>
  );
};

export default PackageItemCard;
