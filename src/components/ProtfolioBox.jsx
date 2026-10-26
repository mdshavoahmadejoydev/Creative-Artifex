import React from 'react'
import Image from './Image'

const ProtfolioBox = ({src, alt}) => {
  return (
    <div>
       <div class="w-291 h-175 shrink-0  border-2 border-sky-500 border-solid rounded-md overflow-hidden   hover:border-red-500 duration-200">
          <Image src={src} alt={alt}/>
        </div>
    </div>
  )
}

export default ProtfolioBox