// import React from 'react'
import NewsItem from './NewsItem'

const NewsMain = () => {
  return (
    <div className='newsMain'>
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