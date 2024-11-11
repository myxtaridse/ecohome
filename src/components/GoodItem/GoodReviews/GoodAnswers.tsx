import React from 'react'
import GoodAnswerItem from './GoodAnswerItem'

interface GoodAnswersType {
  isreviews: boolean
}

const GoodAnswers: React.FC<GoodAnswersType> = ({isreviews}) => {
  
  return (
    <div>
        <div className='goodItem-reviews-item-reviews'>
          
            
           
            {/* <div className="goodItem-questions-item-sorted">
              <p>По популярности </p>
              <div>arrow</div>
            </div> */}
            <div className={['goodItem-reviews-reviews-list', isreviews ? 'goodItem-reviews-reviews-list-show' : ''].join(" ")}>
            <div className="goodItem-answers-item-myAnswer">
              <textarea placeholder='Вы можете оставить свой ответ на вопрос пользователя' />
              <button>Ответить</button>
            </div>
            {
        Array(5).fill('').map(() => <GoodAnswerItem />)
      }
            </div>
            
          </div>
      
    </div>
  )
}

export default GoodAnswers
