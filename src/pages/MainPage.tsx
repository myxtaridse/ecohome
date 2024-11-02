import React from "react";
import BannerMain from "../components/Banner/BannerMain";
import MainBenefitLine from "../components/MainBenefitLine/MainBenefitLine";
import { CustomContext } from "../layout/MainLayout";
import Partners from "../components/Partners/Partners";

import MainGoods from "../components/MainGoods/MainGoods";
import { goodsNew } from "../const/const";
import { goodsSale } from "../const/const";

const MainPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isCatalog }: any = React.useContext(CustomContext);
  return (
    <div className="mainPage">
      {isCatalog && <div className="catalog-bg"></div>}
      <BannerMain />
      <MainBenefitLine />

      <MainGoods goods={goodsSale} title="Акции" />
      <MainGoods goods={goodsNew} title="Новинки" />
      <Partners />
    </div>
  );
};

export default MainPage;
