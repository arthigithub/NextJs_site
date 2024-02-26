import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { HomeSectionCtx } from "../../../../store/home-context";
import { diplayTransLang } from "../lib/helper";
import HomeMenus from "./HomeMenus";

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { generalinfo } =
    pathname === "/" ? useContext(HomeSectionCtx) : useContext(CommonCtx);

  const [getHeaders, setHeaders] = useState([]);

  useEffect(() => {
    //document.getElementById("google_translate_element").innerHTML = "";
    diplayTransLang();
    setHeaders(generalinfo);
  }, []);

  const { supportemail, supportno, supportnotext } = getHeaders;
  return (
    <>
      <header className="main-header header-style-one" id="main-header">
        <div className="header-top">
          <div className="auto-container">
            <div className="top-outer clearfix">
              <div className="top-left">
                <style jsx>{`
                  #google_translate_element {
                    height: 26px !important;
                    overflow: hidden !important;
                    width: 136px !important;
                  }
                `}</style>
                <ul className="links clearfix">
                  <li id="google_translate_element"></li>
                  <li>
                    <a href="tel:080-67995700">
                      <span className="icon fa fa-phone"></span>
                      <span className="dnone">{supportnotext}: <strong>+{supportno}</strong></span>
                    </a>
                  </li>
                  <li>
                    <a href="/contactus" className="btm-3">
                      <span className="icon flaticon-sent-mail"></span><span className="dnone">Contact Us</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="top-right clearfix">
                <ul className="clearfix">
                  <li>
                    <a href="mailto:moreinfo@bbnl.co.in"> 
                    <span className="icon flaticon-e-mail-envelope"></span> <span className="dnone">{supportemail}</span></a>
                 </li>
                 <li>
                    <a target="_blank" href="https://payurbills.co.in/best2/">
                      <span className="icon flaticon-user"></span><span className="dnone">Payurbills
                      Login</span>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-box">
          <div className="auto-container">
            <div className="outer-container clearfix">
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
                    <Image
                      src="/images/logo.png"
                      width={250}
                      height={70}
                      alt="logo"
                    />
                  </a>
                </div>
              </div>

              <div className="nav-outer clearfix">
                <nav className="main-menu">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <HomeMenus />
                </nav>

                <div className="outer-box">
                  <a href="/newconnection" className="theme-btn btn-style-one">
                    {" "}
                    <span className="flaticon-connection"></span> <span className="dnone">Get a
                    New Connection</span> 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-container clearfix">
              <div className="logo-box pull-left">
                <div className="logo">
                  <a href="/">
                    <Image
                      src="/images/logo-small.png"
                      alt="logo"
                      width={150}
                      height={45}
                    />
                  </a>
                </div>
              </div>

              <div className="nav-outer clearfix">
                <nav className="main-menu">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <HomeMenus />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
