import React from "react";
import StaticLayout from "../../../components/Templates/Cofee/Layouts/StaticLayout";
import {
  getGeneralInfo,
  webMenus,
  webPages,
} from "../../../components/Templates/Cofee/lib/api";
import { urlStrPathReplace } from "../../../components/Templates/Cofee/lib/helper";
import PageContent from "../../../components/Templates/Cofee/Static/PageContent";
import { CommonCtx } from "../../../store/common-context";

const index = (props) => {
  return (
    <>
      <CommonCtx.Provider value={props}>
        <StaticLayout>
          <PageContent />
        </StaticLayout>
      </CommonCtx.Provider>
    </>
  );
};

export const getStaticPaths = async () => {
  const { result: webpages } = await webPages({ name: "pages" });
  const paths = webpages.map(({ pgtitle }) => {
    return { params: { page: urlStrPathReplace(pgtitle) } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { result: menus } = await webMenus();
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });
  const { result: webpages } = await webPages({ name: "pages" });
  const pagedet = webpages.find((item) => {
    return (
      urlStrPathReplace(item.pgtitle.toString()) ===
      urlStrPathReplace(context.params.page)
    );
  });
  const pagename = pagedet.pgtitle;
  return {
    revalidate: 30,
    props: {
      menus,
      data: {
        pagedet,
      },
      pagename,
      generalinfo,
    },
  };
};

export default index;
