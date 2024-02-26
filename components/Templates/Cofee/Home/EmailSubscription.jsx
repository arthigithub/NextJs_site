import React, { useRef, useState } from "react";
import { useEmailValidate } from "../hooks/use-validation";
import { mailSubscription } from "../lib/api";
import Button from "../Static/FormUi/Button";
import Input from "../Static/FormUi/Input";
import Errors from "../Static/UI/Errors";

const EmailSubscription = () => {
  const emailRef = useRef();
  const { validateEmailFunc, getemail, getEmailEmsg } = useEmailValidate();
  const [submitFormMsg, setSubmitMsg] = useState("");
  const [msgColor, setMsgColor] = useState("red");
  const changeEmail = () => {
    setSubmitMsg("");
    validateEmailFunc(emailRef.current.ivalue());
  };

  const submitSubscription = async (e) => {
    e.preventDefault();
    changeEmail();
    const input = {
      apptype: "bbnl",
      email: getemail,
      custtype: "customer",
    };
    if (getemail.trim().length > 0) {
      const {
        status: { message, errcode },
      } = await mailSubscription(input);
      setSubmitMsg(message);
      setMsgColor("green");
    }
  };
  return (
    <div className="subscribe-form">
      <form
        method="post"
        onSubmit={(e) => {
          submitSubscription(e);
        }}
      >
       
        <div className="input-group">
          <Input
            ref={emailRef}
            type="text"
            placeholder="Email Address..."
            onChange={changeEmail}
            className="form-control sub-inp"
          />
          <span className="input-group-btn">
            <Button className="btn btn-default theme-btn" type="button" name="send">
              <span className="flaticon-right-arrow"></span></Button>
          </span>
          {submitFormMsg === "" && <Errors emsg={getEmailEmsg} />}
          {submitFormMsg !== "" && (
            <Errors emsg={submitFormMsg} type={msgColor} />
          )}
        </div>
      </form>
    </div>
  );
};

export default EmailSubscription;
