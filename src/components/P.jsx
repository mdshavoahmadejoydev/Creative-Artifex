import React from 'react'

const P = ({text, className}) => {
  return (
    <p className={`text-green text-xl font-medium font-poppins ${className}`}>{text}</p>
  )
}

export default P