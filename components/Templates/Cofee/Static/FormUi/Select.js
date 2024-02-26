import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Select = (
  { selectedVal, defaultVal, optionsAr, className, onChangeHandler },
  ref
) => {
  const selectRef = useRef();
  const focusEle = () => {
    return selectRef.current.focus();
  };
  const valEle = () => {
    return selectRef.current.value;
  };

  useImperativeHandle(ref, () => {
    return {
      ifocus: focusEle,
      ivalue: valEle,
    };
  });
  return (
    <>
      <select
        ref={selectRef}
        className={className}
        onChange={onChangeHandler}
      >
        <option value="">Select {defaultVal}</option>
        {optionsAr.map((item) => {
          return (
            <option key={item?.id} value={item?.id}>
              {item?.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default forwardRef(Select);
