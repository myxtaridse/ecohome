import React from "react";
import BannerMain from "../components/Banner/BannerMain";
import MainBenefitLine from "../components/MainBenefitLine/MainBenefitLine";
import Partners from "../components/Partners/Partners";
import MainGoods from "../components/MainGoods/MainGoods";
import { CustomContextMain } from "../context/MainContext";
import { useSelector } from "react-redux";
import { selectGoods } from "../redux/goodsSlice/selectorGoods";
import { useAppDispatch } from "../redux/store";
import { fetchGoods } from "../redux/goodsSlice/asyncActions";
import { Link } from "react-router-dom";

const MainPage = () => {

  const dispatch = useAppDispatch()
  React.useEffect(() => {
    if (dispatch) {
      dispatch(fetchGoods())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {goods} = useSelector(selectGoods);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isCatalog, setPathValue }: any = React.useContext(CustomContextMain);
  React.useEffect(() => {
    setPathValue([])
}, [setPathValue])

  return (
    <div className="mainPage">
      {isCatalog && <div className="catalog-bg"></div>}
      <BannerMain />
      <MainBenefitLine />

      
      <Link to={`/sale`}>
        <MainGoods goods={goods} title="Акции" />
      </Link>
      <Link to={`/new`}>
        <MainGoods goods={goods} title="Новинки" />
      </Link>
      <Partners />
    </div>
  );
};

export default MainPage;
