import React from "react";

import { MdOutlineArrowDropDown } from "react-icons/md";

const Li = ({ text, className, icon, dropdown }) => {
  return (
    <li
      className={`font-Inter font-semibold text-lg text-white group-hover:text-red-500 duration-200 ${className}`}
    >
      {text}
      {icon && <MdOutlineArrowDropDown className="inline text-3xl" />}
    </li>
  );
};

export default Li;
