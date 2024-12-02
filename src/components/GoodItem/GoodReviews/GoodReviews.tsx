import React from 'react'
import GoodReviewItem from './GoodReviewItem';
import GoodReviewsImgs from './GoodReviewsImgs';
import GoodStars from './GoodStars';
import { CustomContextMain } from '../../../context/MainContext';

const sortedList = ['Полезное', 'Новые', 'Старые', 'С высоким рейтингом', 'С низким рейтингом'];

const GoodReviews = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setIsMore, setChildrenPopup, sort, setSort, isMore}: any = React.useContext(CustomContextMain)

const morePopupFn = () => {
    setIsMore(true)
}

React.useEffect(() => {
    if (isMore) {
        setChildrenPopup(
            <div className='goodStars-popup-sorted'>
                {
                    sortedList.map((item, id) => (
                        <div className='sort-item' key={id} onClick={() => {
                            setSort(id)
                        }}>
                            <h4 style={{color: sort === id ? '#CF4E32' : ''}}>{item}</h4>
                            {
                                sort === id && (
                                    <div>
                                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1610_2690)">
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
                                )
                            }
                        </div>
                    ))
                }
             </div>
        )
    }
}, [isMore, sort, sortedList])
  
  return (
    
      <div className='goodItem-reviews-block' id='reviews'>
        <div className='goodItem-reviews-stars-block'>
            <GoodStars />
        </div>
        <button>Отставить отзыв</button>
        <div className='goodItem-reviews-item'>
          <GoodReviewsImgs />
          <div className='goodItem-reviews-item-block'>
              <div className='goodItem-reviews-item-sorted' onClick={morePopupFn}>
                  <h4>{sortedList[sort]}</h4>
                  <div>
                      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1610_2690)">
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
        
      </div>
    
  )
}

export default GoodReviews
