// import React from "react";
// import logoText from "../../assets/icons/favicon/logo-main-text.svg";
// import logoImg from "../../assets/icons/favicon/logo-main-img.svg";
import logo from '../../assets/icons/favicon/logo.svg';

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <img className="header-logo-text" src={logo} alt="logo" />
      {/* <img className="header-logo-img" src={logoImg} alt="logo" /> */}
    </div>
  );
};

export default HeaderLogo;
