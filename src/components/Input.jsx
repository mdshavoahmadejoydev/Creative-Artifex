import React from 'react'

const Input = ({placeholder, className}) => {
  return (
    <input type="text" placeholder={placeholder} className={`w-full py-1 text-base font-medium border-2 border-gray-300 rounded-full font-poppins italic px-4 mt-2 outline-none ${className}`} />
  )
}

export default Input