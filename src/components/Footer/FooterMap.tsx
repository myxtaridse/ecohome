import React from "react";
import mapLoad from "../../assets/images-site/map-load.webp";

const FooterMap = () => {
  const [isLoading, setLoading] = React.useState(true);
  return (
    <div className="footer-map">
      <div className="footer-adress">
        <h4>г. Киров, ул. Складская д. 33</h4>
        <h4>Пн-Пт: с 8 до 17</h4>
      </div>
      {isLoading && <img src={mapLoad} className="footer-map" />}
      <iframe
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={() => setLoading(false)}
        className="footer-map"
        title="map"
        src="https://api-maps.yandex.ru/frame/v1/-/CDd-4Cic?z=12"
      ></iframe>
    </div>
  );
};

export default FooterMap;
