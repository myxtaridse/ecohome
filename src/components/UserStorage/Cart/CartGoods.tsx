import React from 'react'
import CartGood from "./CartGood"

const goods = [
    {
        id: '1',
        article: '161616',
        url: '',
        titleGood: '',
        photoGood: [
            "http://localhost:5173/ecohome/src/assets/image.png",
            "http://localhost:5173/ecohome/src/assets/image-2.png",
            "http://localhost:5173/ecohome/src/assets/image-3.png",
        ],
        categoryChildren: 'Аксессуары для бани',
        price: 1413,
        reviews: 4.7
    },
    {
        id: '2',
        article: '161616',
        url: '',
        titleGood: '',
        photoGood: [
            "http://localhost:5173/ecohome/src/assets/image.png",
            "http://localhost:5173/ecohome/src/assets/image-2.png",
            "http://localhost:5173/ecohome/src/assets/image-3.png",
        ],
        categoryChildren: 'Аксессуары для бани',
        price: 1413,
        reviews: 4.7
    },
    {
        id: '3',
        article: '161616',
        url: '',
        titleGood: '',
        photoGood: [
            "http://localhost:5173/ecohome/src/assets/image.png",
            "http://localhost:5173/ecohome/src/assets/image-2.png",
            "http://localhost:5173/ecohome/src/assets/image-3.png",
        ],
        categoryChildren: 'Аксессуары для бани',
        price: 1413,
        reviews: 4.7
    },
    {
        id: '4',
        article: '161616',
        url: '',
        titleGood: '',
        photoGood: [
            "http://localhost:5173/ecohome/src/assets/image.png",
            "http://localhost:5173/ecohome/src/assets/image-2.png",
            "http://localhost:5173/ecohome/src/assets/image-3.png",
        ],
        categoryChildren: 'Аксессуары для бани',
        price: 1413,
        reviews: 4.7
    },
    {
        id: '5',
        article: '161616',
        url: '',
        titleGood: '',
        photoGood: [
            "http://localhost:5173/ecohome/src/assets/image.png",
            "http://localhost:5173/ecohome/src/assets/image-2.png",
            "http://localhost:5173/ecohome/src/assets/image-3.png",
        ],
        categoryChildren: 'Аксессуары для бани',
        price: 1413,
        reviews: 4.7
    }
]

const CartGoods = () => {
    const [isSelectAll, setIsSelectAll] = React.useState(false);
  return (
    <div className="cartGoods-block">
        <div className='cart-main-input'>
            <input placeholder="Быстрое добавление: введите наименование или код товара..." />
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>
            </div>
        </div>
        <div className="cart-main-delete-block">
            <div className="cart-main-select-all" onClick={() => setIsSelectAll(!isSelectAll)}>
                <div>
                {
                    isSelectAll ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(207, 78, 50)"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path></svg>
                }
                </div>
                <p>Выделить все</p>
            </div>
            <div className="cart-main-delete">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>
                </div>
                <p>Удалить выбранные</p>
            </div>
        </div>
        {
            goods.map((item) => <CartGood key={item.id} {...item} />)
        }
    </div>
  )
}

export default CartGoods