import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { Sections } from "../lib/api";
import Loading from "./Loading";

const ContactDetails = () => {
  const { data: contactdet, isLoading } = useQuery("contactdet", async () => {
    return await Sections("contact", "", "", "sections", "contactdet");
  });
  if (isLoading) return <Loading/>;
  const { result: contactDetls } = contactdet;

  return (
    <>
      <ul className="info-list">
        {contactDetls.map(({ title, thumbimg, description }, i) => {
          return (
            <li key={i}>
              <span className="icon">
                <Image src={thumbimg} alt="..." width={26} height={32} />
              </span>{" "}
              <strong>{title}:</strong>
              {description}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactDetails;
