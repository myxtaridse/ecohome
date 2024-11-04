import React from "react";
import { CustomContext } from "../../layout/MainLayout";
import { useNavigate } from "react-router-dom";

const HeaderCatalogList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {windowRef}: any = React.useContext(CustomContext)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setIsCatalog, isCatalog }: any = React.useContext(CustomContext);
  const navigate = useNavigate();
  return (
    <div className="header-catalog" onClick={() => {
      setIsCatalog(!isCatalog);
      if (windowRef.current && windowRef.current <= 500) {
       if (!isCatalog) {
        navigate('/catalog');
        console.log(isCatalog);
        
       } else {
        navigate('/');
        console.log(isCatalog);

       }
        
      }
    }} >
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
