// import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCatalogList from "./HeaderCatalogList";
import HeaderCatalogInput from "./HeaderCatalogInput";
import HeaderCatalogIcons from "./HeaderCatalogIcons";
// import Catalog from "../Catalog/Catalog";

const HeaderCatalog = () => {
  // const windowRef = React.useRef(window.innerWidth);
  return (
    <div className="header-catalog-block">
      <div className="header-catalog-logo-block">
        <HeaderLogo />
      </div>

      <HeaderCatalogList />
      <HeaderCatalogInput />
      <HeaderCatalogIcons />
      {/* <div className="header-catalog-show">
      <Catalog />
      </div> */}

    </div>
  );
};

export default HeaderCatalog;
