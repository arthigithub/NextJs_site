import Image from "next/image";
import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";

const AboutExperts = () => {
  const {
    data: { expertsheader, companyexperts },
  } = useContext(CommonCtx);
  const { title, description } = expertsheader[0];
  return (
    <section className="team-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>{title}</h2>
          <div className="text">{description}</div>
        </div>
        <div className="row clearfix">
          {companyexperts.map(({ thumbimg, title, sub_title }, i) => {
            return (
              <div key={i} className="team-block col-md-3 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="image">
                    <Image
                      width={270}
                      height={270}
                      src={thumbimg}
                      alt="..."
                    />
                  </div>
                  <div className="lower-content-box">
                    <div className="designation">{sub_title}</div>
                    <h3>{title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutExperts;
