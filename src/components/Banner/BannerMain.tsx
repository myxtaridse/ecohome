import React from "react";
import banner1 from "../../assets/images-site/banner1.webp";
import banner1Mobile from "../../assets/images-site/banner-mobile-1.webp";
import banner2 from "../../assets/images-site/banner2.webp";
import banner2Mobile from "../../assets/images-site/banner-mobile-2.webp";
import banner3 from "../../assets/images-site/banner3.webp";
import banner3Mobile from "../../assets/images-site/banner-mobile-3.webp";
import banner4 from "../../assets/images-site/banner4.webp";
import banner4Mobile from "../../assets/images-site/banner-mobile-4.webp";
import g81 from "../../assets/images-site/Gr1.svg";
import Loading from "../Loading/Loading";
import { CustomContextMain } from "../../context/MainContext";

const gallery = [
  {
    id: 1,
    title: "Самый широкий ассортимент товаров для дома",
    subtitle: "более 8 тыс. позиций",
    url: banner1,
    urlMobile: banner1Mobile,
    path: "M20.5021 5.92225 12 1 3.49793 5.92225 12 10.8445 20.5021 5.92225ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555ZM13 22.4211 21.5 17.5V7.6555L13 12.5765V22.4211Z",
  },
  {
    id: 2,
    title:
      "Бесконечное доверие наших клиентов - бесконечные возможности для вас",
    subtitle: "408 оптовых покупателей в месяц",
    url: banner2,
    urlMobile: banner2Mobile,

    path: "M18.3643 10.9792C19.9264 12.5413 19.9264 15.0739 18.3643 16.636L12.7075 22.2929C12.317 22.6834 11.6838 22.6834 11.2933 22.2929L5.63642 16.636C4.07432 15.0739 4.07432 12.5413 5.63642 10.9792C7.19851 9.41709 9.73117 9.41709 11.2933 10.9792L11.9997 11.6856L12.7075 10.9792C14.2696 9.41709 16.8022 9.41709 18.3643 10.9792ZM12.0004 1C14.2095 1 16.0004 2.79086 16.0004 5C16.0004 7.20914 14.2095 9 12.0004 9C9.79124 9 8.00038 7.20914 8.00038 5C8.00038 2.79086 9.79124 1 12.0004 1Z",
  },
  {
    id: 3,
    title:
      "Централизованные склады с передовой логистикой - ключ к быстрой доставке",
    subtitle: "2300 кв.м. складских площадей",
    url: banner3,
    urlMobile: banner3Mobile,

    path: "M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM8.59208 13.808L7.60099 14.3802L8.6017 16.1133L9.5943 15.5402C9.98756 15.9116 10.467 16.193 10.9994 16.3512V17.4956H13.0007V16.3512C13.5331 16.1929 14.0125 15.9115 14.4057 15.5401L15.3984 16.1132L16.399 14.3801L15.4079 13.8078C15.4696 13.5478 15.5022 13.2766 15.5022 12.9978C15.5022 12.7189 15.4696 12.4477 15.4078 12.1877L16.399 11.6154L15.3983 9.88225L14.4056 10.4554C14.0124 10.084 13.533 9.80264 13.0006 9.64436V8.49998H10.9993V9.64436C10.4669 9.80265 9.98747 10.084 9.59421 10.4554L8.60164 9.88234L7.60099 11.6155L8.59205 12.1877C8.53034 12.4477 8.49768 12.7189 8.49768 12.9978C8.49768 13.2767 8.53035 13.5479 8.59208 13.808ZM12 14.4971C11.171 14.4971 10.499 13.8258 10.499 12.9978C10.499 12.1698 11.171 11.4985 12 11.4985C12.8289 11.4985 13.5009 12.1698 13.5009 12.9978C13.5009 13.8258 12.8289 14.4971 12 14.4971Z",
  },
  {
    id: 4,
    title: "От заказа до порога - бесплатно и мгновенно",
    subtitle: "102 города и поселка с бесплатной доставкой",
    url: banner4,
    urlMobile: banner4Mobile,

    path: "M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z",
  },
];

const BannerMain = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {windowRef}: any = React.useContext(CustomContextMain)
  const imageRef = React.useRef<HTMLImageElement>(null);

  const [index, setIndex] = React.useState(1);

  // React.useEffect(() => {
  //   // componentDidUpdate
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   let timerId: any;

  //   if (index < 4) {
  //     timerId = setInterval(() => {
  //       setIndex((prevIndex) => prevIndex + 1);
  //       // console.log(index);
  //     }, 7000);
  //   }
  //   if (index === 4) {
  //     setTimeout(() => {
  //       setIndex(1);
  //     }, 7000);
  //   }

  //   // componentDidUnmount
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [index]);

  if (!imageRef || imageRef === null) {
    return <Loading />;
  }

  return (
    <div className="banner">
      <button
        className="banner-arrow banner-arrow-left"
        disabled={index === 1}
        onClick={() => {
          if (index > 1) {
            setIndex((prevIndex) => prevIndex - 1);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>
      </button>
      <div>
        {gallery.map((item) => (
          <div
          key={item.id}
            className="banner-item"
            style={{
              transform: `translate(${
                item.id < index ? -100 : item.id === index ? 0 : 100
              }%)`,
              opacity: item.id === index ? "1" : "0",
            }}
          >
            <div className="banner-item-bg banner-text">
              <h1>{item.title}</h1>
              <div className="banner-subtext">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d={item.path}></path>
                  </svg>
                </div>
                <p>{item.subtitle}</p>
              </div>
            </div>
            <img
              ref={imageRef}
              className="banner-image"
              src={windowRef.current > 800 ? item.url : item.urlMobile}
              alt="banner"
            />
            {windowRef.current < 800 && (
              <>
                <img className="banner-image-svg" src={g81} alt="banner" />
                <button className="banner-button">
                  <p>Каталог продукции</p>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.0508 12.361L7.39395 18.0179L5.97974 16.6037L11.6366 10.9468L6.68684 5.99707H18.0006V17.3108L13.0508 12.361Z"></path>
                    </svg>
                  </div>
                </button>
              </>
            )}
          </div>
        ))}
      </div>
      <button
        disabled={index >= 4}
        className="banner-arrow banner-arrow-right"
        onClick={() => {
          if (index < 4) {
            setIndex((prevIndex) => prevIndex + 1);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default BannerMain;
