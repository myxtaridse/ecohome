import React from "react";
import { CustomContextMain } from "../context/MainContext";

const CallPhone = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setIsPopup }: any = React.useContext(CustomContextMain);
  let old = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function inputPhone(e: any) {
    const inpLength = e.target.value.length;

    if (inpLength < old) {
      old--;
      return;
    }
    if (inpLength === 0) e.target.value = e.target.value + "+7-(";
    if (inpLength === 4) e.target.value = e.target.value + "(";
    if (inpLength === 7) e.target.value = e.target.value + ")-";
    if (inpLength === 12) e.target.value = e.target.value + "-";
    if (inpLength === 15) e.target.value = e.target.value + "-";
    if (inpLength === 18)
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);

    old++;
  }
  return (
    <div
      className="header-cities-popup-bg"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick={(e: any) => {
        if (e.target.className === "header-cities-popup-bg") {
          setIsPopup(false);
        }
      }}
    >
      <div className="header-cities-popup header-phone-module">
        <h1>Заказать звонок</h1>
        <input type="text" placeholder="Введите ваше имя (обязательно)" />
        <input
          type="text"
          placeholder="Введите ваш номер (обязательно)"
          onKeyDown={(e) => inputPhone(e)}
        />

        <div className="header-phone-module-btns">
          <button>Отправить заявку</button>
          <button>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default CallPhone;
