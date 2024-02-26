import React, { useContext } from "react";
import { CommonCtx } from "../../../../store/common-context";
import ContactDetails from "../Static/ContactDetails";
import ContactForm from "../Static/ContactForm";
import ContactSupportTeam from "../Static/ContactSupportTeam";

const Contact = () => {
  const {
    data: { contactheader: contactHead },
  } = useContext(CommonCtx);
  return (
    <>
      <section className="contact-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="contact-form-column col-md-8 col-sm-12 col-xs-12">
              <div className="inner-column" style={{ fontWeight: "normal !important" }}>
                <h2>{contactHead[0]?.title}</h2>
                <h3>{contactHead[0]?.sub_title}</h3>
                <div className="text">{contactHead[0]?.description}</div>
                <div
                  dangerouslySetInnerHTML={{ __html: contactHead[0]?.content }}
                ></div>
                <ContactForm />
              </div>
            </div>
            <div className="contact-info-column col-md-4 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="upper-box">
                  <ContactSupportTeam />
                </div>
                <div className="lower-box">
                  <ContactDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-outer">
          <div
            className="map-canvas"
            data-zoom="12"
            data-lat="13.032158980373348"
            data-lng="77.57907788308472"
            data-type="roadmap"
            data-hue="#ffc400"
            data-title="Envato"
            data-icon-path="images/icons/map-marker.png"
            data-content="Melbourne VIC 3000, Australia<br/><a href='mailto:info@youremail.com'>info@youremail.com</a>"
          ></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
