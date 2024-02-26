import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import TestimonialBlock from "./UI/TestimonialBlock";

const SidebarTestimonials = () => {
  const {data:{testimonials}} = useContext(CommonCtx);
  return (
    <div className="sidebar-widget testimonial-widget">
      <div className="sidebar-title">
        <h2>Testimonials</h2>
      </div>
      <div className="single-item-carousel owl-carousel owl-theme">
        {
          testimonials.map((item, i)=>{
            return <TestimonialBlock key={i} data={item} />
          })
        }
      </div>
    </div>
  );
};

export default SidebarTestimonials;
