import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DropdownLi = ({text, className, icon}) => {
  return (
    <li
      className={`font-Inter font-semibold text-lg text-white duration-200 px-6 py-2 ${className}`}
    >
      {text}
      {icon && <MdOutlineArrowDropDown className="inline text-3xl" />}
    </li>
  );
};

export default DropdownLi;
