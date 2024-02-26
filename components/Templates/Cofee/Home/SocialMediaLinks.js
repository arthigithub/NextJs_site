import React from "react";

const SocialMediaLinks = () => {
  const socialIcons = [
    { icon: "facebook-f", href: "https://www.facebook.com/bbnlmarketing" },
    {
      icon: "instagram",
      href: "https://www.instagram.com/bangalore_broadband_network_/",
    },
    {
      icon: "linkedin",
      href:
        "https://www.linkedin.com/company/bangalore-broadband-network-private-limited",
    },
    { icon: "twitter", href: "https://twitter.com/BBNL_Internet" },
    {
      icon: "youtube",
      href: "https://www.youtube.com/@bbnltv",
    },
    {
      icon: "whatsapp",
      href: "https://wa.me/919741308828",
    },
    {
      icon: "phone",
      href: "tel:9741308828",
    },
    {
      icon: "envelope",
      href: "mailto:abdulrahmaniq7@gmail.com",
    },
  ];
  return (
    <>
      <ul className="social-icon-one">
        {socialIcons.map(({icon, href},i) => {
          return (
            <li key={i}>
              <a href={href} target="_blank">
                <span className={`fa fa-${icon}`}></span>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="fxd-soc-link">
        <ul>
          {socialIcons.map(({icon, href},i) => {
            return (
              <li key={i}>
                <a href={href} target="_blank">
                  <span className={`fa fa-${icon}`}></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SocialMediaLinks;
