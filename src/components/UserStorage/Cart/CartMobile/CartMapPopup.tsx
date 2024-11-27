import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'
import React from 'react'
import CartPopup from './CartPopup';
import Arrow from '../../../Arrow';

const CartMapPopup = () => {
  const [isMore, setIsMore] = React.useState(false)
  const [isGraphic, setIsGraphic] = React.useState(false)
  
  React.useEffect(() => {
    if (isMore) {
      document.documentElement.style.overflowY = 'hidden';
    } 
    if (!isMore) {
      document.documentElement.style.overflowY = 'scroll';
    }
  }, [isMore])
  
  
  return (
    <div className='cartMobile-pickup'>
      <div className='cartMobile-pickup-link' onClick={() => setIsMore(true)}>
          <h6>г. Киров, ул. Складская д. 33</h6>
          <Arrow />
      </div>
      {
        isMore && <CartPopup setIsMore={setIsMore}>
        <div className='cartMobile-map-block'>
          <div className='cartMobile-map-text'>
            <h4>Адрес магазина:</h4>
            <h5>Кировская обл., г. Киров, ул. Складская. д. 9</h5>
          </div>
          <div className='cartMobile-map-text'>
            <h4>Номер телефона:</h4>
            <h5>+7-(833)-220-71-90</h5>
          </div>
          <div className='cartMobile-map-text'>
            <h4>Время работы:</h4>
            <div className='cartMobile-map-text-flex' onClick={() => setIsGraphic(!isGraphic)}>
              <h5>Открыто до 21:00</h5>
              <div className='cartMobile-map-text-graphic'>
                  <h5>График</h5>
                  <div className={[isGraphic ? 'cartMobile-map-rotate' : ''].join(" ")}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 16L8 10H17L12.5 16Z" fill="#565656"/>
                      </svg>
                  </div>
              </div>
            </div>
            <div className={['cartMobile-map-graphic', isGraphic ? 'cartMobile-map-graphic-show' : ''].join(" ")}>
            {
              ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'].map((day) => (
                <div className={['cartMobile-map-text-flex'].join(" ")}>
                  <h5>{day}</h5>
                  <h5>Открыто до 21:00</h5>
                </div>
              ))
            }
            </div>
          </div>
          <YMaps
              
              >
                <Map
                  // className="cartDelveryDetail-map"
                  state={{ center: [58.559339, 49.591738], zoom: 12 }}
                  width="100vw"
                  height="100%"
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

              <div></div>
      </div>
  </CartPopup>
      }
    </div>
  )
}

export default CartMapPopup