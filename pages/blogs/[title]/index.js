import React from "react";
import Link from "next/link";
import { CommonCtx } from "../../../store/common-context";
import {
  webMenus,
  Sections,
  getGeneralInfo,
} from "../../../components/Templates/Cofee/lib/api";
import StaticLayout from "../../../components/Templates/Cofee/Layouts/StaticLayout";
import Head from "next/head";
import { urlStrPathReplace } from "../../../components/Templates/Cofee/lib/helper";
import BlogDetails from "../../../components/Templates/Cofee/Static/BlogDetails";

const index = (props) => {
  const data = props.data.blogDetail;
  const { title, description } = data;
  return (
    <>
      <CommonCtx.Provider value={props}>
        <StaticLayout>
          <React.Fragment>
            <BlogDetails />
          </React.Fragment>
        </StaticLayout>
      </CommonCtx.Provider>
    </>
  );
};

export default index;

export const getStaticPaths = async () => {
  const { result: blogs } = await Sections("blog");
  const paths = blogs.map(({ title }) => {
    return { params: { title: urlStrPathReplace(title) } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });
  const { result: menus } = await webMenus();
  const { result: blogs } = await Sections("blog");
  const data = blogs.find((item) => {
    return urlStrPathReplace(item.title) === context.params.title;
  });
  const pagename = data.title;
  return {
    revalidate: 30,
    props: {
      menus,
      data: {
        blogDetail: data,
        blogs,
      },
      pagename,
      generalinfo,
    },
  };
};
