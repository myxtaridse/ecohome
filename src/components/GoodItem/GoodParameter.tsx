import React from 'react';
import { CustomContextProductItem } from "../../context/ProductContext";
import Arrow from '../Arrow';

const GoodParameter = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const valueGood: any = React.useContext(CustomContextProductItem);
  if (valueGood) {
    return (
      <div className='goodItem-parameter'>
        <div>
        <div className='goodItem-main-article-reviews goodItem-parameter-reviews-show'>
          <p className='goodItem-main-article'>Код товара: {valueGood[0].article}</p>
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
            <p>{valueGood[0].reviews.length} отзывов</p>
          </div>
        </div>
        <div className='goodItem-parameter-exchange'>
          
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM15.0049 7.00275L18.5049 10.0027L15.0049 13.0027V11.0027H11.0049V9.00275H15.0049V7.00275ZM9.00488 17.0027L5.50488 14.0027L9.00488 11.0027V13.0027H13.0049V15.0027H9.00488V17.0027Z"></path></svg>
          </div>
          <p>Обмен и возврат 10 дней</p>
        </div>
        </div>
        
        <h2>Характеристики:</h2>
        <div className='goodItem-parameter-block'>
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            valueGood[0].parameter.map((item: any, id: any) => 
            <div key={id} className='goodItem-parameter-item'>
              <p>{item.titleParameter}</p>
              <div className='goodItem-parameter-item-line'></div>
              <p>{item.valueParameter}</p>
            </div>
          )
          }
          <div className='goodItem-parameter-link'>
            <p>Все характеристики</p>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoodParameter
