import React, { useEffect, useState } from "react";

import headerLogo from "../assets/creativeArtifexLogo.png";
import headerLogoTagline from "../assets/creativeArtifexLogoTagline.png";

import { Link, useLocation } from "react-router-dom";

import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Li from "../components/Li";
import { RiAccountCircleFill } from "react-icons/ri";
import DropdownLi from "../components/DropdownLi";
import Templates from "./Templates";
import WebSoftware from "../pages/WebSoftware";
import GraphicMultimedia from "../pages/GraphicMultimedia";

const Header = () => {

 




  const [showServices, setShowServices] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  
  const [ShowGraphicD, setShowGraphicD] = useState(false);
  const [ShowUiuxD, setShowUiuxd] = useState(false);

  const handleScroll = () => {
    setShowServices(false);
    setShowGraphicD(false);
    setShowTemplates(false);
    setShowUiuxd(false);
  };

  

  let handleServicesD = () => {
    setShowServices(true);
    setShowGraphicD(false);

    setShowTemplates(false);
    setShowUiuxd(false);


    setActiveMenu("services");
  };

let handleGraphicD = () => {
  setShowServices(true);
  setShowGraphicD(true);
};

  let showTemplatesItems = () => {
    setShowTemplates(true);
    setShowUiuxd(false);

    setShowServices(false);
    setShowGraphicD(false);


    setActiveMenu("templates");
  }

  let showUiuxItems = () => {
    setShowUiuxd(true);
  };

  // for every li list clicked
  const afterClick = () => {
    setShowServices(false);
    setShowGraphicD(false);
    setShowTemplates(false);
    setShowUiuxd(false);
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-area") &&
        !event.target.closest(".dropdown-area-tem")
      ) {
        setShowServices(false);
        setShowGraphicD(false);
        setShowTemplates(false);
        setShowUiuxd(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  // scroll bg color transperent

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


   // manu custom focus generation
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const serviceTemplate = ()=> {
    setActiveMenu("");
    setActiveMenu("");
  }

   




  return (
    <header
      className={`fixed top-0 w-full z-50 border-b border-white/30
    transition-all duration-600 ease-in-out
    ${location.pathname == "/" 
      ?
      scrolled ?  
       "bg-seagreen" : "bg-seagreen/0"
       :
        "bg-seagreen"  }`}
    >
      <Container className={`relative`}>
        <Flex>
          {/* logo container start */}
          <Link to={"/"} className="w-1/4 ">
            <Flex className="gap-3 items-center cursor-pointer">
              <Image
                className={`h-55 py-18 box-content`}
                src={headerLogo}
                alt={`header logo`}
              />
              <Image className={`h-55 shrink-0`} src={headerLogoTagline} />
            </Flex>
          </Link>
          {/* logo container end */}

          {/* nav container start */}
          <Flex className="w-3/4 justify-end items-center">
            <nav>
              <ul className="flex gap-6">
                <Link
                  to={"/"}
                  className="py-31 group"
                  onClick={serviceTemplate}
                >
                  <Li text={`Home`} className={location.pathname == "/" && "text-red-500!"} />
                  {console.log(location.pathname)}
                </Link>

                {/* Services start */}
                <div
                  onClick={handleServicesD}
                  className={`dropdown-area cursor-pointer group`}
                >
                  <Li
                    text={`Services`}
                    icon={true}
                    className={`py-31 ${location.pathname.includes("/services") ? "text-red-500!" : ""}`}
                  />
                </div>
                {/* Services end */}

                {/* Templates start */}
                <div
                  onClick={showTemplatesItems}
                  className="dropdown-area-tem  cursor-pointer group "
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => setShowServices(false)}
                  >
                    <Li
                      text={`Templates`}
                      icon={true}
                      className={` py-31 ${location.pathname.includes("/templates") ? "text-red-500!" : ""}`}
                    />
                  </div>
                </div>
                {/* Templates start */}

                <Link
                  to={"/reviews"}
                  className="py-31 group"
                  // onClick={serviceTemplate}
                >
                  <Li text={`Reviews`} className={location.pathname == "/reviews" && "text-red-500!"}/>
                </Link>
                <Link
                  to={"/products"}
                  className="py-31 group"
                  // onClick={serviceTemplate}
                >
                  <Li text={`Products`} className={location.pathname == "/products" && "text-red-500!"}/>
                </Link>
                <Link
                  to={"/team"}
                  className="py-31 group"
                  // onClick={serviceTemplate}
                >
                  <Li text={`Team`} className={location.pathname == "/team" && "text-red-500!"}/>
                </Link>
                <Link
                  to={"contact"}
                  className="py-31 group"
                  // onClick={serviceTemplate}
                >
                  <Li text={`Contact`} className={location.pathname == "/contact" && "text-red-500!"}/>
                </Link>
              </ul>
            </nav>
            <button className="group">
              <RiAccountCircleFill className="text-white text-4xl ml-10 py-29 cursor-pointer box-content hover:text-skyblue group-focus:text-red-500! duration-200" />
            </button>
          </Flex>
          {/* nav container end */}
        </Flex>

        {/* Dropdown for Services */}
        <div className="dropdown-area">
          {showServices && (
            <div
              className={`w-67.5 bg-skyblue rounded-b-2xl border-t border-red-500 absolute top-94 right-95 pb-4 duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)] ${showServices ? "services-animation-open" : "services-animation-close"}`}
            >
              <ul className="flex flex-col pb-2">
                <div
                  className="hover:bg-white/15 focus:bg-white/15 duration-200 group cursor-pointer "
                  onClick={handleGraphicD}
                >
                  <DropdownLi text={`Graphics & Multimedia`} icon={true} />
                </div>
                <Link
                  to={`/services/web-software/website-development`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Website Development`} />
                </Link>
                <Link
                  to={`/services/web-software/software-development`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Software Development`} />
                </Link>
                <Link
                  to={`/services/web-software/mobile-application-development`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Mobile Application Development`} />
                </Link>
                <Link
                  to={`/services/web-software/wordpress-development`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`WordPress Development `} />
                </Link>
                <Link
                  to={`/services/web-software/shopify-store-design-development`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Shopify Store Design & Development`} />
                </Link>
              </ul>
              <Flex className={`justify-center`}>
                <button
                  className="font-poppins font-bold italic text-2xl py-2 px-6 border-2 border-white rounded-full bg-Royal-Purple text-white hover:border-red-500 duration-200 cursor-pointer"
                  onClick={afterClick}
                >
                  Monthly Hire
                </button>
              </Flex>
            </div>
          )}

          {/* Graphic Dropdown start */}
          {ShowGraphicD && (
            <div
              className={`w-250 bg-skyblue/90 rounded-b-2xl border-t border-red-500 absolute top-94 right-32.5 pb-4 duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)] ${ShowGraphicD ? "graphic-animation-open" : "graphic-animation-close"}`}
            >
              <ul className="flex flex-col pb-2">
                <Link
                  to={"/services/graphic-multimedia/logo-design"}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Logo Design`} />
                </Link>

                <Link
                  to={"/services/graphic-multimedia/uiux-design"}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`UI/UX Design`} />
                </Link>

                <Link
                  to={"/services/graphic-multimedia/cover-design"}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Cover Design`} />
                </Link>
                <Link
                  to={"/services/graphic-multimedia/ads-design"}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Ads Design`} />
                </Link>
                <Link
                  to={"/services/graphic-multimedia/thumbnail-design"}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Thumbnail Design`} />
                </Link>
                <Link
                  to={"/services/graphic-multimedia/business-card-design"}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Business Card Design`} />
                </Link>

                <Link
                  to={"/services/graphic-multimedia/video-animation"}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Video Animations`} />
                </Link>
              </ul>
            </div>
          )}
          {/* Graphic Dropdown start */}
        </div>

        {/* Template Dropdown start */}
        <div className="dropdown-area-tem">
          {showTemplates && (
            <div
              className={`w-230 bg-skyblue rounded-b-2xl border-t border-red-500 absolute top-94 right-322 pb-4 services-animation-open duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]`}
            >
              <ul className="flex flex-col pb-2">
                <div
                  className="hover:bg-white/15 focus:bg-white/15 duration-200 group cursor-pointer"
                  onClick={showUiuxItems}
                >
                  <DropdownLi text={`UI/UX Design`} icon={true} />
                </div>
                <Link
                  to={`/templates/cover-design`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Cover Design`} />
                </Link>
                <Link
                  to={`/templates/ads-design`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Ads Design`} />
                </Link>
                <Link
                  to={`/templates/thumbnail-design`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Thumbel Design`} />
                </Link>
                <Link
                  to={`/templates/business-card-design`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Business Card Design`} />
                </Link>
                {/* <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Flyer Design`} />
                </Link> */}
              </ul>
            </div>
          )}

          {ShowUiuxD && (
            <div
              className={`w-190 bg-skyblue/90 rounded-b-2xl border-t border-red-500 absolute top-94 right-132 pb-4 graphic-animation-open duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]`}
            >
              <ul className="flex flex-col pb-2">
                <Link
                  to={`/templates/apps-design`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Apps Design`} />
                </Link>
                <Link
                  to={`/templates/website-design`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Website Design`} />
                </Link>
                <Link
                  to={`/templates/desktop-software-design`}
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Desktop Software-Design`} />
                </Link>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
