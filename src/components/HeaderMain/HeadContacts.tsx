import React from "react";
import { CustomContextMain } from "../../context/MainContext";

const HeadContacts = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { popupRef, isPopup, setIsPopup }: any = React.useContext(
    CustomContextMain
  );
  return (
    <div className="header-contacts">
      <div className="header-phone">
        <div className="header-map">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(207,78,50,1)"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
          </svg>
        </div>
        <div>Пн-Пт: c 7.30 до 18.00</div>
      </div>
      <div className="header-phone">
        <div className="header-map">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(207,78,50,1)"
          >
            <path d="M11 17.9381C7.05369 17.446 4 14.0796 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.0796 16.9463 17.446 13 17.9381V20.0116C16.9463 20.1039 20 20.7351 20 21.5C20 22.3284 16.4183 23 12 23C7.58172 23 4 22.3284 4 21.5C4 20.7351 7.05369 20.1039 11 20.0116V17.9381ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z"></path>
          </svg>
        </div>
        <div>Киров, ул. Складская, д. 9</div>
      </div>
      <div
        className="header-phone hover"
        onMouseMove={() => {
          if (popupRef.current) popupRef.current.style.display = "block";
          setTimeout(() => {
            if (popupRef.current) popupRef.current.style.display = "none";
          }, 5000);
        }}
      >
        <div className="header-map">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(207,78,50,1)"
          >
            <path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
          </svg>
        </div>
        <div className="header-phone-number">+7-(800)-555-55-55</div>
        <div
          onClick={() => setIsPopup(!isPopup)}
          ref={popupRef}
          className="header-phone-popup"
        >
          <div className="header-phone-popup-speech">Заказать звонок</div>
        </div>
      </div>
    </div>
  );
};

export default HeadContacts;
