import React from 'react'
import Image from '../components/Image'

const TeamexpertsCard = ({src, text, className}) => {
  return (
    <div className={`w-350 bg-deep-green border-2 border-light-aqua rounded-2xl py-60 cursor-pointer 
    transition-all ease-out
    hover:-translate-y-3 hover:scale-105 duration-300 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.7)]`}>
      <Image src={src} className={`w-168 mx-auto`}/>
      <p className={`text-3xl text-center font-semibold font-poppins mt-18 text-white ${className}`}>{text}</p>
    </div>
  )
}

export default TeamexpertsCard