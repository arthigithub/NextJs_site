import React from "react";
import {
  getGeneralInfo,
  servicePage,
  webMenus,
} from "../../../components/Templates/Cofee/lib/api";
import ConnectionRequest from "../../../components/Templates/Cofee/Static/ConnectionRequest";
import Sidebar from "../../../components/Templates/Cofee/Static/Sidebar";
import StaticLayout from "../../../components/Templates/Cofee/Layouts/StaticLayout";
import { CommonCtx } from "../../../store/common-context";
import { getServiceList } from "../../../components/Templates/Cofee/lib/helper";
//{"app_web_scrn":[],"ban_gif":[],"ban_img":[],"faq":[],"features":[],"ins_devices":[],"paymode":[],"pg_banner":[],"plans":[]}
const index = (props) => {
  return (
    <>
      <CommonCtx.Provider value={props}>
        <StaticLayout>
          <React.Fragment>
            <Sidebar />
            <ConnectionRequest />
          </React.Fragment>
        </StaticLayout>
      </CommonCtx.Provider>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { result: menus } = await webMenus();
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });
  const servicekey = context.params.menu;
  const { result: pageSections } = await servicePage({ servicekey });
  const { result: serviceSection } = await servicePage({
    servicekey: "services",
  });
  return {
    revalidate: 30,
    props: {
      menus,
      data: pageSections,
      general: serviceSection,
      pagename: servicekey,
      generalinfo,
    },
  };
};

export const getStaticPaths = async () => {
  const { result: menus } = await webMenus();
  const paths = getServiceList(menus);
  return {
    paths,
    fallback: "blocking",
  };
};

export default index;
