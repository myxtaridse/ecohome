// import React from "react";
import FooterLogo from "./FooterLogo";
import FooterInfo from "./FooterInfo";
import FooterContacts from "./FooterContacts";
import FooterClient from "./FooterClient";
import FooterMap from "./FooterMap";
import FooterNews from "./FooterNews";
import FooterCompany from "./FooterCompany";

const Footer = () => {
  return (
    <div className="footerNew">
      <FooterLogo />
      <div className="footer-flex">
        <div className="footer-map-block">
          <FooterNews />
          <FooterMap />
        </div>
        <FooterClient />
        <FooterCompany />

        <FooterContacts />
      </div>
      <hr />
      <FooterInfo />
    </div>
  );
};

export default Footer;
