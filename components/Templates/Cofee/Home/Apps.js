import Image from "next/image";
import React, { useContext } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";
import { chunkData } from "../lib/helper";
import AppBlock from "./UI/AppBlock";

const Apps = () => {
  const { apps, appsheader } = useContext(HomeSectionCtx);
  const { title, thumbimg } = appsheader[0];
  const chunkApps = chunkData(apps, 3);
  return (
    <section className="marketing-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="image-column col-md-6 col-sm-12 col-xs-12">
            <div className="image">
              <Image width={540} height={460} src={thumbimg} alt="..." />
            </div>
          </div>
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <h2>{title}</h2>
              <div className="single-item-carousel owl-carousel owl-theme">
                {chunkApps.map((item, i) => (
                  <AppBlock key={i} id={i + 1} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
