import { fetchApiJson, netmonWebApiOptions } from "./helper";
let netmonURL = process.env["NEXT_PUBLIC_URL"];
export const webMenus = async (webMenuInput = { menu: "main_menu" }) => {
  const webMenuAttr = { cmode: "", method: "POST", input: webMenuInput };
  return await fetchApiJson(
    `${netmonURL}webmodapi/webMenus`,
    netmonWebApiOptions(webMenuAttr)
  );
};

export const Sections = async (
  stype,
  limit,
  offset,
  path = null,
  skeyword = null
) => {
  const SecInput = { stype, skeyword: skeyword, stxt: "", limit, offset, path };
  const SecAttr = { cmode: "", method: "POST", input: SecInput };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/websectionlist`,
    netmonWebApiOptions(SecAttr)
  );
  return result;
};

export const Comments = async (input) => {
  const CmntAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/webpostComments`,
    netmonWebApiOptions(CmntAttr)
  );
  return result;
};

export const Counters = async () => {
  const SecAttr = { cmode: "", method: "POST", input: {} };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/websiteStats`,
    netmonWebApiOptions(SecAttr)
  );
  return result;
};

export const servicePage = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/webServDetails`,
    netmonWebApiOptions(pageAttr)
  );
  return result;
};

export const newConnection = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/webnewConnection`,
    netmonWebApiOptions(pageAttr)
  );
  return result;
};

export const mailSubscription = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/mailSubscription`,
    netmonWebApiOptions(pageAttr)
  );
  return result;
};

export const raiseComplaint = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/webServiceFeedback`,
    netmonWebApiOptions(pageAttr)
  );
  return result;
};

export const newFunc = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/webComments`,
    netmonWebApiOptions(pageAttr)
  );
  return result;
};

export const webClients = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/webClients`,
    netmonWebApiOptions(pageAttr)
  );
  return result;
};

export const postResume = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    "/api/hello",
    netmonWebApiOptions(pageAttr)
  );
  return result;
};

export const webPages = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/webPages`,
    netmonWebApiOptions(pageAttr)
  );
  return result;
};

export const getFranchiseeArea = () => {
  const loc = [
    { name: "Anand Nagar" },
    { name: "RT Nagar" },
    { name: "Ganga Nagar" },
    { name: "Hebbal" },
    { name: "Sultan Palya" },
    { name: "Nagenahalli" },
    { name: "Rehmath Nagar" },
    { name: "Matthikere" },
    { name: "RMV Extension" },
    { name: "Vijay Nagar" },
    { name: "Yeshwanthpura" },
    { name: "Rajajinagar" },
    { name: "Srirampura" },
    { name: "Jayanagar" },
    { name: "JP Nagar" },
    { name: "White Field" },
    { name: "Arkere" },
    { name: "Tilak Nagar" },
    { name: "Yelahanka" },
    { name: "HSR Layout" },
    { name: "Laggere" },
    { name: "Hunsemaranahhali" },
    { name: "Chamrajnagar" },
    { name: "Mandya" },
    { name: "Maddur" },
    { name: "Mangalore" },
    { name: "Surathkal" },
    { name: "Udupi" },
    { name: "Davanagere" },
    { name: "Sindagi" },
    { name: "Gulburga" },
    { name: "Harpanahalli" },
    { name: "Illkal" },
    { name: "Thanisandra" },
    { name: "New Byappanahalli" },
    { name: "Mangammanapalya" },
    { name: "Sahakaranagar" },
    { name: "Amruthahalli" },
    { name: "Byatarayanapura" },
    { name: "Isro Layout" },
    { name: "Padmanabhanagar" },
    { name: "Chamrajpet" },
    { name: "Tavarekere" },
    { name: "BTM 1st/2nd Stage" },
    { name: "Madiwala" },
    { name: "Vyalikaval" },
    { name: "Guttahalli" },
    { name: "Malleshwaram" },
    { name: "Ramamurthy Nagar" },
    { name: "Mahadevapura" },
    { name: "Hoodi" },
    { name: "Kannamangala" },
    { name: "Bommanahalli" },
    { name: "Kathreguppe" },
    { name: "Banashankari 1st stage" },
    { name: "Girinagar" },
    { name: "Bapuji Nagar" },
    { name: "Mariyappanapalya" },
    { name: "Chandra Layout" },
    { name: "Nagarbhavi" },
    { name: "Chikkamangaluru" },
    { name: "KR pete" },
    { name: "And More...." },
  ];
  return loc;
};

export const getGeneralInfo = async (input) => {
  const pageAttr = { cmode: "", method: "POST", input };
  const result = await fetchApiJson(
    `${netmonURL}webmodapi/generalInfo`,
    netmonWebApiOptions(pageAttr)
  );
  return result;
};
