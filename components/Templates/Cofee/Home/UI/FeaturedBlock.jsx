import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedBlock = ({data:{thumbimg, title, description, sourcelink}}) => {
  return (
    <div className="featured-block-two col-md-4 col-sm-6 col-xs-12">
      <div className="inner-box">
        <div className="icon-box">
          <span className="icon">
            <Image width={'200'} height={'200'} src={thumbimg} alt=".." />
          </span>
        </div>
        <h3>{title}</h3>
        <div className="text">
          {description}
        </div>
        <div className="overlay-box">
          <div className="overlay-inner">
            <div className="overlay-icon-box">
              <span className="overlay-icon unset-img">
                <Image width={'200'} height={'200'} src={thumbimg} alt=".." />
              </span>
            </div>
            <h3>
              <Link href='/'><a>{title}</a></Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlock;
