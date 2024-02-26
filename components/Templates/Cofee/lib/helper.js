export const fetchApiJson = async (url, options) => {
  try {
    const fetchData = await fetch(url, options);
    if (fetchData.ok) {
      const result = await fetchData.json();
      if (result.status.errcode === 1) {
        throw new Error(result.status.message);
      }
      return result;
    } else {
      throw new Error("Data not found");
    }
  } catch (e) {
    throw new Error(`Something went wrong, server`);
  }
};

export const netmonWebApiOptions = ({ cmode, method, input }) => {
  const headers = authorizations(cmode);
  return {
    body: JSON.stringify(input),
    method,
    headers,
  };
};

const authorizations = (cmode) => {
  return cmode != ""
    ? {
        Authorization: "",
        username: "",
        password: "",
        "Content-type": "application/json",
      }
    : { "Content-type": "application/json" };
};

export const urlStrPathReplace = (string) => {
  return string.trim().replace(/[^a-zA-Z0-9]/g, "-");
};

export const getServiceList = (menus, dataType = "paths") => {
  const servicePages = menus.filter(
    ({ mtitle }) => mtitle.toLowerCase() === "services"
  );

  if (dataType === "paths") {
    const paths = servicePages[0].children.map(({ subtitle }) => {
      return { params: { menu: subtitle.replace(" ", "-") } };
    });
    return paths;
  } else {
    const menus = servicePages[0].children.map(({ subtitle }) => {
      return { menu: subtitle.replace(" ", "-") };
    });
    return menus;
  }
};

export const chunkData = (arrObj, splitSize) => {
  let newArr = [];
  for (let i = 0; i < arrObj.length; i += splitSize) {
    const chunk = arrObj.slice(i, i + splitSize);
    newArr.push(chunk);
  }
  return newArr;
};

export const validateEmail = (email) => {
  const emailRegex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^(\+91-|\+91|0)?\d{16}|\d{10,12}$/;
  return phoneRegex.test(phone);
};

export const validatePincode = (pin) => {
  return /^(\d{6})$/.test(pin);
};

export const validateName = (string) => {
  const letters = /^[A-Za-z\s]+$/;
  return string.match(letters);
};

export const validateSpecialName = (string) => {
  const letters = /^[A-Za-z0-9_\@\\s]+$/;
  return string.match(letters);
};

export const validateExperience = (experience) => {
  return experience >= 0 && experience <= 50;
};

export const googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
      includedLanguages: "en,hi,kn,english,ta,te,ml,mr",
    },
    "google_translate_element"
  );
};

export const diplayTransLang = () => {
  var addScript = document.createElement("script");
  addScript.setAttribute(
    "src",
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  );
  document.body.appendChild(addScript);
  window.googleTranslateElementInit = googleTranslateElementInit;
};

export const displayChat = () => {
  var hccid = 78307450;
  var nt = document.createElement("script");
  nt.async = true;
  nt.src = "https://mylivechat.com/chatinline.aspx?hccid=" + hccid;
  var ct = document.getElementsByTagName("script")[0];
  ct.parentNode.insertBefore(nt, ct);
};
