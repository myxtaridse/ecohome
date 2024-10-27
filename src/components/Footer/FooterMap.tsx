import React from "react";
import mapLoad from "../../assets/images-site/map-load.png";

const FooterMap = () => {
  // задать ref на карты??, чтобы показывать Loading
  const [isLoading, setLoading] = React.useState(true);

  console.log(isLoading);

  return (
    <div className="footer-yandex">
      {isLoading && <img src={mapLoad} className="footer-map" />}

      <iframe
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={() => setLoading(false)}
        className="footer-map"
        title="map"
        src="https://api-maps.yandex.ru/frame/v1/-/CDd-4Cic?"
      ></iframe>
      {/* ) : (
        <div>Loading</div>
      )} */}

      <iframe
        className="footer-review"
        src="https://yandex.ru/maps-reviews-widget/1408067184?reviews"
      ></iframe>
      {/* https://yandex.ru/maps/org/ekokhozbyt/1408067184/ */}
    </div>
  );
};

export default FooterMap;
