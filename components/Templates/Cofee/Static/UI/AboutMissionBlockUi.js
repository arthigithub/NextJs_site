import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMissionBlockUi = ({ bgimage, items }) => {
  return (
    <>
      <div className="image-column col-md-7 col-sm-12 col-xs-12">
        <div className="inner-column clearfix">
          {bgimage && <Image layout="fill" src={bgimage} alt="..." />}
          <div className="content">
            <div className="single-item-carousel owl-carousel owl-theme">
              {items.map(
                (
                  { title, thumbimg, description, sourcelink, sub_title },
                  i
                ) => {
                  return (
                    <div key={i} className="mission-content">
                      <div className="title">
                        <div className="title-inner">
                          <div className="image">
                            <Image
                              width={45}
                              height={45}
                              src={thumbimg}
                              alt="..."
                            />
                          </div>
                          <h2>{title}</h2>
                        </div>
                      </div>
                      <div className="text">
                        {description.substring(0, 150)}...
                      </div>
                      <Link href={sourcelink}>
                        <a className="more">
                          <span className="icon flaticon-right-arrow-1"></span>
                          {sub_title}
                        </a>
                      </Link>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="content-column col-md-5 col-sm-12 col-xs-12">
        <div className="inner-column"></div>
      </div>
    </>
  );
};

export default AboutMissionBlockUi;
