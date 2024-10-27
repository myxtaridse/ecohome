import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/HeaderMain/Header";
import HeaderCatalog from "../components/HeaderCatalog/HeaderCatalog";

export const CustomContext = React.createContext(false);

const MainLayout: React.FC = () => {
  const [isCatalog, setIsCatalog] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any = {
    isCatalog,
    setIsCatalog,
  };
  return (
    <CustomContext.Provider value={value}>
      <div className="wrapper">
        <Header />
        <HeaderCatalog />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </CustomContext.Provider>
  );
};

export default MainLayout;
