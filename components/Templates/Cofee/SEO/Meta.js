import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { fetchApiJson, netmonWebApiOptions } from "../lib/helper";
import ReactHtmlParser from "html-react-parser";

const Meta = ({ metaTitle }) => {
  const route = useRouter();
  let netmonURL = process.env["NEXT_PUBLIC_URL"];
  const company_url = process.env["NEXT_PUBLIC_BASEPATH"];
  const companylogo = `${company_url}images/logo.png`;
  const currentpageurl = `${company_url}${route.asPath}`;

  const { data: GeneralMeta } = useQuery("getGeneralMeta", async () => {
    const pagename = "general";
    return await fetchApiJson(
      `${netmonURL}webmodapi/webmetadetails`,
      netmonWebApiOptions({ cmode: "", method: "POST", input: { pagename } })
    );
  });

  const { data: getPageMeta } = useQuery("getPageMeta", async () => {
    const pathName = route.asPath;
    const splitAr = pathName.split("/").filter((item) => item);
    const nestedPath =
      splitAr.length > 1
        ? splitAr[1]
        : typeof splitAr[0] === "undefined"
        ? "home"
        : splitAr[0];
    const pagename = nestedPath.trim();
    return await fetchApiJson(
      `${netmonURL}webmodapi/webmetadetails`,
      netmonWebApiOptions({ cmode: "", method: "POST", input: { pagename } })
    );
  });

  if (!GeneralMeta || !getPageMeta)
    return <meta name="Rating" content="General" />;
  const {
    result: { other_meta: gmtag },
  } = GeneralMeta;
  const {
    result: { meta_desc, meta_keywords, meta_title, other_meta: pmtag },
  } = getPageMeta;

  const decodeHtmlCharCodes = (str) => {
    return !str
      ? "<meta/>"
      : str.replace("&amp;lt", "<").replace("/&amp;gt", ">");
  };
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{meta_title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
      <meta name="description" content={meta_desc} />
      <meta name="keywords" content={meta_keywords} />
      <meta property="og:title" content={meta_title} />
      <meta property="og:description" content={meta_desc} />
      <meta property="og:url" content={currentpageurl} />
      <link rel="canonical" href={currentpageurl} />
      <meta name="twitter:description" content={meta_desc} />
      <meta name="twitter:image" content={companylogo} />
      <meta name="twitter:title" content={meta_title} />
      <meta name="twitter:url" content={company_url} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="language" content="en" />

      {gmtag && ReactHtmlParser(decodeHtmlCharCodes(gmtag))}
      {pmtag && ReactHtmlParser(decodeHtmlCharCodes(pmtag))}
    </Head>
  );
};

export default Meta;
