import React from 'react'
import GoodSectionGallery from './GoodSectionGallery'
import Rating from '../Rating'
import { useLocation } from 'react-router-dom'
import CartPopup from '../UserStorage/Cart/CartMobile/CartPopup'

// export interface GoodSectionType {
//     article: string,
//     titleGood: string,
//     photoGood: string[],
//     categoryChildren: string,
//     price: number,
//     description: string,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     parameter: any[],
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     reviews: any[],
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GoodSection: React.FC<any> = ({titleGood, price, reviews, categoryChildren}) => {
    const [isMore, setIsMore] = React.useState(false)
    const location = useLocation();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const averageRating = reviews.reduce((sum: number, review: any) => {
        return sum + parseFloat(review.statusRev)
    }, 0);

    const [isBasket, setIsBasket] = React.useState(false)

    
  return (
    <div className='goodSection'>
        <div><GoodSectionGallery /></div>
        {
            location && location.pathname === '/' && (
                <div className='goodSection-category'>
                    <p>{categoryChildren}</p>
                    <div className='goodSection-category-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></div>
                </div>
            )
        }
        <h2>{titleGood}</h2>
        {
            location && location.pathname !== '/comparison' && (
                <div className='goodSection-rating'>
                    <Rating rating={averageRating ? averageRating / reviews.length : 5} />
                    <p>{averageRating ? averageRating / reviews.length : 5}</p>
                </div>
            )
        }
        
        <div className='goodSection-actions-price'>
            <div className='goodSection-actions'>
                <div>
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0352 3.96447C17.2538 5.18567 17.7119 6.87504 17.41 8.44733C17.8842 8.581 18.3319 8.8335 18.7056 9.20442C19.8755 10.3658 19.8755 12.2489 18.7056 13.4103L14.1663 17.9167L11.648 15.4167L9.16626 17.9042L2.10082 10.8275C0.347215 8.86417 0.412763 5.84918 2.29747 3.96447C4.18432 2.07763 7.204 2.01406 9.16718 3.77378C11.1247 2.01667 14.1497 2.075 16.0352 3.96447ZM10.8013 10.3872C10.288 10.8968 10.288 11.7179 10.8013 12.2275L14.1663 15.5682L17.5313 12.2275C18.0447 11.7179 18.0447 10.8968 17.5313 10.3872C17.0113 9.87092 16.1632 9.87092 15.6413 10.389L14.1646 11.8505L12.9922 10.6875L12.6895 10.3872C12.1695 9.87092 11.3213 9.87092 10.8013 10.3872ZM3.47598 5.14298C2.23453 6.38443 2.17221 8.37275 3.31628 9.686L9.16626 15.5453L10.4655 14.2433L9.62709 13.4103C8.45718 12.2489 8.45718 10.3658 9.62709 9.20442C10.797 8.04298 12.6938 8.04298 13.8638 9.20442L14.166 9.50425L14.4689 9.20442C14.8228 8.85317 15.2431 8.60808 15.6897 8.46933C16.036 7.32981 15.7545 6.04268 14.8555 5.14175C13.6063 3.88995 11.5893 3.83918 10.2805 5.01406L9.16793 6.0127L8.05472 5.01484C6.74216 3.83831 4.72889 3.89007 3.47598 5.14298Z" fill="#565656"/>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66699 10.0003H3.33366V17.5003H1.66699V10.0003ZM4.16699 11.667H5.83366V17.5003H4.16699V11.667ZM13.3337 6.66699H15.0003V17.5003H13.3337V6.66699ZM15.8337 8.33366H17.5003V17.5003H15.8337V8.33366ZM7.50033 1.66699H9.16699V17.5003H7.50033V1.66699ZM10.0003 3.33366H11.667V17.5003H10.0003V3.33366Z" fill="#565656"/>
                    </svg>
                </div>
                <div>
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33366 6.66699H16.667V17.5003C16.667 17.9606 16.2939 18.3337 15.8337 18.3337H4.16699C3.70676 18.3337 3.33366 17.9606 3.33366 17.5003V6.66699ZM5.00033 8.33366V16.667H15.0003V8.33366H5.00033ZM7.50033 10.0003H9.16699V15.0003H7.50033V10.0003ZM10.8337 10.0003H12.5003V15.0003H10.8337V10.0003ZM5.83366 4.16699V2.50033C5.83366 2.04009 6.20676 1.66699 6.66699 1.66699H13.3337C13.7939 1.66699 14.167 2.04009 14.167 2.50033V4.16699H18.3337V5.83366H1.66699V4.16699H5.83366ZM7.50033 3.33366V4.16699H12.5003V3.33366H7.50033Z" fill="#565656"/>
                    </svg>
                </div>
            </div>
            <h1>{price} ₽</h1>
        </div>

        {
            location.pathname === '/' && (
                <>
                    {
                        !isBasket && (
                            <div className='goodSection-basket' onClick={() => setIsBasket(true)}>
                                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,8.5H19.535l-3.7-5.555a1,1,0,0,0-1.664,1.11L17.132,8.5H6.868L9.832,4.055a1,1,0,0,0-1.664-1.11L4.465,8.5H2a1,1,0,0,0,0,2H3v8a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3v-8h1a1,1,0,0,0,0-2Zm-3,10a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1v-8H19ZM7,17V13a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0Zm4,0V13a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0Zm4,0V13a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0Z"></path></g></svg>
                            </div>
                        )
                    }
                    {
                        isBasket && (
                            <div className="goodSection-incr-decr">
                                <div className='goodItem-reviews-item-status-arrow' onClick={() => {
                                    setIsBasket(false)
                                }}>
                                    -
                                </div>
                                <h2>5</h2>
                                <div className='goodItem-reviews-item-status-arrow'>
                                    +
                                </div>
                            </div>
                        )
                    }
                    <div className='goodSection-more' onClick={() => setIsMore(!isMore)}>
                        <svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.91525 8C6.97302 8 7.83051 7.10457 7.83051 6C7.83051 4.89543 6.97302 4 5.91525 4C4.85749 4 4 4.89543 4 6C4 7.10457 4.85749 8 5.91525 8Z" stroke="black" stroke-linejoin="round"/>
                            <path d="M11.6613 8C12.7191 8 13.5766 7.10457 13.5766 6C13.5766 4.89543 12.7191 4 11.6613 4C10.6036 4 9.74609 4.89543 9.74609 6C9.74609 7.10457 10.6036 8 11.6613 8Z" stroke="black" stroke-linejoin="round"/>
                            <path d="M17.4074 8C18.4652 8 19.3227 7.10457 19.3227 6C19.3227 4.89543 18.4652 4 17.4074 4C16.3497 4 15.4922 4.89543 15.4922 6C15.4922 7.10457 16.3497 8 17.4074 8Z" stroke="black" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    
                </>
            )
        }

        { 
            isMore && (
                
                <CartPopup setIsMore={setIsMore}>
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
                    </div>
                </CartPopup>
            )
        }
    </div>
  )
  
}

export default GoodSection