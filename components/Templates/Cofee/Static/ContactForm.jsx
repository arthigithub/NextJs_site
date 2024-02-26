import React, { useRef, useState } from "react";
import {
  useCommentValidate,
  useEmailValidate,
  useNameValidate,
} from "../hooks/use-validation";
import { raiseComplaint } from "../lib/api";
import Button from "./FormUi/Button";
import Input from "./FormUi/Input";
import TextArea from "./FormUi/TextArea";
import Thankyou from "./Thankyou";
import Errors from "./UI/Errors";

const ContactForm = () => {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [submitFormMsg, setSubmitMsg] = useState("");
  const { getname, getNameEmsg, validateNameFunc } = useNameValidate();
  const { getemail, getEmailEmsg, validateEmailFunc } = useEmailValidate();
  const { getcomments, getCommentEmsg, validateCommentFunc } =
    useCommentValidate();
  const nameChange = () => {
    validateNameFunc(fullnameRef.current.ivalue());
  };
  const emailChange = () => {
    validateEmailFunc(emailRef.current.ivalue());
  };
  const messageChange = () => {
    validateCommentFunc(messageRef.current.ivalue());
  };

  const submitForm = async (e) => {
    e.preventDefault();
    nameChange();
    emailChange();
    messageChange();
    if (
      getname !== "" &&
      getemail !== "" &&
      getcomments !== "" &&
      getNameEmsg === "" &&
      getEmailEmsg === "" &&
      getCommentEmsg === ""
    ) {
      const input = {
        comments: getcomments,
        email: getemail,
        service: "other",
        name: getname,
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
    <>
      {submitFormMsg === "" && (
        <div className="contact-form">
          <form onSubmit={(e) => submitForm(e)}>
            <div className="row clearfix">
              <div className="column col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <Input
                    type="text"
                    ref={fullnameRef}
                    placeholder="Full Name*"
                    onChange={nameChange}
                  />
                  <Errors emsg={getNameEmsg} />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    ref={emailRef}
                    placeholder="Email*"
                    onChange={emailChange}
                  />
                  <Errors emsg={getEmailEmsg} />
                </div>
              </div>

              <div className="column col-md-6 col-sm-6 col-xs-12">
                <div className="form-group">
                  <TextArea
                    ref={messageRef}
                    placeholder="Your Message..."
                    onChange={messageChange}
                  />
                  <Errors emsg={getCommentEmsg} />
                </div>
              </div>
              <div className="column btn-column col-md-12 col-sm-12 col-xs-12">
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
    </>
  );
};

export default ContactForm;
