import React from 'react'
import GoodImg from './GoodImg'
import GoodAdd from './GoodAdd'
import GoodParameter from './GoodParameter'
import GoodDescription from './GoodDescription'
import GoodQuestions from './GoodQuestions/GoodQuestions'
import GoodReviews from './GoodReviews/GoodReviews'
import { CustomContextProductItem } from '../../context/ProductContext';
import Loading from '../Loading/Loading'
import { CustomContextMain } from '../../context/MainContext'

const GoodItem = () => {
    const [isActive, setIsActive] = React.useState<number | null>(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const valueGood: any = React.useContext(CustomContextProductItem);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setPathValue}: any = React.useContext(CustomContextMain);

  React.useEffect(() => {
      if (valueGood) {
        setPathValue(['Главная', 'Каталог продукции', valueGood[0].categoryRelative, valueGood[0].categoryChildren])
      }
  }, [valueGood, setPathValue]);

console.log(valueGood);

  

  if (!valueGood) return <Loading /> 

  return (
   
      <div className="goodItem">
        
        <div className='goodItem-main-title'>
        
       <h1>{valueGood[0].titleGood}</h1>
       <button className='goodItem-add-review'>
          Добавить отзыв
       </button>
       </div>
        <div className='goodItem-flex'>
        <GoodImg setIsActive={setIsActive} />
       
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
