import Image from "next/image";
import React from "react";

const AppFeaturedBlock = ({ data }) => {
  return data.map(({ thumbimg, title, description }, i) => {
    return (
      <div className="featured-block-three" key={i}>
        <div className="featured-inner">
          <div className="icon-box">
            <span className="icon">
              <Image width={64} height={64} src={thumbimg} alt="..." />
            </span>
          </div>
          <h4>{title}</h4>
          <div className="featured-text">{description}</div>
        </div>
      </div>
    );
  });
};

export default AppFeaturedBlock;
