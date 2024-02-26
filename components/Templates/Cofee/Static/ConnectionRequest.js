import React, { useContext, useRef, useState } from "react";
import { CommonCtx } from "../../../../store/common-context";
import {
  useCommentValidate,
  useEmailValidate,
  useSNameValidate,
} from "../hooks/use-validation";
import { raiseComplaint } from "../lib/api";
import Button from "./FormUi/Button";
import Input from "./FormUi/Input";
import Select from "./FormUi/Select";
import TextArea from "./FormUi/TextArea";
import Thankyou from "./Thankyou";
import Errors from "./UI/Errors";

const ConnectionRequest = () => {
  const {
    general: { connectionreq_header },
  } = useContext(CommonCtx);
  const { title, sub_title, description, sourcelink } =
    connectionreq_header[0] || [];
  /*form-validation*/
  const servicesList = [
    { id: 1, name: "IPTV Related" },
    { id: 3, name: "FoFi Android Box Related" },
    { id: 7, name: "Internet Related" },
    { id: 5, name: "VOIP Related" },
    { id: 9, name: "OTT Related" },
  ];
  const nameRef = useRef();
  const emailRef = useRef();
  const remarkRef = useRef();
  const serviceRef = useRef();
  const [getServiceEmsg, setServiceError] = useState("");
  const [submitFormMsg, setSubmitMsg] = useState("");
  const { getsname, getsNameEmsg, validateSNameFunc } = useSNameValidate();
  const { getemail, getEmailEmsg, validateEmailFunc } = useEmailValidate();
  const { getcomments, getCommentEmsg, validateCommentFunc } =
    useCommentValidate();

  const nameChange = () => {
    validateSNameFunc(nameRef.current.ivalue());
  };
  const emailChange = () => {
    validateEmailFunc(emailRef.current.ivalue());
  };
  const serviceChange = () => {
    setServiceError("");
    if (serviceRef.current.ivalue() === "") {
      setServiceError("Please Choose a Service");
    }
  };
  const remarkChange = () => {
    validateCommentFunc(remarkRef.current.ivalue());
  };

  const submitComments = async (e) => {
    e.preventDefault();
    nameChange();
    emailChange();
    serviceChange();
    remarkChange();
    if (
      getsname !== "" &&
      getemail !== "" &&
      getcomments !== "" &&
      serviceRef.current.ivalue() !== "" &&
      getsNameEmsg === "" &&
      getEmailEmsg === "" &&
      getServiceEmsg === "" &&
      getCommentEmsg === ""
    ) {
      const input = {
        comments: getcomments,
        email: getemail,
        service: serviceRef.current.ivalue(),
        name: getsname,
      };
      const {
        status: { message, errcode },
      } = await raiseComplaint(input);
      setSubmitMsg(message);
    }
  };

  const resetForm = () => {
    setSubmitMsg("");
  };
  return (
    <section className="quote-two-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="title-column col-md-3 col-sm-12 col-xs-12">
            <div className="inner-column">
              <h2>{title}</h2>
              <div className="text">{sub_title}</div>
              <a className="plans" href={sourcelink}>
                <span className="arrow flaticon-right-arrow-1"></span>Pricing
                Plans
              </a>
            </div>
          </div>

          <div className="form-column col-md-9 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="text">{description}</div>
              {submitFormMsg === "" && (
                <div className="quote-form style-two">
                  <form method="post" onSubmit={(e) => submitComments(e)}>
                    <div className="row clearfix">
                      <div className="column col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <Input
                            ref={nameRef}
                            type="text"
                            placeholder="Your Name/Uname"
                            onChange={nameChange}
                          />
                          <Errors emsg={getsNameEmsg} />
                        </div>
                        <div className="form-group">
                          <Input
                            ref={emailRef}
                            type="text"
                            placeholder="Email Address"
                            onChange={emailChange}
                          />
                          <Errors emsg={getEmailEmsg} />
                        </div>
                        <div className="form-group">
                          <Select
                            selectedVal={""}
                            defaultVal="Service"
                            optionsAr={servicesList}
                            className="custom-select-box form-control"
                            onChangeHandler={serviceChange}
                            ref={serviceRef}
                          />
                          <Errors emsg={getServiceEmsg} />
                        </div>
                      </div>

                      <div className="column col-md-6 col-sm-6 col-xs-12">
                        <div className="form-group">
                          <TextArea
                            ref={remarkRef}
                            placeholder="Your message..."
                            onChange={remarkChange}
                            onBlur={remarkChange}
                          />
                          <Errors emsg={getCommentEmsg} />
                        </div>
                      </div>
                      <div className="column btn-column col-md-6 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <Button className="theme-btn btn-style-one">
                            Submit Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {submitFormMsg !== "" && (
                <Thankyou
                  title="Thankyou"
                  description={submitFormMsg}
                  onClickHandler={resetForm}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionRequest;
