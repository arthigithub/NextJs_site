import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { CommonCtx } from "../../../../store/common-context";
import Input from "./FormUi/Input";
import CallUs from "./UI/CallUs";
import NewConnectFormUI from "./UI/NewConnectFormUI";

const NewConnectionForm = () => {
  const route = useRouter();
  const { q } = route.query;
  const [getPlandetails, setPlanDetails] = useState([]);
  const [getnewConn, setNewConnChecked] = useState(true);
  const [getcallus, setCallusChecked] = useState(false);
  const {
    data: { plans },
  } = useContext(CommonCtx);

  const changeTab = (tab) => {
    const newConnTab = tab === "newconn" ? true : false;
    const callusTab = tab === "callus" ? true : false;
    setNewConnChecked(newConnTab);
    setCallusChecked(callusTab);
  };

  useEffect(() => {
    setPlanDetails([]);
    if (q !== "") {
      const PlanDetail = plans.filter(({ title }) => {
        return title === q;
      });
      setPlanDetails(PlanDetail);
    }
  }, [q]);
  

  return (
    <div className="sidebar-page-container">
      <div className="auto-container">
        <div className="row clearfix"></div>
        <div className="content-side col-lg-12 col-md-6 col-sm-12 col-xs-12">
          <div className="services-single">
            <div className="inner-box">
              <h2>New Connection Request</h2>
              <div className="text">
                Enter your details for a quick feasibility check for your HOME/
                OFFICE
              </div>
              <section className="quote-bg">
                <div className="auto-container">
                  <div className="row clearfix">
                    <div className="form-column col-md-6 col-sm-6 col-xs-12">
                      <div className="inner-column">
                        <div className="login-wrap">
                          <div className="login-html">
                            <Input
                              type="radio"
                              id="tab-1"
                              className="sign-in"
                              onChange={() => {
                                changeTab("newconn");
                              }}
                              checked={getnewConn}
                            />
                            <label htmlFor="tab-1" className="tab">
                              New Connection
                            </label>
                            <Input
                              type="radio"
                              id="tab-2"
                              className="sign-up"
                              onChange={() => {
                                changeTab("callus");
                              }}
                              checked={getcallus}
                            />
                            <label htmlFor="tab-2" className="tab">
                              Call Us Now
                            </label>
                            <div className="login-form">
                              <NewConnectFormUI />
                              <CallUs />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {getPlandetails.length>0 && (
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="price-block">
                          <div class="flip-card">
                            <div class="flip-card-inner">
                              <div class="flip-card-front">
                                &nbsp;
                                <h2>{getPlandetails[0]?.title}</h2>
                                <Image
                                  width={450}
                                  height={450}
                                  src={getPlandetails[0]?.largeimg}
                                  style={{ "border-radius": "25px" }}
                                  alt="..."
                                />
                              </div>
                              <div class="flip-card-back">
                                &nbsp;
                                <h2>{getPlandetails[0]?.title}</h2>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: getPlandetails[0]?.content,
                                  }}
                                />
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewConnectionForm;
