import React from 'react'
import { CustomContextProductItem } from "../../context/ProductContext";



const GoodDescription = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const good: any = React.useContext(CustomContextProductItem);
  return (
    <div className='goodItem-description'>
      <h2>Описание</h2>
      <div className='goodItem-description-text'>
       {
        good?.description
       }
      </div>
    </div>
  )
}

export default GoodDescription
