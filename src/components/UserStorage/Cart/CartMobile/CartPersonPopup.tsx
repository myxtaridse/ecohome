import React from 'react'
import Arrow from '../../../Arrow'
import CartPopup from './CartPopup'
import { itemForm } from '../CartForm'
import CartSelectPerson from '../CartSelectPerson'

const CartPersonPopup = () => {
    const [isMore, setIsMore] = React.useState(false)
    const [itsMe, setItsMe] = React.useState(false)
    const [isLegalEntity, setIsLegalEntity] = React.useState(false);
  return (
    <div className='checkout-person-data'>
        <h2 className='cart-title'>Укажите данные для получения заказа</h2>
        <div className='cartMobile-pickup-link' onClick={() => setIsMore(true)}>
            <div className='cartMobile-pickup-link-flex'>
                <h6>Получатель</h6>
                <Arrow />
            </div>
            <div className='checkout-person'>
                <p>ООО “Компания” (Фамилия Имя Отчетсво)</p>
            </div>
        </div>
        {
        isMore && <CartPopup setIsMore={setIsMore}>
            <div className='checkout-person-block'>
                <div className='cartMobile-map-text'>
                    <h4>Адрес магазина:</h4>
                </div>
                <div className='checkout-person-itsMe' onClick={() => setItsMe(!itsMe)}>
                        <h4>Получатель {itsMe ? 'не' : ''} я</h4>
                        <div className='checkout-person-itsMe-switch' style={{
                    backgroundColor: itsMe ? '#565656' : '#CF4E32'
                }}>
                            <div className={['checkout-person-itsMe-switch-round', itsMe ? 'checkout-person-switch-round' : ''].join(" ")}></div>
                        </div>
                </div>
                <div className='checkout-person-select'>
                    <CartSelectPerson isLegalEntity={isLegalEntity} setIsLegalEntity={setIsLegalEntity} />
                </div>
                <div className='checkout-person-form'>
                    {
                        itemForm.map((item) => (
                            item.id === '7' || item.id === '8' ? '' : (
                                !isLegalEntity && item.isPhysicalPerson ? <input type="text" placeholder={item.title} /> : isLegalEntity && <input type="text" placeholder={item.title} />
                            )
                        ))
                    }
                </div>
                <button>Сохранить</button>
            </div>
        </CartPopup>
      }
    </div>
  )
}

export default CartPersonPopup