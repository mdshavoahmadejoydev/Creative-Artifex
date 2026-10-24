import React from "react";
import Flex from "../components/Flex";
import { Link, Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const WebSoftware = () => {

  const location = useLocation();

   const serviceItemWeb = [
     {
       name: "Website Development",
       path: "/services/web-software/website-development",
     },
     {
       name: "Software Development",
       path: "/services/web-software/software-development",
     },
     {
       name: "WordPress Development",
       path: "/services/web-software/wordpress-development",
     },
     {
       name: "Shopify Store Design Development",
       path: "/services/web-software/shopify-store-design-development",
     },
     {
       name: "Mobile Application Development",
       path: "/services/web-software/mobile-application-development",
     },
   ];

  return (
    <>
      <ScrollToTop/>
      <div className="bg-seagreen py-2">
        <Flex
          className={`justify-center gap-x-6 gap-y-2 list-none text-white/70 font-poppins font-medium text-lg my-0.5 px-10 flex-wrap`}
        >
          
          {
            serviceItemWeb.map((item, index) => {
              return (
                <Link to={item.path} key={index} >
                  <li className={location.pathname == item.path ? "text-white" : "text-white/70"}>{item.name}</li>
                </Link>
              )
            })
          }

        </Flex>
      </div>

      <Outlet/>

    </>
  );
};

export default WebSoftware;
