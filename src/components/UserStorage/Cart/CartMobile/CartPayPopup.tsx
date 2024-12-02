import React from 'react'
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
    </div>
  )
}

export default CartPayPopup