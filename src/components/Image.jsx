import React from 'react'

const Image = ({src, alt, className}) => {
  return (
    <img src={src} alt={alt} className={`object-cover object-center ${className}`} />
  )
}

export default Image