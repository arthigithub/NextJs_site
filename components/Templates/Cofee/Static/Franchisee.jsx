import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { CommonCtx } from "../../../../store/common-context";

const Franchisee = () => {
  const {
    data: { webClient },
  } = useContext(CommonCtx);
  const router = useRouter();
  const { location } = router.query;
  const [getdata, setData] = useState(webClient);
  const [getSearchtext, setSearchText] = useState("");
  const [getLatitude, setLatitude] = useState(() => {
    return !getdata[0] ? 0 : getdata[0]["client_latitude"];
  });
  const [getLongitude, setLongitude] = useState(() => {
    return !getdata[0] ? 0 : getdata[0]["client_longitude"];
  });
  const [getActiveClass, setActiveClass] = useState("");

  const searchClients = (value) => {
    const searchText = value;
    let result = [];
    if (searchText) {
      setSearchText(searchText);
      result = webClient.filter(({ client_compname }) => {
        return client_compname
          .trim()
          .toLowerCase()
          .includes(searchText.trim().toLowerCase());
      });

      if (!result.length) {
        result = webClient.filter(({ client_address }) => {
          return client_address
            .trim()
            .toLowerCase()
            .includes(searchText.trim().toLowerCase());
        });
      }

      if (!result.length) {
        result = webClient.filter(({ client_pincode }) => {
          return client_pincode
            .trim()
            .toLowerCase()
            .includes(searchText.trim().toLowerCase());
        });
      }
    }
    setData(result);
    setLatitude(0);
    setLongitude(0);
    if (result.length) {
      setLatitude(result[0]["client_latitude"]);
      setLongitude(result[0]["client_longitude"]);
    }
  };

  const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  const changeCompany = (lt, ln) => {
    setLatitude(lt);
    setLongitude(ln);
    setActiveClass("activerow");
  };

  useEffect(() => {
    searchClients(location);
  }, [location]);
  return (
    <>
      <section className="contact-section">
        <div className="auto-container">
          <div className="row clearfix">
            <style jsx>{`
              .activerow {
                background: #f1f3f4;
              }
            `}</style>
            <div
              className="contact-form-column col-md-4 col-sm-12 col-xs-12"
              style={{ maxHeight: "50%", height: "50px" }}
            >
              <div className="inner-column">
                <div className="upper-box">
                  <h2>Search Location ({getdata.length})</h2>
                  <input
                    type="text"
                    name="searchtext"
                    placeholder="Search here..."
                    className="form-control"
                    onChange={(e) => searchClients(e.target.value)}
                  />
                </div>
                <div
                  className="lower-box"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "500px",
                    overflow: "scroll",
                    marginTop: "5px",
                  }}
                >
                  <ul className="info-list">
                    {getdata.map(
                      (
                        {
                          client_compname,
                          client_address,
                          client_pincode,
                          client_latitude,
                          client_longitude,
                        },
                        i
                      ) => {
                        return (
                          <li
                            key={i}
                            className={
                              client_latitude === getLatitude ? "activerow" : ""
                            }
                            onClick={() =>
                              changeCompany(client_latitude, client_longitude)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <span className="icon">
                              <div
                                style={{
                                  fontWeight: "bold",
                                  color: "#333",
                                  textTransform: "uppercase",
                                  border: "1px solid #eee",
                                  borderRadius: "30px",
                                  padding: "5px",
                                  paddingTop: "10px",
                                  paddingBottom: "10px",
                                  background: setBg(),
                                  border: setBg(),
                                }}
                              >
                                {client_compname.trim().substr(0, 2)}
                              </div>
                            </span>
                            <strong>{client_compname}:</strong>
                            {client_address}
                            <div>{client_pincode}</div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="contact-info-column col-md-8 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="contact-form">
                  {!getdata.length && (
                    <h3 className="text-danger">Sorry no details found!</h3>
                  )}
                  <iframe
                    src={`https://maps.google.com/maps?q=${getLatitude},${getLongitude},&z=16&output=embed`}
                    width="100%"
                    height="650px"
                    frameBorder="0"
                    style={{ border: "0" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Franchisee;
