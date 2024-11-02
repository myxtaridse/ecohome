import React from "react";
import whatsApp from "../../assets/icons/footer-icons/whatsapp.svg";
import ozon from "../../assets/icons/footer-icons/ozon.svg";
import wildberries from "../../assets/icons/footer-icons/wildberries.svg";
import sber from "../../assets/icons/footer-icons/sber.svg";
import { CustomContext } from "../../layout/MainLayout";

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
  const { isPopup, setIsPopup }: any = React.useContext(CustomContext);
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
      <h1>+7-(833)-220-71-90</h1>
      <p className="footer-phone" onClick={() => setIsPopup(!isPopup)}>
        Заказать звонок
      </p>
      <h2 className="footer-mail">example@gmail.com</h2>
      <div className="footer-webSites">
        {webSites.map((item) => (
          <div className="footer-webSites-logo">
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
