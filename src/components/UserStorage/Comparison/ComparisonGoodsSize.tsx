import React from 'react'

interface ComparisonGoodsSizeType {
    itemSize: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    goods: any
}

const ComparisonGoodsSize: React.FC<ComparisonGoodsSizeType> = ({itemSize, goods}) => {
  return (
    <div className='comparisonGoodsCharacter-block'>
        <h4>{itemSize}</h4>
        <div className='comparisonGoodsCharacter-flex'>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              goods && goods.map((item: any) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const newItem = item.parameter.filter((itemParameter: any) => itemParameter.titleParameter === itemSize);
                
                return <div className='comparisonGoodsCharacter-item'>{newItem[0].valueParameter}</div>
              })
            }
        </div>
    </div>
  )
}

export default ComparisonGoodsSize