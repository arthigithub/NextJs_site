import Image from "next/image";
import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { chunkData } from "../lib/helper";
import FeatureBlockUi from "./UI/FeatureBlockUi";

const ServiceFeatures = () => {
  const {
    data: { features_header, features },
  } = useContext(CommonCtx);
  const { title, thumbimg, description } = features_header[0] || [];
  const featureBlock = chunkData(features, 2);
  return (
    <>
      <div className="text">
        <h3>Awesome Features</h3>
        <p>{description}</p>
      </div>

      <div className="two-column">
        <div className="row clearfix">
          <div className="graph-column col-md-6 col-sm-6 col-xs-12">
            <div className="inner-column">
              <h4>{title}</h4>
              <div className="image">
                <Image width={331} height={396} src={thumbimg} alt="..." />
              </div>
            </div>
          </div>

          <div className="carousel-column col-md-6 col-sm-6 col-xs-12">
            <div className="inner-column">
              <div className="single-verticle-carousel">
                {featureBlock.map((item, i) => {
                  return (
                    <div className="slide" key={i}>
                      {item.map((info, j) => {
                        return <FeatureBlockUi key={j} data={info} />;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceFeatures;
