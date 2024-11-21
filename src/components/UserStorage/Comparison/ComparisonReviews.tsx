import React from 'react'
import Rating from '../../Rating';

interface ComparisonReviewsType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    goods: any
}

const ComparisonReviews: React.FC<ComparisonReviewsType> = ({goods}) => {
  return (
    <div className='comparisonGoodsCharacter-block'>
        <div className='comparisonGoodsCharacter-flex'>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              goods && goods.map((item: any) => {
                // const newItem = item.reviews.filter(itemParameter => itemParameter.titleParameter === itemSize);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const averageRating = item.reviews.reduce((sum: number, review: any) => {
                    
                    return sum + parseFloat(review.statusRev)
                }, 0);
                
                
                return <div className='comparisonReviews comparisonGoodsCharacter-item'>
                    <div className='comparisonReviews-flex'>
                    <Rating rating={averageRating ? averageRating / item.reviews.length : 5} />
                    <p>{averageRating ? averageRating / item.reviews.length : 5}</p>
                    </div>
                    <p>{item.reviews.length} оценки</p>
                    <p className='comparisonReviews-popular'>Популярный отзыв</p>
                </div>
              })
            }
        </div>
    </div>
  )
}

export default ComparisonReviews