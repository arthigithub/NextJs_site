import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { Sections } from "../lib/api";
import { Loading } from "../Static/Loading";
const Featured = () => {
  const { data, loading: loadingpage } = useQuery("bannermenu", async () => {
    return await Sections("home", "", "", "sections", "bannermenu");
  });
  if (!data) return <div />;
  const { result: bannerMenu } = data;
  return (
    <section className="featured-section">
      <div className="auto-container">
        <div className="inner-container clearfix">
          {bannerMenu.map(
            ({ title, sub_title, description, thumbimg, sourcelink }, i) => {
              return (
                <div
                  key={i}
                  className="featured-block col-md-4 col-sm-6 col-xs-12"
                >
                  <div className="inner-box">
                    <div className="upper-box">
                      <div className="text">{description}</div>
                      <a className="read-more" href={sourcelink}>
                        <span className="icon flaticon-right-arrow-1"></span>{" "}
                        Read More
                      </a>
                    </div>
                    <div className="lower-box">
                      <div className="lower-inner">
                        <div className="icon-box">
                          <span className="icon">
                            <Image
                              width="64"
                              height="64"
                              src={thumbimg}
                              alt="..."
                            />
                          </span>
                        </div>
                        <h3>
                          <a href={sourcelink}>{title}</a>
                        </h3>
                        <div className="title">{sub_title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Featured;
