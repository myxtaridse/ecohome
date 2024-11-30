import React from 'react'
// import CartPopup from '../../UserStorage/Cart/CartMobile/CartPopup';
import GoodReviewItem from './GoodReviewItem';
import GoodReviewsImgs from './GoodReviewsImgs';
import GoodStars from './GoodStars';
// import GoodMyReview from './GoodMyReview';

const GoodReviews = () => {
  const [isMore, setIsMore] = React.useState(false)
  console.log(isMore);
  
  return (
    
      <div className='goodItem-reviews-block' id='reviews'>
        <div className='goodItem-reviews-stars-block'>
            <GoodStars />
        </div>
        <div className='goodItem-reviews-item'>
          <GoodReviewsImgs />
          <div className='goodItem-reviews-item-block'>
              <div className='goodItem-reviews-item-sorted' onClick={() => setIsMore(true)}>
                  <h4>Полезное</h4>
                  <div>
                      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1610_2690)">
                        <path d="M7 2.66602L10.5 7.99935H3.5L7 2.66602Z" fill="#CF4E32"/>
                        </g>
                        <path d="M7 16L3.5 10.4615H10.5L7 16Z" fill="#CF4E32"/>
                        <defs>
                        <clipPath id="clip0_1610_2690">
                        <rect width="14" height="8" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                  </div>
              </div>

               <GoodReviewItem />
              {/*<GoodReviewItem />
              <GoodReviewItem />
              <GoodReviewItem />
              <GoodReviewItem /> */}
          </div>
        </div>

        {/* {
            isMore && (
              <CartPopup setIsMore={setIsMore}>
                  <div>
                      <div>
                          Полезное
                      </div>
                      <div>
                          Новые
                      </div>
                      <div>
                          Старые
                      </div>
                      <div>
                          С высоким рейтингом
                      </div>
                      <div>
                          С низким рейтингом
                      </div>
                  </div>
              </CartPopup>
            )
        } */}
        
      </div>
    
  )
}

export default GoodReviews
