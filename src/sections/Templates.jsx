import React from "react";
import Flex from "../components/Flex";
import { Link, Outlet, useLocation } from "react-router-dom";
import Title from '../components/Title'
import P from '../components/P'
import ReviewsPageTitle from '../components/ReviewsPageTitle'

const Templates = () => {
  const location = useLocation();

  const templatesItems = [
    {
      name: "Apps Design",
      path: "/templates/apps-design",
    },
    {
      name: "Website Design",
      path: "/templates/website-design",
    },
    {
      name: "Desktop Software Design",
      path: "/templates/desktop-software-design",
    },
    {
      name: "Cover Design",
      path: "/templates/cover-design",
    },

    {
      name: "Ads Design",
      path: "/templates/ads-design",
    },

    {
      name: "Thumbnail Design",
      path: "/templates/thumbnail-design",
    },

    {
      name: "Business Card Design",
      path: "/templates/business-card-design",
    },
  ];

  const serviceNames = {
    "logo-design": "Logo Design",
    "uiux-design": "UI/UX Design",
    "video-animation": "Video Animation",
    "cover-design": "Cover Design",
    "ads-design": "Ads Design",
    "thumbnail-design": "Thumbnail Design",
    "business-card-design": "Business Card Design",
    "website-development": "Website Development",
    "software-development": "Software Development",
    "wordpress-development": "Wordpress Development",
    "shopify-store-design-development": "Shopify Store Design Development",
    "mobile-application-development": "Mobile Application Development"
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

      



      <div className="bg-seagreen py-2">
        <Flex
          className={`justify-center gap-x-6 gap-y-2 list-none text-white/70 font-poppins font-medium text-lg my-0.5 px-10 flex-wrap`}
        >
          {templatesItems.map((item, index) => {
            return (
              <Link to={item.path} key={index}>
                <li
                  className={
                    location.pathname == item.path
                      ? "text-white"
                      : "text-white/70"
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

    </section>
  );
};

export default Templates;
