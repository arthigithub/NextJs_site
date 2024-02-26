import Image from "next/image";
import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { Header } from "../Home/Home";

const HeadPageBackground = () => {
  const { pagename } = useContext(CommonCtx);
  return (
    <section className="page-title pagebg">
      <Image src="/images/background/pattern-4.png" layout="fill" alt="..." />
      <div className="auto-container">
        <h1>
          {pagename !== "404"
            ? pagename
            : "404 page!,  Oops! You ran into a wrong URL "}
        </h1>
      </div>
      {pagename !== "404" && (
        <div className="page-info">
          <div className="auto-container">
            <div className="inner-container">
              <ul className="bread-crumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>{pagename}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeadPageBackground;
