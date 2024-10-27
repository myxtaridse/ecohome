import React from "react";
import Navheader from "./Navheader";
// import Headlogin from "./Headlogin";
import HeadCityPop from "./HeadCityPop";
import HeadContacts from "./HeadContacts";
import HeaderLogo from "../HeaderCatalog/HeaderLogo";
import HeaderCatalogIcons from "../HeaderCatalog/HeaderCatalogIcons";

const Header = () => {
  const windowRef = React.useRef(window.innerWidth);
  return (
    <div className="header">
      {windowRef.current < 1000 && <HeaderLogo />}

      {windowRef.current > 1000 && (
        <p style={{ fontSize: "12px" }}>
          Сайт предназначен для работы с юридическими лицами{" "}
        </p>
      )}
      {windowRef.current > 1000 && <HeadCityPop />}

      {windowRef.current < 1000 && <HeaderCatalogIcons />}
      {windowRef.current > 1000 && <Navheader />}

      {windowRef.current > 1000 && <HeadContacts />}
      {windowRef.current < 1000 && (
        <div className="header-nav-widget">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgb(255, 255, 255, 1)"
          >
            <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Header;
