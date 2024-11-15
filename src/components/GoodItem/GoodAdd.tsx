import React from 'react'
import { CustomContextProductItem } from "../../context/ProductContext";
import { CustomContextMain } from '../../context/MainContext';

const GoodAdd = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const valueGood: any = React.useContext(CustomContextProductItem);
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {storageFavorite}: any = React.useContext(CustomContextMain);
  const [isLike, setIsLike] = React.useState(false);
  const article = valueGood[0].article;


  React.useEffect(() => {
    if (article) {
      setIsLike(storageFavorite.includes(article))
    }
  }, [article, storageFavorite])

// React.useEffect(() => {
//   if (article) {
//     if (isLike) {
//       if (!storageFavorite.includes(article)) {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         setStorageFavorite((prevStorage: any) => [...prevStorage, article]);
//       } 
//     } else {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       const newFavorite = storageFavorite.filter((item: any) => item.article == article);
//       setStorageFavorite(newFavorite)
//     }
//   }
// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [isLike, setStorageFavorite, article])
 
  
  
const addLikeGood = () => {
  setIsLike(!isLike)
  console.log(isLike);
  
}

  if (valueGood) {
    return (
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
          <svg fill="#cf4e32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke="#cf4e32"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="31 delivery box" id="_31_delivery_box"> <path d="M32,3.5A19.7,19.7,0,0,0,12.32,23.18c0,.03.02.06.02.09a1.18,1.18,0,0,0,.04.2,1.336,1.336,0,0,0,.07.18,1.3,1.3,0,0,0,.1.15,1,1,0,0,0,.15.14.234.234,0,0,0,.07.07L28.7,34.63H17.43a2.006,2.006,0,0,0-2,2V58.5a2.006,2.006,0,0,0,2,2H46.57a2.006,2.006,0,0,0,2-2V36.63a2.006,2.006,0,0,0-2-2H35.3L51.23,24.01a.234.234,0,0,0,.07-.07,1,1,0,0,0,.15-.14,1.3,1.3,0,0,0,.1-.15,1.336,1.336,0,0,0,.07-.18,1.18,1.18,0,0,0,.04-.2c0-.03.02-.06.02-.09A19.7,19.7,0,0,0,32,3.5Zm0,2a17.694,17.694,0,0,1,15.68,9.52,10.243,10.243,0,0,0-6.34-2.18A10.347,10.347,0,0,0,32,18.75a10.347,10.347,0,0,0-9.34-5.91,10.243,10.243,0,0,0-6.34,2.18A17.694,17.694,0,0,1,32,5.5ZM14.35,22.66A8.333,8.333,0,0,1,31,23.18V33.76ZM34.11,36.63v8.55l-1.56-1.04a.975.975,0,0,0-1.1,0l-1.56,1.04V36.63Zm1.47,11.3a1,1,0,0,0,.53-.88V36.63H46.57V58.5H17.43V36.63H27.89V47.05a1,1,0,0,0,.53.88,1.009,1.009,0,0,0,1.02-.05L32,46.17l2.56,1.71a1.016,1.016,0,0,0,.55.17A.939.939,0,0,0,35.58,47.93ZM33,33.76V23.18a8.333,8.333,0,0,1,16.65-.52Z"></path> <path d="M43.42,50.2H37.19a1,1,0,0,0-1,1v4.15a1,1,0,0,0,1,1h6.23a1,1,0,0,0,1-1V51.2A1,1,0,0,0,43.42,50.2Zm-1,4.15H38.19V52.2h4.23Z"></path> </g> </g></svg>
            </div>
           <p> Доставка: от 1 часа</p>
            
          </div>
  
        </div>
      </div>
    )
  }
}

export default GoodAdd
