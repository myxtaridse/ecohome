import React from "react";
import { MainGoodType } from "../MainGood/MainGood";
import { Link } from "react-router-dom";
import GoodSection from "../GoodSection/GoodSection";

interface MainGoodsType {
  goods: MainGoodType[];
  title: string;
}

const MainGoods: React.FC<MainGoodsType> = ({ goods, title }) => {
  console.log(goods);
  
  return (
    <div className="mainGoods">
      <div className="mainGoods-title">
        <h1>{title}</h1>
        <div className="mainGoods-title-again">
          <p>Смотреть все</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mainGoods-list">
        {goods.map((item) => (
          <Link key={item.id} to={`/goods/${item.article}`} >
            <GoodSection {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainGoods;
