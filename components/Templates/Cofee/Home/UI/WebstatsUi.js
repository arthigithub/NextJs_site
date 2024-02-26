import Image from "next/image";
import React from "react";

const WebstatsUi = ({ title, count, src, imageStyle, textStyle }) => {
  return (
    <div className="col-md-3 text-center">
      <div className="tw-facts-box" style={{ "mixBlendMode": "darken" }}>
        <div className="facts-img wow zoomIn" style={imageStyle}>
          <Image
            src={src}
            width={200}
            height={200}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="facts-content wow slideInUp" style={textStyle}>
          <h4 className="facts-title">{title}</h4>
          <span className="counter">{count}</span>
          <sup>+</sup>
        </div>
      </div>
      <style jsx>
        {`
          .facts-title {
            margin: 25px 0;
          }

          .facts-content {
            color: #66a94c;
          }

          .facts-content span {
            font-size: 48px;
            font-weight: 700;
          }

          .facts-content sup {
            top: -17px;
            left: -4px;
            font-size: 30px;
            font-weight: 600;
          }
          h4 {
            color: #2f2c2c;
            font-size: 18px;
            font-weight: 700;
          }
        `}
      </style>
    </div>
  );
};

export default WebstatsUi;
