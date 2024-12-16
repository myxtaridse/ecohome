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
import image from '../assets/images-site/sale-bg.png';

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
  const { setPathValue }: any = React.useContext(CustomContextMain);
  React.useEffect(() => {
    setPathValue([])
}, [setPathValue])

  return (
    <div className="mainPage">
      <BannerMain />
      <MainBenefitLine />

      <Link to={`/sale`}>
        <div className="mainPage-sale">
        <div className="mainGoods-bg"
          style={{
            backgroundImage: `url(${image})`
          }}
        ></div>
        <div className="mainGoods-sale">
          <div>
              <svg viewBox="0 0 175 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M161.722 38.7681L173.441 7.76811C174.678 4.49734 172.261 1 168.764 1H6.83095C2.94448 1 0.543913 5.23986 2.54349 8.57248L7 16C8.12735 17.5031 8.125 21.8305 7.62973 24.1001C7.41208 25.0975 6.73797 25.9804 6.24912 26.8766L2.03323 34.6057C0.215847 37.9376 2.62742 42 6.42271 42H157.045C159.124 42 160.987 40.7131 161.722 38.7681Z" fill="white" stroke="#CF4E32"/>
                </svg>
          </div>
          <h4>Скидки до 50%</h4>
        </div>
          <MainGoods goods={goods} title="" />
        </div>
      </Link>
      <Link to={`/new`}>
        <MainGoods goods={goods} title="Новинки в ЭКОХОЗБЫТ" />
      </Link>
      <Link to={`/new`}>
        <MainGoods goods={goods} title="Вы недавно смотрели" />
      </Link>
      <Partners />
    </div>
  );
};

export default MainPage;
