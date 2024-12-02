import React from 'react'
import CartPopup from './CartPopup'
import Arrow from '../../../Arrow'
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import { CustomContextMain } from '../../../../context/MainContext'

const CartDeliveryPopup = () => {
  const [isCourier, setIsCourier] = React.useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setIsMore, setChildrenPopup}: any = React.useContext(CustomContextMain);

  const morePopupFn = () => {
      setIsMore(true)
      setChildrenPopup(
        <div className='checkout-delivery'>
        <div className='checkout-delivery-up'>
            <div className='checkout-delivery-up-arrow'>
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" />
                </svg>
            </div>
            <div className='checkout-delivery-select'>
                <div onClick={() => setIsCourier(false)} className={[!isCourier && 'checkout-delivery-select-active'].join(" ")}>Почтовое отделение</div>
                <div onClick={() => setIsCourier(true)} className={[isCourier && 'checkout-delivery-select-active'].join(" ")}>Курьером</div>
            </div>
        </div>
        <div className='checkout-delivery-map'>
            <YMaps>
              <Map
                state={{ center: [58.559339, 49.591738], zoom: 12 }}
                width="100vw"
                height="80vh"
                options={{
                  suppressMapOpenBlock: true,
                  
                }}
              >
              <Placemark options={{
                      iconLayout: 'default#image',
                      iconImageHref: 'https://cdn-icons-png.flaticon.com/128/16972/16972756.png',
                      iconImageSize: [36, 36]
                      
                  }} geometry={[58.559339, 49.591738]} />
  
              </Map>
            </YMaps>
        </div>
        {
          isCourier ? (
            <div className='checkout-delivery-popup'>
          <CartPopup setIsMore={setIsMore}>
              <div className='cartMobile-map-text'>
                <h4>Адрес доставки:</h4>
              </div>
              <div className='checkout-delivery-form'>
                  <input type="text" placeholder='Город, улица, дом' />
                  <div className='checkout-person-form-flex'>
                        <input type="text" placeholder='Квартира' />
                        <input type="text" placeholder='Подъезд' />
                        <input type="text" placeholder='Этаж' />
                        <input type="text" placeholder='Домофон' />
                  </div>
                  <input type="text" placeholder='Комментарий для курьера' />
              </div>
              <button>Привезти сюда</button>
          </CartPopup>
        </div>
          ) : (
            <div className='checkout-delivery-popup-post'>
                <CartPopup setIsMore={setIsMore}>
                    <div className='cartMobile-map-text'>
                      <h4>Адрес почты:</h4>
                    </div>
                    <div className='checkout-delivery-form'>
                        <input type="text" placeholder='Найти адрес' />
                    </div>
                    <button>Заберу отсюда</button>
                </CartPopup>
        </div>
          )
        }
    </div>
      )
  }

  return (
    <div className='checkout-person-data'>
      <div className='cartMobile-pickup-link' onClick={morePopupFn}>
          <div className='cartMobile-pickup-link-flex'>
              <h6>Адрес доставки</h6>
              <Arrow />
          </div>
          <div className='checkout-person'>
              <p>Советская улица, село Фатеево, Кирово-Чепецкий район</p>
          </div>
      </div>
    </div>
  )
}

export default CartDeliveryPopup