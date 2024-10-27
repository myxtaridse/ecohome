import React from "react";
import FooterClient from "./FooterClient";
import megaMarket from "../../assets/icons/footer-icons/sber.svg";
import ozon from "../../assets/icons/footer-icons/ozon.svg";
import wildberries from "../../assets/icons/footer-icons/wildberries.svg";
import whatsapp from "../../assets/icons/footer-icons/whatsapp.svg";

const footerGridInfo = [
  {
    title: "Клиентам",
    list: [
      {
        titleItem: "Вопрос-ответ",
        svg: "",
        link: "",
      },
      {
        titleItem: "Условия оплаты",
        svg: "",
        link: "",
      },
      {
        titleItem: "Условия доставки",
        svg: "",
        link: "",
      },
      {
        titleItem: "Гарантия на товар",
        svg: "",
        link: "",
      },
      {
        titleItem: "Статьи",
        svg: "",
        link: "",
      },
      {
        titleItem: "Производители",
        svg: "",
        link: "",
      },
      {
        titleItem: "Обзоры",
        svg: "",
        link: "",
      },
    ],
  },
  {
    title: "О компании",
    list: [
      {
        titleItem: "Мегамаркет",
        svg: megaMarket,
        link: "",
      },
      {
        titleItem: "Ozon",
        svg: ozon,
        link: "",
      },
      {
        titleItem: "Wildberries",
        svg: wildberries,
        link: "",
      },
      {
        titleItem: "О компании",
        svg: "",
        link: "",
      },
      {
        titleItem: "Сотрудники",
        svg: "",
        link: "",
      },
      {
        titleItem: "Отзывы",
        svg: "",
        link: "",
      },
      {
        titleItem: "Новости",
        svg: "",
        link: "",
      },
      {
        titleItem: "Вакансии",
        svg: "",
        link: "",
      },
    ],
  },
  {
    title: "Обратная связь",
    list: [
      {
        titleItem: "WhatsApp",
        svg: whatsapp,
        link: "",
      },
      {
        titleItem: "Задать вопрос",
        svg: "",
        link: "",
      },
      {
        titleItem: "example@gmail.com",
        svg: "",
        link: "",
      },
      {
        titleItem: "Заказать звонок",
        svg: "",
        link: "",
      },
      {
        titleItem: "+7-(833)-220-71-90",
        svg: "",
        link: "",
      },
      {
        titleItem: "г. Киров, ул. Складская д. 33",
        svg: "",
        link: "",
      },
      {
        titleItem: "Пн-Пт: с 8 до 17",
        svg: "",
        link: "",
      },
    ],
  },
];

const FooterGrid = () => {
  return (
    <div className="footer-info">
      {footerGridInfo.map((item) => (
        <FooterClient {...item} />
      ))}
      <div className="footer-news">
        <div className="footer-news-title">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
            </svg>
          </div>
          <p>Подписывайтесь на новости и акции</p>
        </div>
        <div className="footer-news-input">
          <input type="text" placeholder="Оставьте свой E-mail" />
          <button>Подписаться</button>
        </div>
        <div className="footer-docs">
          <p>
            Сводные данные о результатах проведения специальной оценки условий
            труда.
          </p>
          <a href="#">Заключение эксперта по результатам СОУТ (833 КБ)</a>
          <a href="#">Декларация соответствия условий труда (734 КБ)</a>
        </div>
      </div>
      <div className="footer-copyright">
        <h4>2024 OOO “ЭКОХОЗБЫТ”</h4>
        <p>
          Вы принимаете условия{" "}
          <a href="">политики в отношении обработки персональных данных</a> и
          пользовательского соглашения каждый раз, когда оставляете свои данные
          в любой форме обратной связи на сайте ecohome-business.ru
        </p>
      </div>
    </div>
  );
};

export default FooterGrid;
