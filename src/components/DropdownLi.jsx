import React from "react";

const DropdownLi = () => {
  return (
    <li
      className={`font-Inter font-semibold text-lg text-white/80 group-hover:text-red-500 duration-200 ${className}`}
    >
      {text}
      {icon && <MdOutlineArrowDropDown className="inline text-3xl" />}
    </li>
  );
};

export default DropdownLi;
