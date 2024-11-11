import React from 'react'
import GoodPath from './GoodPath'
import GoodImg from './GoodImg'
import GoodAdd from './GoodAdd'
import GoodParameter from './GoodParameter'
import GoodDescription from './GoodDescription'
import GoodQuestions from './GoodQuestions/GoodQuestions'
import GoodReviews from './GoodReviews/GoodReviews'



const GoodItem = () => {
    const [isActive, setIsActive] = React.useState(0);
    console.log(isActive);
    
  return (
    <div className="goodItem">
      <GoodPath />
      <div className='goodItem-main-title'>
      
     <h1>Плита печная цельная</h1>
     <button className='goodItem-add-review'>
        Добавить отзыв
     </button>
     </div>
      <div className='goodItem-flex'>
      <GoodImg />
     
     <GoodParameter />
     
      <GoodAdd />
      </div>
      <div className='goodItem-allDescription'>
        <div className='goodItem-allDescription-title'>
        <h1 onClick={() => setIsActive(0)} className={[isActive === 0 ? 'activeTitle' : ''].join(" ")}>ОПИСАНИЕ И ХАРАКТЕРИСТИКИ</h1>
        <h1 onClick={() => setIsActive(1)} className={[isActive === 1 ? 'activeTitle' : ''].join(" ")}>ОТЗЫВЫ</h1>
        <h1 onClick={() => setIsActive(2)} className={[isActive === 2 ? 'activeTitle' : ''].join(" ")}>ЗАДАТЬ ВОПРОС</h1>
        </div>
        
      </div>
      <div className={['goodItem-allDescription-block scale-1', isActive === 0 ? 'activeBlock' : ''].join(" ")}>
        <GoodDescription />
        <GoodParameter />
      </div>
      <div className={['goodItem-allDescription-block scale-2', isActive === 1 ? 'activeBlock' : ''].join(" ")}>
        <GoodReviews />
      </div>
      <div className={['goodItem-allDescription-block scale-3', isActive === 2 ? 'activeBlock' : ''].join(" ")}>
       <GoodQuestions />
      </div>
    </div>
  )
}

export default GoodItem
