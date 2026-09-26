import React from 'react'

const FooterTitle = ({text, className}) => {
  return (
    <p className={`font-poppins font-semibold italic text-4xl text-white/90 group-hover:text-red-500 ${className}`}>{text}</p>
  )
}

export default FooterTitle