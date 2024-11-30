import React from 'react';
import { CustomContextProductItem } from "../../context/ProductContext";
// import Arrow from '../Arrow';
import Loading from '../Loading/Loading';

const GoodParameter = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const good: any = React.useContext(CustomContextProductItem);
  if (!good) return <Loading />
  if (good) {
    return (
      <div className='goodItem-parameter'>
        <div>
        <div className='goodItem-main-article-reviews goodItem-parameter-reviews-show'>
          <p className='goodItem-main-article'>Код товара: {good.article}</p>
          <div className='goodItem-main-reviews'>
            <div className="goodItem-main-stars">
            {Array(5)
              .fill("")
              .map(() => (
                <div className="goodItem-main-starItem" key={Math.random()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                  </svg>
                </div>
              ))}
            </div>
            <p>{good.reviews.length} отзывов</p>
          </div>
        </div>
        
        </div>
        
        <h2>Характеристики:</h2>
        <div className='goodItem-parameter-block'>
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            good.parameter.map((item: any, id: any) => 
            <div key={id} className='goodItem-parameter-item'>
              <p>{item.titleParameter}</p>
              <div className='goodItem-parameter-item-line'></div>
              <p>{item.valueParameter}</p>
            </div>
          )
          }
          {/* <div className='goodItem-parameter-link'>
            <p>Все характеристики</p>
            <div>
              <Arrow />
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default GoodParameter
