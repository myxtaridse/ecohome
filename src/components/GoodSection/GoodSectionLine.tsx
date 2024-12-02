import React from 'react'
import GoodSectionGallery from './GoodSectionGallery'
import Rating from '../Rating'
import { CustomContextMain } from '../../context/MainContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GoodSectionLine: React.FC<any> = ({article, titleGood, categoryChildren, price, description, parameter, reviews, photoGood }) => {
    
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const averageRating = reviews.reduce((sum: number, review: any) => {
        return sum + parseFloat(review.statusRev)
    }, 0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {setIsMore, setChildrenPopup, isMore}: any = React.useContext(CustomContextMain);

    const morePopupFn = () => {
        setIsMore(true)
        setChildrenPopup(
            <div className='cartPopup-actions'>
                        <div className='cartPopup-item'>
                            <div>
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.0703 7.92893C34.5077 10.3713 35.4239 13.7501 34.82 16.8947C35.7684 17.162 36.6639 17.667 37.4112 18.4088C39.751 20.7317 39.751 24.4978 37.4112 26.8207L28.3327 35.8333L23.296 30.8333L18.3325 35.8083L4.20165 21.655C0.69443 17.7283 0.825527 11.6984 4.59495 7.92893C8.36863 4.15525 14.408 4.02812 18.3344 7.54755C22.2494 4.03333 28.2993 4.15 32.0703 7.92893ZM21.6027 20.7743C20.576 21.7935 20.576 23.4358 21.6027 24.455L28.3327 31.1363L35.0627 24.455C36.0894 23.4358 36.0894 21.7935 35.0627 20.7743C34.0227 19.7418 32.3264 19.7418 31.2827 20.778L28.3292 23.701L25.9844 21.375L25.379 20.7743C24.339 19.7418 22.6427 19.7418 21.6027 20.7743ZM6.95197 10.286C4.46907 12.7689 4.34442 16.7455 6.63257 19.372L18.3325 31.0905L20.931 28.4867L19.2542 26.8207C16.9144 24.4978 16.9144 20.7317 19.2542 18.4088C21.594 16.086 25.3877 16.086 27.7275 18.4088L28.332 19.0085L28.9379 18.4088C29.6455 17.7063 30.4862 17.2162 31.3793 16.9387C32.072 14.6596 31.509 12.0854 29.711 10.2835C27.2125 7.7799 23.1787 7.67835 20.561 10.0281L18.3359 12.0254L16.1094 10.0297C13.4843 7.67662 9.45778 7.78013 6.95197 10.286Z" fill="#1E1E1E"/>
                                </svg>
                            </div>
                            <p>Добавить в избранное</p>
                        </div>
                        <div className='cartPopup-item'>
                            <div>
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33398 20.0007H6.66732V35.0007H3.33398V20.0007ZM8.33398 23.334H11.6673V35.0007H8.33398V23.334ZM26.6673 13.334H30.0007V35.0007H26.6673V13.334ZM31.6673 16.6673H35.0007V35.0007H31.6673V16.6673ZM15.0007 3.33398H18.334V35.0007H15.0007V3.33398ZM20.0007 6.66732H23.334V35.0007H20.0007V6.66732Z" fill="#1E1E1E"/>
                                </svg>
                            </div>
                            <p>Добавить в сравнение</p>
                        </div>
                        <div className='cartPopup-item'>
                            <div>
                                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66732 13.334H33.334V35.0007C33.334 35.9212 32.5878 36.6673 31.6673 36.6673H8.33398C7.41352 36.6673 6.66732 35.9212 6.66732 35.0007V13.334ZM10.0007 16.6673V33.334H30.0007V16.6673H10.0007ZM15.0007 20.0007H18.334V30.0007H15.0007V20.0007ZM21.6673 20.0007H25.0007V30.0007H21.6673V20.0007ZM11.6673 8.33398V5.00065C11.6673 4.08018 12.4135 3.33398 13.334 3.33398H26.6673C27.5878 3.33398 28.334 4.08018 28.334 5.00065V8.33398H36.6673V11.6673H3.33398V8.33398H11.6673ZM15.0007 6.66732V8.33398H25.0007V6.66732H15.0007Z" fill="#1E1E1E"/>
                                </svg>
                            </div>
                            <p>Удалить из корзины</p>
                        </div>
                    </div>
        )
    }

    React.useEffect(() => {
        if (isMore) {
          document.documentElement.style.overflowY = 'hidden';
        } 
        
        
        if (!isMore) {
          document.documentElement.style.overflowY = 'scroll';
        }
      }, [isMore])

  return (
    <div className='goodSection-line'>
        <div><GoodSectionGallery gallery={photoGood} width={20} /></div>
    <div className='goodSection-line-info'>
        <h2>{titleGood}</h2>
        <div className='goodSection-rating'>
            <Rating rating={averageRating ? averageRating / reviews.length : 5} />
            <p>{averageRating ? averageRating / reviews.length : 5}</p>
        </div>
        <h1>{price} ₽</h1>
        <div className='goodSection-character goodSection-article'>
            <p>Артикул:</p>
            <p>{article}</p>
        </div>
        <div className='goodSection-character goodSection-material'>
            <p>Материал изделия:</p>
            <p>{parameter[2].valueParameter}</p>
        </div>
        <div className='goodSection-description'>
            <p><b>Описание:</b> {description}</p>
        </div>
        <div className='goodSection-exchange'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM15.0049 7.00275L18.5049 10.0027L15.0049 13.0027V11.0027H11.0049V9.00275H15.0049V7.00275ZM9.00488 17.0027L5.50488 14.0027L9.00488 11.0027V13.0027H13.0049V15.0027H9.00488V17.0027Z"></path></svg>
                </div>
                <p>Обмен и возврат 10 дней</p>
        </div>
        <div className='cartGood-category'>
                <p>{categoryChildren}</p>
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                </div>
        </div>
    </div>

        
                <div className="goodItem-reviews-item-status cartGood-incr-decr">
                    <div className='goodItem-reviews-item-status-arrow'>
                        -
                        {/* <Arrow /> */}
                    </div>
                    <h2>5</h2>
                    <div className='goodItem-reviews-item-status-arrow'>
                        +
                        {/* <Arrow /> */}
                    </div>
              </div>
            

        <div className='goodSection-more' onClick={morePopupFn}
            
            >
            <svg viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8.5C6 9.88071 4.88071 11 3.5 11C2.11929 11 1 9.88071 1 8.5C1 7.11929 2.11929 6 3.5 6C4.88071 6 6 7.11929 6 8.5ZM2.23551 8.5C2.23551 9.19836 2.80164 9.76449 3.5 9.76449C4.19836 9.76449 4.76449 9.19836 4.76449 8.5C4.76449 7.80164 4.19836 7.23551 3.5 7.23551C2.80164 7.23551 2.23551 7.80164 2.23551 8.5Z" fill="#565656"/>
                <path d="M12 8.5C12 9.88071 10.8807 11 9.5 11C8.11929 11 7 9.88071 7 8.5C7 7.11929 8.11929 6 9.5 6C10.8807 6 12 7.11929 12 8.5ZM8.23551 8.5C8.23551 9.19836 8.80164 9.76449 9.5 9.76449C10.1984 9.76449 10.7645 9.19836 10.7645 8.5C10.7645 7.80164 10.1984 7.23551 9.5 7.23551C8.80164 7.23551 8.23551 7.80164 8.23551 8.5Z" fill="#565656"/>
                <path d="M18 8.5C18 9.88071 16.8807 11 15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5ZM14.2355 8.5C14.2355 9.19836 14.8016 9.76449 15.5 9.76449C16.1984 9.76449 16.7645 9.19836 16.7645 8.5C16.7645 7.80164 16.1984 7.23551 15.5 7.23551C14.8016 7.23551 14.2355 7.80164 14.2355 8.5Z" fill="#565656"/>
            </svg>


        </div>

    
       {/* <div className='goodSection-line-actions' 
       style={{transform: windowRef.current <= 500 || location.pathname === '/cart' ? isMore ? 'scale(1)' : 'scale(0)' : 'scale(1)'}}
       >
            <div>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66699 10.0003H3.33366V17.5003H1.66699V10.0003ZM4.16699 11.667H5.83366V17.5003H4.16699V11.667ZM13.3337 6.66699H15.0003V17.5003H13.3337V6.66699ZM15.8337 8.33366H17.5003V17.5003H15.8337V8.33366ZM7.50033 1.66699H9.16699V17.5003H7.50033V1.66699ZM10.0003 3.33366H11.667V17.5003H10.0003V3.33366Z" fill="#565656"/>
                </svg>
            </div>
            <div>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33697 5.34751L0.634766 2.64531L1.81327 1.4668L4.51547 4.169H17.2169C17.6772 4.169 18.0502 4.5421 18.0502 5.00233C18.0502 5.08343 18.0384 5.16411 18.0152 5.24179L16.0152 11.9085C15.9094 12.261 15.5849 12.5024 15.2169 12.5024H5.00363V14.169H14.1703V15.8357H4.1703C3.71006 15.8357 3.33697 15.4625 3.33697 15.0024V5.34751ZM5.00363 5.83566V10.8357H14.5969L16.0969 5.83566H5.00363ZM4.58697 19.169C3.89661 19.169 3.33697 18.6094 3.33697 17.919C3.33697 17.2286 3.89661 16.669 4.58697 16.669C5.27733 16.669 5.83697 17.2286 5.83697 17.919C5.83697 18.6094 5.27733 19.169 4.58697 19.169ZM14.587 19.169C13.8966 19.169 13.337 18.6094 13.337 17.919C13.337 17.2286 13.8966 16.669 14.587 16.669C15.2773 16.669 15.837 17.2286 15.837 17.919C15.837 18.6094 15.2773 19.169 14.587 19.169Z" fill="#565656"/>
                </svg>
            </div>
            <div>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33366 6.66699H16.667V17.5003C16.667 17.9606 16.2939 18.3337 15.8337 18.3337H4.16699C3.70676 18.3337 3.33366 17.9606 3.33366 17.5003V6.66699ZM5.00033 8.33366V16.667H15.0003V8.33366H5.00033ZM7.50033 10.0003H9.16699V15.0003H7.50033V10.0003ZM10.8337 10.0003H12.5003V15.0003H10.8337V10.0003ZM5.83366 4.16699V2.50033C5.83366 2.04009 6.20676 1.66699 6.66699 1.66699H13.3337C13.7939 1.66699 14.167 2.04009 14.167 2.50033V4.16699H18.3337V5.83366H1.66699V4.16699H5.83366ZM7.50033 3.33366V4.16699H12.5003V3.33366H7.50033Z" fill="#565656"/>
                </svg>
            </div>
        </div> */}
    
</div>
  )
}

export default GoodSectionLine




