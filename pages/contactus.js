import React from "react";
import Contact from "../components/Templates/Cofee/Home/Contact";
import StaticLayout from "../components/Templates/Cofee/Layouts/StaticLayout";
import {
  getGeneralInfo,
  Sections,
  webMenus,
} from "../components/Templates/Cofee/lib/api";
import { CommonCtx } from "../store/common-context";

const contactus = (props) => {
  return (
    <CommonCtx.Provider value={props}>
      <div className="page-wrapper">
        <StaticLayout>
          <Contact />
        </StaticLayout>
      </div>
    </CommonCtx.Provider>
  );
};

export const getStaticProps = async () => {
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });
  const { result: menus } = await webMenus();
  const { result: contactheader } = await Sections(
    "contact",
    "",
    "",
    "sections",
    "contactheader"
  );
  return {
    revalidate: 30 * 2,
    props: {
      menus,
      data: { contactheader },
      general: [],
      pagename: "Contact Us",
      generalinfo,
    },
  };
};

export default contactus;
