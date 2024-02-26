import Image from "next/image";
import React, { useContext } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";
import WebstatsUi from "./UI/WebstatsUi";

const WebStats = () => {
  const { counts } = useContext(HomeSectionCtx);
  return (
    <section id="tw-facts" className="tw-facts">
      <div className="facts-bg-pattern d-none d-lg-block">
        {/*width={160}
          height={153}*/}
        <img
          className="wow fadeInLeft"
          src="/images/funfacts/arrow_left.png"
          alt="arrwo_left"
          style={{ visibility: "visible", animationName: "fadeInLeft" }}
        />
        <img
          className="wow fadeInRight"
          src="/images/funfacts/arrow_right.png"
          alt="arrow_right"
          style={{ visibility: "visible", animationName: "fadeInRight" }}
        />
      </div>
      <div className="container">
        <div className="row">
          <WebstatsUi
            title="Employee"
            count={counts.totEmpl}
            src="/images/icons/employee.gif"
            imageStyle={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "zoomIn",
            }}
            textStyle={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          />
          <WebstatsUi
            title="Customer"
            count={counts.totCust}
            src={`/images/icons/Customers.gif`}
            imageStyle={{ visibility: "visible", animationName: "zoomIn" }}
            textStyle={{ visibility: "visible", animationName: "slideInUp" }}
          />
          <WebstatsUi
            title="Operator"
            count={counts.totOperator}
            src={`/images/icons/Operator.gif`}
            imageStyle={{ visibility: "visible", animationName: "zoomIn" }}
            textStyle={{ visibility: "visible", animationName: "slideInUp" }}
          />
          <WebstatsUi
            title="Coverage"
            count={counts.totcoverage}
            src={`/images/icons/coverage.gif`}
            imageStyle={{ visibility: "visible", animationName: "zoomIn" }}
            textStyle={{ visibility: "visible", animationName: "slideInUp" }}
          />
        </div>
      </div>
      <style jsx>
        {`
          section {
            position: relative;
          }
          .tw-facts {
            background-color: #f2f2f2;
            z-index: 2;
            padding: 80px 0;
          }

          .facts-bg-pattern img {
            position: absolute;
            left: 17px;
            bottom: 47px;
            background-position: left center;
            background-repeat: no-repeat;
            z-index: -1;
          }

          .facts-bg-pattern img:nth-child(2) {
            left: auto;
            right: 0;
            bottom: 36px;
          }
        `}
      </style>
    </section>
  );
};

export default WebStats;
