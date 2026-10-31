import React from 'react'

const Input = ({placeholder, className, value, onChange}) => {
  return (
    <input onChange={onChange} value={value} type="text" placeholder={placeholder} className={`w-full py-2 text-base text-black/80 font-medium border border-gray-300 rounded-full font-poppins italic px-4 mt-2 outline-none ${className}`} />
  )
}

export default Input