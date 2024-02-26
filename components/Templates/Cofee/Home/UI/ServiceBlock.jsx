import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceBlock = ({data:{thumbimg, title, description, sourcelink}}) => {
  return (
    <div className="services-block">
      <div className="inner-box">
        <div className="icon-box">
          <span className="icon">
            <Image src={thumbimg} alt="..." width="75" height="75"  />
          </span>
        </div>
        <h3>
          <a href={sourcelink}>{title}</a>
        </h3>
        <div className="text">
          {description}
        </div>
        <Link href={sourcelink}>
          <a className="read-more"><span className="icon flaticon-right-arrow-1"></span> Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceBlock;
