import React, { useContext, useRef, useState } from "react";
import { CommonCtx } from "../../../../store/common-context";
import {
  useAddrValidate,
  useEmailValidate,
  useGender,
  useMobileValidate,
  useNameValidate,
  useTotalExperience,
} from "../hooks/use-validation";
import { fetchApiJson } from "../lib/helper";
import Button from "./FormUi/Button";
import Input from "./FormUi/Input";
import Label from "./FormUi/Label";
import Select from "./FormUi/Select";
import TextArea from "./FormUi/TextArea";
import PreviewResume from "./PreviewResume";
import Thankyou from "./Thankyou";
import Errors from "./UI/Errors";

const CarreerApplyForm = () => {
  const { pagename } = useContext(CommonCtx);
  const firsRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const addressRef = useRef();
  const experienceRef = useRef();
  const genderRef = useRef();
  const genderAr = [
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
    { id: 3, name: "Others" },
    { id: 4, name: "Do not wish to Disclose" },
  ];
  const {
    getname,
    getNameEmsg: getFNamEmsg,
    validateNameFunc: validateFnameFunc,
  } = useNameValidate();

  const [slectedFile, setSelectedFile] = useState();
  const { getemail, getEmailEmsg, validateEmailFunc } = useEmailValidate();
  const { getmobile, getMobileEmsg, validateMobileFunc } = useMobileValidate();
  const { getaddress, getAddrEmsg, validateAddrFunc } = useAddrValidate();
  const { getexperience, getExperienceEmsg, validateExperienceFunc } =
    useTotalExperience(false);
  const { getgender, getGenderEmsg, validateGenderFunc } = useGender();

  const fnameChange = () => {
    validateFnameFunc(firsRef.current.ivalue());
  };

  const emailChange = () => {
    validateEmailFunc(emailRef.current.ivalue());
  };

  const mobileChange = () => {
    validateMobileFunc(mobileRef.current.ivalue());
  };

  const addressChange = () => {
    validateAddrFunc(addressRef.current.ivalue());
  };

  const experienceChange = () => {
    validateExperienceFunc(experienceRef.current.ivalue());
  };

  const genderChange = () => {
    validateGenderFunc(genderRef.current.ivalue());
  };

  const [getFormMsg, setSubmitMsg] = useState("");

  const [preview, setPreview] = useState("");
  const [getFile, setFile] = useState("");
  const [getFileEmsg, setFileEmsg] = useState("");
  const [getErrorFormMsg, setErrorFormMsg] = useState("");
  const [getCheckbox, setCheckBox] = useState(0);
  const [getCheckboxMsg, setCheckBoxMsg] = useState("");

  const uploadFile = ({ target }) => {
    if (target.files) {
      const fileTypes = [".doc", ".docx", ".pdf", ".txt"];
      const file = target.files[0];
      setFile(file);
      setPreview(URL.createObjectURL(file));
      setFileEmsg("");
      if (!file) {
        setFileEmsg("Please choose a file!");
      }
      if (file.size / (2 * 1024 * 1024) > 2) {
        setFileEmsg("Please Upload 2MB size file");
      }
      if (
        !fileTypes.some((item) => {
          return file.name.endsWith(item);
        })
      ) {
        setFileEmsg(
          "Please upload upload *.doc/*.docx/*.pdf/*.txt format files only"
        );
      }
    } else {
      setFileEmsg("Please choose a file!");
    }
  };

  const submitPost = async (e) => {
    e.preventDefault();
    fnameChange();
    emailChange();
    mobileChange();
    addressChange();
    experienceChange();
    genderChange();
    if (!getCheckbox) {
      setCheckBoxMsg("Please accept our terms & conditions");
    } else {
      setCheckBoxMsg("");
    }

    if (
      getFile !== "" &&
      getname !== "" &&
      getemail !== "" &&
      getmobile !== "" &&
      getaddress !== "" &&
      getexperience !== "" &&
      getgender !== "" &&
      getFileEmsg === "" &&
      getFNamEmsg === "" &&
      getEmailEmsg === "" &&
      getMobileEmsg === "" &&
      getAddrEmsg === "" &&
      getExperienceEmsg === "" &&
      getGenderEmsg === "" &&
      getCheckbox &&
      getCheckboxMsg === ""
    ) {
      const formData = new FormData();
      formData.append("resume", getFile);
      formData.append("name", getname);
      formData.append("email", getemail);
      formData.append("mobile", getmobile);
      formData.append("address", getaddress);
      formData.append("experience", getexperience);
      formData.append("gender", getgender);
      const {
        status: { message, errcode },
      } = await fetchApiJson("/api/hello", { method: "post", body: formData });
      errcode === 200 ? setSubmitMsg(message) : setErrorFormMsg(message);
    }
  };

  const acceptTerms = () => {
    setCheckBoxMsg("");
    setCheckBox(!getCheckbox);
    getCheckbox && setCheckBoxMsg("Please accept our terms & conditions");
  };

  const resetForm = () => {
    setSubmitMsg("");
    setErrorFormMsg("");
    setFileEmsg("");
    setFile("");
  };

  return (
    <div className="comment-form">
      {getFormMsg === "" && (
        <>
          <div className="group-title">
            <style jsx>{`
              .activerate {
                color: #67a94c !important;
              }
            `}</style>
            <h2> Applying to {pagename}</h2>
            <div className="separator"></div>
          </div>
          <Errors emsg={getErrorFormMsg} />
          <form method="post" onSubmit={(e) => submitPost(e)}>
            <div className="row clearfix">
              <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                <div className="input-group">
                  <input
                    id="myresume"
                    type="text"
                    className="form-control file-upload-text"
                    disabled
                    placeholder="select a file..."
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-default file-upload-btn"
                      style={{
                        margin: 0,
                        paddingTop: "13px",
                        paddingBottom: "13px",
                      }}
                    >
                      Choose file...
                      <input
                        type="file"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          opacity: "0",
                          cursor: "pointer",
                        }}
                        onChange={(e) => uploadFile(e)}
                      />
                    </button>
                  </span>
                </div>
                <small
                  style={{
                    color: "#999",
                    fontWeight: "normal",
                    lineHeight: 1,
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  For best results, upload *.doc/*.docx/*.pdf/*.txt format files
                  only (File size should be {"<= 2MB"})
                </small>
                {preview && (
                  <PreviewResume
                    filepath={preview}
                    title={`Applying to ${pagename}`}
                  />
                )}
                <Errors emsg={getFileEmsg} />
              </div>

              <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                <Label>Full Name*</Label>
                <Input
                  type="text"
                  ref={firsRef}
                  onChange={fnameChange}
                  placeholder={"Full Name*"}
                />
                <Errors emsg={getFNamEmsg} />
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                <Label>Email*</Label>
                <Input
                  type="text"
                  ref={emailRef}
                  onChange={emailChange}
                  placeholder={"Email*"}
                />
                <Errors emsg={getEmailEmsg} />
              </div>

              <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                <Label>Mobile*</Label>
                <Input
                  type="text"
                  ref={mobileRef}
                  onChange={mobileChange}
                  placeholder={"Mobile*"}
                  maxLength="16"
                />
                <Errors emsg={getMobileEmsg} />
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                <Label>Current Location*</Label>
                <TextArea
                  ref={addressRef}
                  onChange={addressChange}
                  placeholder={"Your Current Location*"}
                  maxlength="200"
                />
                <Errors emsg={getAddrEmsg} />
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                <Label>Total Experience (in years) </Label>
                <Input
                  type="text"
                  ref={experienceRef}
                  onChange={experienceChange}
                  placeholder={"Total Experience"}
                  maxLength="2"
                />
                <Errors emsg={getExperienceEmsg} />
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                <Label>Gender *</Label>
                <Select
                  ref={genderRef}
                  defaultVal="Gender"
                  onChangeHandler={() => genderChange()}
                  className="form-control"
                  optionsAr={genderAr}
                />
                <Errors emsg={getGenderEmsg} />
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                <label>
                  <Input type="checkbox" onClick={() => acceptTerms()} />
                  <small>
                    {"  "}By submitting the above information, I agree to the{" "}
                    <a href="/applyterms">Terms of Use</a> and{" "}
                    <a href="/privacypolicy">Privacy Policy</a>
                  </small>
                </label>
                <Errors emsg={getCheckboxMsg} />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                <Button
                  className="theme-btn btn-style-one"
                  name="sendapplication"
                >
                  Submit Apllication
                </Button>
              </div>
            </div>
          </form>
        </>
      )}
      {getFormMsg !== "" && (
        <Thankyou
          title="Thank you"
          description={getFormMsg}
          onClickHandler={resetForm}
        />
      )}
    </div>
  );
};

export default CarreerApplyForm;
