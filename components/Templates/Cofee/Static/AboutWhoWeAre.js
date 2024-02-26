import Link from "next/link";
import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { chunkData } from "../lib/helper";

const AboutWhoWeAre = () => {
  const {
    data: { about, timeline },
  } = useContext(CommonCtx);
  const { title, sub_title, content } = about[0];
  const timeLineSlide = chunkData(timeline, 2);
  return (
    <section className="we-are-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <h2>{title}</h2>
              <div className="bold-text">{sub_title}</div>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
          <div className="carousel-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="single-verticle-carousel">
                {timeLineSlide.map((item, i) => {
                  return (
                    <div key={i} className="slide">
                      {item.map(({ title, sub_title, description, sourcelink }, j) => {
                        return (
                          <div key={j} className="monthy-block">
                            <div className="inner-box">
                              <div className="month">
                                {sub_title} <span className="dott"></span>
                              </div>
                              <h3>
                                <Link href={sourcelink}>{title}</Link>
                              </h3>
                              <div className="text">
                                {description}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
