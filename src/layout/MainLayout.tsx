import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/HeaderMain/Header";
import HeaderCatalog from "../components/HeaderCatalog/HeaderCatalog";
import CallPhone from "../components/CallPhone";
import Footer from "../components/Footer/Footer";
import Path from "../components/Path";
import { CustomContextMain } from "../context/MainContext";
import CartDeliveryDetail from "../components/UserStorage/Cart/CartDeliveryDetail";
import CartPopup from "../components/UserStorage/Cart/CartMobile/CartPopup";


const MainLayout: React.FC = () => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {isPopup, isPopupDelivery, setIsMore, childrenPopup, isMore}: any = React.useContext(CustomContextMain);
  

  const showPathInPage = location.pathname !== '/' && location.pathname !== '/catalog';
  
  
  return (
    
      <div className="wrapper">
        <div className="header-fixed">
          <Header />
          <HeaderCatalog />
        </div>
        <div className="content">
          {
            showPathInPage && <Path />
          }
          <Outlet />
          {isPopup && <CallPhone />}
          {isPopupDelivery && <CartDeliveryDetail />}
        </div>
      {
        location.pathname !== '/catalog'  &&   <Footer />
      }
      { isMore &&
        <CartPopup setIsMore={setIsMore}>{childrenPopup}</CartPopup>
      }
      </div>
    
  );
};

export default MainLayout;
