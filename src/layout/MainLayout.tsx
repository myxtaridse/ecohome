import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/HeaderMain/Header";
import HeaderCatalog from "../components/HeaderCatalog/HeaderCatalog";
import CallPhone from "../components/CallPhone";
import Footer from "../components/Footer/Footer";

export interface valueType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  windowRef: any;
  isCatalog: boolean;
  setIsCatalog: (isCatalog: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  popupRef: any;
  isPopup: boolean;
  setIsPopup: (isPopup: boolean) => void;
}

export const CustomContext = React.createContext<valueType | null>(null);

const MainLayout: React.FC = () => {
  const windowRef = React.useRef(window.innerWidth);
  const [isCatalog, setIsCatalog] = React.useState(false);
  const [isPopup, setIsPopup] = React.useState(false);
  const popupRef = React.useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const value: valueType = {
    windowRef,
    isCatalog,
    setIsCatalog,
    popupRef,
    isPopup,
    setIsPopup,
  };


  
  return (
    <CustomContext.Provider value={value}>
      <div className="wrapper">
        <div className="header-fixed">
          <Header />
          <HeaderCatalog />
        </div>
        <div className="content">
          <Outlet />
          {isPopup && <CallPhone />}
        </div>
      {
        location.pathname !== '/catalog'  &&   <Footer />
      }
      </div>
    </CustomContext.Provider>
  );
};

export default MainLayout;
