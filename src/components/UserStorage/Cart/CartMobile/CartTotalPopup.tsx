// import React from 'react'

const CartTotalPopup = () => {
  return (
    <div className='checkout-total'>
        <div className='checkout-total-text'>
            <h6>3 товара</h6>
            <h5>3 500 Р</h5>
        </div>
        <div className='checkout-total-text'>
            <h6>Общая скидка</h6>
            <h5>-500 Р</h5>
        </div>
        <div className='checkout-total-text'>
            <h6>Доставка</h6>
            <h5>500 Р</h5>
        </div>
        <div className='checkout-total-input'>
            <input type="text" placeholder='Промокод' />
        </div>
        <div className='checkout-total-text'>
            <h6>Итого</h6>
            <h5>4 000 Р</h5>
        </div>
        <button>Перейти к оплате</button>
    </div>
  )
}

export default CartTotalPopup