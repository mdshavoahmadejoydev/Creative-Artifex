import React from 'react'
import Image from './Image'

const ProtfolioBox = ({src, alt}) => {
  return (
    <div>
       <div class="w-300 h-44.75 shrink-0  border-2 border-sky-500 border-solid rounded-md overflow-hidden   hover:border-red-500 duration-200">
          <Image src={src} alt={alt} className="object-cover object-center"/>
        </div>
    </div>
  )
}

export default ProtfolioBox