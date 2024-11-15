// import React from 'react'
import GoodReviewItem from './GoodReviewItem';
import GoodReviewsImgs from './GoodReviewsImgs';
// import GoodMyReview from './GoodMyReview';

const GoodReviews = () => {
  return (
    
      <div className='goodItem-reviews-block' id='reviews'>
        <h1>Отзывы о Плита печная цельная:</h1>
        <button className='goodItem-reviews-addMy'>Добавить отзыв</button>
        {/* <div><GoodMyReview /></div> */}
        <div className='goodItem-reviews-item'>
          <GoodReviewsImgs />
          {/* <h2>Какой размер данного изделия?</h2> */}
          <div>
          <GoodReviewItem />
          <GoodReviewItem />
          <GoodReviewItem />
          <GoodReviewItem />
          <GoodReviewItem />
          </div>
        </div>
        
      </div>
    
  )
}

export default GoodReviews
