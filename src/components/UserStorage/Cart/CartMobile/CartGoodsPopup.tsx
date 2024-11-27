import React from 'react'
import CartPopup from './CartPopup'
import data from '../../../../../db.json'
import image from '../../../../assets/image.png'

const CartGoodsPopup = () => {
    const [isMore, setIsMore] = React.useState(false)
  return (
    <div className=''>
        <h2 className='cart-title checkout-goods-count'>3 шт.</h2>
        
            <div className='checkout-goods' onClick={() => setIsMore(true)}>
                {
                    data.goods.map((good) => (
                        <div>
                            <img src={image} alt="" />
                            <h5>{good.price} ₽</h5>
                        </div>
                    ))
                }
            </div>
        
        {
        isMore && <CartPopup setIsMore={setIsMore}>
            <div className='checkout-person-block'>
                <div className='cartMobile-map-text'>
                    <h4>Ваш заказ</h4>
                </div>
                <div className='checkout-popup-goods'>
                    {
                        data.goods.map((good) => (
                            <div className='checkout-popup-good'>
                                <img src={image} alt="" />
                                <div className='checkout-popup-good-text'>
                                    <div>
                                        <h5>{good.price}</h5>
                                        <p>1 шт.</p>
                                    </div>
                                    <h6>{good.titleGood}, {good.article}, {good.parameter[2].valueParameter}, {good.parameter[4].valueParameter}</h6>    
                                </div>    
                            </div>
                        ))
                    }
                </div>
            </div>
        </CartPopup>
      }
    </div>
  )
}

export default CartGoodsPopup