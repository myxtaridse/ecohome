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
      {/* {windowRef.current > 1000 && <Catalog />} */}
    </div>
  );
};

export default HeaderCatalog;
