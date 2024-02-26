import React from "react";
import BasicBlock from "../Home/UI/BasicBlock";
import Button from "./FormUi/Button";

const Thankyou = ({ title, description, onClickHandler }) => {
  return (
    <>
      <BasicBlock data={{ title, description }} />
      <Button className="btn btn-primary" onClick={onClickHandler}>
        Click here to go back
      </Button>
    </>
  );
};

export default Thankyou;
