import Link from "next/link";
import React from "react";

const NavaListUI = ({className, url, title, children}) => {
  return (
    <>
      <li className={className}>
        <a href={url}>{title}</a>
        {children}
      </li>
    </>
  );
};

export default NavaListUI;
