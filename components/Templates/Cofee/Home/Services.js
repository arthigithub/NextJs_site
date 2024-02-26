import React, { useContext } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";
import ServiceBlock from "./UI/ServiceBlock";

const Services = () => {
  const {services} = useContext(HomeSectionCtx);
  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>Our services</h2>
          <div className="text">
            We help you generate high-quality online sales leads by implementing
            highly structured, persuasive Internet marketing campaigns.
          </div>
        </div>
        <div className="three-item-carousel owl-carousel owl-theme">
          {services.map((item, i) => (
            <ServiceBlock key={i} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
