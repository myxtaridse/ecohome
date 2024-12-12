import React from 'react'
import Select from '../Select'
import { ListGoodsPopupLayoutType } from '../../layout/ListGoodsPopupLayout'

const Brand: React.FC<ListGoodsPopupLayoutType> = ({list, title}) => {
  const [isSelectAll, setIsSelectAll] = React.useState(false)

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
              <div>
                  <h3>{letter}</h3>
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    sortedList[letter].map((item: any) => (
                      <div key={item.id} className="categoryPopup-item" onClick={() => setIsSelectAll(!isSelectAll)}>
                          <h4>{item.title}</h4>
                          <Select isSelectAll={isSelectAll} />
                      </div>
                    ))
                  }
              </div>
            ))
          }
          {/*
          {alphabet && Object.keys(alphabet).map((itemAlphabet: any) => (
            <div>
                <h3 onClick={() => console.log(alphabet[itemAlphabet])
                }>{itemAlphabet}</h3>
                {alphabet.length &&
                  alphabet[itemAlphabet].map((item) => (
                    <div key={item.id} className="categoryPopup-item" onClick={() => setIsSelectAll(!isSelectAll)}>
                      <h4>{item.title}</h4>
                      <Select isSelectAll={isSelectAll} />
                  </div>
                  ))
                }
            </div>
          ))
          } */}
        </div>
        <div className="categoryPopup-btns">
          <button>Отменить</button>
          <button>Применить</button>
        </div>
      </div>
    )
}

export default Brand