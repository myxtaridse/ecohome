import React from 'react';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { AddressSuggestions } from 'react-dadata';
import { API_KEY } from '../../../config';
import { CustomContextMain } from '../../../context/MainContext';

const CartDeliveryDetail = () => {
  const [isLegalEntity, setIsLegalEntity] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { city, setIsPopupDelivery }: any = React.useContext(CustomContextMain);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [address, setAddress] = React.useState<any>(null);
  const [sendAddress, setSendAddress] = React.useState(false);
  const [coordinates, setCoordinates] = React.useState<[number, number]>([58.603595, 49.668023]);
  const [zoom, setZoom] = React.useState(10);

  // Обновляем координаты карты при изменении адреса
  React.useEffect(() => {
    if (address) {

        if (address.data.flat) {
            setSendAddress(true);
        } else {
            setSendAddress(false)
        }
        
      setCoordinates([Number(address.data.geo_lat), Number(address.data.geo_lon)]);
      setZoom(15); // Устанавливаем приближение
    }
  }, [address]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <div className="cartDelveryDetail-bg" onClick={(e: any) => {
        if (e.target.className === "cartDelveryDetail-bg") {
            setIsPopupDelivery(false);
        }
      }}>
      <div className="cartDelveryDetail">
        <h2>Укажите адрес для получения заказа</h2>
        <div className="cartForm-select-user cartDelveryDetail-select">
          <div className="cartForm-select-user-item" onClick={() => setIsLegalEntity(false)}>
            <div>{!isLegalEntity && <span></span>}</div>
            <p>Доставка курьером</p>
          </div>
          <div className="cartForm-select-user-item" onClick={() => setIsLegalEntity(true)}>
            <div>{isLegalEntity && <span></span>}</div>
            <p>Доставка в почтовое отделение</p>
          </div>
        </div>

        <div className="cartDelveryDetail-adress-input">
          <AddressSuggestions
            token={API_KEY || ""}
            value={address}
            onChange={setAddress}
            
            inputProps={{
              placeholder: "Введите адрес доставки",
            }}
            defaultQuery={city ? city.city : ''}
          />
          <button className={['cartDelveryDetail-adress-btn', sendAddress ? 'cartDelveryDetail-btn-send' : ''].join(" ")}>
            <p>Отправить</p>

            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
            </div>
          </button>
        </div>

        {isLegalEntity ? (
          <iframe
            className="cartDelveryDetail-map"
            title="map"
            src={`https://api-maps.yandex.ru/frame/v1/-/CDxfUVls?z=${address ? "14" : "12"}`}
          ></iframe>
        ) : (
          <YMaps
            
          >
            <Map
              className="cartDelveryDetail-map"
              state={{ center: coordinates, zoom: zoom }}
              width="1000px"
              height="400px"
              options={{
                suppressMapOpenBlock: true,
                
              }}
            >
             <Placemark options={{
                    iconLayout: 'default#image',
                    iconImageHref: 'https://cdn-icons-png.flaticon.com/128/16972/16972756.png',
                    iconImageSize: [36, 36]
                    
                 }} geometry={coordinates} />

            </Map>
          </YMaps>
        )}
      </div>
    </div>
  );
};

export default CartDeliveryDetail;
