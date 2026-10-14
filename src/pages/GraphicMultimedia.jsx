import React from 'react'
import Flex from '../components/Flex';
import { Link, Outlet, useLocation } from 'react-router-dom';

const GraphicMultimedia = () => {

   const location = useLocation();

  //  services item array
  const serviceItem = [
    {
      name: "Logo Design",
      path: "/services/graphic-multimedia/logo-design",
    },
    {
      name: "UI/UX Design",
      path: "/services/graphic-multimedia/uiux-design",
    },
    {
      name: "Video Animation",
      path: "/services/graphic-multimedia/video-animation",
    },
    {
      name: "Cover Design",
      path: "/services/graphic-multimedia/cover-design",
    },
    {
      name: "ads design",
      path: "/services/graphic-multimedia/ads-design",
    },
    {
      name: "Thumbnail Design",
      path: "/services/graphic-multimedia/thumbnail-design",
    },
    {
      name: "Business Card Design",
      path: "/services/graphic-multimedia/business-card-design",
    },
  ];


  return (
    <>
      <div className="bg-seagreen py-2">
        <Flex
          className={`justify-center gap-x-6 gap-y-2 list-none text-white/70 font-poppins font-medium text-lg my-0.5 px-10 flex-wrap`}
        >
          {serviceItem.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <li
                  className={
                    location.pathname == item.path ? "text-white" : "text-white/70"
                  }
                >
                  {item.name}
                </li>
              </Link>
            );
          })}
        </Flex>
      </div>

      <Outlet />
    </>
  );
}

export default GraphicMultimedia