import React from 'react'
import Flex from '../components/Flex';
import { Link, useOutletContext } from 'react-router-dom';

const GraphicMultimedia = () => {

  //  const { handleClick } = useOutletContext();


  return (
    <div className='bg-seagreen py-2'>
      <Flex
        className={`justify-center gap-x-6 gap-y-2 list-none text-white/70 font-poppins font-medium text-lg mt-4 flex-wrap`}
      >
        <Link>
          <li>Ads Design</li>
        </Link>
        <Link>
          <li>Flyer Design</li>
        </Link>
        <Link>
          <li>Cover Design</li>
        </Link>
        <Link>
          <li className="text-white">Logo Design</li>
        </Link>
        <Link>
          <li>Thumbnail Design</li>
        </Link>
        <Link>
          <li>Poster Design</li>
        </Link>
        <Link>
          <li>Business Card Design</li>
        </Link>
      </Flex>
    </div>
  );
}

export default GraphicMultimedia