import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'

const Schedule = ({text, calender, hover, className,}) => {
  return (
    <button className={`px-[17px] bg-Royal-Purple/80 py-2 font-poppins text-white italic font-extrabold border border-white rounded-full text-2xl cursor-pointer duration-200 ${className} ${hover && 'hover:border-red-600'}`}>{text} {calender && <FaCalendarAlt className='text-white text-2xl inline-block ml-1'/>}</button>
  )
}

export default Schedule