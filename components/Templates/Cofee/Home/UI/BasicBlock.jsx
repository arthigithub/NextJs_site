import React from "react";

const BasicBlock = ({data:{title, description}, headingType}) => {
  return (
    <>
      {headingType==='h2' ? <h2>{title}</h2> : <h3>{title}</h3>}
      <div className="text">
        {description}
      </div>
    </>
  );
};

export default BasicBlock;
