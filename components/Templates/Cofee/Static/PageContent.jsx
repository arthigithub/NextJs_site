import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";

const PageContent = () => {
  const {
    data: { pagedet },
  } = useContext(CommonCtx);
  return (
    <>
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="blog-single">
                <div className="inner-box">
                  <div
                    className="lower-content"
                    style={{ padding: "25px 55px", "fontWeight": "normal" }}
                  >
                    <div className="text">
                      <div
                        dangerouslySetInnerHTML={{ __html: pagedet.pgcontent }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageContent;
