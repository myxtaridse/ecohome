import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCatalogList from "./HeaderCatalogList";
import HeaderCatalogInput from "./HeaderCatalogInput";
import HeaderCatalogIcons from "./HeaderCatalogIcons";

const HeaderCatalog = () => {
  const windowRef = React.useRef(window.innerWidth);
  return (
    <div className="header-catalog-block">
      {windowRef.current > 1000 && <HeaderLogo />}
      <HeaderCatalogList />
      <HeaderCatalogInput />
      {windowRef.current > 1000 && <HeaderCatalogIcons />}
    </div>
  );
};

export default HeaderCatalog;
