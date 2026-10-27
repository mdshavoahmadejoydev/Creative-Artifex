import React from 'react'
import ScrollToTop from './ScrollToTop'
import { FaChevronUp } from 'react-icons/fa'

const PageScrollUp = () => {
  return (
    <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'}) } className='w-14 h-14 rounded-full  bg-white cursor-pointer flex items-center justify-center fixed bottom-8 left-12 z-50'>
      <FaChevronUp className='text-4xl text-black'/>
      
    </div>
  )
}

export default PageScrollUp