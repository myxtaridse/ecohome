import React from 'react'
import SliderPrice from '../components/UserStorage/SliderPrice'
import Select from '../components/Select'
import Sorted from '../components/Sorted'
import { CustomContextMain } from '../context/MainContext'
import FilterSort from '../components/FilterSort'
import { Outlet, useLocation } from 'react-router-dom'

const ActionsLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {windowRef}: any = React.useContext(CustomContextMain);
  const location = useLocation()
  const [isListLine, setIsListLine] = React.useState(false);

  return (
    <>
        <div className='myFavorite-head'>
      <div className='cart-title-main'>
        {
          location && location.pathname === '/favorite' ? (
            <>
            <div>
            
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.2426 4.75736C20.705 6.2228 21.2547 8.25005 20.8924 10.1368C21.4614 10.2972 21.9987 10.6002 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L13.978 18.5L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736ZM12.962 12.4646C12.346 13.0761 12.346 14.0615 12.962 14.673L17 18.6818L21.038 14.673C21.654 14.0615 21.654 13.0761 21.038 12.4646C20.414 11.8451 19.3962 11.8451 18.77 12.4668L16.9979 14.2206L15.591 12.825L15.2278 12.4646C14.6038 11.8451 13.586 11.8451 12.962 12.4646ZM4.17157 6.17157C2.68183 7.66131 2.60704 10.0473 3.97993 11.6232L10.9999 18.6543L12.559 17.092L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453C17.7877 10.6238 18.2921 10.3297 18.828 10.1632C19.2436 8.79577 18.9058 7.25122 17.827 6.1701C16.3279 4.66794 13.9076 4.60701 12.337 6.01687L11.0019 7.21524L9.66605 6.01781C8.09098 4.60597 5.67506 4.66808 4.17157 6.17157Z"></path>
              </svg>
            </div>
            <h1>
              Избранные товары
            </h1></>
          ) : (
            <>
            <div>
            
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path>
                </svg>
            </div>
            <h1>
              Сравнение товаров
            </h1></>
            
          )
        }
      </div>
        <div className='myFavorite-head-flex'>
        <h2>Найдено 2 товара</h2>
          
          {
            windowRef.current > 500 ? (
              <div className="myFavorite-sort myFavorite-sort-left">
            <Sorted />
            
          </div>
            ) : (
              <div>
                <FilterSort />
              </div>
            )
          }
          <div className="myFavorite-sort myFavorite-sort-right">
            <div onClick={() => setIsListLine(true)} className={['myFavorite-sort-line', isListLine ? 'myFavorite-sort-active' : ''].join(" ")}>
            <svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.6667 13.333H70V19.9997H36.6667V13.333ZM36.6667 26.6663H56.6667V33.333H36.6667V26.6663ZM36.6667 46.6663H70V53.333H36.6667V46.6663ZM36.6667 59.9997H56.6667V66.6663H36.6667V59.9997ZM10 13.333H30V33.333H10V13.333ZM16.6667 19.9997V26.6663H23.3333V19.9997H16.6667ZM10 46.6663H30V66.6663H10V46.6663ZM16.6667 53.333V59.9997H23.3333V53.333H16.6667Z"/>
            </svg>

            </div>
            <div onClick={() => setIsListLine(false)} className={['myFavorite-sort-block', isListLine ? '' : 'myFavorite-sort-active'].join(" ")}>
            <svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.667 13.333H32.667V33.333H12.667V13.333ZM19.3337 19.9997V26.6663H26.0003V19.9997H19.3337ZM12.667 46.6663H32.667V66.6663H12.667V46.6663ZM19.3337 53.333V59.9997H26.0003V53.333H19.3337Z"/>
              <path d="M48.0003 13.333H68.0003V33.333H48.0003V13.333ZM54.667 19.9997V26.6663H61.3337V19.9997H54.667ZM48.0003 46.6663H68.0003V66.6663H48.0003V46.6663ZM54.667 53.333V59.9997H61.3337V53.333H54.667Z"/>
            </svg>

            </div>
          </div>
        </div>
        <div className="cart-main-delete-block">
            <Select />
            <div className="cart-main-delete">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>
                </div>
                <p>Удалить выбранные</p>
            </div>
        </div>
      </div>
      {
        windowRef > 500 && <div className='myFavorite-filter'>
        <h3>Цена, руб.</h3>
        {/* <div className='myFavorite-filter-input'>
          <input placeholder={`от ${minPrice}`} value={minPrice ? `от ${0}` : ''} />
          <input placeholder={`до ${maxPrice}`} value={maxPrice ? `от ${0}` : ''} />
        </div> */}
        <SliderPrice />
        
      </div>
      }
      <Outlet />
    </>
  )
}

export default ActionsLayout