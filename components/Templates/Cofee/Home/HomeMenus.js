import Link from "next/link";
import React, { useContext } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";
import { useRouter } from "next/router";
import NavaListUI from "./UI/NavaListUI";
import { CommonCtx } from "../../../../store/common-context";

const HomeMenus = () => {
  const router = useRouter();
  const { menus: pageMenus } = (router.pathname==='/') ? useContext(HomeSectionCtx) : useContext(CommonCtx);
  return (
    <div className="navbar-collapse collapse clearfix">
      <ul className="navigation clearfix">
        {pageMenus.map(({ mtitle, murl, children }, i) => {
          const isSubmenu = children.length | 0;
          const dropdown = isSubmenu > 0 ? "dropdown " : "";
          const current = router.pathname === murl ? "current" : "";
          return (
            <NavaListUI
              key={i}
              className={`${dropdown + current}`}
              url={murl}
              title={mtitle}
            >
              {isSubmenu > 0 && (
                <ul>
                  {children.map(({ subtitle, suburl }, j) => {
                    return (
                      <NavaListUI
                        key={j}
                        className=""
                        url={suburl}
                        title={subtitle}
                      />
                    );
                  })}
                </ul>
              )}
            </NavaListUI>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeMenus;
