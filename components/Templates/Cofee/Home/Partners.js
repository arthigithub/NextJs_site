import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";
import BasicBlock from "./UI/BasicBlock";

const Partners = () => {
  const { partners, partnersHeader } = useContext(HomeSectionCtx);
  const partnersHeadDetails = partnersHeader[0];
  return (
    <section className="partners-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="title-column col-md-4 col-sm-12 col-xs-12">
            <div className="inner-column">
              <BasicBlock data={partnersHeadDetails} headingType="h2" />
              <a href="#" className="theme-btn btn-style-one">
                Join With Us
              </a>
            </div>
          </div>

          <div className="partners-column col-md-8 col-sm-12 col-xs-12">
            <div className="row clearfix">
              {partners.map(({ thumbimg, description, sourcelink },i) => {
                return (
                  <div key={i} className="column col-md-6 col-sm-6 col-xs-12">
                    <div className="partner-block">
                      <div className="inner-box">
                        <div className="client-img">
                          <Image
                            src={thumbimg}
                            alt=""
                            width={136}
                            height={60}
                          />
                        </div>
                        <div className="text">{description}</div>
                        <Link href={sourcelink}>
                          <a className="read-more">
                            <span className="icon flaticon-right-arrow-1"></span>{" "}
                            Visit Website
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
