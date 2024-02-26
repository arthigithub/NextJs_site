import React from "react";

const Label = ({forname, lable, children, className}) => {
    const labelClass = typeof(className)==='undefined' ? "label" : className;
  return (
    <>
      <label className={labelClass} htmlFor={forname}>
        {typeof(lable)!=='undefined' ? lable : children}
      </label>
    </>
  );
};

export default Label;
