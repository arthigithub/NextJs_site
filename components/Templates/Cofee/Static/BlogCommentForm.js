import React, { useRef, useState } from "react";
import {
  useCommentValidate,
  useEmailValidate,
  useNameValidate,
} from "../hooks/use-validation";
import { Comments } from "../lib/api";
import Button from "./FormUi/Button";
import Input from "./FormUi/Input";
import Label from "./FormUi/Label";
import Star from "./FormUi/Star";
import TextArea from "./FormUi/TextArea";
import Thankyou from "./Thankyou";
import Errors from "./UI/Errors";

const BlogCommentForm = () => {
  const startAr = [
    [<Star />],
    [<Star />, <Star />],
    [<Star />, <Star />, <Star />],
    [<Star />, <Star />, <Star />, <Star />],
    [<Star />, <Star />, <Star />, <Star />],
  ];
  const [getStarRate, setStarRate] = useState(0);
  const checkRate = (input) => {
    setStarRate(input);
  };
  const firsRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();
  const {
    getname: getfname,
    getNameEmsg: getFNamEmsg,
    validateNameFunc: validateFnameFunc,
  } = useNameValidate();

  const { getemail, getEmailEmsg, validateEmailFunc } = useEmailValidate();
  const { getcomments, getCommentEmsg, validateCommentFunc } =
    useCommentValidate();

  const fnameChange = () => {
    validateFnameFunc(firsRef.current.ivalue());
  };

  const emailChange = () => {
    validateEmailFunc(emailRef.current.ivalue());
  };

  const commentChange = () => {
    validateCommentFunc(commentRef.current.ivalue());
  };

  const [getFormMsg, setFormMsg] = useState("");
  const [getErrorFormMsg, setErrorFormMsg] = useState("");

  const submitPost = async (e) => {
    e.preventDefault();
    setErrorFormMsg("");
    setFormMsg("");
    fnameChange();
    emailChange();
    commentChange();
    if (
      getfname !== "" &&
      getemail !== "" &&
      getcomments !== "" &&
      getFNamEmsg === "" &&
      getEmailEmsg === "" &&
      getCommentEmsg === ""
    ) {
      const input = {
        name: getfname,
        message: getcomments,
        subject: "blogs",
        email: getemail,
        id: 151,
        rating: getStarRate,
      };
      const {
        status: { message, errcode },
      } = await Comments(input);
      errcode === 200 ? setFormMsg(message) : setErrorFormMsg(message);
    }
  };

  const resetForm = () => {
    setErrorFormMsg("");
    setFormMsg("");
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
            <h2>Add Your Comments</h2>
            <div className="separator"></div>
          </div>
          <Errors emsg={getErrorFormMsg} />
          <div className="rating-box">
            <div className="text"> Your Rating:</div>
            {startAr.map((item, i) => {
              return (
                <div key={i} className="rating">
                  <a
                    className={i + 1 === getStarRate ? "activerate" : ""}
                    onClick={() => checkRate(i + 1)}
                  >
                    {item.map((star, j) => {
                      return <span key={j}>{star}</span>;
                    })}
                  </a>
                </div>
              );
            })}
          </div>
          <form method="post" onSubmit={(e) => submitPost(e)}>
            <div className="row clearfix">
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

              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                <Label>Your Comments*</Label>
                <TextArea
                  ref={commentRef}
                  onChange={commentChange}
                  placeholder={"Your Comments*"}
                />
                <Errors emsg={getCommentEmsg} />
              </div>

              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                <Button className="theme-btn btn-style-one">
                  Post Comment
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

export default BlogCommentForm;
