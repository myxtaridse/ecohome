// import React from 'react'

const GoodMyReview = () => {
  // const [indexStar, setIndexStar] = React.useState<number | null>(null);
  
  return (
    <div className='goodItem-questions'>
        <form action="">
            <h2 className="goodMyReview-title">Плита печная цельная</h2>
            
            {/* <div className="goodMyReview-stars">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <div key={i} onMouseMove={() => {
                setIndexStar(i + 1);
              }} 
              onMouseLeave={() => {
                setIndexStar(null)

              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={indexStar !== null && i < indexStar ? '#ffce54' : 'gray'}>
                
                {
                  indexStar !== null && i < indexStar ? <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path> :  <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17ZM11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792L10.7323 10.7554L7.44228 11.0192L9.94893 13.1664L9.18311 16.3769L11.9998 14.6564Z"></path>
                }
                
                </svg>
              </div>
            ))}
          </div> */}
            
      <input type='text' placeholder='Достоинства*' />
      <input type='text' placeholder='Недостатки*' />
      <textarea placeholder='Комментарий*' />
      <div className="goodMyReview-file">
        <h3>Загрузите фото товара:</h3>
        <input className='goodMyReview-file-input' type='file' />
      </div>
      <button>Отправить <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path></svg></div></button>
      </form>
    </div>
  )
}

export default GoodMyReview