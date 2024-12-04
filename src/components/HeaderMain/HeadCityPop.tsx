import React from "react";
import Headpopup from "./Headpopup";
// import Arrow from "../Arrow";
import { CustomContextMain } from "../../context/MainContext";

const HeadCityPop = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {city}: any = React.useContext(CustomContextMain);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setIsMore, setChildrenPopup, isMore}: any = React.useContext(CustomContextMain);

  const morePopupFn = () => {
      setIsMore(true)
      setChildrenPopup(
          <div className='goodStars-popup-block'>
               <Headpopup />
           </div>
      )
  }

  React.useEffect(() => {
    if (isMore) {
      document.documentElement.style.overflowY = 'hidden';
    } 
    
    
    if (!isMore) {
      document.documentElement.style.overflowY = 'scroll';
    }
  }, [isMore])

  
  return (
    <div className="header-cities">
      <div className="header-myCity" onClick={morePopupFn}>
        <div className="header-city-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(207,78,50,1)"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM16.5 7.5L14 14L7.5 16.5L10 10L16.5 7.5ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"></path>
          </svg>
        </div>

        <h2>{city ? city.city : "Киров"}</h2>
        {/* <div className="header-arrow">
        <Arrow />
        </div> */}
      </div>
      
    </div>
  );
};

export default HeadCityPop;
