import React from "react";
import AppFeaturedBlock from "./AppFeaturedBlock";
import BasicBlock from "./BasicBlock";

const AppBlock = (props) => {
  const features = props.data;
  const id = props.id;
  const appHeadingAr = features.filter((item) => item).splice(0, 1);
  const appHeading = appHeadingAr[0];
  const title = appHeading["title"];
  const description = appHeading["description"];
  const featuresContent = features.filter((item) => item).splice(1, 2);
  return (
    <div className="market-content">
      <div className="content-inner">
        <div className="content-number">{id}</div>
        <BasicBlock data={{ title, description }} />
        <AppFeaturedBlock data={featuresContent} />
      </div>
    </div>
  );
};

export default AppBlock;
