import Link from "next/link";
import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { urlStrPathReplace } from "../lib/helper";

const BlogPopularPost = () => {
  const {
    data: { blogs },
  } = useContext(CommonCtx);
  return (
    <div className="sidebar-widget popular-posts">
      <div className="sidebar-title">
        <h2>Recent Posts</h2>
      </div>
      {blogs.map(({ title, thumbimg, addedon }, i) => {
        return (
          <article className="post" key={i}>
            <figure className="post-thumb">
              <Link className="overlay" href={urlStrPathReplace(title)}>
                <img src={thumbimg} alt="..." />
              </Link>
            </figure>
            <div className="text">
              <Link href={urlStrPathReplace(title)}>{title}</Link>
            </div>
            <div className="post-info">{addedon}</div>
          </article>
        );
      })}
    </div>
  );
};

export default BlogPopularPost;
