import React from 'react';
import { CustomContextMain } from '../../../context/MainContext';
import { AddressSuggestions } from 'react-dadata';
import { API_KEY } from '../../../config';

interface CartFormType {
    isDelivery: boolean;
}

const itemForm = [
    {
        id: '0',
        title: 'Название компании',
        isPhysicalPerson: false,
    },
    {
        id: '1',
        title: 'ИНН',
        isPhysicalPerson: false,
    },
    {
        id: '2',
        title: 'КПП',
        isPhysicalPerson: false,
    },
    {
        id: '3',
        title: 'Юридический адрес',
        isPhysicalPerson: false,
    },
    {
        id: '4',
        title: 'Контактное лицо (ФИО)',
        isPhysicalPerson: true,
    },
    {
        id: '5',
        title: 'Номер телефона',
        isPhysicalPerson: true,
    },
    {
        id: '6',
        title: 'E-mail',
        isPhysicalPerson: true,
    },
    {
        id: '7',
        title: 'Город',
        isPhysicalPerson: true,
    },
    {
        id: '8',
        title: 'Адрес доставки',
        isPhysicalPerson: true,
    },
    {
        id: '9',
        title: 'Комментарии к заказу',
        isPhysicalPerson: true,
    },
]

const CartForm: React.FC<CartFormType> = ({isDelivery}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {setIsPopupDelivery, city, windowRef}: any = React.useContext(CustomContextMain)
   const [isLegalEntity, setIsLegalEntity] = React.useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [addressCity, setAddressCity] = React.useState<any>({})
    const [ipAddress, setIPAddress] = React.useState('')
    
    const url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
    const token = API_KEY;
    const query = ipAddress;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const options: any = {
    method: "GET",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    }
}

fetch(url + query, options)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log("error", error));

    React.useEffect(() => {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIPAddress(data.ip))
        .catch(error => console.log(error))
    }, []);

    React.useEffect(() => {
        if (addressCity) {
            console.log(addressCity);
            
        }
        if (ipAddress) {
            console.log(ipAddress);
            
        }
    }, [addressCity, ipAddress]);

    React.useEffect(() => {
        if (addressCity) {
            console.log(addressCity, API_KEY);
            
        }
    }, [addressCity])
    

  return (
    <div className='cartForm'>
        <h2 className='cart-title'>Укажите данные для получения заказа</h2>
        <div className='cartForm-select-user'>
            <div className='cartForm-select-user-item' onClick={() => setIsLegalEntity(false)}>
                
                <div>
                    {
                        !isLegalEntity && <span></span>
                    }
                </div>
                <p>Физическое лицо</p>
            </div>
            <div className='cartForm-select-user-item' onClick={() => setIsLegalEntity(true)}>
                
                <div>
                    {
                        isLegalEntity && <span></span>
                    }
                </div>
                <p>Юридическое лицо</p>
            </div>
        </div>
        {
            isLegalEntity ? (
                <div className='cartForm-form'>

                    {
                        itemForm.map((titleForm) => 
                            titleForm.id === '9' ? <textarea key={titleForm.id} placeholder={titleForm.title} /> :
                            <input key={titleForm.id} placeholder={titleForm.title} type='text'
                                style={{
                                    gridColumnStart: windowRef.current > 500 ? (titleForm.id === '8' || isDelivery && titleForm.id === '6' ? '1' : 
                                        +titleForm.id % 2 !== 0 ? '2' : '1') : '1',
                                    gridColumnEnd: windowRef.current > 500 ? (titleForm.id === '8' || isDelivery && titleForm.id === '6' ? '3' : 
                                        +titleForm.id % 2 !== 0  ? '3' : '2') : '3',
                                    display: isDelivery && (titleForm.id === '7' || titleForm.id === '8') ? 'none' : 'block',
                                }}
                                onClick={() => {
                                    if (titleForm.id === '8') {
                                        setIsPopupDelivery(true)
                                    }
                                }}
                            />
                        )
                    }
                </div>
            ) :
            (
                <div className='cartForm-form cartForm-form-legal'>
                    {
                        itemForm.map((titleForm) => 
                            titleForm.id === '9' ? <textarea key={titleForm.id} placeholder={titleForm.title} /> :
                            titleForm.isPhysicalPerson && ( titleForm.id !== '7' ?

                                <input key={titleForm.id} placeholder={titleForm.title} type='text'
                                    style={{
                                        gridColumnStart: windowRef.current > 500 ? (titleForm.id === '8' || isDelivery && titleForm.id === '6' ? '1' : 
                                            +titleForm.id % 2 !== 0 ? '2' : '1') : '1',
                                        gridColumnEnd: windowRef.current > 500 ? (titleForm.id === '8' || isDelivery && titleForm.id === '6' ? '3' : 
                                            +titleForm.id % 2 !== 0 ? '3' : '2') : '3',
                                            display: isDelivery && (titleForm.id === '7' || titleForm.id === '8') ? 'none' : 'block',
                                    }}
                                    onClick={() => {
                                        if (titleForm.id === '8') {
                                            setIsPopupDelivery(true)
                                        }
                                    }}
                        /> : <div className="cartDelveryDetail-adress-input">
                        <AddressSuggestions
                          token={API_KEY || ""}
                          value={addressCity}
                          onChange={setAddressCity}
                          
                          inputProps={{
                            placeholder: "Введите адрес доставки",
                          }}
                          defaultQuery={city ? city.city : 'Киров'}
                        />
                        
                      </div>
                      

                            )
                        )
                    }
                </div>
            )
        }
    </div>
  )
}

export default CartForm