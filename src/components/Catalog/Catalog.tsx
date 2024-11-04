import React from "react";
import { CustomContext } from "../../layout/MainLayout";
import avto from "../../assets/icons/category/avto.svg";
import gardenEquipment from "../../assets/icons/category/garden-equipment.svg";
import decor from "../../assets/icons/category/decor.svg";
import toys from "../../assets/icons/category/toys.svg";
import pets from "../../assets/icons/category/pets.svg";
import stationery from "../../assets/icons/category/stationery.svg";
import health from "../../assets/icons/category/health.svg";
import kitchen from "../../assets/icons/category/kitchen.svg";
import sofa from "../../assets/icons/category/sofa.svg";
import camping from "../../assets/icons/category/camping.svg";
import cooking from "../../assets/icons/category/cooking.svg";
import garden from "../../assets/icons/category/garden.svg";
import gardenTools from "../../assets/icons/category/garden-tools.svg";
import plumbing from "../../assets/icons/category/plumbing.svg";
import plate from "../../assets/icons/category/plate.svg";
import finishingMaterials from "../../assets/icons/category/finishing-materials.svg";
import bath from "../../assets/icons/category/bath.svg";
import household from "../../assets/icons/category/household-goods.svg";

const catalog = [
  {
    id: "a",
    title: "Автомобильные товары",
    link: "",
    svg: avto,
    list: [
      {
        id: "a1",
        subTitle: "Канистры",
        link: "",
      },
      {
        id: "a2",
        subTitle: "Перевозка груза",
        link: "",
      },
      {
        id: "a3",
        subTitle: "Уход за автомобилем",
        link: "",
      },
    ],
  },
  {
    id: "b",
    title: "Дачное водоснабжение и поливы",
    link: "",
    svg: gardenEquipment,
    list: [
      {
        id: "b1",
        subTitle: "Лейки",
        link: "",
      },
      {
        id: "b2",
        subTitle: "Опрыскиватели ",
        link: "",
      },
      {
        id: "b3",
        subTitle: "Садовые емкости для воды",
        link: "",
      },
      {
        id: "b4",
        subTitle: "Системы автополива",
        link: "",
      },
      {
        id: "b5",
        subTitle: "Шланги садовые",
        link: "",
      },
    ],
  },
  {
    id: "c",
    title: "Декор интерьера",
    link: "",
    svg: decor,
    list: [
      {
        id: "c1",
        subTitle: "Вазы",
        link: "",
      },
      {
        id: "c2",
        subTitle: "Коврики ",
        link: "",
      },
      {
        id: "c3",
        subTitle: "Корзины и органайзеры",
        link: "",
      },
      {
        id: "c4",
        subTitle: "Ящики почтовые",
        link: "",
      },
    ],
  },
  {
    id: "d",
    title: "Детские товары",
    link: "",
    svg: toys,
    list: [
      {
        id: "d1",
        subTitle: "Детские ванночки",
        link: "",
      },
      {
        id: "d2",
        subTitle: "Детские туалеты",
        link: "",
      },
      {
        id: "d3",
        subTitle: "Игрушки",
        link: "",
      },
      {
        id: "d4",
        subTitle: "Ледянки и санки",
        link: "",
      },
      {
        id: "d5",
        subTitle: "Посуда для кормления",
        link: "",
      },
      {
        id: "d6",
        subTitle: "Текстиль для детей",
        link: "",
      },
    ],
  },
  {
    id: "e",
    title: "Зоотовары",
    link: "",
    svg: pets,
    list: [
      {
        id: "e1",
        subTitle: "Аксессуары для кормления",
        link: "",
      },
      {
        id: "e2",
        subTitle: "Для выгула",
        link: "",
      },
      {
        id: "e3",
        subTitle: "Когтеточки и домики",
        link: "",
      },
      {
        id: "e4",
        subTitle: "Лотки и наполнители",
        link: "",
      },
      {
        id: "e5",
        subTitle: "Переноска для питомца",
        link: "",
      },
    ],
  },
  {
    id: "f",
    title: "Канцелярия и рукоделие",
    link: "",
    svg: stationery,
    list: [
      {
        id: "f1",
        subTitle: "Вышивка",
        link: "",
      },
      {
        id: "f2",
        subTitle: "Канцелярские ножи и ножницы",
        link: "",
      },
      {
        id: "f3",
        subTitle: "Органайзеры для хранения",
        link: "",
      },
      {
        id: "f4",
        subTitle: "Рисование и лепка",
        link: "",
      },
    ],
  },
  {
    id: "g",
    title: "Красота и здоровье",
    link: "",
    svg: health,
    list: [
      {
        id: "g1",
        subTitle: "Маникюр и педикюр",
        link: "",
      },
      {
        id: "g2",
        subTitle: "Органайзеры для хранения",
        link: "",
      },
      {
        id: "g3",
        subTitle: "Средства гигиены",
        link: "",
      },
    ],
  },
  {
    id: "h",
    title: "Кухонные принадлежности",
    link: "",
    svg: kitchen,
    list: [
      {
        id: "h1",
        subTitle: "Бумага, фольга и пакеты для выпечки",
        link: "",
      },
      {
        id: "h2",
        subTitle: "Дуршлаги и сито",
        link: "",
      },
      {
        id: "h3",
        subTitle: "Зажигалки для плиты",
        link: "",
      },
      {
        id: "h4",
        subTitle: "Закаточные машинки и аксессуары",
        link: "",
      },
      {
        id: "h5",
        subTitle: "Заточки для ножей и ножниц",
        link: "",
      },
      {
        id: "h6",
        subTitle: "Кухонная утварь",
        link: "",
      },
      {
        id: "h7",
        subTitle: "Ножи и разделочные доски",
        link: "",
      },
      {
        id: "h8",
        subTitle: "Открывалки",
        link: "",
      },
      {
        id: "h9",
        subTitle: "Порядок на кухне",
        link: "",
      },
      {
        id: "h10",
        subTitle: "Прихватки и руковицы",
        link: "",
      },
      {
        id: "h11",
        subTitle: "Терки и измельчители",
        link: "",
      },
      {
        id: "h12",
        subTitle: "Фильтры для воды",
        link: "",
      },
      {
        id: "h13",
        subTitle: "Хранение для продуктов и напитков",
        link: "",
      },
      {
        id: "h14",
        subTitle: "Щипцы, лопатки и половники для кухни",
        link: "",
      },
    ],
  },
  {
    id: "i",
    title: "Мебель",
    link: "",
    svg: sofa,
    list: [
      {
        id: "i1",
        subTitle: "Корпусная мебель",
        link: "",
      },
      {
        id: "i2",
        subTitle: "Мебель для хранения",
        link: "",
      },
      {
        id: "i3",
        subTitle: "Стулья и табуреты",
        link: "",
      },
    ],
  },
  {
    id: "j",
    title: "Отдых и пикник",
    link: "",
    svg: camping,
    list: [
      {
        id: "j1",
        subTitle: "Грили, барбекю и коптильни",
        link: "",
      },
      {
        id: "j2",
        subTitle: "Посуда для пикника",
        link: "",
      },
      {
        id: "j3",
        subTitle: "Термопосуда",
        link: "",
      },
      {
        id: "j4",
        subTitle: "Термосумки и аксессуары",
        link: "",
      },
      {
        id: "j5",
        subTitle: "Уголь, дрова и средства для розжига",
        link: "",
      },
    ],
  },

  {
    id: "k",
    title: "Посуда для приготовления",
    link: "",
    svg: cooking,
    list: [
      {
        id: "k1",
        subTitle: "Кастрюли",
        link: "",
      },
      {
        id: "k2",
        subTitle: "Ковши и маленькие кастрюльки",
        link: "",
      },
      {
        id: "k3",
        subTitle: "Посуда для духовки",
        link: "",
      },
      {
        id: "k4",
        subTitle: "Посуда для микроволновой печи",
        link: "",
      },
      {
        id: "k5",
        subTitle: "Сковороды",
        link: "",
      },
      {
        id: "k6",
        subTitle: "Формы для приготовления",
        link: "",
      },
      {
        id: "k7",
        subTitle: "Чайники и кофейники",
        link: "",
      },
    ],
  },
  {
    id: "l",
    title: "Сад и огород",
    link: "",
    svg: garden,
    list: [
      {
        id: "l1",
        subTitle: "Биотуалеты, дачные умывальники и души",
        link: "",
      },
      {
        id: "l2",
        subTitle: "Горшки и кашпо",
        link: "",
      },
      {
        id: "l3",
        subTitle: "Грунты, дренажи и удобрения",
        link: "",
      },
      {
        id: "l4",
        subTitle: "Опоры и подвязки для растений",
        link: "",
      },
      {
        id: "l5",
        subTitle: "Садовые сетки",
        link: "",
      },
      {
        id: "l6",
        subTitle: "Теплицы, парники и укрывные материалы",
        link: "",
      },
    ],
  },
  {
    id: "m",
    title: "Садовые инструменты",
    link: "",
    svg: gardenTools,
    list: [
      {
        id: "m1",
        subTitle: "Инструменты для обработки почвы",
        link: "",
      },
      {
        id: "m2",
        subTitle: "Инструменты для посадки и сбора урожая",
        link: "",
      },
      {
        id: "m3",
        subTitle: "Садовая техника",
        link: "",
      },
      {
        id: "m4",
        subTitle: "Садовые режущие инструменты",
        link: "",
      },
    ],
  },
  {
    id: "n",
    title: "Сантехника",
    link: "",
    svg: plumbing,
    list: [
      {
        id: "n1",
        subTitle: "Для очистки труб",
        link: "",
      },
      {
        id: "n2",
        subTitle: "Емкости для воды",
        link: "",
      },
      {
        id: "n3",
        subTitle: "Раковины и мойки",
        link: "",
      },
    ],
  },
  {
    id: "o",
    title: "Столовая посуда",
    link: "",
    svg: plate,
    list: [
      {
        id: "o1",
        subTitle: "Бокалы и стаканы",
        link: "",
      },
      {
        id: "o2",
        subTitle: "Графины и кувшины",
        link: "",
      },
      {
        id: "o3",
        subTitle: "Кружки",
        link: "",
      },
      {
        id: "o4",
        subTitle: "Кухонный текстиль",
        link: "",
      },
      {
        id: "o5",
        subTitle: "Сервировка стола",
        link: "",
      },
      {
        id: "o6",
        subTitle: "Столовые приборы",
        link: "",
      },
      {
        id: "o7",
        subTitle: "Тарелки и блюда",
        link: "",
      },
    ],
  },
  {
    id: "p",
    title: "Строительство и ремонт",
    link: "",
    svg: finishingMaterials,
    list: [
      {
        id: "p1",
        subTitle: "Двери и фурнитура",
        link: "",
      },
      {
        id: "p2",
        subTitle: "Крепежь для деревянных конструкций",
        link: "",
      },
      {
        id: "p3",
        subTitle: "Крепеж",
        link: "",
      },
      {
        id: "p4",
        subTitle: "Лестницы и стремянки",
        link: "",
      },
      {
        id: "p5",
        subTitle: "Малярные и отделочные инструменты",
        link: "",
      },
      {
        id: "p6",
        subTitle: "Окна и фурнитура",
        link: "",
      },
      {
        id: "p7",
        subTitle: "Электромонтаж и проводка",
        link: "",
      },
    ],
  },
  {
    id: "q",
    title: "Товары для ванной и бани",
    link: "",
    svg: bath,
    list: [
      {
        id: "q1",
        subTitle: "Аксессуары для банной печи",
        link: "",
      },
      {
        id: "q2",
        subTitle: "Аксессуары для ванной",
        link: "",
      },
      {
        id: "q3",
        subTitle: "Аксессуары для туалета",
        link: "",
      },
      {
        id: "q4",
        subTitle: "Ванные принадлежности",
        link: "",
      },
      {
        id: "q5",
        subTitle: "Органайзеры и флаконы",
        link: "",
      },
      {
        id: "q6",
        subTitle: "Текстиль для ванны",
        link: "",
      },
    ],
  },
  {
    id: "r",
    title: "Хозтовары",
    link: "",
    svg: household,
    list: [
      {
        id: "r1",
        subTitle: "Защита от вредителей",
        link: "",
      },
      {
        id: "r2",
        subTitle: "Моющие средства",
        link: "",
      },
      {
        id: "r3",
        subTitle: "Салфетки, тряпки и губки для уборки",
        link: "",
      },
      {
        id: "r4",
        subTitle: "Стирка и глажка",
        link: "",
      },
      {
        id: "r5",
        subTitle: "Сумки и пакеты",
        link: "",
      },
      {
        id: "r6",
        subTitle: "Тазы и ведра",
        link: "",
      },
      {
        id: "r6",
        subTitle: "Торговое оборудование",
        link: "",
      },
      {
        id: "r6",
        subTitle: "Уход за одеждой и обувью",
        link: "",
      },
      {
        id: "r6",
        subTitle: "Щетки, швабры и веники",
        link: "",
      },
    ],
  },
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );
  // const [isSubCategory, setIsSubCategory] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setIsCatalog, isCatalog, windowRef }: any = React.useContext(CustomContext);

  const [arrowDown, setArrowDown] = React.useState(false);
  
  return (
    <div
      className="catalog-block"
      onMouseLeave={() => {
        if (windowRef.current > 500) {
          setIsCatalog(false)
        }
      }}
      
    >
      <div className="catalog">
        {catalog.map((item) => (
          <div
            key={item.id}
            className="catalog-item"
            onClick={() => {
              setActiveCategory(item.id);
              setArrowDown(!arrowDown);
            }}
          >
            <div className="catalog-item-main">
            <img style={{ width: "40px" }} src={item.svg} />
            <p>{item.title}</p>
            <div className={["catalog-arrow", "catalog-arrow-main", arrowDown && activeCategory === item.id ? 'catalog-arrow-down' : ''].join(" ")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </div>
            </div>

            {/* {activeCategory === item.id && ( */}
              <div className={["subCategory", windowRef.current <= 500 && activeCategory === item.id && arrowDown && "catalog-item-sub-show"].join(" ")}>
                {item.list.map((li) => (
                  <div key={li.id} className="catalog-item-main">
                    <p>{li.subTitle}</p>
                    <div className="catalog-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
