import React from 'react'

const Schedule = ({text, className}) => {
  return (
    <button className={`px-[17px] bg-Royal-Purple/80 py-2 font-poppins text-white italic font-extrabold border border-white rounded-full text-2xl ${className}`}>{text}</button>
  )
}

export default Schedule