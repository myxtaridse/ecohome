// import React from "react";
import Navheader from "./Navheader";
import HeadCityPop from "./HeadCityPop";
import HeadContacts from "./HeadContacts";
import HeaderLogo from "../HeaderCatalog/HeaderLogo";
import HeaderLogIn from "../HeaderCatalog/HeaderLogIn";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to='/'>
        <div className="header-logo-block">
          <HeaderLogo />
        </div>
      </Link>
      <HeadCityPop />
      <Navheader />
      <HeadContacts />
      <div className="header-login">
        <HeaderLogIn />
      </div>
    </div>
  );
};

export default Header;
