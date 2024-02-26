import React, { useRef, useState } from "react";
import {
  useAddrValidate,
  useMobileValidate,
  useNameValidate,
  usePincodeValidate,
} from "../../hooks/use-validation";
import { newConnection } from "../../lib/api";
import Button from "../FormUi/Button";
import Input from "../FormUi/Input";
import Label from "../FormUi/Label";
import TextArea from "../FormUi/TextArea";
import Thankyou from "../Thankyou";
import Errors from "./Errors";
import FormGroup from "./FormGroup";

const NewConnectFormUI = () => {
  const [submitFlag, setSubmitFlag] = useState(false);
  const [submitFormMsg, setSubmitMsg] = useState("");
  const [getimrobot, setRobot] = useState(false);
  const [getImrobotEmsg, setRobotError] = useState("");
  const nameRef = useRef();
  const mobileRef = useRef();
  const pincodeRef = useRef();
  const addressRef = useRef();
  const { getname, getNameEmsg, validateNameFunc } = useNameValidate();
  const { getmobile, getMobileEmsg, validateMobileFunc } = useMobileValidate();
  const { getpincode, getPincodeEmsg, validatePincodeFunc } =
    usePincodeValidate();
  const { getaddress, getAddrEmsg, validateAddrFunc } = useAddrValidate();
  const planname = 'testing';

  const nameChange = () => {
    validateNameFunc(nameRef.current.ivalue());
  };

  const mobileChange = () => {
    validateMobileFunc(mobileRef.current.ivalue());
  };

  const pincodeChange = () => {
    validatePincodeFunc(pincodeRef.current.ivalue());
  };

  const addressChange = () => {
    validateAddrFunc(addressRef.current.ivalue());
  };

  const checkBoxChange = () => {
    let emsg = "";
    setRobot(!getimrobot);
    if (getimrobot) {
      emsg = "Please tick the box";
    }
    setRobotError(emsg);
  };

  const submitForm = async (e) => {
    const emsg = "";
    e.preventDefault();
    validateNameFunc(getname);
    validateMobileFunc(getmobile);
    validatePincodeFunc(getpincode);
    validateAddrFunc(getaddress);
    if (!getimrobot) {
      emsg = "Please tick the box";
    }
    setRobotError(emsg);
    if (
      getname !== "" &&
      getmobile !== "" &&
      getpincode !== "" &&
      getaddress !== "" &&
      getNameEmsg === "" &&
      getMobileEmsg === "" &&
      getPincodeEmsg === "" &&
      getAddrEmsg === ""
    ) {
      setSubmitFlag(true);
    }
    
    if (submitFlag) {
      const input = {
        name: getname,
        pincode: getpincode,
        address: getaddress,
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

  const resetForm = ()=>{
    setSubmitFlag(false);
    setSubmitMsg('');
    setRobotError('');
    setRobot(false);
  }

  return (
    <>
      {submitFormMsg !== "" && (
        <Thankyou
          onClickHandler={()=>{resetForm()}}
          title="Thankyou"
          description="Thankyou for connecting with our organization"
          hrefsrc="/newconnection"
        />
      )}
      {submitFormMsg === "" && (
        <div className="sign-in-htm">
          <form onSubmit={submitForm}>
            <FormGroup>
              <Label forname="user" lable="Name" />
              <Input
                ref={nameRef}
                name="name"
                type="text"
                className="input"
                onChange={nameChange}
              />
              <Errors emsg={getNameEmsg} />
            </FormGroup>
            <FormGroup>
              <Label forname="mobileno" lable="Mobile Number" />
              <Input
                ref={mobileRef}
                type="text"
                className="input"
                name="mobileno"
                onChange={mobileChange}
                maxLength="16"
              />
              <Errors emsg={getMobileEmsg} />
            </FormGroup>
            <FormGroup>
              <Label forname="pincode" lable="Pin Code" />
              <Input
                ref={pincodeRef}
                type="text"
                className="input"
                onChange={pincodeChange}
                maxLength="6"
              />
              <Errors emsg={getPincodeEmsg} />
            </FormGroup>
            <FormGroup>
              <Label forname="address" lable="Address" />
              <TextArea
                ref={addressRef}
                rows="6"
                cols="36"
                className="textarea"
                name="address"
                onChange={addressChange}
              />
              <Errors emsg={getAddrEmsg} />
            </FormGroup>
            <FormGroup>
              <Input
                type="checkbox"
                id="check"
                className="check"
                onChange={(e) => checkBoxChange()}
                checked={getimrobot}
                value="yes"
              />
              <Label forname="check" className={""}>
                <span className="icon"></span> Am not a robot
              </Label>
              <Errors emsg={getImrobotEmsg} />
            </FormGroup>
            <FormGroup>
              <Button className="button">Sumbit</Button>
            </FormGroup>
            <div className="hr"></div>
          </form>
        </div>
      )}
    </>
  );
};

export default NewConnectFormUI;
