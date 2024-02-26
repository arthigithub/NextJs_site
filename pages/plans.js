import React from "react";
import {
  getGeneralInfo,
  Sections,
  webMenus,
} from "../components/Templates/Cofee/lib/api";
import { CommonCtx } from "../store/common-context";
import StaticLayout from "../components/Templates/Cofee/Layouts/StaticLayout";
import { Price } from "../components/Templates/Cofee/Home/Home";

const plans = (props) => {
  return (
    <CommonCtx.Provider value={props}>
      <div className="page-wrapper">
        <StaticLayout>
          <Price />
        </StaticLayout>
      </div>
    </CommonCtx.Provider>
  );
};

export const getStaticProps = async () => {
  const { result: plans } = await Sections("home", "", "", "sections", "plans");
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });

  const { result: plansHeader } = await Sections(
    "home",
    "",
    "",
    "sections",
    "plansheader"
  );

  const { result: menus } = await webMenus();

  return {
    revalidate: 30,
    props: {
      menus,
      data: {
        plans,
        plansHeader,
      },
      general: [],
      pagename: "Plans",
      footer: [],
      generalinfo,
    },
  };
};

export default plans;
