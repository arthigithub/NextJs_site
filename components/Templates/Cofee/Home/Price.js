import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";
import BasicBlock from "./UI/BasicBlock";
import { CommonCtx } from "../../../../store/common-context";

const Price = () => {
  const router = useRouter();
  const pathname = router.pathname;
  let planList,
    planHeadDetails = [];
  if (pathname === "/") {
    const { plansHeader, plans } = useContext(HomeSectionCtx);
    planHeadDetails = plansHeader[0];
    planList = plans;
  } else {
    const {
      data: { plansHeader, plans },
    } = useContext(CommonCtx);
    planHeadDetails = plansHeader[0];
    planList = plans;
  }

  return (
    <section className="price-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <BasicBlock data={planHeadDetails} headingType="h2" />
        </div>
        <div className="clearfix">
          {planList.map(
            ({ thumbimg, title, content, sub_title, description }, i) => {
              const desc = description.replace("_", "%<br/>");
              const Tag = desc.includes("%") ? "radius" : "ribbon";
              return (
                <div
                  key={i}
                  className="price-block col-md-4 col-md-offset-0 col-sm-6 col-xs-10 col-xs-offset-1"
                >
                  <div className="inner-box">
                    {Tag === "ribbon" && desc != "na" && (
                      <div className="ribbon">{desc}</div>
                    )}
                    {Tag === "radius" && (
                      <div
                        className="off"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      ></div>
                    )}
                    <div className="icon-box">
                      <span className="icon">
                        <Image width={100} height={100} src={thumbimg} alt="" />
                      </span>
                    </div>
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    <div className="price">
                      <sup>Rs</sup>
                      {sub_title} <span>/ per month</span>
                    <Link href={`/newconnection?q=${title}`}>
                      <a className="theme-btn btn-style-two">Order Now</a>
                    </Link>
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

export default Price;
