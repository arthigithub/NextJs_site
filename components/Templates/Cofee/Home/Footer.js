import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { HomeSectionCtx } from "../../../../store/home-context";
import { getFranchiseeArea, webMenus } from "../lib/api";
import { chunkData, displayChat } from "../lib/helper";
import EmailSubscription from "./EmailSubscription";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const FeacnhiseeArea = chunkData(getFranchiseeArea(), 11);
  const [getFooterMenus, setFooterMenus] = useState([]);
  const [getFooterHeaders, setFooterHeaders] = useState([]);
  const { generalinfo } =
    pathname === "/" ? useContext(HomeSectionCtx) : useContext(CommonCtx);

  useEffect(() => {
    const getFootFuncHand = async () => {
      const { result: footerMenus } = await webMenus({ menu: "footer_menu" });
      setFooterMenus(chunkData(footerMenus, 5));
      setFooterHeaders(generalinfo);
    };
    getFootFuncHand();
    displayChat();
  }, []);
  const {
    footerhead1,
    footerhead2,
    footerhead3,
    compaddr,
    subscriptionheader,
  } = getFooterHeaders;

  return (
    <>
      <footer className="main-footer">
        <div className="auto-container">
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="column col-lg-12 col-md-12 col-sm-6 col-xs-12">
                <div className="footer-widget links-widget">
                  <div className="footer-title">
                    <h2>Franchisee Locations</h2>
                  </div>
                  <div className="widget-content">
                    <div className="row clearfix">
                      {FeacnhiseeArea.map((mainItem, i) => {
                        return (
                          <div
                            key={i}
                            className="widget-column col-md-2 col-sm-6 col-xs-12"
                          >
                            <ul className="footer-list">
                              {mainItem.map(({ name }, j) => {
                                return (
                                  <li key={j}>
                                    <a
                                      href={`/franchisee?location=${name}`}
                                      style={{ textTransform: "capitalize" }}
                                    >
                                      {name}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="ft-hr" />
        </div>
        <div className="auto-container">
          <div className="widgets-section" style={{ padding: "10px 0px 5px" }}>
            <div className="row clearfix">
              <div className="column col-md-4 col-sm-6 col-xs-12">
                <div className="footer-widget subscribe-widget">
                  <div className="footer-title">
                    <h2>{footerhead2}</h2>
                  </div>
                  <div className="widget-content">
                    <div className="text">{subscriptionheader}</div>
                    <EmailSubscription />
                    <SocialMediaLinks />
                  </div>
                </div>
              </div>

              <div className="column col-md-4 col-sm-6 col-xs-12">
                <div className="footer-widget links-widget">
                  <div className="footer-title">
                    <h2>{footerhead1}</h2>
                  </div>
                  <div className="widget-content">
                    <div className="row clearfix">
                      {getFooterMenus.map((mainItem, i) => {
                        return (
                          <div
                            key={i}
                            className="widget-column col-md-6 col-sm-6 col-xs-12"
                          >
                            <ul className="footer-list">
                              {mainItem.map(({ mtitle, murl }, j) => {
                                return mtitle.trim().toLowerCase() !== "and more...." ? (
                                  <li key={j}>
                                    <a
                                      href={murl}
                                      style={{ textTransform: "capitalize" }}
                                    >
                                      {mtitle}
                                    </a>
                                  </li>
                                ) : (
                                  <li
                                    key={j}
                                    style={{ textTransform: "capitalize" }}
                                  >
                                    {mtitle}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="column col-md-4 col-sm-6 col-xs-12">
                <div className="footer-widget office-widget">
                  <div className="footer-title">
                    <h2>{footerhead3}</h2>
                  </div>
                  <div className="widget-content">
                    <div className="single-item-carousel owl-carousel owl-theme">
                      <div className="office-info">
                        <ul>
                          <li>
                            <strong>Address:</strong>
                          </li>
                          <li>{compaddr}</li>
                          <li>
                            <a href="/franchisee?location=cbi road">
                              <span className="flaticon-map-marker"></span>
                              &nbsp; Find Us On Map
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </div>
        <a href="#main-header">
          <span className="flaticon-up-arrow to-top"></span>
        </a>
      </footer>
    </>
  );
};

export default Footer;
