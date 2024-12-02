import React from 'react'

const GoodQuestions = () => {
  const [itsMe, setItsMe] = React.useState(false)
  return (
    <div className='goodItem-questions'>
          <h6>Вопрос по данному товару пока нет</h6>
          <h6>Можете задать вопрос по товару “Печная дверца” (вам ответят покупатель или продавец)</h6>

      <textarea placeholder='Комментарий*' />
      <div className='checkout-person-itsMe' onClick={() => setItsMe(!itsMe)}>
            <h4>Показывать мое имя</h4>
            <div className='checkout-person-itsMe-switch' style={{
                    backgroundColor: itsMe ? '#565656' : '#CF4E32'
                }}>
                <div className={['checkout-person-itsMe-switch-round', itsMe ? 'checkout-person-switch-round' : ''].join(" ")}></div>
            </div>
      </div>
      <div>
      </div>
      <button>Отправить 
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
          </svg>
        </div>
      </button>

      
    </div>
  )
}

export default GoodQuestions
