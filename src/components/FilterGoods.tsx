import React from 'react'
import Arrow from './Arrow'
import { brand } from '../const/brand'
import { category } from '../const/category'
import { material } from '../const/material'
import { color } from '../const/color'
import { country } from '../const/country'
import SliderPrice from './UserStorage/SliderPrice'

interface FilterGoodsType {
  setFilter: (filter: boolean) => void;
}
//
const FilterGoods: React.FC<FilterGoodsType> = ({setFilter}) => {
  return (
    <div className='filterGoods'>
        <div className='filterGoods-header'>
          <div onClick={() => setFilter(false)}>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.5763 5.54676C33.9255 4.89587 32.8702 4.89587 32.2193 5.54676L20.062 17.7041L7.90475 5.54676C7.25388 4.89587 6.1986 4.89587 5.54773 5.54676C4.89685 6.19762 4.89685 7.25291 5.54773 7.90377L17.705 20.0611L5.54777 32.2182C4.89688 32.8692 4.89688 33.9244 5.54777 34.5754C6.19863 35.2262 7.25392 35.2262 7.90478 34.5754L20.062 22.4181L32.2193 34.5754C32.8702 35.2262 33.9255 35.2262 34.5763 34.5754C35.2272 33.9244 35.2272 32.8692 34.5763 32.2184L22.419 20.0611L34.5763 7.90377C35.2272 7.25291 35.2272 6.19762 34.5763 5.54676Z" fill="#0F0F0F"/>
            </svg>
          </div>
          <h3>Фильтр</h3>
        </div>
        <div className='filterGoods-reset'>
          <p>Сбросить все</p>
        </div>
        <div className='filterGoods-filter'>
          <h4>Категории</h4>
          <div className='filterGoods-filter-list'>
          {
              category.slice(0, 5).map((item) => (
                <div key={item.id} className='filterGoods-filter-item'>
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className='filterGoods-filter-bottom'>
            <p>Сортировать по категориям</p>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
        {/* <div className='filterGoods-filter'>
          <h4>Цена</h4>
          <div className='filterGoods-filter-price'>
              <div>
                <h6>от</h6>
                <input type="text" placeholder='0' />
                <h6>₽</h6>
              </div>
              <div>
                <h6>до</h6>
                <input type="text" placeholder='0' />
                <h6>₽</h6>
              </div>
          </div>
        </div> */}
        <SliderPrice />
        <div className='filterGoods-filter'>
          <h4>Бренд</h4>
          <div className='filterGoods-filter-list'>
            {
              brand.slice(0, 5).map((item) => (
                <div key={item.id} className='filterGoods-filter-item'>
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className='filterGoods-filter-bottom'>
            <p>Показать все</p>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
        <div className='filterGoods-filter'>
          <h4>Материал</h4>
          <div className='filterGoods-filter-list'>
            {
              material.slice(0, 5).map((item) => (
                <div key={item.id} className='filterGoods-filter-item'>
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className='filterGoods-filter-bottom'>
            <p>Показать все</p>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
        <div className='filterGoods-filter'>
          <h4>Цвет</h4>
          <div className='filterGoods-filter-list'>
            {
              color.slice(0, 5).map((item) => (
                <div key={item.id} className='filterGoods-filter-item'>
                  <div className='categoryPopup-item-color' 
                    style={{
                      background: item.title === 'бесцветный' ? `url(${item.image})` : item.color ? item.color : '',
                      border: item.title === 'бесцветный' || item.title === 'белый' ? '1px solid lightgrey' : 'none',
                    }}
                  ></div>
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className='filterGoods-filter-bottom'>
            <p>Показать все</p>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
        <div className='filterGoods-filter'>
          <h4>Страна-производитель</h4>
          <div className='filterGoods-filter-list'>
            {
              country.slice(0, 5).map((item) => (
                <div key={item.id} className='filterGoods-filter-item'>
                  <p>{item.title}</p>
                </div>
              ))
            }
          </div>
          <div className='filterGoods-filter-bottom'>
            <p>Показать все</p>
            <div>
              <Arrow />
            </div>
          </div>
        </div>
    </div>
  )
}

export default FilterGoods