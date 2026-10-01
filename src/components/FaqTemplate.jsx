import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'

const FaqTemplate = ({className, qua, ans}) => {
  const [showans, setShowans] = useState(false)
  // const [showarrow, setShowarrow] = useState(true)

  let handleshows = () => {
    setShowans(!showans);
  }

  return (
    <div className={className}>
      <p className='font-poppins font-semibold text-3xl text-faqans mb-5'> <GoDotFill className='inline-block text-4xl'/> {qua}
      {
        showans ?
        <MdOutlineKeyboardArrowUp className='inline-block text-5xl cursor-pointer' onClick={handleshows}/>
        :
        <MdOutlineKeyboardArrowDown className='inline-block text-5xl cursor-pointer'  onClick={handleshows}/>

      }  </p>
      {
        showans && <p className='font-poppins font-medium text-2xl text-faqans ml-11'>{ans}</p>
      }
      <div className='w-full h-0.5 bg-black/30 my-10'></div>
      
    </div>
  )
}

export default FaqTemplate