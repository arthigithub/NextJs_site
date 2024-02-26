import React from "react";

const FAQAccordian = ({ data }) => {
  return (
    <>
      <ul className="accordion-box">
        {data.map(({ thumbimg, title, description }, i) => {
          return (
            <li className="accordion block" key={i}>
              <div className="acc-btn">
                <div className="icon-outer">
                  <img src={thumbimg} alt="..." />
                </div>
                {title}
              </div>
              <div className="acc-content">
                <div className="content">
                  <div className="text">{description}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FAQAccordian;
