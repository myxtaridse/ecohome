import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomContextMain } from "../../context/MainContext";

const HeaderCatalogList = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setIsCatalog, isCatalog }: any = React.useContext(CustomContextMain);
  const navigate = useNavigate();
  
  return (
    <div className="header-catalog" onClick={() => {
      setIsCatalog(!isCatalog);
       if (!isCatalog) {
        navigate('/catalog');
        
       } else {
        navigate('/');

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
