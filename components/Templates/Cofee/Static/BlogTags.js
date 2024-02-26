import React from "react";

const BlogTags = () => {
  return (
    <div className="post-share-options">
      <div className="post-share-inner clearfix">
        <ul className="pull-left info-links clearfix">
          <li>
            <a href="#">
              <span className="fa fa-heart"></span>
            </a>
            18
          </li>
          <li>
            <a href="#">
              <span className="fa fa-comments"></span>
            </a>
            6
          </li>
        </ul>
        <div className="pull-right tags">
          <span>Tags: </span>
          <a href="#">idea</a>, <a href="#">services</a>, <a href="#">Growth</a>
        </div>
      </div>
    </div>
  );
};

export default BlogTags;
