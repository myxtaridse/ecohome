import React from 'react'
import Arrow from '../../Arrow'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartGood: React.FC<any> = ({article, titleGood, photoGood, categoryChildren, price, reviews}) => {
    const [isSelect, setIsSelect] = React.useState(false)
  return (
    <div className='cartGood' onClick={() => setIsSelect(!isSelect)}>
        <div className='cartGood-select'>
            {
                isSelect ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(207, 78, 50)"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path></svg>
            }
        </div>
        <img src={photoGood[0]} alt={titleGood} />
        <div className='cartGood-character'>
            <div className='cartGood-article-reviews'>
                <div className='cartGood-article'>
                    <p>Артикул:</p>
                    <p>{article}</p>
                </div>
                <div className='cartGood-reviews'>
                    <p>{reviews}</p>
                    <div>
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99954 11.3337L4.08099 13.7271L5.14639 9.26073L1.65918 6.27355L6.2362 5.90661L7.99954 1.66699L9.76294 5.90661L14.3399 6.27355L10.8527 9.26073L11.9181 13.7271L7.99954 11.3337Z" fill="#FFCE54"/>
                        </svg>
                    </div>
                </div>
            </div>
            <h3>Плита печная цельная</h3>
           <div className='cartGood-category'>
                <h5>{categoryChildren}</h5>
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                </div>
           </div>
           <div className='goodItem-parameter-exchange cartGood-exchange'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM15.0049 7.00275L18.5049 10.0027L15.0049 13.0027V11.0027H11.0049V9.00275H15.0049V7.00275ZM9.00488 17.0027L5.50488 14.0027L9.00488 11.0027V13.0027H13.0049V15.0027H9.00488V17.0027Z"></path></svg>
                </div>
                <p>Обмен и возврат 10 дней</p>
           </div>
        </div>
        <div className="goodItem-reviews-item-status cartGood-incr-decr">
                <div className='goodItem-reviews-item-status-arrow'>
                <Arrow />
                </div>
                <h2>5</h2>
                <div className='goodItem-reviews-item-status-arrow'>
                  <Arrow />
                  
                  </div>
              </div>
        <h2 className='cartGood-price'>{price} ₽</h2>
        <div className='cartGood-action'>
        <div className='cartGood-action-svg'>
            <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.0703 7.92893C34.5077 10.3713 35.4239 13.7501 34.82 16.8947C35.7684 17.162 36.6639 17.667 37.4112 18.4088C39.751 20.7317 39.751 24.4978 37.4112 26.8207L28.3327 35.8333L23.296 30.8333L18.3325 35.8083L4.20165 21.655C0.69443 17.7283 0.825527 11.6984 4.59495 7.92893C8.36863 4.15525 14.408 4.02812 18.3344 7.54755C22.2494 4.03333 28.2993 4.15 32.0703 7.92893ZM21.6027 20.7743C20.576 21.7935 20.576 23.4358 21.6027 24.455L28.3327 31.1363L35.0627 24.455C36.0894 23.4358 36.0894 21.7935 35.0627 20.7743C34.0227 19.7418 32.3264 19.7418 31.2827 20.778L28.3292 23.701L25.9844 21.375L25.379 20.7743C24.339 19.7418 22.6427 19.7418 21.6027 20.7743ZM6.95197 10.286C4.46907 12.7689 4.34442 16.7455 6.63257 19.372L18.3325 31.0905L20.931 28.4867L19.2542 26.8207C16.9144 24.4978 16.9144 20.7317 19.2542 18.4088C21.594 16.086 25.3877 16.086 27.7275 18.4088L28.332 19.0085L28.9379 18.4088C29.6455 17.7063 30.4862 17.2162 31.3793 16.9387C32.072 14.6596 31.509 12.0854 29.711 10.2835C27.2125 7.7799 23.1787 7.67835 20.561 10.0281L18.3359 12.0254L16.1094 10.0297C13.4843 7.67662 9.45778 7.78013 6.95197 10.286Z"/>
            </svg>
        </div>
        <div className='cartGood-action-svg'>
            <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33398 19.9997H6.66732V34.9997H3.33398V19.9997ZM8.33398 23.333H11.6673V34.9997H8.33398V23.333ZM26.6673 13.333H30.0007V34.9997H26.6673V13.333ZM31.6673 16.6663H35.0007V34.9997H31.6673V16.6663ZM15.0007 3.33301H18.334V34.9997H15.0007V3.33301ZM20.0007 6.66634H23.334V34.9997H20.0007V6.66634Z"/>
            </svg>
        </div>
        <div className='cartGood-action-svg'>
            <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66732 13.333H33.334V34.9997C33.334 35.9202 32.5878 36.6663 31.6673 36.6663H8.33398C7.41352 36.6663 6.66732 35.9202 6.66732 34.9997V13.333ZM10.0007 16.6663V33.333H30.0007V16.6663H10.0007ZM15.0007 19.9997H18.334V29.9997H15.0007V19.9997ZM21.6673 19.9997H25.0007V29.9997H21.6673V19.9997ZM11.6673 8.33301V4.99967C11.6673 4.07921 12.4135 3.33301 13.334 3.33301H26.6673C27.5878 3.33301 28.334 4.07921 28.334 4.99967V8.33301H36.6673V11.6663H3.33398V8.33301H11.6673ZM15.0007 6.66634V8.33301H25.0007V6.66634H15.0007Z"/>
            </svg>
        </div>
        </div>
    </div>
  )
}

export default CartGood