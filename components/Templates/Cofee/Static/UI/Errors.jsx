import React from "react";

const Errors = ({ emsg, type = "#fba9a9" }) => {
  return (
    emsg && (
      <>
        <div className="dangeremsg" style={{ fontSize: "12px" }}>
          <i className="fa fa-2x fa-exclamation-triangle"></i> {emsg}
        </div>
        <style jsx>{`
          .dangeremsg {
            color: ${type};
            font-weight: bold;
          }
        `}</style>
      </>
    )
  );
};

export default Errors;
