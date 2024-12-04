// import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCatalogList from "./HeaderCatalogList";
import HeaderCatalogInput from "./HeaderCatalogInput";
import HeaderCatalogIcons from "./HeaderCatalogIcons";
import { Link } from "react-router-dom";
// import Catalog from "../Catalog/Catalog";

const HeaderCatalog = () => {
  // const windowRef = React.useRef(window.innerWidth);
  return (
    <div className="header-catalog-block">
      <Link to='/'>
      <div className="header-catalog-logo-block">
        <HeaderLogo />
      </div>
      </Link>

      <HeaderCatalogList />
      <Link to='/user'>
        <HeaderCatalogInput />
      </Link>
      <HeaderCatalogIcons />
      {/* <div className="header-catalog-show">
      <Catalog />
      </div> */}

    </div>
  );
};

export default HeaderCatalog;
