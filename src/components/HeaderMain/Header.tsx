import React from "react";
import Navheader from "./Navheader";
import HeadCityPop from "./HeadCityPop";
import HeadContacts from "./HeadContacts";
import HeaderLogo from "../HeaderCatalog/HeaderLogo";
import HeaderLogIn from "../HeaderCatalog/HeaderLogIn";
import { Link } from "react-router-dom";

const Header = () => {
  // const windowRef = React.useRef(window.innerWidth);
  const popupRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="header">
      <Link to='/'>
        <div className="header-logo-block">
          <HeaderLogo />
        </div>
      </Link>
      <div className="header-info">
        <div
          className="header-info-svg"
          onMouseMove={() => {
            if (popupRef.current) popupRef.current.style.display = "block";
            setTimeout(() => {
              if (popupRef.current) popupRef.current.style.display = "none";
            }, 5000);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#cf4e32"
            transform="rotate(180)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M21.5609 10.7381L20.2109 9.15812C19.9609 8.85812 19.7509 8.29813 19.7509 7.89813V6.19812C19.7509 5.13812 18.8809 4.26812 17.8209 4.26812H16.1209C15.7209 4.26812 15.1509 4.05813 14.8509 3.80812L13.2709 2.45812C12.5809 1.86813 11.4509 1.86813 10.7609 2.45812L9.16086 3.80812C8.86086 4.05813 8.30086 4.26812 7.90086 4.26812H6.17086C5.11086 4.26812 4.24086 5.13812 4.24086 6.19812V7.89813C4.24086 8.28813 4.04086 8.84812 3.79086 9.14812L2.44086 10.7381C1.86086 11.4381 1.86086 12.5581 2.44086 13.2381L3.79086 14.8281C4.04086 15.1181 4.24086 15.6881 4.24086 16.0781V17.7881C4.24086 18.8481 5.11086 19.7181 6.17086 19.7181H7.91086C8.30086 19.7181 8.87086 19.9281 9.17086 20.1781L10.7509 21.5281C11.4409 22.1181 12.5709 22.1181 13.2609 21.5281L14.8409 20.1781C15.1409 19.9281 15.7009 19.7181 16.1009 19.7181H17.8009C18.8609 19.7181 19.7309 18.8481 19.7309 17.7881V16.0881C19.7309 15.6881 19.9409 15.1281 20.1909 14.8281L21.5409 13.2481C22.1509 12.5681 22.1509 11.4381 21.5609 10.7381ZM11.2509 8.12813C11.2509 7.71813 11.5909 7.37813 12.0009 7.37813C12.4109 7.37813 12.7509 7.71813 12.7509 8.12813V12.9581C12.7509 13.3681 12.4109 13.7081 12.0009 13.7081C11.5909 13.7081 11.2509 13.3681 11.2509 12.9581V8.12813ZM12.0009 16.8681C11.4509 16.8681 11.0009 16.4181 11.0009 15.8681C11.0009 15.3181 11.4409 14.8681 12.0009 14.8681C12.5509 14.8681 13.0009 15.3181 13.0009 15.8681C13.0009 16.4181 12.5609 16.8681 12.0009 16.8681Z"
                fill="#E8EFF5"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <p ref={popupRef}>
          Сайт предназначен для работы с юридическими лицами{" "}
        </p>
      </div>
      <HeadCityPop />
      <Navheader />
      <HeadContacts />
      <div className="header-login">
        <HeaderLogIn />
      </div>
    </div>
  );
};

export default Header;
