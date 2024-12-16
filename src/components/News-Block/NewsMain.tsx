// import React from 'react'
import NewsItem from './NewsItem'

const NewsMain = () => {
  return (
    <div className='newsMain'>
      <div className="mainGoods-title">
            <h1>Новости</h1>
            <div className="mainGoods-title-again">
              <p>Смотреть все</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                </svg>
              </div>
            </div>
      </div>
      <div className='newsMain-list'>
        {
          Array(5).fill("").map(() => (
            <NewsItem />
          ))
        }
      </div>
    </div>
  )
}

export default NewsMain