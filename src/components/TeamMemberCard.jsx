import React from 'react'
import Image from './Image'

const TeamMemberCard = ({src, name, prof, proftop, className}) => {
  return (
    <div className="relative w-269 h-355 rounded-2xl overflow-hidden border-4 border-light-aqua cursor-pointer group transition-all ease-out
    hover:-translate-y-3 hover:scale-105 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]">
      <Image
        src={src}
        className={`w-full h-full object-center object-center ${className}`}
      />
      <div className="absolute -bottom-80 group-hover:bottom-0 duration-200 ease-out left-0 w-full bg-[linear-gradient(180deg,rgba(16,112,222,0.2)_0%,rgba(12,86,171,0.7)_45%,rgba(9,60,120,1)_100%)] py-2 px-2">
        <p className="font-poppins font-bold text-3xl text-white">{name}</p>
        <p className="font-poppins font-medium text-lg text-white">{prof}</p>
      </div>
      <p className="absolute bottom-36 right-0 rotate-180 font-poppins font-medium text-lg text-white bg-light-aqua px-3 rounded-r-2xl [writing-mode:vertical-rl]">
        {proftop}
      </p>
    </div>
  );
}

export default TeamMemberCard