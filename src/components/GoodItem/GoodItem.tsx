import React from 'react'
import GoodAdd from './GoodAdd'
import GoodParameter from './GoodParameter'
import GoodDescription from './GoodDescription'
import GoodQuestions from './GoodQuestions/GoodQuestions'
import GoodReviews from './GoodReviews/GoodReviews'
import { CustomContextProductItem } from '../../context/ProductContext';
import Loading from '../Loading/Loading'
import { CustomContextMain } from '../../context/MainContext'
import GoodSectionGallery from '../GoodSection/GoodSectionGallery'

const GoodItem = () => {
    const [isActive, setIsActive] = React.useState<number | null>(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const good: any = React.useContext(CustomContextProductItem);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setPathValue}: any = React.useContext(CustomContextMain);

  React.useEffect(() => {
      if (good) {
        setPathValue(['Главная', 'Каталог продукции', good.categoryRelative, good.categoryChildren])
      }
  }, [good, setPathValue]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {storageFavorite, setStorageFavorite}: any = React.useContext(CustomContextMain);
  const [isLike, setIsLike] = React.useState(false);
  const article = good?.article;

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

  
 

  if (!good || good.length === 0) return <Loading />;


    return (
      
         <div className="goodItem">
           <div className='goodItem-flex'>
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
              <div className='goodItem-gallery'>
                  <GoodSectionGallery gallery={good.photoGood} />
              </div>
              <div className='goodItem-main-title'>
                  <h1>{good.titleGood}</h1>
              </div>
              <div className='goodItem-category'>
                    <p>{good.categoryChildren}</p>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                    </div>
              </div>
              <GoodParameter />
              <GoodAdd />
           </div>


           <div className='goodItem-allDescription'>
             
          <div className='goodItem-allDescription-item'>
          <h1 onClick={() => {
           if (isActive !== 0) {
             setIsActive(0)
           } else {
             setIsActive(null)
           }
          }} className={["goodItem-allDescription-title goodItem-allDescription-title-description", isActive === 0 ? 'activeTitle' : ''].join(" ")}>ОПИСАНИЕ И ХАРАКТЕРИСТИКИ</h1>
          <div className={['goodItem-allDescription-block scale-1', isActive === 0 ? 'activeBlock' : ''].join(" ")}>
             <GoodDescription />
             <GoodParameter />
           </div>
          </div>
     
          <div className='goodItem-allDescription-item'>
          <h1 onClick={() => {
           if (isActive !== 1) {
             setIsActive(1)
           } else {
             setIsActive(null)
           }
          }} className={["goodItem-allDescription-title goodItem-allDescription-title-reviews", isActive === 1 ? 'activeTitle' : ''].join(" ")}>ОТЗЫВЫ</h1>
          <div className={['goodItem-allDescription-block scale-2', isActive === 1 ? 'activeBlock' : ''].join(" ")}>
             <GoodReviews />
           </div>
          </div>
     
           <div className='goodItem-allDescription-item'>
           <h1 onClick={() =>{
             if (isActive !== 2) {
               setIsActive(2)
             } else {
               setIsActive(null)
             }
           }} className={["goodItem-allDescription-title goodItem-allDescription-title-questions", isActive === 2 ? 'activeTitle' : ''].join(" ")}>ЗАДАТЬ ВОПРОС</h1>
           <div className={['goodItem-allDescription-block scale-3', isActive === 2 ? 'activeBlock' : ''].join(" ")}>
            <GoodQuestions />
           </div>
           </div>
          
           
           </div>
         </div>
       )
  
  
  }

export default GoodItem;
