import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DropdownLi = ({text, className, icon}) => {
  return (
    <li
      className={`font-Inter font-semibold text-lg text-white/90 group-hover:text-white group-active:text-Royal-Purple/60 px-6 py-2 ${className}`}
    >
      {text}
      {icon && <MdOutlineArrowDropDown className="inline text-3xl" />}
    </li>
  );
};

export default DropdownLi;

