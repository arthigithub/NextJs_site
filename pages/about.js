import React from "react";
import {
  getGeneralInfo,
  Sections,
  webMenus,
} from "../components/Templates/Cofee/lib/api";
import { CommonCtx } from "../store/common-context";
import StaticLayout from "../components/Templates/Cofee/Layouts/StaticLayout";
import AboutMission from "../components/Templates/Cofee/Static/AboutMission";
import AboutWhoWeAre from "../components/Templates/Cofee/Static/AboutWhoWeAre";
import AboutWhyChooseus from "../components/Templates/Cofee/Static/AboutWhyChooseus";
import AboutExperts from "../components/Templates/Cofee/Static/AboutExperts";

const about = (props) => {
  return (
    <CommonCtx.Provider value={props}>
      <div className="page-wrapper">
        <StaticLayout>
          <AboutMission />
          <AboutWhoWeAre />
          <AboutWhyChooseus />
          <AboutExperts />
        </StaticLayout>
      </div>
    </CommonCtx.Provider>
  );
};

export const getStaticProps = async () => {
  const { result: whychooseus } = await Sections(
    "about",
    "",
    "",
    "sections",
    "whychooseus"
  );
  const { result: companygoals } = await Sections(
    "about",
    "",
    "",
    "sections",
    "companygoals"
  );
  const { result: about } = await Sections(
    "about",
    "",
    "",
    "sections",
    "about"
  );
  const { result: timeline } = await Sections(
    "about",
    "",
    "",
    "sections",
    "timeline"
  );
  const { result: companyexperts } = await Sections(
    "about",
    "",
    "",
    "sections",
    "companyexperts"
  );
  const { result: expertsheader } = await Sections(
    "about",
    "",
    "",
    "sections",
    "expertsheader"
  );

  const { result: menus } = await webMenus();
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });

  return {
    revalidate: 30 * 2,
    props: {
      menus,
      data: {
        whychooseus,
        companygoals,
        about,
        timeline,
        companyexperts,
        expertsheader,
      },
      general: [],
      pagename: "About Company",
      generalinfo,
    },
  };
};

export default about;
