import React from "react";
import whatsApp from "../../assets/icons/footer-icons/whatsapp.svg";
import ozon from "../../assets/icons/footer-icons/ozon.svg";
import wildberries from "../../assets/icons/footer-icons/wildberries.svg";
import sber from "../../assets/icons/footer-icons/sber.svg";
import { CustomContextMain } from "../../context/MainContext";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const webSites = [
  {
    title: "WhatsApp",
    link: "",
    svg: whatsApp,
  },
  {
    title: "Ozon",
    link: "",
    svg: ozon,
  },
  {
    title: "Wildberries",
    link: "",
    svg: wildberries,
  },
  {
    title: "Sber",
    link: "",
    svg: sber,
  },
];

const FooterContacts = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { isPopup, setIsPopup }: any = React.useContext(CustomContextMain);
  const [isGraphic, setIsGraphic] = React.useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setIsMore, setChildrenPopup}: any = React.useContext(CustomContextMain);

  const morePopupFn = () => {
      setIsMore(true)
      setChildrenPopup(
        <div className='cartMobile-map-block'>
        <div className='cartMobile-map-text'>
          <h4>Адрес магазина:</h4>
          <h5>Кировская обл., г. Киров, ул. Складская. д. 9</h5>
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
      )
  }
  return (
    <div className="footer-contacts">
      <div className="footer-info-title">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"></path>
          </svg>
        </div>
        <h2>Обратная связь</h2>
      </div>
      <div className="footer-contacts-address" onClick={morePopupFn}>
          <h1>Адрес:</h1>
          <div className="footer-contacts-address-subtext">
              <p>
                  г. Киров, ул. Складская д.33
              </p>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
              </div>
          </div>
      </div>
      <div className="footer-phone-block">
        <h1>+7-(833)-220-71-90</h1>
        <p className="footer-phone" onClick={() => setIsPopup(!isPopup)}>
          Заказать звонок
        </p>
      </div>
      <h2 className="footer-mail">example@gmail.com</h2>
      <div className="footer-webSites">
        {webSites.map((item, id) => (
          <div className="footer-webSites-logo" key={id}>
            <img src={item.svg} />
          </div>
        ))}
      </div>
      <div className="footer-contacts-reviews-block">
        <iframe
        width="156px"
        height="65px"
          src="https://yandex.ru/sprav/widget/rating-badge/1408067184?type=rating"
          className="footer-contacts-reviews"
        ></iframe>
      </div>
    </div>
  );
};

export default FooterContacts;
