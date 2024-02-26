import React, { useContext } from "react";
import Link from "next/link";
import { CommonCtx } from "../../store/common-context";
import { webMenus, Sections, getGeneralInfo } from "../../components/Templates/Cofee/lib/api";
import StaticLayout from "../../components/Templates/Cofee/Layouts/StaticLayout";
import BlogBlock from "../../components/Templates/Cofee/Home/UI/BlogBlock";

const index = (props) => {
  const blogs = props.data;
  return (
    <>
      <CommonCtx.Provider value={props}>
        <StaticLayout>
          <section className="blog-page-section">
            <div className="auto-container">
              <div className="row clearfix">
                {blogs.map((item, i) => (
                  <BlogBlock data={item} key={i} />
                ))}
              </div>
            </div>
          </section>
        </StaticLayout>
      </CommonCtx.Provider>
    </>
  );
};

export default index;
export const getStaticProps = async () => {
  const { result: menus } = await webMenus();
  const { result: data } = await Sections("blog");
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });

  const pagename = "Blog";
  return {
    revalidate: 30,
    props: {
      menus,
      data,
      pagename,
      generalinfo,
    },
  };
};
