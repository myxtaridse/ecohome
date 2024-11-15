import React from 'react';

export const CustomContextMain = React.createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainContext = ({children}: any) => {

    const windowRef = React.useRef(window.innerWidth);
    const [isCatalog, setIsCatalog] = React.useState(false);
    const [isPopup, setIsPopup] = React.useState(false);
    const [pathValue, setPathValue] = React.useState([]);
    const [pathFavorite, setPathFavorite] = React.useState('/');
    const popupRef = React.useRef<HTMLDivElement | null>(null);
    const storage = localStorage.getItem('myFavorite');
    const [storageFavorite, setStorageFavorite] = React.useState<string | null>(JSON.parse(storage!))

  
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
      setStorageFavorite
    };

  return (
    <CustomContextMain.Provider value={value}>
        {children}
    </CustomContextMain.Provider>
  )
}

export default MainContext;