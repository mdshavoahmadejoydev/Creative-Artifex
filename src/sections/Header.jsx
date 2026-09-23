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

  let handleServicesD = () => {
    setShowServices(!showServices);
  };

  const [ShowGraphicD, setShowGraphicD] = useState(false);

  let handleGraphicD = () => {
    setShowGraphicD(!ShowGraphicD);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".graphic-dropdown-area")) {
        setShowGraphicD(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-seagreen">
      <Container className={`relative`}>
        <Flex>
          <Flex className="w-1/4 gap-3 items-center">
            <Image
              className={`h-[55px] py-[18px] box-content`}
              src={headerLogo}
              alt={`header logo`}
            />
            <Image className={`h-[55px]`} src={headerLogoTagline} />
          </Flex>
          <Flex className="w-3/4 justify-end items-center">
            <nav>
              <ul className="flex gap-6">
                <Link className="py-[31px] group">
                  <Li text={`Home`} />
                </Link>
                <Link className="py-[31px] group" onClick={handleServicesD}>
                  <Li text={`Services`} icon={true} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Templates`} icon={true} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Reviews`} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Products`} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Team`} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Contact`} />
                </Link>
              </ul>
            </nav>
            <button className="group">
              <RiAccountCircleFill className="text-white text-4xl ml-10 py-[29px] cursor-pointer box-content hover:text-red-500 group-focus:text-red-500 duration-200" />
            </button>
          </Flex>
        </Flex>
        {showServices && (
          <div className="w-[320px] bg-skyblue rounded-b-2xl border-t-2 border-red-500 absolute top-[93px] right-[360px] pb-4">
            <ul className="flex flex-col pb-2">
              <div className="graphic-dropdown-area">
                <Link
                  className="hover:bg-white/15 duration-200"
                  onClick={handleGraphicD}
                >
                  <DropdownLi text={`Graphics & Design`} icon={true} />
                </Link>
              </div>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`UI/UX Design`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Website Development`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Software Development`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Mobile Application Development`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`WordPress Development `} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Shopify Store Design &Development`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Video Animations`} />
              </Link>
            </ul>
            <Flex className={`justify-center`}>
              <button className="font-poppins font-bold italic text-2xl py-2 px-6 border-2 border-white rounded-full bg-Royal-Purple text-white hover:border-red-500 duration-200">
                Monthly Hire
              </button>
            </Flex>
          </div>
        )}
        {ShowGraphicD && (
          <div className="w-[250px] bg-skyblue/90 rounded-b-2xl border-t-2 border-red-500 absolute top-[93px] right-[110px] pb-4">
            <ul className="flex flex-col pb-2">
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Logo Design`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Cover Design`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Ads Design`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Thumbnail Design`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Business Card Design`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Poster Design`} />
              </Link>
              <Link className="hover:bg-white/15 duration-200">
                <DropdownLi text={`Flyer Design`} />
              </Link>
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
