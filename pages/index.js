import React from "react";
import { useContext } from "react";
import HomeLayout from "../components/Templates/Cofee/Layouts/HomeLayout";
import {
  Counters,
  getGeneralInfo,
  Sections,
  webMenus,
} from "../components/Templates/Cofee/lib/api";
import { HomeSectionCtx } from "../store/home-context";

const index = (props) => {
  return (
    <HomeSectionCtx.Provider value={props}>
      <HomeLayout />
    </HomeSectionCtx.Provider>
  );
};

export const getStaticProps = async () => {
  const { result: whychooseus } = await Sections(
    "home",
    "",
    "",
    "sections",
    "whychooseus"
  );

  const { result: menus } = await webMenus();
  const { result: banner } = await Sections(
    "home",
    "",
    "",
    "sections",
    "banner"
  );
  const { result: bannermenu } = await Sections(
    "home",
    "",
    "",
    "sections",
    "bannermenu"
  );
  const { result: blogs } = await Sections("blog", 3, 0, "blogs");
  const { result: services } = await Sections(
    "home",
    "",
    "",
    "sections",
    "services"
  );
  const { result: plansHeader } = await Sections(
    "home",
    "",
    "",
    "sections",
    "plansheader"
  );
  const { result: plans } = await Sections("home", "", "", "sections", "plans");
  const { result: counts } = await Counters();
  const { result: apps } = await Sections(
    "home",
    "",
    "",
    "sections",
    "appfeatures"
  );
  const { result: appsheader } = await Sections(
    "home",
    "",
    "",
    "sections",
    "appsheader"
  );

  const { result: testimonials } = await Sections(
    "home",
    "",
    "",
    "sections",
    "testimonials"
  );
  const { result: partners } = await Sections(
    "home",
    "",
    "",
    "sections",
    "partners"
  );
  const { result: partnersHeader } = await Sections(
    "home",
    "",
    "",
    "sections",
    "partnersheader"
  );

  const { result: generalinfo } = await getGeneralInfo({ sett: "general" });

  return {
    revalidate: 30,
    props: {
      menus,
      banner,
      bannermenu,
      blogs,
      services,
      whychooseus,
      plansHeader,
      plans,
      apps,
      counts,
      testimonials,
      partners,
      partnersHeader,
      appsheader,
      generalinfo,
    },
  };
};

export default index;
