import React from 'react'
import GoodSectionLine from '../../GoodSection/GoodSectionLine';
import Select from '../../Select';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartGoods: React.FC<any> = ({goods}) => {
    const [isSelectAll, setIsSelectAll] = React.useState(false)
  return (
    <div className="cartGoods-block">
        <div className='cart-main-input'>
            <input placeholder="Быстрое добавление: введите наименование или код товара..." />
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>
            </div>
        </div>
        <div className="cart-main-delete-block" onClick={() => setIsSelectAll(!isSelectAll)}>
            <Select isSelectAll={isSelectAll} />
            <div className="cart-main-delete">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>
                </div>
                <p>Удалить выбранные</p>
            </div>
        </div>
        <div className='cart-main-goods-list'>
        {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            goods && goods.map((item: any) => <GoodSectionLine key={item.id} {...item} />)
        }
        </div>
    </div>
  )
}

export default CartGoods