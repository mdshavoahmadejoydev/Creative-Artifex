import React from 'react'

const Title = ({text, className}) => {
  return (
    <h4 className={`text-2xl sm:text-4xl xl:text-5xl   text-green font-bold font-poppins ${className}`} >{text}</h4>
  )
}

export default Title