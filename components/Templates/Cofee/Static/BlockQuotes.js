import React from "react";

const BlockQuotes = () => {
  return (
    <blockquote>
      <div className="quote-icon">
        <span className="icon flaticon-right-quotation-sign"></span>
      </div>
      <div className="blockquote-text">
        {" "}
        There anyone who loves or pursues or desires to obtain pain of itself,
        because it is pain, but because occasionally circumstances occur in
        which can procure him some great pleasure.{" "}
      </div>
      <div className="quote-info">
        <h4>Teena Venanda</h4>
        <div className="quote-desination">CEO/Founder</div>
      </div>
    </blockquote>
  );
};

export default BlockQuotes;
