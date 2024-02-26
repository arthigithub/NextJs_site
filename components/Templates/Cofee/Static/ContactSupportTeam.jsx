import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { Sections } from "../lib/api";
import Loading from "./Loading";

const ContactSupportTeam = () => {
  const { data: supportteam, isLoading } = useQuery("supportteam", async () => {
    return await Sections("contact", "", "", "sections", "supportteam");
  });
  if (isLoading) return <Loading/>;
  const { result: contactSupport } = supportteam;

  return (
    <div className="single-item-carousel owl-carousel owl-theme">
      {contactSupport.map(({ title, sub_title, thumbimg, description }, i) => {
        return (
          <div className="info-slide" key={i}>
            <div className="inner">
              <div className="image">
                <Image src={thumbimg} alt="..." width="85" height="85" />
              </div>
              <h3>{title}</h3>
              <div className="title">{description}</div>
              <div className="emailed">
                <span>Mail at:</span> {sub_title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactSupportTeam;
