import React from 'react'
import Image from '../components/Image'

const TeamexpertsCard = ({src, text, className}) => {
  return (
    <div className={`w-350 bg-deep-green border-2 border-light-aqua rounded-2xl py-60 hover:shadow-xl cursor-pointer 
    transition-all duration-300 ease-out
    hover:-translate-y-3 hover:scale-105`}>
      <Image src={src} className={`w-168 mx-auto`}/>
      <p className={`text-3xl text-center font-semibold font-poppins mt-18 text-white ${className}`}>{text}</p>
    </div>
  )
}

export default TeamexpertsCard