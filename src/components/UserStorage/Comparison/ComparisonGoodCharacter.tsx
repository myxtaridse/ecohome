import React from 'react'

interface ComparisonGoodCharacterType {
  itemCharacter: string
  valueParameter: string
  goodsLength: number
}

const ComparisonGoodCharacter: React.FC<ComparisonGoodCharacterType> = ({itemCharacter, valueParameter, goodsLength}) => {
  return (
    <div className='comparisonGoodsCharacter-block'>
            <h4>{itemCharacter}</h4>
        <div className='comparisonGoodsCharacter-flex'>
            {
              Array(goodsLength).fill("").map(() => <div className='comparisonGoodsCharacter-item'>{valueParameter}</div>)
            }
        </div>
    </div>
  )
}

export default ComparisonGoodCharacter