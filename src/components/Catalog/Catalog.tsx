import React from "react";
import { CustomContext } from "../../layout/MainLayout";
import stationery from "../../assets/icons/category/stationery.svg";
import sofa from "../../assets/icons/category/sofa.svg";
import technic from "../../assets/icons/category/technic.svg";
import chemistry from "../../assets/icons/category/chemistry.svg";
import health from "../../assets/icons/category/health.svg";
import handiwork from "../../assets/icons/category/handiwork.svg";
import householdGoods from "../../assets/icons/category/household-goods.svg";
import avto from "../../assets/icons/category/avto.svg";
import gardenEquipment from "../../assets/icons/category/garden-equipment.svg";
import garden from "../../assets/icons/category/garden.svg";
import gardenTools from "../../assets/icons/category/garden-tools.svg";
import textile from "../../assets/icons/category/textile.svg";
import camping from "../../assets/icons/category/camping.svg";
import plate from "../../assets/icons/category/plate.svg";
import finishingMaterials from "../../assets/icons/category/finishing-materials.svg";
import toys from "../../assets/icons/category/toys.svg";
import pets from "../../assets/icons/category/pets.svg";
import decor from "../../assets/icons/category/decor.svg";
import shoe from "../../assets/icons/category/shoe.svg";
import bag from "../../assets/icons/category/bag.svg";
import children from "../../assets/icons/category/children.svg";
import keeping from "../../assets/icons/category/keeping.svg";
import plumbing from "../../assets/icons/category/plumbing.svg";
import buildingMaterials from "../../assets/icons/category/building-materials.svg";

const catalog = [
  {
    title: "Автотовары",
    link: "",
    svg: avto,
    float: false,
  },
  {
    title: "Аксессуары",
    link: "",
    svg: bag,
    float: false,
  },
  {
    title: "Аксессуары для обуви",
    link: "",
    svg: shoe,
    float: false,
  },
  {
    title: "Бытовая техника",
    link: "",
    svg: technic,
    float: false,
  },
  {
    title: "Бытовая химия",
    link: "",
    svg: chemistry,
    float: false,
  },
  {
    title: "Декор интерьера",
    link: "",
    svg: decor,
    float: false,
  },
  {
    title: "Зоотовары",
    link: "",
    svg: pets,
    float: false,
  },
  {
    title: "Игрушки",
    link: "",
    svg: toys,
    float: false,
  },
  {
    title: "Канцелярия",
    link: "",
    svg: stationery,
    float: false,
  },
  {
    title: "Красота и здоровье",
    link: "",
    svg: health,
    float: false,
  },
  {
    title: "Мебель",
    link: "",
    svg: sofa,
    float: false,
  },
  {
    title: "Отделочные материалы",
    link: "",
    svg: finishingMaterials,
    float: false,
  },
  {
    title: "Посуда и инвентарь",
    link: "",
    svg: plate,
    float: false,
  },
  {
    title: "Рукоделие",
    link: "",
    svg: handiwork,
    float: true,
  },

  {
    title: "Сад и огород",
    link: "",
    svg: garden,
    float: true,
  },
  {
    title: "Садовая техника",
    link: "",
    svg: gardenEquipment,
    float: true,
  },
  {
    title: "Садовые инструменты",
    link: "",
    svg: gardenTools,
    float: true,
  },

  {
    title: "Сантехника",
    link: "",
    svg: plumbing,
    float: true,
  },
  {
    title: "Строительные материалы",
    link: "",
    svg: buildingMaterials,
    float: true,
  },
  {
    title: "Текстиль для дома",
    link: "",
    svg: textile,
    float: true,
  },
  {
    title: "Товары для малышей",
    link: "",
    svg: children,
    float: true,
  },
  {
    title: "Товары для отдыха и кемпинга",
    link: "",
    svg: camping,
    float: true,
  },

  {
    title: "Хозяйственные товары",
    link: "",
    svg: householdGoods,
    float: true,
  },
  {
    title: "Хранение",
    link: "",
    svg: keeping,
    float: true,
  },
];

const Catalog = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setIsCatalog, isCatalog }: any = React.useContext(CustomContext);
  return (
    <div
      className="catalog-block"
      onMouseLeave={() => setIsCatalog(false)}
      style={{ display: isCatalog ? "block" : "none" }}
    >
      <div className="catalog">
        {catalog.map((item) => (
          <div className="catalog-item">
            <img style={{ width: "40px" }} src={item.svg} />
            <p>{item.title}</p>
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
    </div>
  );
};

export default Catalog;
