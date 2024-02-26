import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { CommonCtx } from "../../../../store/common-context";
import { chunkData, urlStrPathReplace } from "../lib/helper";

const Carreer = () => {
  const [getsearchText, setSearchText] = useState("");
  const [getsearchLocation, setSearchLocation] = useState("");
  const [getsearchKeywords, setSearchKeywords] = useState("");
  const [serchedKeys, setSearchedKeys] = useState([]);
  const [getCarreers, setCarreer] = useState([]);
  const router = useRouter();

  const {
    data: { carreer },
  } = useContext(CommonCtx);
  const locationAr = carreer.map((item) => {
    return item.sub_title.trim().toLowerCase();
  });
  const location = [...new Set(locationAr)];
  const tagsAr = carreer.map((item) => {
    return item.tags;
  });

  const mergeTags = tagsAr
    .map((item) => {
      return item.split(",");
    })
    .flat(1)
    .filter((item) => item.trim().toLowerCase());

  const tags = [...new Set(mergeTags)];
  const searchTitle = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);
    setSearchedKeys(() => {
      return { ...serchedKeys, searchText };
    });
  };

  const searchLocation = (e) => {
    const searchLocation = e.target.value.trim().toLowerCase();
    setSearchLocation(searchLocation);
    setSearchedKeys(() => {
      return { ...serchedKeys, searchLocation };
    });
  };

  const searchKeywords = (e) => {
    const searchKeywords = e.target.value.trim().toLowerCase();
    setSearchKeywords(searchKeywords);
    setSearchedKeys(() => {
      return { ...serchedKeys, searchKeywords };
    });
  };

  const filterAllData = () => {
    const filterresult = carreer.filter((item) => {
      return (
        item["title"].toLowerCase().includes(getsearchText) &&
        item["sub_title"].trim().toLowerCase().includes(getsearchLocation) &&
        item["tags"].trim().toLowerCase().includes(getsearchKeywords)
      );
    });
    setCarreer(filterresult);
  };

  const filterTxtLocData = () => {
    const filterresult = carreer.filter((item) => {
      return (
        item["title"].toLowerCase().includes(getsearchText) &&
        item["sub_title"].trim().toLowerCase().includes(getsearchLocation)
      );
    });
    setCarreer(filterresult);
  };

  const filterTxtKeyData = () => {
    const filterresult = carreer.filter((item) => {
      return (
        item["title"].toLowerCase().includes(getsearchText) &&
        item["tags"].trim().toLowerCase().includes(getsearchKeywords)
      );
    });
    setCarreer(filterresult);
  };

  const filterLocKeyData = () => {
    const filterresult = carreer.filter((item) => {
      return (
        item["sub_title"].trim().toLowerCase().includes(getsearchLocation) &&
        item["tags"].trim().toLowerCase().includes(getsearchKeywords)
      );
    });
    setCarreer(filterresult);
  };

  const filterData = (value, key) => {
    const filterresult = carreer.filter((item) => {
      return item[key].trim().toLowerCase().includes(value);
    });
    setCarreer(filterresult);
  };

  useEffect(() => {
    Object.values(serchedKeys).filter((n) => n).length === 0 &&
      setCarreer(carreer);
    if (getsearchText && getsearchLocation && getsearchKeywords) {
      filterAllData();
    } else if (getsearchText && getsearchLocation) {
      filterTxtLocData();
    } else if (getsearchText && getsearchKeywords) {
      filterTxtKeyData();
    } else if (getsearchLocation && getsearchKeywords) {
      filterLocKeyData();
    } else if (getsearchLocation) {
      filterData(getsearchLocation, "sub_title");
    } else if (getsearchKeywords) {
      filterData(getsearchKeywords, "tags");
    } else if (getsearchText) {
      filterData(getsearchText, "title");
    }
  }, [getsearchText, getsearchLocation, getsearchKeywords]);

  const resetAll = () => {
    setSearchText("");
    setSearchLocation("");
    setSearchKeywords("");
    setSearchedKeys([]);
  };

  const resetSearch = (property) => {
    switch (property) {
      case "searchText":
        setSearchText("");
        delete serchedKeys["searchText"];
        setSearchedKeys(serchedKeys);
        break;
      case "searchLocation":
        setSearchLocation("");
        delete serchedKeys["searchLocation"];
        setSearchedKeys(serchedKeys);
        break;
      case "searchKeywords":
        setSearchKeywords("");
        delete serchedKeys["searchKeywords"];
        setSearchedKeys(serchedKeys);
        break;
    }
  };
  const myFilterItems = !serchedKeys ? [] : Object.entries(serchedKeys);

  return (
    <>
      <section className="contact-section">
        <div className="auto-container">
          <div className="row clearfix">
            <style jsx>{`
              .activerow {
                background: #f1f3f4;
              }
              select > option {
                texttransform: capitalize;
              }
              .panel:hover {
                background: #fafafa;
              }
            `}</style>
            <div
              className="contact-form-column col-md-4 col-sm-12 col-xs-12"
              style={{ maxHeight: "50%", height: "50px" }}
            >
              <div className="inner-column">
                <div className="upper-box">
                  <h2>Search Job</h2>
                </div>
                <div className="lower-box">
                  <form>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="search job title"
                        onChange={(e) => searchTitle(e)}
                        value={getsearchText}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control"
                        onChange={(e) => searchLocation(e)}
                        value={getsearchLocation}
                      >
                        <option value="">Location</option>
                        {location.map((item, i) => {
                          return (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control"
                        onChange={(e) => searchKeywords(e)}
                        value={getsearchKeywords}
                      >
                        <option value="">Keywords Search</option>
                        {tags.map((item, i) => {
                          return (
                            <option key={i} value={item.trim().toLowerCase()}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <hr />
                    <button
                      type="button"
                      onClick={resetAll}
                      className="btn btn-primary"
                    >
                      Reset All
                    </button>
                    <div className="pb-3"></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="contact-info-column col-md-8 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="contact-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="inner-column">
                        <div
                          className="upper-box"
                          style={{
                            background: "#1d204c",
                            padding: "10px 5px 10px",
                          }}
                        >
                          <h3
                            style={{
                              color: "#fff",
                              padding: "0",
                            }}
                          >
                            {" "}
                            Job(s): {getCarreers.length} jobs found{" "}
                          </h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="nav nav-pills">
                            {myFilterItems.map((item, i) => {
                              return (
                                item[1] && (
                                  <li key={i} style={{ margin: "5px" }}>
                                    <a
                                      className="badge btn-info"
                                      style={{
                                        background: "rgb(51, 122, 183)",
                                      }}
                                      onClick={() => resetSearch(item[0])}
                                    >
                                      {item[1]}
                                      <i
                                        className="fa fa-times text-danger"
                                        style={{
                                          marginLeft: "10px",
                                          fontSize: "14px",
                                        }}
                                      ></i>
                                    </a>
                                  </li>
                                )
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="row mb-3"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "700px",
                      overflow: "scroll",
                    }}
                  >
                    <div className="col-md-12">
                      {getCarreers.map(
                        (
                          {
                            title,
                            sub_title,
                            tags,
                            description,
                            thumbimg,
                            sourcelink,
                          },
                          i
                        ) => {
                          return (
                            <div
                              key={i}
                              className="panel"
                              style={{ margin: "5px" }}
                            >
                              <div className="panel-body">
                                <div className="row">
                                  <div className="col-md-3">
                                    <img
                                      src={thumbimg}
                                      width={159}
                                      height={159}
                                      alt="..."
                                    />
                                  </div>
                                  <div className="col-md-6  panel-body">
                                    <div className="list-title">
                                      <ul className="list-inline list-unstyled">
                                        <li className="list-inline-item">
                                          <a
                                            href={`/carreer/${urlStrPathReplace(
                                              title
                                            )}`}
                                          >
                                            <h4
                                              style={{
                                                textTransform: "capitalize",
                                              }}
                                            >
                                              {title}
                                            </h4>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div className="list-location">
                                      <a
                                        href={`/carreer/${urlStrPathReplace(
                                          title
                                        )}`}
                                      >
                                        <small
                                          style={{
                                            textTransform: "capitalize",
                                          }}
                                        >
                                          {tags}
                                        </small>
                                        ,{" "}
                                      </a>
                                    </div>
                                    <div className="list-descrip">
                                      <small
                                        style={{ color: "rgb(161, 159, 184)" }}
                                      >
                                        {description}
                                      </small>
                                    </div>
                                  </div>
                                  <div className="col-md-3 border-left panel-body">
                                    <ul className="list-unstyled">
                                      <li>
                                        <h3
                                          style={{
                                            textTransform: "capitalize",
                                          }}
                                        >
                                          <i className="fa fa-map-marker text-danger"></i>{" "}
                                          {sub_title}
                                        </h3>
                                      </li>
                                      <li className="text-secondary">
                                        <small>
                                          {sourcelink || 0} openings{" "}
                                        </small>
                                      </li>
                                    </ul>
                                    <button
                                      type="button"
                                      className="btn btn-outline-secondary"
                                      name="apply"
                                      onClick={() => {
                                        router.push(
                                          `/carreer/${urlStrPathReplace(title)}`
                                        );
                                      }}
                                    >
                                      Apply Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carreer;
