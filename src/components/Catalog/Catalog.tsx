import React from "react";
import { CustomContextMain } from "../../context/MainContext";
import Arrow from "../Arrow";
import { category } from "../../const/category";



const Catalog = () => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(
    null
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setIsCatalog, windowRef }: any = React.useContext(CustomContextMain);

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
        {category.map((item) => (
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
              <Arrow />
            </div>
            </div>

            {/* {activeCategory === item.id && ( */}
              <div className={["subCategory", windowRef.current <= 500 && activeCategory === item.id && arrowDown ? "catalog-item-sub-show" : ''].join(" ")}>
                {item.list.map((li) => (
                  <div key={li.id} className="catalog-item-main">
                    <p>{li.subTitle}</p>
                    <div className="catalog-arrow">
                      <Arrow />
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
