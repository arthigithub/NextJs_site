import React from "react";
import StaticLayout from "../../../components/Templates/Cofee/Layouts/StaticLayout";
import {
  getGeneralInfo,
  Sections,
  webMenus,
} from "../../../components/Templates/Cofee/lib/api";
import { urlStrPathReplace } from "../../../components/Templates/Cofee/lib/helper";
import CarreerDetails from "../../../components/Templates/Cofee/Static/CarreerDetails";
import { CommonCtx } from "../../../store/common-context";

const index = (props) => {
  return (
    <>
      <CommonCtx.Provider value={props}>
        <StaticLayout>
          <React.Fragment>
            <CarreerDetails />
          </React.Fragment>
        </StaticLayout>
      </CommonCtx.Provider>
    </>
  );
};

export const getStaticPaths = async () => {
  const { result: carreers } = await Sections("carreer");
  const paths = carreers.map(({ title }) => {
    return { params: { title: urlStrPathReplace(title) } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { result: menus } = await webMenus();
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });
  const { result: carreers } = await Sections("carreer");
  const { result: blogs } = await Sections("blog");
  const data = carreers.find((item) => {
    return (
      urlStrPathReplace(item.title.toString()) ===
      urlStrPathReplace(context.params.title)
    );
  });
  const pagename = data.title;
  return {
    revalidate: 30,
    props: {
      menus,
      data: {
        carreers,
        carreerDetails: data,
        blogs,
      },
      pagename,
      generalinfo,
    },
  };
};
export default index;
