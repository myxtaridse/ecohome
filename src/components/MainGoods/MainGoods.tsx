import React from "react";
import GoodSection from "../GoodSection/GoodSection";
import { Link } from "react-router-dom";
import image from '../../assets/images-site/sale-bg.png';

interface MainGoodsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goods: any[];
  title: string;
}

const MainGoods: React.FC<MainGoodsType> = ({ goods, title }) => {
  
  return (
    <div className="mainGoods">
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
        {goods.slice(0, 2).map((item) => (
          
           <Link to={`/item/${item.article}`}>
               <GoodSection {...item} />
           </Link>
          
        ))}
      </div>
      <div className="mainGoods-bottom"
      ></div>
    </div>
  );
};

export default MainGoods;
