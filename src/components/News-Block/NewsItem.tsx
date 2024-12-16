// import React from 'react'
import image from '../../assets/images-site/news-banner.png'

const NewsItem = () => {
  return (
    <div className='newsItem-border'>
        <div className='newsItem'>
            <div>
                <img src={image} alt="" />
            </div>
            <h4>Летнее изобилие зимой</h4>
        </div>
    </div>
  )
}

export default NewsItem