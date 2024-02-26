import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import AboutMissionBlockUi from "./UI/AboutMissionBlockUi";

const AboutMission = () => {
  const {data:{about, companygoals}} = useContext(CommonCtx);
  const aboutInfo = about[0];
  const compGoals = companygoals;
  return (
    <section className="mission-section">
    	<div className="auto-container">
        	<div className="inner-container">
                <div className="row clearfix">
                    <AboutMissionBlockUi bgimage={aboutInfo.thumbimg} items={compGoals}  />
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutMission;
