import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { newFunc } from "../lib/api";
import Star from "./FormUi/Star";

const BlogsComments = () => {
  const { data } = useQuery("commentlist", async () => {
    return await newFunc({
      id: 151,
    });
  });
  if (!data) return <div />;
  const { result } = data;
  const showStar = (ratings) => {
    let star = [];
    for (let start = 0; start < ratings; start++) {
      star.push(<Star key={start} />);
    }
    return star;
  };
  return (
    <div className="comments-area">
      <div className="group-title">
        <h2>Read Comments</h2>
        <div className="separator"></div>
      </div>
      {result.map(({ id, name, addedon, message, rating }, i) => {
        return (
          <div className="comment-box" key={i}>
            <div className="comment">
              <div className="author-thumb">
                <div className="img">{name.substr(0, 2)}</div>
                <style jsx>{`
                  .img {
                    max-width: 100%;
                    width: 60px;
                    height: 60px;
                    border-radius: 30px;
                    border: 1px solid #ccc;
                    display: flex;
                    padding: 18px;
                    text-transform: uppercase;
                  }
                `}</style>
              </div>
              <div className="comment-inner">
                {/*<span className="fa fa-star light"></span>*/}
                <div className="comment-info clearfix">
                  {name} – {addedon}:
                </div>
                <div className="rating">{showStar(rating)}</div>
                <div className="text">{message}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsComments;
