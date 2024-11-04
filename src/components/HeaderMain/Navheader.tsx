import React from "react";

const Navheader = () => {
  const popupRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <div className="header-navigation">
      <div
        className="header-nav-widget"
        // onClick={() => {
        //   if (popupRef.current)
        //     popupRef.current.style.transform =
        //       popupRef.current.style.transform === "scaleY(1)"
        //         ? "scaleY(0)"
        //         : "scaleY(1)";
        // }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
      </div>
      <div className="header-nav" ref={popupRef}>
        <a href="#">О компании</a>
        <a href="#">Оплата</a>
        <a href="#">Доставка</a>
        <a href="#">Контакты</a>
      </div>
    </div>
  );
};

export default Navheader;
