import React from "react";
import dataCities from "../../assets/cities/cities.json";
import { CustomContextMain } from "../../context/MainContext";

const Headpopup = () => {
  const [list, setList] = React.useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setCity}: any = React.useContext(CustomContextMain)

  const cities = dataCities
    .map((item) => item.cities.map((itemC) => {
      return {
        city: itemC,
        area: item.title
      }
    })).flat().sort((a, b) => {
      const cityA = a.city
      const cityB = b.city

      if (cityA.toLocaleLowerCase() > cityB.toLocaleLowerCase()) {
        return 1;
      } else if (cityA.toLocaleLowerCase() < cityB.toLocaleLowerCase()) {
        return -1;
      }

      return 0
    }
    )

  return (
    <div
      className="header-cities-popup-bg"
    >
      <div className="header-cities-popup">
        <div className="header-catalog-input header-popup-input">
          <input
            placeholder="Найти город"
            type="text"
            value={list}
            onChange={(e) => setList(e.target.value)}
          />
          <div className="header-catalog-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
          </div>
        </div>
        <div className="header-cities-help">Не нашли свой город?</div>
        <div className="header-cities-popup-list">

          {
            cities && cities.map((itemCities) => <div className="header-cities-popup-item"
              onClick={() => {
                setCity(itemCities)
              }}
            >
              {itemCities.city}, {itemCities.area}
            </div>)
          }

        </div>
      </div>
    </div>
  );
};

export default Headpopup;
