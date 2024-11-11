// import React from 'react'
import GoodReviewItem from './GoodReviewItem';
import image1 from '../../../assets/image.png'
import image2 from '../../../assets/image-2.png'
import image3 from '../../../assets/image-3.png'
// import GoodMyReview from './GoodMyReview';

const GoodReviews = () => {
  return (
    
      <div className='goodItem-reviews-block'>
        <h1>Отзывы о Плита печная цельная:</h1>
        <button className='goodItem-reviews-addMy'>Добавить отзыв</button>
        {/* <div><GoodMyReview /></div> */}
        <div className='goodItem-reviews-item'>
          <div className='goodItem-reviews-imagesBlock'>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
          </div>
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
