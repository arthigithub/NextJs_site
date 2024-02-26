import Image from "next/image";
import React, { useContext } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";

const Testimonial = () => {
  const { testimonials } = useContext(HomeSectionCtx);
  return (
    <section className="testimonial-section testimonial-img">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="title-column col-md-5 col-sm-12 col-xs-12">
            <div className="inner-column">
              <h2>
                Our<br /> satisfied customers<br/> have shared their<br/> positive experiences<br /> with us.
              </h2>
            </div>
          </div>
          <div className="testimonial-column col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <div className="testimonial-carousel owl-carousel owl-theme">
              {testimonials.map(
                ({ description, thumbimg, title, sub_title }, i) => {
                  return (
                    <div key={i} className="testimonial-block">
                      <div className="inner-box">
                        <div className="quote-icon">
                          <span className="icon flaticon-straight-quotes"></span>
                        </div>
                        <div className="text">{description}</div>
                        <a href="#" className="continue">
                          <span className="icon flaticon-right-arrow-1"></span>
                          Continue to Read
                        </a>
                        <div className="author-info">
                          <div className="author-inner">
                            <div className="image">
                              <Image
                                width={75}
                                height={75}
                                src={thumbimg}
                                alt="..."
                              />
                            </div>
                            <h3>{title}</h3>
                            <div className="designation">{sub_title}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="triangle"></div>
        </div>
      </div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Testimonial;
