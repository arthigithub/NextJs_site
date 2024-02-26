import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import FAQAccordianUi from "./UI/FAQAccordianUi";

const ServiceFAQ = () => {
  const {
    data: { faq },
  } = useContext(CommonCtx);
  return (
    <div className="accordian-boxed">
      <h3>FAQ</h3>
      <FAQAccordianUi data={faq} />
    </div>
  );
};

export default ServiceFAQ;
