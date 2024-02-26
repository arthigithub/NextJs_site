import Image from "next/image";
import React from "react";

const TestimonialBlock = (props) => {
    const {title, sub_title, thumbimg, description} = props.data;
  return (
      <div className="slide">
        <div className="inner-widget">
          <div className="upper-box">
            <div className="upper-inner">
              <div className="image">
                <Image width={56} height={56} src={thumbimg} alt="..." />
              </div>
              <h3>{title}</h3>
              <div className="location">{sub_title}</div>
            </div>
          </div>
          <div className="text">{description}
          </div>
        </div>
      </div>
  );
};

export default TestimonialBlock;
