import { useRouter } from "next/router";
import React from "react";
import StaticLayout from "../components/Templates/Cofee/Layouts/StaticLayout";
import {
  getGeneralInfo,
  webClients,
  webMenus,
} from "../components/Templates/Cofee/lib/api";
import Franchisee from "../components/Templates/Cofee/Static/Franchisee";
import { CommonCtx } from "../store/common-context";

const franchisee = (props) => {
  return (
    <CommonCtx.Provider value={props}>
      <div className="page-wrapper">
        <StaticLayout>
          <Franchisee />
        </StaticLayout>
      </div>
    </CommonCtx.Provider>
  );
};

export const getStaticProps = async (context) => {
  const { result: menus } = await webMenus();
  const { result: webClient } = await webClients({ name: "bbnl" });
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });

  return {
    revalidate: 30,
    props: {
      menus,
      data: { webClient },
      general: [],
      pagename: "Franchisee",
      generalinfo,
    },
  };
};

export default franchisee;
