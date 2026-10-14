import React, { useState } from 'react'
import ReviewsPageTitle from '../components/ReviewsPageTitle'
import { Outlet, useLocation  } from 'react-router-dom'


const Services = () => {
  
  // const [servicesTitle, setServicesTitle] = useState("Chouse services")

  const location = useLocation();

  const serviceNames = {
    "logo-design": "Logo Design",
    "uiux-design": "UI/UX Design",
    "video-animation": "Video Animation",
    "cover-design": "Cover Design",
    "ads-design": "Ads Design",
    "thumbnail-design": "Thumbnail Design",
    "business-card-design": "Business Card Design",
  };

  const currentPath = location.pathname.split("/").pop();
  const servicesTitle = serviceNames[currentPath] || "Choose services";

  return (

    <section>
      <div className='h-94'></div>

      <div className="bg-seagreen">
        <ReviewsPageTitle
          text={`<< ${servicesTitle} >>`}
          className={`pt-4 text-center`}
        />
      </div>

      <Outlet context={{servicesTitle }}/>


    </section>
  )
}

export default Services

