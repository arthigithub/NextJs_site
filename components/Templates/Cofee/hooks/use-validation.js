import { useEffect, useState } from "react";
import {
  validateEmail,
  validateExperience,
  validateName,
  validatePhone,
  validatePincode,
} from "../lib/helper";

export const useNameValidate = () => {
  const [getname, setName] = useState("");
  const [getNameEmsg, setNameError] = useState("");

  const validateNameFunc = (name) => {
    setName(name);
    let emsg = "";
    if (name.trim().length === 0) {
      emsg = "Please Enter name";
    } else {
      const checkName = validateName(name);
      if (!checkName) {
        emsg = "Please Enter Valid Name, only text";
      }
    }
    setNameError(emsg);
  };
  return { validateNameFunc, getname, getNameEmsg };
};

export const useMobileValidate = () => {
  const [getmobile, setMobile] = useState("");
  const [getMobileEmsg, setMobileError] = useState("");
  const validateMobileFunc = (mobile) => {
    setMobile(mobile);
    let emsg = "";
    if (mobile.trim().length === 0) {
      emsg = "Please Enter Mobile";
    } else {
      if (!Number.isInteger(parseInt(mobile))) {
        emsg = "Please Enter numbers only, 1-0";
      } else {
        const checkmobile = validatePhone(mobile);
        if (!checkmobile) {
          emsg = "Please Enter Valid Mobile";
        }
      }
    }
    setMobileError(emsg);
  };
  return { validateMobileFunc, getmobile, getMobileEmsg };
};

export const usePincodeValidate = () => {
  const [getpincode, setPincode] = useState("");
  const [getPincodeEmsg, setPincodeError] = useState("");
  const validatePincodeFunc = (pincode) => {
    setPincode(pincode);
    let emsg = "";
    if (pincode.trim().length === 0) {
      emsg = "Please Enter pincode";
    } else {
      if (!Number.isInteger(parseInt(pincode))) {
        emsg = "Please Enter numbers only, 1-0";
      } else {
        const checkpincode = validatePincode(parseInt(pincode));
        if (!checkpincode) {
          emsg = "Please Enter Valid pincode, 6 digits";
        }
      }
    }
    setPincodeError(emsg);
  };
  return { validatePincodeFunc, getpincode, getPincodeEmsg };
};

export const useAddrValidate = () => {
  const [getaddress, setAddr] = useState("");
  const [getAddrEmsg, setAddrError] = useState("");
  const validateAddrFunc = (addr) => {
    setAddr(addr);
    let emsg = "";
    if (addr.trim().length === 0) {
      emsg = "Please Enter address";
    }
    setAddrError(emsg);
  };
  return { validateAddrFunc, getaddress, getAddrEmsg };
};

export const useEmailValidate = () => {
  const [getemail, setEmail] = useState("");
  const [getEmailEmsg, setEmailError] = useState("");
  const validateEmailFunc = (email) => {
    setEmail(email);
    let emsg = "";
    if (email.trim().length === 0) {
      emsg = "Please Enter Email";
    } else {
      const checkEmail = validateEmail(email);
      if (!checkEmail) {
        emsg = "Please Enter Valid Email";
      }
    }
    setEmailError(emsg);
  };
  return { validateEmailFunc, getemail, getEmailEmsg };
};

export const useSNameValidate = () => {
  const [getsname, setSName] = useState("");
  const [getsNameEmsg, setSNameError] = useState("");

  const validateSNameFunc = (name) => {
    setSName(name);
    let emsg = "";
    if (name.trim().length === 0) {
      emsg = "Please Enter name";
    } else {
      const checkName = validateName(name);
      if (!checkName) {
        emsg = "Please Enter Valid Name";
      }
    }
    setSNameError(emsg);
  };
  return { validateSNameFunc, getsname, getsNameEmsg };
};

export const useCommentValidate = () => {
  const [getcomments, setComment] = useState("");
  const [getCommentEmsg, setCommentError] = useState("");
  const validateCommentFunc = (addr) => {
    setComment(addr);
    let emsg = "";
    if (addr.trim().length === 0) {
      emsg = "Please Enter Comments";
    }
    setCommentError(emsg);
  };
  return { validateCommentFunc, getcomments, getCommentEmsg };
};

export const useTotalExperience = (required = true) => {
  const [getexperience, setExperience] = useState("");
  const [getExperienceEmsg, setExperienceError] = useState("");
  const validateExperienceFunc = (experience) => {
    setExperience(experience);
    let emsg = "";
    if (experience.trim().length === 0) {
      if (required) {
        emsg = "Please Enter Experience";
      }
    } else {
      if (!Number.isInteger(parseInt(experience))) {
        emsg = "Invalid Value";
      } else {
        const checkexperience = validateExperience(parseInt(experience));
        if (!checkexperience) {
          emsg = "Please enter valid experience";
        }
      }
    }
    setExperienceError(emsg);
  };
  return { validateExperienceFunc, getexperience, getExperienceEmsg };
};

export const useGender = () => {
  const [getgender, setGender] = useState("");
  const [getGenderEmsg, setGenderError] = useState("");
  const validateGenderFunc = (addr) => {
    setGender(addr);
    let emsg = "";
    if (addr.trim().length === 0) {
      emsg = "Please choose Gender";
    }
    setGenderError(emsg);
  };
  return { validateGenderFunc, getgender, getGenderEmsg };
};
