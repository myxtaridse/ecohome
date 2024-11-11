// import React from 'react'

const GoodQuestions = () => {
  return (
    <div className='goodItem-questions'>
      <div className='goodItem-questions-title'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14H13V16H11V14ZM8.56731 8.81346C8.88637 7.20919 10.302 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13H11V11H12C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.2723 8 10.6656 8.51823 10.5288 9.20577L8.56731 8.81346Z"></path></svg>
        </div>
        <h1>Задайте вопрос по товару Плита печная цельная:</h1>
      </div>
      <p className='goodItem-questions-subtitle'>Вопрос-ответ - среда для общения, обмена опытом и знаниями касательно товаров между пользователями сайта. Здесь
        можно обсудить продукцию, задать по ней вопрос, решить проблему с выбором и использованием, а также помочь 
        другим участникам.
      </p>
      
      <form action="">
      <input type='text' placeholder='Имя*' />
      <input type='text' placeholder='Телефон*' />
      <textarea placeholder='Комментарий*' />
      <button>Отправить <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg></div></button>
      </form>

      
    </div>
  )
}

export default GoodQuestions
