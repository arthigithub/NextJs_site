import React from "react";
import { CommonCtx } from "../../store/common-context";
import {
  webMenus,
  Sections,
  getGeneralInfo,
} from "../../components/Templates/Cofee/lib/api";
import StaticLayout from "../../components/Templates/Cofee/Layouts/StaticLayout";
import Carreer from "../../components/Templates/Cofee/Static/Carreer";

const index = (props) => {
  return (
    <>
      <CommonCtx.Provider value={props}>
        <StaticLayout>
          <Carreer />
        </StaticLayout>
      </CommonCtx.Provider>
    </>
  );
};

export default index;
export const getStaticProps = async () => {
  const { result: menus } = await webMenus();
  const { result: carreer } = await Sections(
    "carreer",
    "",
    "",
    "sections",
    "joblist"
  );
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });
  const pagename = "Carreer";
  return {
    revalidate: 30,
    props: {
      menus,
      data: { carreer },
      pagename,
      generalinfo,
    },
  };
};
