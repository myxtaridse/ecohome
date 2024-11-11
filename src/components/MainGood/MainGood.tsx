import React from "react";
import { Link } from "react-router-dom";

export interface MainGoodType {
  id: string;
  status: string;
  category: string;
  categoryMain: string;
  title: string;
  reviews: number;
  isCount: boolean;
  price: number;
  image: string;
}

const MainGood: React.FC<MainGoodType> = ({
  status,
  category,
  categoryMain,
  title,
  reviews,
  isCount,
  price,
  image,
}) => {
  if (!isCount) return "";
  return (
    <>
    <Link to="/goods/article">
    <div className="main-good">
      <div className="main-good-status">
        {status === "sale" ? "Скидка" : "Новинки"}
      </div>
      <div className="main-good-image flex">
        <img src={image} alt={title} />
      </div>
      <div className="good-category flex">
        <p>{categoryMain}</p>

        <span>/</span>
        <p>{category}</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </div>
      </div>
      <div className="good-reviews flex">
        <div className="good-star flex">
          {Array(5)
            .fill("")
            .map(() => (
              <div className="good-star-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                </svg>
              </div>
            ))}
        </div>
        <p>{reviews}</p>
      </div>
      <div className="good-count flex">
        <p>Есть в наличие</p>
        <h2>{price} ₽</h2>
      </div>
      <button>Добавить в корзину</button>
    </div>
    </Link></>
  );
};

export default MainGood;
