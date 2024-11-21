import React from "react";

const FooterClient = () => {
  const [isShowList, setIsShowList] = React.useState(false);
  return (
    <div className="footer-client">
      <div
        onClick={() => setIsShowList(!isShowList)}
        className="footer-info-title"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM11 12H13V17H11V12ZM11 9H13V11H11V9Z"></path>
          </svg>
        </div>
        <h2>Клиентам</h2>
        <div
          className={[
            "footer-title-arrow",
            isShowList ? "footer-title-arrow-down" : "",
          ].join(" ")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
          </svg>
        </div>
      </div>

      <div
        className={[
          "footer-list-down-client",
          isShowList ? "showList showListClient" : "",
        ].join(" ")}
      >
        <p>Вопрос-ответ</p>
        <p>Условия доставки</p>
        <p>Условия оплаты</p>
        <p>Гарантия на товар</p>
        <p>Обзоры</p>
        <p>Статьи</p>
      </div>
    </div>
  );
};

export default FooterClient;
