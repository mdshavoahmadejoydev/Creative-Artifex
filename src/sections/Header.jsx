import React, { useEffect, useState, useRef } from "react";

import headerLogo from "../assets/creativeArtifexLogo.png";
import headerLogoTagline from "../assets/creativeArtifexLogoTagline.png";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Li from "../components/Li";

import { RiAccountCircleFill, RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import DropdownLi from "../components/DropdownLi";
import Templates from "./Templates";
import WebSoftware from "../pages/WebSoftware";
import GraphicMultimedia from "../pages/GraphicMultimedia";
import LiveMessage from "../components/LiveMessage";
import PageScrollUp from "../components/PageScrollUp";
import Login from "./Login";
import Registration from "./Registration";
import { useSelector } from "react-redux";

const Header = ({}) => {
  const activeUserRedux = useSelector((state) => state.activeuser.value);
  // console.log(activeUserRedux);

  const navigate = useNavigate();

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
  };

  let showUiuxItems = () => {
    setShowUiuxd(true);
  };

  // for every li list clicked
  const afterClick = () => {
    setShowServices(false);
    setShowGraphicD(false);
    setShowTemplates(false);
    setShowUiuxd(false);
  };

  // const profileRef = useRef(null);

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
    window.addEventListener("scroll", handleScroll);

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
  const serviceTemplate = () => {
    setActiveMenu("");
    setActiveMenu("");
  };

  // profileTemplate function start
  const [loginshow, setLoginshow] = useState(null);
  const [signupshow, setSignupshow] = useState(null);

  // login
  let handleLoginicon = () => {
    if (activeUserRedux != null) {
      navigate("/deshboard");
    } else {
      setLoginshow(true);
    }
  };

  // signup link
  let signuplink = () => {
    setSignupshow(true);
  };

  // login link
  let loginlink = () => {
    setSignupshow(false);
    setLoginshow(true);
  };

  // crosIcon setup
  let handlecloseicon = () => {
    setLoginshow(false);
    setSignupshow(false);
  };

  // mobile menubox slide state
  const [showMenu, setShowMenu] = useState(false);

  const handleMobileServices = () => {
    setShowServices((prev) => !prev);
  };

  // graphic and multimedia
  const [showMobileGraphic, setShowMobileGraphic] = useState(false);

  const handleMobileGraphic = () => {
    setShowMobileGraphic((prev) => !prev);
  };

  const afterMobileGraphicClick = () => {
    setShowMenu(false);
    setShowMobileGraphic(false);
  };

  // for template menu
  const [showMobileTemplates, setShowMobileTemplates] = useState(false);
  const [showMobileUiux, setShowMobileUiux] = useState(false);

  const handleMobileTemplates = () => {
    setShowMobileTemplates((prev) => !prev);
    setShowMobileUiux(false);
  };

  const handleMobileUiux = () => {
    setShowMobileUiux((prev) => !prev);
  };

  const afterMobileTemplatesClick = () => {
    setShowMenu(false);
    setShowMobileTemplates(false);
    setShowMobileUiux(false);
  };
  // mobile menubox slide state

  return (
    <header className="">
      <div
        className={` fixed top-0 w-full z-50 border-b border-white/30
      transition-all duration-400 ease-in-out
      ${
        location.pathname == "/"
          ? scrolled
            ? "bg-seagreen"
            : "bg-seagreen/0"
          : "bg-seagreen"
      }`}
      >
        <Container className={`relative `}>
          <Flex className={`justify-between w-screen px-3.5 xl:px-0 xl:w-full`}>
            {/* logo container start */}
            <Link to={"/"} className="xl:w-1/4 ">
              <Flex className="gap-3 items-center cursor-pointer">
                <Image
                  className={`h-[40px] sm:h-[50px] xl:h-55 py-3 sm:py-4.5 xl:py-18 box-content`}
                  src={headerLogo}
                  alt={`header logo`}
                />
                <Image
                  className={`hidden xl:block h-55 shrink-0`}
                  src={headerLogoTagline}
                />
              </Flex>
            </Link>
            {/* logo container end */}

            {/* nav container start */}
            <Flex className="xl:w-3/4 justify-end items-center">
              <nav className="hidden xl:block">
                <ul className="flex gap-6">
                  <Link
                    to={"/"}
                    className="py-31 group"
                    onClick={serviceTemplate}
                  >
                    <Li
                      text={`Home`}
                      className={location.pathname == "/" && "text-red-500!"}
                    />
                    {/* {console.log(location.pathname)} */}
                  </Link>

                  {/* Services start */}
                  <div
                    onClick={handleServicesD}
                    className={`dropdown-area cursor-pointer group`}
                  >
                    <Li
                      text={`Services`}
                      icon={true}
                      className={`py-31 ${location.pathname.includes("/services") || location.pathname == "/order" || location.pathname == "/order-submited" ? "text-red-500!" : ""}`}
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
                    <Li
                      text={`Reviews`}
                      className={
                        location.pathname == "/reviews" && "text-red-500!"
                      }
                    />
                  </Link>
                  <Link
                    to={"/products"}
                    className="py-31 group"
                    // onClick={serviceTemplate}
                  >
                    <Li
                      text={`Products`}
                      className={
                        location.pathname == "/products" && "text-red-500!"
                      }
                    />
                  </Link>
                  <Link
                    to={"/team"}
                    className="py-31 group"
                    // onClick={serviceTemplate}
                  >
                    <Li
                      text={`Team`}
                      className={
                        location.pathname == "/team" && "text-red-500!"
                      }
                    />
                  </Link>
                  <Link
                    to={"contact"}
                    className="py-31 group"
                    // onClick={serviceTemplate}
                  >
                    <Li
                      text={`Contact`}
                      className={
                        location.pathname == "/contact" && "text-red-500!"
                      }
                    />
                  </Link>
                </ul>
              </nav>

              {/* Profile button start */}
              <button
                // ref={profileRef}
                disabled={location.pathname == "/deshboard"}
                onClick={handleLoginicon}
                className="group"
              >
                <RiAccountCircleFill
                  className={`${location.pathname.includes("/deshboard") || location.pathname.includes("/OrderPrintablePage") ? "text-red-500" : "text-white"} text-3xl sm:text-4xl xl:text-4xl ml-10 xl:py-29 cursor-pointer box-content hover:text-skyblue duration-200`}
                />
              </button>

              {loginshow && (
                <Login
                  handlecloseicon={handlecloseicon}
                  signuplink={signuplink}
                />
              )}

              {signupshow && (
                <Registration
                  handlecloseicon={handlecloseicon}
                  loginlink={loginlink}
                />
              )}

              {/* Profile button end */}

              {/* 3link button for mobile device start*/}

              <div className="xl:hidden ml-2 sm:ml-4 relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="relative w-8 h-8 flex items-center justify-center"
                >
                  <RiMenu3Line
                    className={`absolute text-white text-3xl sm:text-4xl transition-all duration-300 ${
                      showMenu
                        ? "rotate-90 opacity-0 scale-50"
                        : "rotate-0 opacity-100 scale-100"
                    }`}
                  />

                  <IoClose
                    className={`absolute text-white text-3xl sm:text-4xl transition-all duration-300 ${
                      showMenu
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-90 opacity-0 scale-50"
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-12.5 sm:top-14.5 rounded-l-2xl   bg-black/30 backdrop-blur-2xl border border-white/10 shadow-2xl      w-[280px] sm:w-[320px] px-3.5 py-3 z-50 transition-all duration-300 ${
                    showMenu ? "-right-3.5" : "-right-315"
                  }`}
                >
                  <ul className="flex flex-col gap-3.5">
                    <Link
                      to="/"
                      onClick={() => {
                        serviceTemplate();
                        setShowMenu(false);
                      }}
                      className="group"
                    >
                      <Li
                        text="Home"
                        className={location.pathname === "/" && "text-red-500!"}
                      />
                    </Link>

                    {/* Services */}
                    <div className="dropdown-area">
                      <div
                        onClick={handleMobileServices}
                        className="cursor-pointer group"
                      >
                        <Li
                          text="Services"
                          icon={true}
                          className={`${
                            location.pathname.includes("/services") ||
                            location.pathname === "/order" ||
                            location.pathname === "/order-submited"
                              ? "text-red-500!"
                              : ""
                          }`}
                        />
                      </div>

                      {/* Services Submenu */}
                      <div
                        className={`flex flex-col overflow-hidden transition-all duration-300 ${
                          showServices
                            ? "max-h-[500px] opacity-100 mt-3"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <ul className="flex flex-col gap-3 pl-4 border-l border-white/20 ml-2">

                          {/* Graphic & Multimedia */}
                          <div>
                            <div
                              onClick={handleMobileGraphic}
                              className="cursor-pointer"
                            >
                              <Li text="Graphics & Multimedia" icon={true} />
                            </div>

                            {/* Graphic Submenu */}
                            <div
                              className={`flex flex-col overflow-hidden transition-all duration-300 ${
                                showMobileGraphic
                                  ? "max-h-[500px] opacity-100 mt-3"
                                  : "max-h-0 opacity-0 mt-0"
                              }`}
                            >
                              <ul className="flex flex-col gap-3 pl-4 border-l border-white/20 ml-2">
                                <Link
                                  to="/services/graphic-multimedia/logo-design"
                                  onClick={afterMobileGraphicClick}
                                >
                                  <Li text="Logo Design" />
                                </Link>

                                <Link
                                  to="/services/graphic-multimedia/uiux-design"
                                  onClick={afterMobileGraphicClick}
                                >
                                  <Li text="UI/UX Design" />
                                </Link>

                                <Link
                                  to="/services/graphic-multimedia/cover-design"
                                  onClick={afterMobileGraphicClick}
                                >
                                  <Li text="Cover Design" />
                                </Link>

                                <Link
                                  to="/services/graphic-multimedia/ads-design"
                                  onClick={afterMobileGraphicClick}
                                >
                                  <Li text="Ads Design" />
                                </Link>

                                <Link
                                  to="/services/graphic-multimedia/thumbnail-design"
                                  onClick={afterMobileGraphicClick}
                                >
                                  <Li text="Thumbnail Design" />
                                </Link>

                                <Link
                                  to="/services/graphic-multimedia/business-card-design"
                                  onClick={afterMobileGraphicClick}
                                >
                                  <Li text="Business Card Design" />
                                </Link>

                                <Link
                                  to="/services/graphic-multimedia/video-animation"
                                  onClick={afterMobileGraphicClick}
                                >
                                  <Li text="Video Animations" />
                                </Link>
                              </ul>
                            </div>
                          </div>

                          <Link
                            to="/services/web-software/website-development"
                            onClick={() => setShowMenu(false)}
                          >
                            <Li text="Website Development" />
                          </Link>

                          <Link
                            to="/services/web-software/software-development"
                            onClick={() => setShowMenu(false)}
                          >
                            <Li text="Software Development" />
                          </Link>

                          <Link
                            to="/services/web-software/mobile-application-development"
                            onClick={() => setShowMenu(false)}
                          >
                            <Li text="Mobile Application Development" />
                          </Link>

                          <Link
                            to="/services/web-software/wordpress-development"
                            onClick={() => setShowMenu(false)}
                          >
                            <Li text="WordPress Development" />
                          </Link>

                          <Link
                            to="/services/web-software/shopify-store-design-development"
                            onClick={() => setShowMenu(false)}
                          >
                            <Li text="Shopify Store Design" />
                          </Link>
                        </ul>
                      </div>
                    </div>

                    {/* Templates */}
                    <div>
                      <div
                        onClick={handleMobileTemplates}
                        className="cursor-pointer"
                      >
                        <Li text="Templates" icon={true} />
                      </div>

                      <div
                        className={`flex flex-col overflow-hidden transition-all duration-300 ${
                          showMobileTemplates
                            ? "max-h-[600px] opacity-100 mt-3"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <ul className="flex flex-col gap-3 pl-4 border-l border-white/20 ml-2">
                          {/* UI/UX Design */}
                          <div>
                            <div
                              onClick={handleMobileUiux}
                              className="cursor-pointer"
                            >
                              <Li text="UI/UX Design" icon={true} />
                            </div>

                            {/* UI/UX Submenu */}
                            <div
                              className={`flex flex-col overflow-hidden transition-all duration-300 ${
                                showMobileUiux
                                  ? "max-h-[300px] opacity-100 mt-3"
                                  : "max-h-0 opacity-0 mt-0"
                              }`}
                            >
                              <ul className="flex flex-col gap-3 pl-4 border-l border-white/20 ml-2">
                                <Link
                                  to="/templates/apps-design"
                                  onClick={afterMobileTemplatesClick}
                                >
                                  <Li text="Apps Design" />
                                </Link>

                                <Link
                                  to="/templates/website-design"
                                  onClick={afterMobileTemplatesClick}
                                >
                                  <Li text="Website Design" />
                                </Link>

                                <Link
                                  to="/templates/desktop-software-design"
                                  onClick={afterMobileTemplatesClick}
                                >
                                  <Li text="Desktop Software Design" />
                                </Link>
                              </ul>
                            </div>
                          </div>

                          <Link
                            to="/templates/cover-design"
                            onClick={afterMobileTemplatesClick}
                          >
                            <Li text="Cover Design" />
                          </Link>

                          <Link
                            to="/templates/ads-design"
                            onClick={afterMobileTemplatesClick}
                          >
                            <Li text="Ads Design" />
                          </Link>

                          <Link
                            to="/templates/thumbnail-design"
                            onClick={afterMobileTemplatesClick}
                          >
                            <Li text="Thumbnail Design" />
                          </Link>

                          <Link
                            to="/templates/business-card-design"
                            onClick={afterMobileTemplatesClick}
                          >
                            <Li text="Business Card Design" />
                          </Link>
                        </ul>
                      </div>
                    </div>

                    <Link
                      to="/reviews"
                      onClick={() => setShowMenu(false)}
                      className="group"
                    >
                      <Li
                        text="Reviews"
                        className={
                          location.pathname === "/reviews" && "text-red-500!"
                        }
                      />
                    </Link>

                    <Link
                      to="/products"
                      onClick={() => setShowMenu(false)}
                      className="group"
                    >
                      <Li
                        text="Products"
                        className={
                          location.pathname === "/products" && "text-red-500!"
                        }
                      />
                    </Link>

                    <Link
                      to="/team"
                      onClick={() => setShowMenu(false)}
                      className="group"
                    >
                      <Li
                        text="Team"
                        className={
                          location.pathname === "/team" && "text-red-500!"
                        }
                      />
                    </Link>

                    <Link
                      to="/contact"
                      onClick={() => setShowMenu(false)}
                      className="group"
                    >
                      <Li
                        text="Contact"
                        className={
                          location.pathname === "/contact" && "text-red-500!"
                        }
                      />
                    </Link>
                  </ul>
                </div>
              </div>

              {/* 3link button for mobile device end*/}

            </Flex>
            {/* nav container end */}
          </Flex>

          {/* Dropdown for Services */}
          <div className="dropdown-area">
            {showServices && (
              <div
                className={`w-67.5 bg-skyblue/30 backdrop-blur-2xl border border-white/10 shadow-2xl  rounded-b-2xl border-t border-red-500 absolute top-94 right-95 pb-4 duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)] ${showServices ? "services-animation-open" : "services-animation-close"}`}
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
                className={`w-250   bg-skyblue/30 backdrop-blur-2xl border border-white/10 shadow-2xl    rounded-b-2xl border-t border-red-500 absolute top-94 right-32.5 pb-4 duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)] ${ShowGraphicD ? "graphic-animation-open" : "graphic-animation-close"}`}
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
            {/* Graphic Dropdown end */}
          </div>

          {/* Template Dropdown start */}
          <div className="dropdown-area-tem">
            {showTemplates && (
              <div
                className={`w-230   bg-skyblue/30 backdrop-blur-2xl border border-white/10 shadow-2xl      rounded-b-2xl border-t border-red-500 absolute top-94 right-322 pb-4 services-animation-open duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]`}
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
                </ul>
              </div>
            )}

            {ShowUiuxD && (
              <div
                className={`w-190   bg-skyblue/30 backdrop-blur-2xl border border-white/10 shadow-2xl    rounded-b-2xl border-t border-red-500 absolute top-94 right-132 pb-4 graphic-animation-open duration-200 hover:shadow-[0px_0px_20px_2px_rgba(0,0,0,0.5)]`}
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

        <LiveMessage />
        <PageScrollUp />
      </div>
    </header>
  );
};

export default Header;
