import React from 'react'
import Select from '../components/Select'

export interface ListGoodsPopupLayoutType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    list: any, 
    title: string
}

const ListGoodsPopupLayout: React.FC<ListGoodsPopupLayoutType> = ({list, title}) => {
    const [isSelectAll, setIsSelectAll] = React.useState(false)
    
    return (
      <div className="categoryPopup">
        <h3>{title}</h3>
        <div className="categoryPopup-input">
          <input type="text" placeholder={`Найти ${title.toLowerCase()}`} />
        </div>
        <div className="categoryPopup-list">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            list.map((item: any) => (
              <div key={item.id} className="categoryPopup-item" onClick={() => setIsSelectAll(!isSelectAll)}>
                  {
                    title === 'Цвет' && <div className='categoryPopup-item-color' style={{
                    background: item.title === 'бесцветный' ? `url(${item.image})` : item.color ? item.color : '',
                  }}></div>
                  }
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

export default ListGoodsPopupLayout