import Head from "next/head";
import React from "react";
import StaticLayout from "../components/Templates/Cofee/Layouts/StaticLayout";
import { getGeneralInfo, webMenus } from "../components/Templates/Cofee/lib/api";
import { CommonCtx } from "../store/common-context";

const Custom404 = (props) => {
  return (
    <>
      <CommonCtx.Provider value={props}>
        <StaticLayout>
          <div className="sidebar-page-container">
            <div className="auto-container">
              <section className="error-section">
                <div className="auto-container">
                  <div className="inner-section">
                    <h1>404</h1>
                    <h2>
                      OOPPS! THE PAGE YOU WERE LOOKING FOR, COULDN'T BE FOUND.
                    </h2>
                    <a href="/" className="go-back">
                      Back to Home Page
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </StaticLayout>
      </CommonCtx.Provider>
    </>
  );
};

export default Custom404;
export const getStaticProps = async () => {
  const { result: menus } = await webMenus();
  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });
  const pagename = "404";
  return {
    revalidate: 30,
    props: {
      menus,
      data: {},
      pagename,
      generalinfo,
    },
  };
};
