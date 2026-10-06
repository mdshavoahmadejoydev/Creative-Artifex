import React, { useEffect, useState } from "react";

import headerLogo from "../assets/creativeArtifexLogo.png";
import headerLogoTagline from "../assets/creativeArtifexLogoTagline.png";

import { Link } from "react-router-dom";

import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Li from "../components/Li";
import { RiAccountCircleFill } from "react-icons/ri";
import DropdownLi from "../components/DropdownLi";

const Header = () => {
  const [showServices, setShowServices] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  
  const [ShowGraphicD, setShowGraphicD] = useState(false);
  const [ShowUiuxD, setShowUiuxd] = useState(false);

  let handleServicesD = () => {
    setShowServices(true);
    setShowGraphicD(false);

    setShowTemplates(false);
    setShowUiuxd(false);
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

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);




  return (
    <header className="bg-seagreen sticky top-0 z-50 border-b border-white/50">
      <Container className={`relative`}>
        <Flex>
          {/* logo container start */}
          <Flex
            className="w-1/4 gap-3 items-center cursor-pointer"
            onMouseEnter={afterClick}
          >
            <Image
              className={`h-55 py-18 box-content`}
              src={headerLogo}
              alt={`header logo`}
            />
            <Image className={`h-55`} src={headerLogoTagline} />
          </Flex>
          {/* logo container end */}

          {/* nav container start */}
          <Flex className="w-3/4 justify-end items-center">
            <nav>
              <ul className="flex gap-6">
                <Link className="py-31 group" onMouseEnter={afterClick}>
                  <Li text={`Home`} />
                </Link>

                {/* Services start */}
                <div
                  onClick={handleServicesD}
                  onMouseEnter={handleServicesD}
                  className={`dropdown-area cursor-pointer group`}
                >
                  <Link className="group">
                    <Li
                      text={`Services`}
                      icon={true}
                      className={`py-31 ${showServices ? "text-red-500" : ""}`}
                    />
                  </Link>
                </div>
                {/* Services end */}

                {/* Templates start */}
                <div
                  onClick={showTemplatesItems}
                  onMouseEnter={showTemplatesItems}
                  className="dropdown-area-tem  cursor-pointer group "
                >
                  <Link className="group">
                    <Li text={`Templates`} icon={true} className={` py-31 `} />
                  </Link>
                </div>
                {/* Templates start */}

                <Link className="py-31 group" onMouseEnter={afterClick}>
                  <Li text={`Reviews`} />
                </Link>
                <Link className="py-31 group" onMouseEnter={afterClick}>
                  <Li text={`Products`} />
                </Link>
                <Link className="py-31 group" onMouseEnter={afterClick}>
                  <Li text={`Team`} />
                </Link>
                <Link className="py-31 group" onMouseEnter={afterClick}>
                  <Li text={`Contact`} />
                </Link>
              </ul>
            </nav>
            <button className="group" onMouseEnter={afterClick}>
              <RiAccountCircleFill className="text-white text-4xl ml-10 py-29 cursor-pointer box-content hover:text-skyblue group-focus:text-red-500! duration-200" />
            </button>
          </Flex>
          {/* nav container end */}
        </Flex>

        {/* Dropdown for Services */}
        <div className="dropdown-area">
          {showServices && (
            <div
              className={`w-xs bg-skyblue rounded-b-2xl border-t border-red-500 absolute top-94 right-360 pb-4 duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)] ${showServices ? "services-animation-open" : "services-animation-close"}`}
              onMouseLeave={() => {
  if (!ShowGraphicD) {
    setShowServices(false);
  }
}}
            >
              <ul className="flex flex-col pb-2">
                <Link
                  className="hover:bg-white/15 focus:bg-white/15  duration-200 group "
                  onClick={handleGraphicD}
                  onMouseEnter={handleGraphicD}
                >
                  <DropdownLi text={`Graphics & Design`} icon={true} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowGraphicD(false)}
                >
                  <DropdownLi text={`UI/UX Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowGraphicD(false)}
                >
                  <DropdownLi text={`Website Development`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowGraphicD(false)}
                >
                  <DropdownLi text={`Software Development`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowGraphicD(false)}
                >
                  <DropdownLi text={`Mobile Application Development`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowGraphicD(false)}
                >
                  <DropdownLi text={`WordPress Development `} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowGraphicD(false)}
                >
                  <DropdownLi text={`Shopify Store Design &Development`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowGraphicD(false)}
                >
                  <DropdownLi text={`Video Animations`} />
                </Link>
              </ul>
              <Flex className={`justify-center`}>
                <button
                  className="font-poppins font-bold italic text-2xl py-2 px-6 border-2 border-white rounded-full bg-Royal-Purple text-white hover:border-red-500 duration-200 cursor-pointer"
                  onClick={afterClick}
                  onMouseEnter={() => setShowGraphicD(false)}
                >
                  Monthly Hire
                </button>
              </Flex>
            </div>
          )}

          {/* Graphic Dropdown start */}
          {ShowGraphicD && (
            <div
              className={`w-250 bg-skyblue/90 rounded-b-2xl border-t border-red-500 absolute top-94 right-110 pb-4 duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)] ${ShowGraphicD ? "graphic-animation-open" : "graphic-animation-close"}`}
              onMouseLeave={() => {
                setShowGraphicD(false);
              }}
            >
              <ul className="flex flex-col pb-2">
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Logo Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Cover Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Ads Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Thumbnail Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Business Card Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Poster Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Flyer Design`} />
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
              onMouseLeave={() => {
                if (showTemplates && ShowUiuxD) {
                  setShowTemplates(true);
                  setShowUiuxd(true);
                } else {
                  setShowTemplates(false);
                  setShowUiuxd(false);
                }
              }}
            >
              <ul className="flex flex-col pb-2">
                <Link
                  className="hover:bg-white/15 focus:bg-white/15 duration-200 group"
                  onClick={showUiuxItems}
                  onMouseEnter={showUiuxItems}
                >
                  <DropdownLi text={`UI/UX Design`} icon={true} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowUiuxd(false)}
                >
                  <DropdownLi text={`Cover Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowUiuxd(false)}
                >
                  <DropdownLi text={`Ads Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowUiuxd(false)}
                >
                  <DropdownLi text={`Thumbel Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowUiuxd(false)}
                >
                  <DropdownLi text={`Business Card Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowUiuxd(false)}
                >
                  <DropdownLi text={`Poster Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                  onMouseEnter={() => setShowUiuxd(false)}
                >
                  <DropdownLi text={`Flyer Design`} />
                </Link>
              </ul>
            </div>
          )}

          {ShowUiuxD && (
            <div
              className={`w-190 bg-skyblue/90 rounded-b-2xl border-t border-red-500 absolute top-94 right-132 pb-4 graphic-animation-open duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]`}
              onMouseLeave={() => {
                if (!ShowUiuxD) {
                  return;
                } else {
                  setShowTemplates(!false);
                  setShowUiuxd(false);
                }
              }}
            >
              <ul className="flex flex-col pb-2">
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Apps Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Website Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Desktop Software- design`} />
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
