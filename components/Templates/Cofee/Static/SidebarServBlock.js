import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { getServiceList } from "../lib/helper";

const SidebarServBlock = () => {
  const { menus, pagename } = useContext(CommonCtx);
  const menusList = getServiceList(menus, "menus");
  return (
    <>
      <div className="sidebar-title">
        <h2>Our services</h2>
      </div>
      <div className="sidebar-widget sidebar-blog-category">
        <ul className="blog-cat-two">
          {menusList.map((item, i) => {
            return (
              <li key={i} className={pagename === item.menu ? `active` : ""}>
                <a href={item.menu}>
                    {item.menu.toUpperCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>
        {`
          .active {
            color: #f2f2f2;
            padding-left: 30px;
            background-color: #2a5878;
          }
        `}
      </style>
    </>
  );
};

export default SidebarServBlock;
