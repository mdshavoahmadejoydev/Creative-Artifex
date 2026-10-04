import React from 'react'

const SubmitP = ({text, className, requerment}) => {
  return (
    <p className={`text-xl font-poppins text-black font-semibold ${className}`}>{text} {requerment && <span className='text-red-500'>*</span> } </p>
  )
}

export default SubmitP