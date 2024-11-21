import React from 'react';

export const CustomContextMain = React.createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainContext = ({children}: any) => {

    const windowRef = React.useRef(window.innerWidth);
    const [isCatalog, setIsCatalog] = React.useState(false);
    const [city, setCity] = React.useState();
    const [isPopup, setIsPopup] = React.useState(false);
    const [isPopupDelivery, setIsPopupDelivery] = React.useState(false);
    const [pathValue, setPathValue] = React.useState([]);
    const [pathFavorite, setPathFavorite] = React.useState('/');
    const popupRef = React.useRef<HTMLDivElement | null>(null);
    const storage = localStorage.getItem('myFavorite');
    const [storageFavorite, setStorageFavorite] = React.useState<string | null>(null);

    // // delivery-data
    // const [basket, setBasket] = React.useState([]);
    // const [isDelivery, setIsDelivery] = React.useState(false);
    // // form-data
    // const [nameCompany, setNameCompany] = React.useState('');
    // const [INN, setINN] = React.useState('');
    // const [KPP, setKPP] = React.useState('');
    // const [legalAddress, setLegalAddress] = React.useState('');
    // const [contactPerson, setContactPerson] = React.useState('');
    // const [numberPhone, setNumberPhone] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [address, setAddress] = React.useState('');
    // const [commentsOrder, setCommentsOrder] = React.useState('')

    React.useEffect(() => {
      if (storage) {
        
        if (!storageFavorite) {
          setStorageFavorite(JSON.parse(storage));
        }
        if (storageFavorite) {
          localStorage.setItem('myFavorite', JSON.stringify(storageFavorite))
          
        }
        
      }
     
    }, [storage, storageFavorite]);

    React.useEffect(() => {
      if (!storage) {
        localStorage.setItem('myFavorite', JSON.stringify([]))
      } 
     
    }, [storage]);

  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value: any = {
      windowRef,
      isCatalog,
      setIsCatalog,
      popupRef,
      isPopup,
      setIsPopup,
      pathValue,
      setPathValue,
      storage,
      setPathFavorite,
      pathFavorite,
      storageFavorite,
      setStorageFavorite,
      isPopupDelivery,
      setIsPopupDelivery,
      city, 
      setCity
    };

  return (
    <CustomContextMain.Provider value={value}>
        {children}
    </CustomContextMain.Provider>
  )
}

export default MainContext;