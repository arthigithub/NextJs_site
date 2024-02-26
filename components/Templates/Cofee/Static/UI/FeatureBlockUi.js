import Image from "next/image";
import React from "react";

const FeatureBlockUi = ({data:{title, thumbimg, description}}) => {
  return (
    <div className="services-section-four">
      <div className="services-inner">
        <div className="dott"></div>
        <div className="icon-box">
          <span className="icon">
            <Image width={50} height={50} src={thumbimg} alt="..." />
          </span>
        </div>
        <h3 className="services-heading">{title}</h3>
        <div className="services-text">{description}</div>
      </div>
    </div>
  );
};

export default FeatureBlockUi;
