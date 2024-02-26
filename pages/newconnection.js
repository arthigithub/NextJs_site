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
import NewConnectionForm from "../components/Templates/Cofee/Static/NewConnectionForm";

const about = (props) => {
  return (
    <CommonCtx.Provider value={props}>
      <div className="page-wrapper">
        <StaticLayout>
          <NewConnectionForm />
        </StaticLayout>
      </div>
    </CommonCtx.Provider>
  );
};

export const getStaticProps = async () => {
  const { result: plans } = await Sections("home", "", "", "sections", "plans");
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });

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

  const { result: menus } = await webMenus();

  return {
    revalidate: 30,
    props: {
      menus,
      data: {
        whychooseus,
        companygoals,
        about,
        timeline,
        plans,
      },
      general: [],
      pagename: "New Connection",
      generalinfo,
    },
  };
};

export default about;
