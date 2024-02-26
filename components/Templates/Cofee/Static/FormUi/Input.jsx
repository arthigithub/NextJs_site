import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Input = (props, ref) => {
  const inputRef = useRef();
  const focusEle = () => {
    return inputRef.current.focus();
  };
  const valEle = () => {
    return inputRef.current.value;
  };

  useImperativeHandle(ref, () => {
    return {
      ifocus: focusEle,
      ivalue: valEle,
    };
  });
  return <input {...props} ref={inputRef} />;
};

export default forwardRef(Input);
