
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp
} from 'react-icons/md'

const FaqTemplate = ({
  className,
  qua,
  ans,
  showans,
  handleshows
}) => {
  return (
    <div
      className={`cursor-pointer ${className || ''}`}
      onClick={handleshows}
    >
      <p className='font-poppins font-semibold text-2xl text-faqans mb-5'>
        <GoDotFill className='inline-block text-3xl' />

        {qua}

        {showans ? (
          <MdOutlineKeyboardArrowUp className='inline-block text-5xl' />
        ) : (
          <MdOutlineKeyboardArrowDown className='inline-block text-5xl' />
        )}
      </p>

      {showans && (
        <p className='font-poppins font-medium text-xl text-faqans/80 ml-9'>
          {ans}
        </p>
      )}

      <div className='w-full h-0.5 bg-black/5 my-10'></div>
    </div>
  )
}

export default FaqTemplate
