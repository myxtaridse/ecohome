import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCatalogList from "./HeaderCatalogList";
import HeaderCatalogInput from "./HeaderCatalogInput";
import HeaderCatalogIcons from "./HeaderCatalogIcons";
import Catalog from "../Catalog/Catalog";

const HeaderCatalog = () => {
  const windowRef = React.useRef(window.innerWidth);
  return (
    <div className="header-catalog-block">
      {windowRef.current > 1000 && <HeaderLogo />}
      <HeaderCatalogList />
      <HeaderCatalogInput />
      {windowRef.current > 1000 && <HeaderCatalogIcons />}
      {windowRef.current > 1000 && <Catalog />}
    </div>
  );
};

export default HeaderCatalog;
