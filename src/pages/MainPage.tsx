import React from "react";
import BannerMain from "../components/Banner/BannerMain";
import MainBenefitLine from "../components/MainBenefitLine/MainBenefitLine";
import Footer from "../components/Footer/Footer";
import { CustomContext } from "../layout/MainLayout";

const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isCatalog }: any = React.useContext(CustomContext);
  return (
    <div className="mainPage">
      {isCatalog && <div className="catalog-bg"></div>}
      <BannerMain />
      <MainBenefitLine />
      <Footer />
    </div>
  );
};

export default MainPage;
