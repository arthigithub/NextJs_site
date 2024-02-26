import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";

const AboutWhyChooseus = () => {
  const {
    data: { whychooseus },
  } = useContext(CommonCtx);
  return (
    <section className="services-section-two">
      <div className="auto-container">
        <div className="sec-title light centered">
          <h2>Why Choose Us</h2>
        </div>
        <div className="row clearfix">
          {whychooseus.map(
            ({ title, sub_title, thumbimg, sourcelink, description }, i) => {
              return (
                <div key={i} className="services-section-three col-md-4 col-sm-6 col-xs-12">
                  <div className="inner-box">
                    <h3>
                      <Link href={sourcelink}>{title}</Link>
                    </h3>
                    <div className="title">{sub_title}</div>
                    <div className="image">
                      <Image
                        width={225}
                        height={165}
                        src={thumbimg}
                        alt="..."
                      />
                    </div>
                    <div className="text">{description}</div>
                    <Link href={sourcelink}>
                      <a className="read-more">
                        <span className="icon flaticon-right-arrow-1"></span> Read
                        more
                      </a>
                    </Link>
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

export default AboutWhyChooseus;
