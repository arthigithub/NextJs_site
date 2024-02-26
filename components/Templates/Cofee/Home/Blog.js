import React, { useContext } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";
import BlogBlock from "./UI/BlogBlock";

const Blog = () => {
  const { blogs } = useContext(HomeSectionCtx);
  return (
    <section className="blog-page-section">
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>Blog</h2>
          <div className="text">Latest Articles</div>
        </div>
        <div className="row clearfix">
          {blogs.map((item, i) => (
            <BlogBlock key={i} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
