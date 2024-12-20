import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderLogIn from "./HeaderLogIn";
import { CustomContextMain } from "../../context/MainContext";

const HeaderCatalogIcons = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {storageFavorite, setPathFavorite}: any = React.useContext(CustomContextMain);
  const location  = useLocation();
  
  
  return (
    <div className="header-catalog-icons">
      
      <Link to='/comparison'>
        <div className="header-catalog-icon-block">
          <div className="header-catalog-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(151,131,121,1)"
            >
              <path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path>
            </svg>
            <div className="header-icons-bell">
            <p>0</p> 
            </div>
            
          </div>
          <p>Сравнение</p>
        </div>
      </Link>
      <Link to='/favorite'>
      <div className="header-catalog-icon-block" onClick={() => setPathFavorite(location.pathname)}>
        <div className="header-catalog-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(151,131,121,1)"
          >
            <path d="M19.2426 4.75736C20.705 6.2228 21.2547 8.25005 20.8924 10.1368C21.4614 10.2972 21.9987 10.6002 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L13.978 18.5L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736ZM12.962 12.4646C12.346 13.0761 12.346 14.0615 12.962 14.673L17 18.6818L21.038 14.673C21.654 14.0615 21.654 13.0761 21.038 12.4646C20.414 11.8451 19.3962 11.8451 18.77 12.4668L16.9979 14.2206L15.591 12.825L15.2278 12.4646C14.6038 11.8451 13.586 11.8451 12.962 12.4646ZM4.17157 6.17157C2.68183 7.66131 2.60704 10.0473 3.97993 11.6232L10.9999 18.6543L12.559 17.092L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453C17.7877 10.6238 18.2921 10.3297 18.828 10.1632C19.2436 8.79577 18.9058 7.25122 17.827 6.1701C16.3279 4.66794 13.9076 4.60701 12.337 6.01687L11.0019 7.21524L9.66605 6.01781C8.09098 4.60597 5.67506 4.66808 4.17157 6.17157Z"></path>
          </svg>
          <div className="header-icons-bell">
          <p>{storageFavorite && storageFavorite.length ? storageFavorite.length : 0}</p>
          </div>
          
        </div>
        <p>Избранное</p>
      </div>
      </Link>
      <Link to='/cart'>
      <div className="header-catalog-icon-block" onClick={() => setPathFavorite(location.pathname)}>
        <div className="header-catalog-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(151,131,121,1)"
          >
            <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
          </svg>
         <div className="header-icons-bell">
         <p>0</p>
         </div>
        </div>
        <p>Корзина</p>
      </div>
      </Link>

      <Link to='/login'>
          <div className="header-catalog-login">
            <HeaderLogIn />
          </div>
      </Link>
    </div>
  );
};

export default HeaderCatalogIcons;
