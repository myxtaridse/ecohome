import React from 'react'
import ReactSlider from 'react-slider';

const MIN = 0;
const MAX = 100;

const SliderPrice = () => {
  const [price, setPrice] = React.useState([MIN, MAX]);
  const handleSliderChange = (values: number[]) => {
    setPrice(values); // Обновляем значения ползунков
  };
  
  return (
    <div className='filterGoods-filter'>
          <h4>Цена</h4>
          <div className='filterGoods-filter-price'>
              <div>
                <h6>от</h6>
                <input type="text" placeholder='0' value={price[0]} />
                <h6>₽</h6>
              </div>
              <div>
                <h6>до</h6>
                <input type="text" placeholder='0' value={price[1]} />
                <h6>₽</h6>
              </div>
          </div>
          <div>
          <ReactSlider
            className="slider"
            thumbClassName="slider-thumb"
            trackClassName="slider-track"
            onChange={handleSliderChange} // Сохраняем изменения
            min={MIN}
            max={MAX}
            minDistance={10} // Минимальное расстояние между ползунками
          />
              
          </div>
        </div>
  )
}

export default SliderPrice