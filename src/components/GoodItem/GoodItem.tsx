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

  
 

  if (!good || good.length === 0) return <Loading />;


    return (
      
         <div className="goodItem">
           <div className='goodItem-flex'>
              <div className='goodItem-gallery'>
                  <GoodSectionGallery />
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
