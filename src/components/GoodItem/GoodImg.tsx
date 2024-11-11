// import React from 'react'
import image1 from '../../assets/image.png'
import image2 from '../../assets/image-2.png'
import image3 from '../../assets/image-3.png'

const GoodImg = () => {
  return (
    <div className='goodItem-main'>
     
      <div className='goodItem-main-article-reviews goodItem-main-reviews-show'>
        <p className='goodItem-main-article'>Код товара: 161616</p>
        <div className='goodItem-main-reviews'>
          <div className="goodItem-main-stars">
          {Array(5)
            .fill("")
            .map(() => (
              <div className="goodItem-main-starItem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                </svg>
              </div>
            ))}
          </div>
          <p>96 отзывов</p>
        </div>
      </div>
      <div className="goodItem-main-image-block">
        <div className='goodItem-main-image-gallery'>
          <div className='goodItem-main-image-gallery-arrow'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 11.8284L9.17154 14.6569L7.75732 13.2426L12 9L16.2426 13.2426L14.8284 14.6569L12 11.8284Z"></path></svg>
          </div>
        <img src={image1} alt='goodItem' />
        <img src={image2} alt='goodItem' />
        <img src={image3} alt='goodItem' />
        <div className='goodItem-main-image-gallery-arrow'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
        </div>
        </div>
        <img src={image1} alt='goodItem' className='goodItem-main-image' />
        
      </div>
    </div>
  )
}

export default GoodImg
