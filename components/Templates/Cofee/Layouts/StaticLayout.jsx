import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { Footer, Header } from "../Home/Home";
import Meta from "../SEO/Meta";
import HeadPageBackground from "../Static/HeadPageBackground";

const StaticLayout = (props) => {
  const { pagename } = useContext(CommonCtx);
  return (
    <>
      <Meta metaTitle={pagename} />
      <Header />
      <HeadPageBackground />
      {props.children}
      <Footer />
    </>
  );
};

export default StaticLayout;
