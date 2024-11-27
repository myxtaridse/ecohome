import React from 'react'
// import CartPopup from './CartPopup'
import CartCardPay from '../CartCardPay'

const CartPayPopup = () => {
    const [isMore, setIsMore] = React.useState(false)
    const [activePay, setActivePay] = React.useState<number>(0)
    console.log(isMore);
    
  return (
    <div className='checkout-person-data'>
        <h2 className='cart-title'>Выберите способ оплаты</h2>
        
            <div className='checkout-pay-cards' onClick={() => setIsMore(true)}>
                <CartCardPay activePay={activePay} setActivePay={setActivePay} />
            </div>
        
        {/* {
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
      } */}
    </div>
  )
}

export default CartPayPopup