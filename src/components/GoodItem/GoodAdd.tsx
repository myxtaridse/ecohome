import React from 'react'
import { CustomContextProductItem } from "../../context/ProductContext";
import { CustomContextMain } from '../../context/MainContext';

const GoodAdd = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const valueGood: any = React.useContext(CustomContextProductItem);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {storageFavorite, setStorageFavorite}: any = React.useContext(CustomContextMain);
  const [isLike, setIsLike] = React.useState(false);
  const article = valueGood[0].article;
  
  
const addLikeGood = () => {
  if (article) {
    setIsLike(!isLike);
    if (!isLike) {
      
      if (storageFavorite) {
        const isArticleFavorite = storageFavorite.includes(article);
        if (!isArticleFavorite) {
          setStorageFavorite((prevArrFavorite: string[]) => [...prevArrFavorite, article, article, article, article, article]);
        }
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newFavorite = storageFavorite.filter((item: any) => item.article == article);
      setStorageFavorite(newFavorite)
    }
  }
}

 
    return (
      // <div>123</div>
      <div className='goodItem-add'>
        <div className='goodItem-main-article-reviews goodItem-add-reviews-show'>
          <p className='goodItem-main-article'>Код товара: {valueGood[0].article}</p>
          <div className='goodItem-main-reviews'>
            <div className="goodItem-main-stars">
            {Array(5)
              .fill("")
              .map(() => (
                <div className="goodItem-main-starItem" key={Math.random()}>
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
            <p>{valueGood[0].reviews.length} отзывов</p>
          </div>
        </div>
        <div className='goodItem-add-block'>
          <div className='goodItem-add-block-item' onClick={addLikeGood}>
            <div style={{transform: isLike ? "scale(0)" : "scale(1)", opacity: isLike ? "0" : "1"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(151,131,121,1)"
            >
              <path d="M19.2426 4.75736C20.705 6.2228 21.2547 8.25005 20.8924 10.1368C21.4614 10.2972 21.9987 10.6002 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L13.978 18.5L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736ZM12.962 12.4646C12.346 13.0761 12.346 14.0615 12.962 14.673L17 18.6818L21.038 14.673C21.654 14.0615 21.654 13.0761 21.038 12.4646C20.414 11.8451 19.3962 11.8451 18.77 12.4668L16.9979 14.2206L15.591 12.825L15.2278 12.4646C14.6038 11.8451 13.586 11.8451 12.962 12.4646ZM4.17157 6.17157C2.68183 7.66131 2.60704 10.0473 3.97993 11.6232L10.9999 18.6543L12.559 17.092L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453C17.7877 10.6238 18.2921 10.3297 18.828 10.1632C19.2436 8.79577 18.9058 7.25122 17.827 6.1701C16.3279 4.66794 13.9076 4.60701 12.337 6.01687L11.0019 7.21524L9.66605 6.01781C8.09098 4.60597 5.67506 4.66808 4.17157 6.17157Z"></path>
            </svg>
            </div>
            <div className='goodItem-add-block-item-like-animation' style={{transform: isLike ? "scale(1)" : "scale(0)", opacity: isLike ? "1" : "0"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(207,78,50,1)"><path d="M17.3631 11.0453C18.767 9.65157 21.0432 9.65157 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453ZM19.2426 4.75736C20.1831 5.69977 20.7461 6.87453 20.9318 8.09485C19.5993 7.84749 18.1932 8.08543 17.0001 8.808C14.8491 7.50516 12.0056 7.7777 10.1439 9.62594C8.01293 11.7414 7.95374 15.1405 9.96628 17.3273L10.1439 17.5117L12.565 19.916L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736Z"></path></svg>
            </div>
            <p>{isLike ? 'В избранном' : 'В избранное'}</p>
          </div>
          <div className='goodItem-add-block-item'>
          <div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(151,131,121,1)"
            >
              <path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path>
            </svg>
          </div>
          <p>Сравнить</p>
          </div>
        </div>
       <div className='goodItem-add-price-btns-block'>
       <div className='goodItem-add-price'>
       <h1>{valueGood[0].price} ₽</h1>
       <p>Розничная цена</p>
       </div>
        
        <div className='goodItem-add-btns'>
          <button>В корзину</button>
          <button>Купить сейчас</button>
        </div>
        
        <hr />
       
        <button className='goodItem-add-opt-price'>Узнать оптовую цену</button> 
        <div className='goodItem-add-info-price'>Нашли дешевле? Сообщите!</div>
        </div>
        <div className='goodItem-add-info'>
          <div className='goodItem-add-info-item'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(25,163,49,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg>
            </div>
            <p>В наличие: {valueGood[0].count} штук</p>
          </div>
          <div className='goodItem-add-info-item'>
          <div>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 22H2" stroke="#cf4e32" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 22V11" stroke="#cf4e32" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M4 22V11" stroke="#cf4e32" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M16.5278 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2Z" stroke="#cf4e32" strokeWidth="1.5" strokeLinejoin="round"></path> <path d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5" stroke="#cf4e32" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
            </div>
            <p>Самовывоз: сегодня</p>
          </div>
          <div className='goodItem-add-info-item'>
          <div>
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M18.0909 2.54877C17.5385 2.23946 16.9504 2.20831 16.3288 2.286C15.7383 2.3598 15.02 2.54651 14.1567 2.7709L12.1384 3.2954C11.2755 3.51963 10.557 3.70634 10.0072 3.92891C9.4292 4.16293 8.92943 4.47736 8.60526 5.02195C8.27903 5.56998 8.24664 6.15584 8.32794 6.76777C8.40459 7.34473 8.59805 8.04488 8.82853 8.87901L9.37108 10.8429C9.60161 11.6775 9.79499 12.3775 10.0259 12.9139C10.271 13.4835 10.5985 13.9684 11.1541 14.2795C11.7064 14.5888 12.2945 14.62 12.9162 14.5423C13.5066 14.4685 14.225 14.2818 15.0882 14.0574L17.1066 13.5329C17.9695 13.3086 18.688 13.1219 19.2377 12.8994C19.8157 12.6653 20.3155 12.3509 20.6397 11.8063C20.9659 11.2583 20.9983 10.6724 20.917 10.0605C20.8403 9.48355 20.6469 8.7834 20.4164 7.94926L19.8738 5.98536C19.6433 5.1508 19.4499 4.45076 19.2191 3.91434C18.9739 3.34477 18.6465 2.85989 18.0909 2.54877ZM14.485 4.2354C15.4099 3.99503 16.0331 3.83463 16.5148 3.77442C16.9764 3.71673 17.1974 3.7676 17.358 3.85754C17.5154 3.94567 17.6656 4.09931 17.8413 4.50734C18.0265 4.93768 18.1937 5.53684 18.442 6.43548L18.9564 8.29754C19.2048 9.19641 19.3687 9.79611 19.4301 10.2581C19.4883 10.6968 19.4362 10.8956 19.3508 11.0391C19.2633 11.186 19.1047 11.3349 18.6748 11.509C18.2271 11.6903 17.605 11.8535 16.6798 12.0939L14.76 12.5929C13.835 12.8333 13.2118 12.9937 12.7301 13.0539C12.2685 13.1116 12.0476 13.0607 11.8869 12.9707C11.7296 12.8826 11.5793 12.729 11.4037 12.3209C11.2185 11.8906 11.0512 11.2914 10.8029 10.3928L10.2885 8.53074C10.0402 7.63187 9.87625 7.03217 9.81487 6.57022C9.75658 6.13148 9.80876 5.93269 9.89418 5.78921C9.98164 5.64227 10.1402 5.49334 10.5701 5.31928C11.0179 5.138 11.64 4.97476 12.5651 4.73434L14.485 4.2354Z" fill='#cf4e32'></path> <path fillRule="evenodd" clipRule="evenodd" d="M3.2007 4.72469C2.80157 4.61396 2.38823 4.84775 2.27749 5.24688C2.16675 5.64602 2.40054 6.05936 2.79968 6.17009L4.50338 6.64278C4.92898 6.76086 5.24592 7.08236 5.35419 7.47427L7.3055 14.5374C7.23053 14.5521 7.1556 14.5692 7.0808 14.5887C5.10375 15.1025 3.89563 17.0913 4.43836 19.0558C4.97848 21.0108 7.03215 22.1384 9.00137 21.6266C10.7247 21.1788 11.8638 19.6102 11.7683 17.9139L20.1888 15.7256C20.5897 15.6214 20.8303 15.2119 20.7261 14.811C20.6219 14.4101 20.2124 14.1696 19.8115 14.2738L11.3734 16.4667C10.8651 15.4794 9.93146 14.7927 8.86688 14.5562L6.80003 7.07483C6.5469 6.1586 5.82129 5.45177 4.9044 5.19738L3.2007 4.72469ZM7.45809 16.0404C8.66981 15.7255 9.88575 16.4288 10.198 17.5589C10.5076 18.6796 9.82797 19.862 8.62408 20.1748C7.41235 20.4897 6.19641 19.7864 5.8842 18.6563C5.5746 17.5357 6.25419 16.3533 7.45809 16.0404Z" fill='#cf4e32'></path> </g></svg>
         
            </div>
           <p> Доставка: от 1 часа</p>
            
          </div>
  
        </div>
      </div>
    )
  }


export default GoodAdd
