import React from 'react'
// import Rating from '../../Rating';

interface ComparisonGoodPriceType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    goods: any
}

const ComparisonGoodPrice: React.FC<ComparisonGoodPriceType> = ({goods}) => {
  return (
    <div className='comparisonGoodsCharacter-block'>
        <div className='comparisonGoodsCharacter-flex'>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              goods && goods.map((item: any) => {
                
                
                
                return <div className='comparisonGoodsCharacter-item'>
                    <h2>{
                        item.price
                    } ₽</h2>
                   
                </div>
              })
            }
        </div>
    </div>
  )
}

export default ComparisonGoodPrice