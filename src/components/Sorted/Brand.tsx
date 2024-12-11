import React from 'react'
import Select from '../Select'
import { ListGoodsPopupLayoutType } from '../../layout/ListGoodsPopupLayout'

const Brand: React.FC<ListGoodsPopupLayoutType> = ({list, title}) => {
  const [isSelectAll, setIsSelectAll] = React.useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listSort = list.flat().sort((a: any, b: any) => {
    const cityA = a.title
    const cityB = b.title

    if (cityA && cityB && (cityA.toLocaleLowerCase() > cityB.toLocaleLowerCase())) {
      return 1;
    } else if (cityA && cityB && (cityA.toLocaleLowerCase() < cityB.toLocaleLowerCase())) {
      return -1;
    }

    return 0
  }
  )
  
  
    return (
      <div className="categoryPopup">
        <h3>{title}</h3>
        <div className="categoryPopup-input">
          <input type="text" placeholder={`Найти ${title.toLowerCase()}`} />
        </div>
        <div className="categoryPopup-list">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            listSort && listSort.map((item: any) => (
              <div key={item.id} className="categoryPopup-item" onClick={() => setIsSelectAll(!isSelectAll)}>
                  <h4>{item.title}</h4>
                  <Select isSelectAll={isSelectAll} />
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

export default Brand