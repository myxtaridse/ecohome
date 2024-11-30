// import React from 'react'
// import GoodAnswers from './GoodAnswers'
// import Arrow from '../../Arrow';
import Rating from '../../Rating';
import anon from '../../../assets/icons-user/anon.svg'

const GoodReviewItem = () => {
  // const [isreviews, setIsreviews] = React.useState(false);
  
  return (
    
      <div className='goodItem-review'>
        <div className="goodItem-most-popular-review-title">
            <div>
                <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M496.872,161.345L350.666,15.141C340.903,5.377,327.922,0,314.116,0c-13.807,0-26.789,5.377-36.55,15.141 c-20.155,20.154-20.155,52.948,0,73.103l3.402,3.402l-136.8,123.119l-4.685-4.687c-16.272-16.271-37.907-25.233-60.919-25.233 c-23.011,0-44.646,8.962-60.917,25.233L5.462,222.264l108.084,108.084L0.013,512l181.653-113.532L289.75,506.552l12.184-12.184 c33.59-33.591,33.59-88.246,0-121.837l-4.686-4.686l123.12-136.8l3.402,3.402c9.763,9.764,22.744,15.141,36.551,15.141 c13.807,0,26.788-5.377,36.55-15.14C517.026,214.293,517.026,181.499,496.872,161.345z M108.379,403.631l30.174-48.275 l18.103,18.103L108.379,403.631z M287.661,455.729L56.266,224.334c6.873-3.291,14.451-5.027,22.296-5.027 c13.808,0,26.788,5.377,36.551,15.14l162.452,162.45C293.45,412.783,296.815,436.517,287.661,455.729z M272.844,343.442 L168.57,239.166l136.799-123.119l90.596,90.596L272.844,343.442z M472.505,210.08c-3.254,3.254-7.581,5.047-12.183,5.047 c-4.603,0-8.929-1.793-12.183-5.047L301.933,63.875c-6.719-6.718-6.719-17.65,0-24.368c3.254-3.254,7.58-5.046,12.183-5.046 c4.602,0,8.929,1.792,12.183,5.047l146.204,146.205C479.222,192.43,479.222,203.362,472.505,210.08z"></path> </g> </g> </g></svg>
            </div>
            <p>Самый популярный отзыв</p>
        </div>
            <div className='goodItem-reviews-item-user'>
              <div className='goodItem-reviews-item-user-avatar'>
                  <img src={anon} alt='' />
              </div>
                <div className='goodItem-reviews-item-user-name'>
                  <h3>Анонимный покупатель</h3>
                  <p>29 ноября 2024</p>
                  <div className='goodItem-reviews-item-stars'>
                      <Rating rating={4} />
                  </div>
                </div>
              
            </div>
            <div className='goodItem-reviews-item-text'>
                <div>
                    <h4>Достоинства</h4>
                    <p>
                        Отличная дверь. Качественная. Соответствует описанию. Упакована хорошо.
                    </p>
                </div>
                <div>
                    <h4>Недостатки</h4>
                    <p>
                        Нет
                    </p>
                </div>
                <div>
                    <h4>Комментарий</h4>
                    <p>
                      Товар понравился. Цена адекватная. Все дошло в полном порядке.
                    </p>
                </div>
            </div>

          </div>
          
   
  )
}

export default GoodReviewItem
