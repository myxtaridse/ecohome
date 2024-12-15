import React from 'react'
import Select from '../Select'
import { ListGoodsPopupLayoutType } from '../../layout/ListGoodsPopupLayout'

const Brand: React.FC<ListGoodsPopupLayoutType> = ({list, title}) => {
  const [selectId, setSelectId] = React.useState<number[]>([]);
    const selectIdFn = (id: number) => {
      setSelectId(prev => [...prev, id])
    }

  const sortedList = React.useMemo(() => {
    if (!list) return {};

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sort = list.flat().sort((a: any, b: any) => 
      a.title.localeCompare(b.title, 'eng')
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return sort.reduce((acc: Record<string, any[]>, item: any) => {
      const firstLetter = item.title[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = []
      }
      acc[firstLetter].push(item)
      return acc;
    }, {})
  }, [list])

  
  
    return (
      <div className="categoryPopup">
        <h3>{title}</h3>
        <div className="categoryPopup-input">
          <input type="text" placeholder={`Найти ${title.toLowerCase()}`} />
        </div>
        <div className="categoryPopup-list">
          {
            sortedList && Object.keys(sortedList).map((letter) => (
              <>
                  <h3>{letter}</h3>
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    sortedList[letter].map((item: any) => (
                      <div key={item.id} className="categoryPopup-item" onClick={() => {
                        if (selectId.includes(item.id)) {
                          const filter = selectId.filter((selectItem) => selectItem !== item.id)
                          setSelectId(filter)
                        } else {
                          selectIdFn(item.id)
                        }
                      }}>
                          <h4>{item.title}</h4>
                          <Select isSelectAll={selectId.includes(item.id)} />
                      </div>
                    ))
                  }
              </>
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