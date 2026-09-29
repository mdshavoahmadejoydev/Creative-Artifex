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

  let handleServicesD = () => {
    setShowServices(!showServices);
    setShowGraphicD(false);

    setShowTemplates(false);
    setShowUiuxd(false);
  };

  let showTemplatesItems = () => {
    setShowTemplates(!showTemplates);
    setShowUiuxd(false);

    setShowServices(false);
    setShowGraphicD(false);
  }

  const [ShowGraphicD, setShowGraphicD] = useState(false);
  const [ShowUiuxD, setShowUiuxd] = useState(false);

  let handleGraphicD = () => {
    setShowGraphicD(!ShowGraphicD);
  };
  let showUiuxItems = () => {
    setShowUiuxd(!ShowUiuxD);
  };

  let afterClick = () => {
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
          <Flex className="w-1/4 gap-3 items-center">
            <Image
              className={`h-55 py-18 box-content`}
              src={headerLogo}
              alt={`header logo`}
            />
            <Image className={`h-55`} src={headerLogoTagline} />
          </Flex>
          <Flex className="w-3/4 justify-end items-center">
            <nav>
              <ul className="flex gap-6">
                <Link className="py-31 group">
                  <Li text={`Home`} />
                </Link>
                <div
                  onClick={handleServicesD}
                  className={`dropdown-area cursor-pointer group`} 
                >
                  <Link className="group">
                    <Li
                      text={`Services`}
                      icon={true}
                      className={`py-31 ${
                        showServices ? "text-red-500!" : ""
                      }`}
                    />
                  </Link>
                </div>

                <div
                  onClick={showTemplatesItems}
                  className="dropdown-area-tem  cursor-pointer group "
                >
                  <Link className="group">
                    <Li
                      text={`Templates`}
                      icon={true}
                      className={` py-31 ${
                        showTemplates ? "text-red-500!" : ""
                      }`}
                    />
                  </Link>
                </div>

                <Link className="py-31 group">
                  <Li text={`Reviews`} />
                </Link>
                <Link className="py-31 group">
                  <Li text={`Products`} />
                </Link>
                <Link className="py-31 group">
                  <Li text={`Team`} />
                </Link>
                <Link className="py-31 group">
                  <Li text={`Contact`} />
                </Link>
              </ul>
            </nav>
            <button className="group">
              <RiAccountCircleFill className="text-white text-4xl ml-10 py-29 cursor-pointer box-content hover:text-red-500 group-focus:text-red-500 duration-200" />
            </button>
          </Flex>
        </Flex>

        <div className="dropdown-area">
          {showServices && (
            <div
              className={`w-xs bg-skyblue rounded-b-2xl border-t border-red-500 absolute top-94 right-360 pb-4 ${showServices ? "services-animation-open" : "services-animation-close"}`}
            >
              <ul className="flex flex-col pb-2">
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={handleGraphicD}
                >
                  <DropdownLi text={`Graphics & Design`} icon={true} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`UI/UX Design`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Website Development`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Software Development`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Mobile Application Development`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`WordPress Development `} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Shopify Store Design &Development`} />
                </Link>
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={afterClick}
                >
                  <DropdownLi text={`Video Animations`} />
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
          {ShowGraphicD && (
            <div
              className={`w-250 bg-skyblue/90 rounded-b-2xl border-t border-red-500 absolute top-94 right-110 pb-4 ${ShowGraphicD ? "graphic-animation-open" : "graphic-animation-close"}`}
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
        </div>

        <div className="dropdown-area-tem">
          {showTemplates && (
            <div
              className={`w-230 bg-skyblue rounded-b-2xl border-t border-red-500 absolute top-94 right-322 pb-4 services-animation-open`}
            >
              <ul className="flex flex-col pb-2">
                <Link
                  className="hover:bg-white/15 duration-200 group"
                  onClick={showUiuxItems}
                >
                  <DropdownLi text={`UI/UX Design`} icon={true} />
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
                  <DropdownLi text={`Thumbel Design`} />
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

          {ShowUiuxD && (
            <div
              className={`w-190 bg-skyblue/90 rounded-b-2xl border-t border-red-500 absolute top-94 right-132 pb-4 graphic-animation-open`}
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
