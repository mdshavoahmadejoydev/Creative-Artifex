
import React from "react";

const OrderPageInput = ({
  fullName,
  placeholder,
  id,
  icon,
  onChange,
  className,
  value,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-poppins text-base text-black/80 font-semibold mb-2"
      >
        {fullName} {icon && <span className="text-red-500">*</span>}
      </label>

      <input
        onChange={onChange}
        id={id}
        value={value}
        type="text"
        placeholder={placeholder}
        className={`w-full border border-slate-400 rounded-lg px-3 py-3 outline-none focus:border-cyan-500 placeholder:text-black/70 placeholder:font-roboto placeholder:font-medium ${className || ""}`}
      />
    </div>
  );
};

export default OrderPageInput;
