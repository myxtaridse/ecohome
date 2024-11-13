import React from 'react'
import { CustomContextProductItem } from "../../context/ProductContext";

const GoodPath = () => {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const valueGood: any = React.useContext(CustomContextProductItem);
  if (valueGood) {
    return (
      <div className='goodItem-path'>
        <p>Главная</p>
        <div className='goodItem-path-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></div>
        <p>Каталог магазина</p>
        <div className='goodItem-path-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></div>
  
        <p>{valueGood[0].categoryRelative}</p>
        <div className='goodItem-path-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></div>
  
        <p>{valueGood[0].categoryChildren}</p>
      </div>
    )
  }
}

export default GoodPath
