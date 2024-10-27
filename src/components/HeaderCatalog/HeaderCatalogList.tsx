import React from "react";
import { CustomContext } from "../../layout/MainLayout";

const HeaderCatalogList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setIsCatalog }: any = React.useContext(CustomContext);
  return (
    <div className="header-catalog" onMouseMove={() => setIsCatalog(true)}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </div>
      <span>Каталог</span>
    </div>
  );
};

export default HeaderCatalogList;
