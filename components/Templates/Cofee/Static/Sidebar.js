import Image from "next/image";
import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import ServiceFAQ from "./ServiceFAQ";
import ServiceFeatures from "./ServiceFeatures";
import ServiceInfo from "./ServiceInfo";
import SidebarBroucher from "./SidebarBroucher";
import SidebarServBlock from "./SidebarServBlock";
import SidebarTestimonials from "./SidebarTestimonials";

const Sidebar = () => {
  const {
    pagename,
    data: { ban_img },
  } = useContext(CommonCtx);
  const { title, thumbimg, description } = ban_img[0] || {};
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="sidebar-side col-lg-3 col-md-4 col-sm-12 col-xs-12">
            <aside className="sidebar services-sidebar">
              <SidebarServBlock />

              <SidebarBroucher />

              <SidebarTestimonials />
            </aside>
          </div>

          <div className="content-side col-lg-9 col-md-8 col-sm-12 col-xs-12">
            <div className="services-single">
              <div className="inner-box">
                <h2>{title}</h2>
                <div className="image">
                  <Image src={thumbimg} width={870} height={412} alt="..." />
                </div>
                <div className="lower-content">
                  <ServiceInfo description={description} />
                  <ServiceFeatures />
                  <ServiceFAQ />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
