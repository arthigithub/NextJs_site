import React, { forwardRef, useImperativeHandle, useRef } from "react";

const TextArea = (props, ref) => {
  const inputRef = useRef();
  const focusEle = () => {
    return inputRef.current.focus();
  };
  const valEle = () => {
    return inputRef.current.value;
  };
  useImperativeHandle(ref, () => {
    return {
      ivalue: valEle,
      ifocus: focusEle,
    };
  });
  return (
    <>
      <textarea ref={inputRef} defaultValue="" {...props}></textarea>
    </>
  );
};

export default forwardRef(TextArea);
