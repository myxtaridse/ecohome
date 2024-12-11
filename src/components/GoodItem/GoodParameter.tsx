import React from 'react';
import { CustomContextProductItem } from "../../context/ProductContext";
// import Arrow from '../Arrow';
import Loading from '../Loading/Loading';
import Rating from '../Rating';
import { averageRating } from '../../const/const';

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
            <div className='goodItem-main-reviews-left'>
                <h4>4,8</h4>
                <div className='goodSection-rating'>
                    <Rating rating={averageRating(good.reviews) ? averageRating(good.reviews) / good.reviews.length : 5} />
                    <p>{averageRating(good.reviews) ? averageRating(good.reviews) / good.reviews.length : 5}</p>
                </div>
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
