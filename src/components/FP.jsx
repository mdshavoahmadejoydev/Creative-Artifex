import React from 'react'

const FP = ({text, className}) => {
  return (
    <p className={`font-poppins font-medium italic text-lg text-white/90 cursor-pointer ${className}`}>{text}</p>
  )
}

export default FP