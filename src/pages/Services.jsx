import React from 'react'
import ReviewsPageTitle from '../components/ReviewsPageTitle'
import { Outlet } from 'react-router-dom'


const Services = () => {
  
 

  return (

    <section>
      <div className='h-94'></div>

      <div className="bg-seagreen">
        <ReviewsPageTitle
          text={"<< Graphic Design  >>"}
          className={`pt-4 text-center`}
        />
      </div>

      <Outlet/>
      {/* <Outlet context={{ handleClick }}/> */}


    </section>
  )
}

export default Services

