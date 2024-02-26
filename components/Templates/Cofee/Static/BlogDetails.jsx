import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import BlockQuotes from "./BlockQuotes";
import BlogCommentForm from "./BlogCommentForm";
import BlogsComments from "./BlogsComments";
import BlogPopularPost from "./BlogPopularPost";
import BlogTags from "./BlogTags";
import BlogTagsList from "./BlogTagsList";

const BlogDetails = () => {
  const {
    data: {
      blogDetail: {
        sub_title,
        id,
        title,
        description,
        content,
        thumbimg,
        addedon,
      },
    },
  } = useContext(CommonCtx);
  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-side col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="blog-single">
              <div className="inner-box">
                <div className="image">
                  <img src={thumbimg} alt="..." />
                </div>
                <div className="lower-content">
                  <ul className="post-meta">
                    <li>
                      <span className="icon fa fa-calendar"></span>
                      {addedon}
                    </li>
                  </ul>
                  <h3>{title}</h3>
                  <div className="text">
                    <p>{description}</p>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    {/*<BlockQuotes />
                    <BlogTags />*/}
                  </div>
                </div>
              </div>
              <BlogsComments />
              <BlogCommentForm />
            </div>
          </div>

          <div className="sidebar-side col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <aside className="sidebar default-sidebar with-border">
              <BlogPopularPost />
              {/*<BlogTagsList />*/}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
