import React from 'react'
import GoodAnswers from './GoodAnswers'
import Arrow from '../../Arrow';

const GoodReviewItem = () => {
  const [isreviews, setIsreviews] = React.useState(false);
  
  return (
    
      <div className='goodItem-review'>
        <div className="goodItem-most-popular-review-title">
          <div>
          <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M496.872,161.345L350.666,15.141C340.903,5.377,327.922,0,314.116,0c-13.807,0-26.789,5.377-36.55,15.141 c-20.155,20.154-20.155,52.948,0,73.103l3.402,3.402l-136.8,123.119l-4.685-4.687c-16.272-16.271-37.907-25.233-60.919-25.233 c-23.011,0-44.646,8.962-60.917,25.233L5.462,222.264l108.084,108.084L0.013,512l181.653-113.532L289.75,506.552l12.184-12.184 c33.59-33.591,33.59-88.246,0-121.837l-4.686-4.686l123.12-136.8l3.402,3.402c9.763,9.764,22.744,15.141,36.551,15.141 c13.807,0,26.788-5.377,36.55-15.14C517.026,214.293,517.026,181.499,496.872,161.345z M108.379,403.631l30.174-48.275 l18.103,18.103L108.379,403.631z M287.661,455.729L56.266,224.334c6.873-3.291,14.451-5.027,22.296-5.027 c13.808,0,26.788,5.377,36.551,15.14l162.452,162.45C293.45,412.783,296.815,436.517,287.661,455.729z M272.844,343.442 L168.57,239.166l136.799-123.119l90.596,90.596L272.844,343.442z M472.505,210.08c-3.254,3.254-7.581,5.047-12.183,5.047 c-4.603,0-8.929-1.793-12.183-5.047L301.933,63.875c-6.719-6.718-6.719-17.65,0-24.368c3.254-3.254,7.58-5.046,12.183-5.046 c4.602,0,8.929,1.792,12.183,5.047l146.204,146.205C479.222,192.43,479.222,203.362,472.505,210.08z"></path> </g> </g> </g></svg>
          </div>
          <p>Самый популярный отзыв</p>
        </div>
            <div className='goodItem-reviews-item-user'>
              <div className='goodItem-reviews-item-user-avatar'></div>
                <div className='goodItem-reviews-item-user-name'>
                  <h3>Длинное Имя</h3>
                  <p>5 ноября 2024 </p>
                </div>
              <div className='goodItem-reviews-item-link'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"></path></svg>
              </div>
            </div>
            <p className='goodItem-reviews-item-text'>
              Какой размер данного изделия?
            </p>
              <div className='goodItem-reviews-item-status-answers'>
              <div className="goodItem-reviews-item-status">
                <div className='goodItem-reviews-item-status-arrow'>
                <Arrow />
                </div>
                <h2>5</h2>
                <div className='goodItem-reviews-item-status-arrow'>
                  <Arrow />
                  
                  </div>
              </div>
              <div className='goodItem-reviews-reviews-title'>
            <h3>Ответы 8</h3>
            
            <div onClick={() => setIsreviews(!isreviews)} className={['goodItem-reviews-reviews-title-svg', isreviews ? 'goodItem-reviews-reviews-title-svg-down' : ''].join(" ")}>
             <Arrow />
            </div>
            </div>
              </div>

              <div className='goodItem-reviews-reviews'><GoodAnswers isreviews={isreviews} /></div>
          </div>
          
   
  )
}

export default GoodReviewItem
