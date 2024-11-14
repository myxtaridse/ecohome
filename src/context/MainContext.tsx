import React from 'react';

export const CustomContextMain = React.createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MainContext = ({children}: any) => {

    const windowRef = React.useRef(window.innerWidth);
    const [isCatalog, setIsCatalog] = React.useState(false);
    const [isPopup, setIsPopup] = React.useState(false);
    const [pathValue, setPathValue] = React.useState([]);
    const popupRef = React.useRef<HTMLDivElement | null>(null);
  
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
    };

  return (
    <CustomContextMain.Provider value={value}>
        {children}
    </CustomContextMain.Provider>
  )
}

export default MainContext;