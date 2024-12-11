// import React from 'react'

import { category } from "../../const/category"
import Select from "../Select"

const Category = () => {
  return (
    <div className="categoryPopup">
      <h3>Категории</h3>
      <div className="categoryPopup-input">
        <input type="text" placeholder="Найти категорию" />
      </div>
      <div className="categoryPopup-list">
        {
          category.map((item) => (
            <div className="categoryPopup-item">
                <h4>{item.title}</h4>
                <Select />
            </div>
          ))
        }
      </div>
      <div className="categoryPopup-btns">
        <button>Отменить</button>
        <button>Применить</button>
      </div>
    </div>
  )
}

export default Category