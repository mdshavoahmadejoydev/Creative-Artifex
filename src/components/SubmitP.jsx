import React from 'react'

const SubmitP = ({text, className}) => {
  return (
    <p className={`text-xl text-black font-semibold ${className}`}>{text} <span className='text-red-500'>*</span></p>
  )
}

export default SubmitP