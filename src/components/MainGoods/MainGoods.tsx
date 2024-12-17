import React from "react";
import GoodSection from "../GoodSection/GoodSection";
import { Link } from "react-router-dom";

interface MainGoodsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goods: any[];
  title: string;
}

const MainGoods: React.FC<MainGoodsType> = ({ goods, title }) => {
  
  return (
    <div className="mainGoods" style={{marginTop: title ? '40px' : '70px'}}>
      
      {
        title && (
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
        )
      }
      <div className="mainGoods-list"
      style={{padding: title ? '0px 0 0 2vw' : '20px 0 20px 2vw'}}
      >
        {goods.map((item) => (
          
           <Link to={`/item/${item.article}`}>
               <GoodSection {...item} />
           </Link>
          
        ))}
      </div>
      {/* <div className="mainGoods-bottom"
      ></div> */}
    </div>
  );
};

export default MainGoods;
