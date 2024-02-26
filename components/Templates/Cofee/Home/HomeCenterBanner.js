import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { HomeSectionCtx } from "../../../../store/home-context";

const HomeCenterBanner = () => {
  const { banner } = useContext(HomeSectionCtx);
  const bannerLength = banner.length;
  const config = [
    {
      "img-fsmasterspeed": 1500,
      index: 1688,
      tpcaptionTitle: {
        "data-width": ["560", "700", "700", "550"],
        "data-voffset": ["-30", "-90", "-90", "-60"],
        "data-x": ["left", "left", "left", "left"],
      },
      tpcaptionDesc: {
        "data-width": ["470", "700", "700", "550"],
        "data-voffset": ["40", "40", "20", "0"],
        "data-x": ["left", "left", "left", "left"],
      },
      tpcaptionBtn: {
        "data-width": ["560", "700", "700", "550"],
        "data-voffset": ["130", "150", "120", "100"],
        "data-x": ["left", "left", "left", "left"],
      },
      tpcaptionImg: {
        "data-width": [], //none
        "data-voffset": ["20", "0", "0", "0"],
        "data-x": ["right", "right", "right", "right"],
      },
      titleclassName: "",
    },
    {
      "img-fsmasterspeed": 1500,
      index: 1689,
      tpcaptionTitle: {
        "data-width": ["560", "700", "700", "550"],
        "data-voffset": ["-30", "-50", "-50", "-50"],
        "data-x": ["right", "right", "right", "left"],
      },
      tpcaptionDesc: {
        "data-width": ["470", "700", "700", "550"],
        "data-voffset": ["40", "40", "20", "0"],
        "data-x": ["right", "right", "right", "left"],
      },
      tpcaptionBtn: {
        "data-width": ["560", "700", "700", "550"],
        "data-voffset": ["120", "150", "120", "100"],
        "data-x": ["left", "left", "left", "left"],
      },
      tpcaptionImg: {
        "data-width": ["560", "700", "700", "550"],
        "data-voffset": ["130", "100", "100", "100"],
        "data-x": ["right", "right", "right", "left"],
      },
      titleclassName: "text light",
    },
    {
      "img-fsmasterspeed": 1500,
      index: 1690,
      tpcaptionTitle: {
        "data-width": ["560", "700", "700", "550"],
        "data-voffset": ["-30", "-90", "-90", "-60"],
        "data-x": ["left", "left", "left", "left"],
      },
      tpcaptionDesc: {
        "data-width": ["470", "700", "700", "550"],
        "data-voffset": ["30", "40", "20", "0"],
        "data-x": ["left", "left", "left", "left"],
      },
      tpcaptionBtn: {
        "data-width": ["560", "700", "700", "550"],
        "data-voffset": ["-80", "15", "15", "15"],
        "data-x": ["left", "left", "left", "left"],
      },
      tpcaptionImg: {
        "data-width": ["right"], //none
        "data-voffset": ["-80", "15", "15", "15"],
        "data-x": ["right", "right", "right", "left"],
      },
      titleclassName: "text light",
    },
  ];
  return (
    <section className="main-slider">
      <div
        className="rev_slider_wrapper fullwidthbanner-container"
        id="rev_slider_one_wrapper"
        data-source="gallery"
      >
        <div
          className="rev_slider fullwidthabanner"
          id="rev_slider_one"
          data-version="5.4.1"
        >
          <ul>
            {banner.map((item, i) => {
              const configData = config[0];
              return (
                <li
                  key={i}
                  data-description="Slide Description"
                  data-easein="default"
                  data-easeout="default"
                  data-fsmasterspeed={configData["img-fsmasterspeed"]}
                  data-fsslotamount="7"
                  data-fstransition="fade"
                  data-hideafterloop="0"
                  data-hideslideonmobile="off"
                  data-index={`rs-${parseInt(configData.index+i)}`}
                  data-masterspeed="default"
                  data-param1=""
                  data-param10=""
                  data-param2=""
                  data-param3=""
                  data-param4=""
                  data-param5=""
                  data-param6=""
                  data-param7=""
                  data-param8=""
                  data-param9=""
                  data-rotate="0"
                  data-saveperformance="off"
                  data-slotamount="default"
                  data-thumb={item.largeimg}
                  data-title="Slide Title"
                  data-transition="parallaxvertical"
                >
                  {/*<Image className="rev-slidebg" layout="fill" src={item.largeimg}  />*/}
                  <img
                    alt=""
                    className="rev-slidebg"
                    data-bgfit="cover"
                    data-bgparallax="10"
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina=""
                    src={item.largeimg}
                    loading="lazy"
                  />

                  <div
                    className="tp-caption"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['560','700','700','550']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['-30','-90','-90','-60']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <h2>
                      <span style={{ top: "-10px" }}>{item.title}</span>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.sub_title }}
                      ></div>
                    </h2>
                  </div>

                  <div
                    className="tp-caption"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['470','700','700','550']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['40','40','20','0']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <div className="text textmargintop">{item.description}</div>
                  </div>
                  <style jsx>{`
                    .textmargintop {
                      margin-top: 40px;
                    }
                  `}</style>

                  <div
                    className="tp-caption tp-resizeme"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['560','700','700','550']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['130','150','120','100']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <div className="btns-box textmargintop">
                      <a href="#" className="theme-btn btn-style-one">
                        {" "}
                        <span className="icon flaticon-right-arrow-1"></span>{" "}
                        Read More
                      </a>
                    </div>
                  </div>

                  <div
                    className="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="shape"
                    data-height="auto"
                    data-whitespace="nowrap"
                    data-width="none"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['20','15','15','15']"
                    data-x="['right','right','right','right']"
                    data-y="['middle','middle','middle','middle']"
                    data-frames='[{"from":"x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <figure className="content-image">
                      <Image
                        width={500}
                        height={468}
                        src={item.thumbimg}
                        alt="..."
                      />
                    </figure>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeCenterBanner;
