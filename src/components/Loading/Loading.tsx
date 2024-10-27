import React from "react";
import logoText from "../../assets/icons/favicon/logo-main-text.svg";
import logoImg from "../../assets/icons/favicon/logo-main-img.svg";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-module">
        <img className="loading-logoText" src={logoText} />
        <div className="loading-car">
          <img src={logoImg} />
        </div>
        <div className="loading-line"></div>
        <p>Загрузка...</p>
      </div>
    </div>
  );
};

export default Loading;
