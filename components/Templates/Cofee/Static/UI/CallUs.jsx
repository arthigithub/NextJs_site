import React, { useRef, useState } from "react";
import { useMobileValidate, useNameValidate } from "../../hooks/use-validation";
import { newConnection } from "../../lib/api";
import Button from "../FormUi/Button";
import Input from "../FormUi/Input";
import Label from "../FormUi/Label";
import Thankyou from "../Thankyou";
import Errors from "./Errors";
import FormGroup from "./FormGroup";

const CallUs = () => {
  const nameRef = useRef();
  const mobileRef = useRef();
  const { getname, getNameEmsg, validateNameFunc } = useNameValidate();
  const { getmobile, getMobileEmsg, validateMobileFunc } = useMobileValidate();
  const [submitFlag, setSubmitFlag] = useState(false);
  const [submitFormMsg, setSubmitMsg] = useState("");
  const planname = "sssaaaa";

  const nameChange = () => {
    validateNameFunc(nameRef.current.ivalue());
  };

  const mobileChange = () => {
    validateMobileFunc(mobileRef.current.ivalue());
  };

  const submitForm = async (e) => {
    e.preventDefault();
    validateNameFunc(getname);
    validateMobileFunc(getmobile);
    if (
      getname !== "" &&
      getmobile !== "" &&
      getNameEmsg === "" &&
      getMobileEmsg === ""
    ) {
      setSubmitFlag(true);
    }

    if (submitFlag) {
      const input = {
        name: getname,
        pincode: "000000",
        address: "unknown",
        uname: getname.replace(/ /g, ""),
        email: "unknown@gmail.com",
        mobileno: getmobile,
        comments: planname,
      };
      const {
        status: { message },
      } = await newConnection(input);
      setSubmitMsg(message);
    }
  };

  const resetForm = () => {
    setSubmitFlag(false);
    setSubmitMsg("");
  };

  return (
    <>
      {submitFormMsg !== "" && (
        <Thankyou
          onClickHandler={() => {
            resetForm();
          }}
          title="Thankyou"
          description="Thankyou for connecting with our organization"
          hrefsrc="/newconnection"
        />
      )}

      {submitFormMsg === "" && (
        <div className="sign-up-htm">
          <form onSubmit={submitForm}>
            <FormGroup>
              <Label forname="name" className="label" lable="Name" />
              <Input
                ref={nameRef}
                type="text"
                className="input"
                onChange={nameChange}
              />
              <Errors emsg={getNameEmsg} />
            </FormGroup>
            <FormGroup>
              <Label
                forname="mobileno"
                className="label"
                lable="Mobile Number"
              />
              <Input
                ref={mobileRef}
                type="text"
                className="input"
                onChange={mobileChange}
                maxLength="16"
              />
              <Errors emsg={getMobileEmsg} />
            </FormGroup>
            <FormGroup>
              <Button className="button">Request a Callback</Button>
            </FormGroup>
            <div className="hr"></div>
          </form>
        </div>
      )}
    </>
  );
};

export default CallUs;
