import React from 'react'
import ComparisonGoodMain from './ComparisonGoodMain';
import ComparisonGoodCharacter from './ComparisonGoodCharacter';
import ComparisonGoodsSize from './ComparisonGoodsSize';
import ComparisonReviews from './ComparisonReviews';
import { CustomContextMain } from '../../../context/MainContext';
import ComparisonGoodPrice from './ComparisonGoodPrice';

interface ComparisonGoodsType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goods: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  characterAll: any
}

const ComparisonGoods: React.FC<ComparisonGoodsType> = ({goods, characterAll}) => {
  const [isSelectAll, setIsSelectAll] = React.useState(false);
  const heightGood = React.useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {windowRef}: any = React.useContext(CustomContextMain)
  
  


  return (
    <div className='comparisonGoods' onClick={() => setIsSelectAll(!isSelectAll)}>
        
        <div className='comparisonGoods-flex' ref={heightGood}>
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            goods.map((itemGood: any) => 
              <div className='comparisonGoods-item' style={{height: `${heightGood.current?.offsetHeight}px`}}>
                <ComparisonGoodMain isSelectAll={isSelectAll} itemGood={itemGood} windowRef={windowRef} />
              </div>
            )
          }
        </div>
        {
          windowRef.current <= 500 && (
            <div className='comparisonGoodsSize'>
              <h2>Цена</h2>
              {
                    <ComparisonGoodPrice goods={goods} />
                }
            </div>
          )
        }
        <div className='comparisonGoodsSize'>
          <h2>Оценки</h2>
          {
                <ComparisonReviews goods={goods} />
            }
        </div>
        <div className='comparisonGoodsCharacter'>
          {
            goods ? (
              
          <>
            <h2>Сравнение характеристик</h2>
            {
              
              characterAll && characterAll.map((itemCharacter: string) => 
                
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const titleParameter = goods?.flatMap((itemGood: any) => itemGood.parameter || []).map((characterItemGood: any) => {
                    if (characterItemGood.titleParameter === itemCharacter) {
                      return characterItemGood.valueParameter
                    } else {
                      return null
                    }
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  }).filter((item: any) => item !== null);
                  
                  const newTitle = Array.from(new Set(titleParameter)).join("");
                  
                  
                  return <ComparisonGoodCharacter itemCharacter={itemCharacter} valueParameter={newTitle} goodsLength={goods.length} />
                }
             )
                
              
            }
          </>
       
            ) : ''
          }
        </div>
        <div className='comparisonGoodsSize'>
          <h2>Сравнение размеров</h2>
          {
              ['Высота предмета', 'Ширина предмета', 'Глубина предмета', 'Вес с упаковкой (кг)'].map((itemSize: string) => 
                <ComparisonGoodsSize itemSize={itemSize} goods={goods} />
              )
            }
        </div>
    </div>
  )
}

export default ComparisonGoods