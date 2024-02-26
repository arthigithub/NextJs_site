import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";

const SidebarBroucher = () => {
  const {general:{services_broucher}}  = useContext(CommonCtx);
  return (
    <div className="sidebar-widget sidebar-brochure">
      <div className="sidebar-title">
        <h2>Our Brochures</h2>
      </div>
      {
        services_broucher.map((item, i)=>{
          return <a key={i} className="brochure" href={item.sourcelink} target="_blank">
          <span className="icon flaticon-pdf"></span>{item.title}
        <span>{item.sub_title}</span>
      </a>
        })
      }
    </div>
  );
};

export default SidebarBroucher;
