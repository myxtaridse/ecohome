import React from 'react'
import CartPopup from './CartPopup'
import data from '../../../../../db.json'

const CartGoodsPopup = () => {
    const [isMore, setIsMore] = React.useState(false)
  return (
    <div className=''>
        <h2 className='cart-title checkout-goods-count'>3 шт.</h2>
        
            <div className='checkout-goods' onClick={() => setIsMore(true)}>
                {
                    data.goods.map((good) => (
                        <div>
                            <img src={good.photoGood[0]} alt="" />
                            <h5>{good.price} ₽</h5>
                        </div>
                    ))
                }
            </div>
        
        {
        isMore && <CartPopup setIsMore={setIsMore}>
            <div className='checkout-person-block'>
                <div className='cartMobile-map-text'>
                    <h4>Адрес магазина:</h4>
                </div>
                <div className='checkout-person-form'>
                    
                </div>
                <button>Сохранить</button>
            </div>
        </CartPopup>
      }
    </div>
  )
}

export default CartGoodsPopup