// import React from "react";
import benefitLine1 from "../../assets/icons/benefit-line/benefit1.svg";
import benefitLine2 from "../../assets/icons/benefit-line/benefit2.svg";
import benefitLine3 from "../../assets/icons/benefit-line/benefit3.svg";
import benefitLine4 from "../../assets/icons/benefit-line/benefit4.svg";
import benefitLine5 from "../../assets/icons/benefit-line/benefit5.svg";

const MainBenefitLine = () => {
  return (
    <div className="benefitLine-block">
      <div className="benefitLine">
        <div className="benefitLine-image">
          <img src={benefitLine1} />
        </div>
        <p>Минимальная закупка от 3 тыс. рублей</p>
      </div>
      <div className="benefitLine">
        <div className="benefitLine-image">
          <img src={benefitLine2} />
        </div>
        <p>Бесплатная доставка по всей России</p>
      </div>
      <div className="benefitLine">
        <div className="benefitLine-image">
          <img src={benefitLine3} />
        </div>
        <p>Отсрочка платежа от 15 календ. дней</p>
      </div>
      <div className="benefitLine">
        <div className="benefitLine-image">
          <img src={benefitLine4} />
        </div>
        <p>Гарантия качества всех товаров</p>
      </div>
      <div className="benefitLine">
        <div className="benefitLine-image">
          <img src={benefitLine5} />
        </div>

        <p>
          Гибкая система <br /> скидок
        </p>
      </div>
    </div>
  );
};

export default MainBenefitLine;
