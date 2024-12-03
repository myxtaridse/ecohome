import React from 'react'
import Rating from '../../Rating';
import anon from '../../../assets/icons-user/anon.svg'
import { CustomContextMain } from '../../../context/MainContext';

const GoodReviewItem = () => {
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {setIsMore, setChildrenPopup, isMore}: any = React.useContext(CustomContextMain);
    const [itemComplaint, setItemComplaint] = React.useState<number | null>(null)
    const [isComplaint, setIsComplaint] = React.useState(false)

    const morePopupFn = () => {
        setIsMore(true)
        setIsComplaint(true)
    }

    React.useEffect(() => {
        if (!isMore) {
            setIsComplaint(false)
        }
    }, [isMore])

    React.useEffect(() => {
        if (isComplaint) {
            setChildrenPopup(
                <div className='goodStars-popup-block good-complaint'>
                    <h4>Пожаловаться</h4>
                    <h6>Укажите, что не так:</h6>
                    <div className='good-complaint-list'>
                        {
                            [
                                'Спам или реклама', 
                                'Неприемлимое содержание', 
                                'Оскорбительное высказывание', 
                                'Другое'
                            ].map((item, id) => (
                                <div className='good-complaint-item' onClick={() => setItemComplaint(id)}
                                    
                                >
                                    <p>{item}</p>
                                    <div className='good-complaint-select'
                                        style={{border: itemComplaint === id ? 'none' : '2px solid #D9D9D9'}}
                                    >
                                        <div style={{ display: itemComplaint === id ? 'block' : 'none' }}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button>Отправить</button>
                 </div>
            )
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isComplaint, itemComplaint])
  
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
            <div className='goodItem-review-mark'>
                <div className='goodItem-review-mark-item'>
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10.0002V20.0002M8 10.0002L4 10.0002V20.0002H8M8 10.0002L13.1956 3.93872C13.6886 3.36355 14.4642 3.11629 15.1992 3.30002L15.2467 3.31191C16.5885 3.64736 17.1929 5.21082 16.4258 6.3616L14 10.0002H18.5604C19.8225 10.0002 20.7691 11.1548 20.5216 12.3924L19.3216 18.3924C19.1346 19.3273 18.3138 20.0002 17.3604 20.0002H8" stroke="#565656" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p>0</p>
                </div>
                <div className='goodItem-review-mark-item'>
                    <div style={{rotate: '180deg'}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 10.0002V20.0002M8 10.0002L4 10.0002V20.0002H8M8 10.0002L13.1956 3.93872C13.6886 3.36355 14.4642 3.11629 15.1992 3.30002L15.2467 3.31191C16.5885 3.64736 17.1929 5.21082 16.4258 6.3616L14 10.0002H18.5604C19.8225 10.0002 20.7691 11.1548 20.5216 12.3924L19.3216 18.3924C19.1346 19.3273 18.3138 20.0002 17.3604 20.0002H8" stroke="#565656" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <p>0</p>
                </div>
                <div className='goodItem-review-complaint'
                    onClick={morePopupFn}
                >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V13" stroke="#565656" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#565656"/>
                            <path d="M9.21603 3C10.3958 2.33333 11.1703 2 12 2C13.1138 2 14.1282 2.6007 16.1569 3.80211L16.8431 4.20846C18.8718 5.40987 19.8862 6.01057 20.4431 7C21 7.98943 21 9.19084 21 11.5937V12.4063C21 14.8092 21 16.0106 20.4431 17C19.8862 17.9894 18.8718 18.5901 16.8431 19.7915L16.1569 20.1979C14.1282 21.3993 13.1138 22 12 22C10.8862 22 9.8718 21.3993 7.84308 20.1979L7.15692 19.7915C5.1282 18.5901 4.11384 17.9894 3.55692 17C3 16.0106 3 14.8092 3 12.4063V11.5937C3 9.19084 3 7.98943 3.55692 7C3.99599 6.21995 4.71938 5.68151 6 4.89984" stroke="#565656" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                </div>
            </div>
          </div>
          
   
  )
}

export default GoodReviewItem
