import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlStrPathReplace } from "../../lib/helper";

const BlogBlock = ({data:{thumbimg, title, sub_title, addedon}}) => {
  const blogTitle = urlStrPathReplace(title);
  return (
      <div className="news-block col-md-4 col-sm-6 col-xs-12">
        <div className="inner-box">
          <div className="image">
            <Link href={`/blogs/${blogTitle}`}>
              <Image width={368} height={193.2} src={thumbimg} alt="..." />
            </Link>
          </div>
          <div className="lower-content">
            <div className="upper">
              <div className="post-date">{addedon}</div>
              <h3>
              <Link href={`/blogs/${blogTitle}`}>{title}</Link>
              </h3>
            </div>
            <div className="more">
              <Link href={`/blogs/${blogTitle}`}>
                <a className="read-more">
                  <span className="fa fa-chevron-circle-right"></span> Read More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlogBlock;
