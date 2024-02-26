import React, { Suspense } from "react";
import {
  Footer,
  Partners,
  Price,
  Testimonials,
  Certification,
  Featured,
  HomeBanner,
  OtherFeatures,
  Services,
  WebStats,
  Apps,
  Header,
  Blog,
  Modal,
} from "../Home/Home";
import Meta from "../SEO/Meta";

const HomeLayout = () => {
  return (
    <>
      <Meta
        metaTitle={
          "BBNL, FOFI, IPTV, VOIP, OTT, Unlimtied internet, Fast Speed"
        }
      />
      <Header />
      <HomeBanner />
      <Featured />
      <Services />
      <Apps />
      <OtherFeatures />
      <Testimonials />
      <Price />
      <WebStats />
      <Blog />
      <Partners />
      <Footer />
      <Modal />
    </>
  );
};

export default HomeLayout;
