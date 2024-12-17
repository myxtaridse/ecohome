// import React from 'react'
import { useLocation } from 'react-router-dom'
import { news } from '../const/news'

const NewItem = () => {
    const location = useLocation();
    const link = location.pathname.split('/news/').join("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newsItem = news?.find((item: any) => item.link === link)
    
  return (
    <div className='newsItem'>
        <h3>{newsItem?.title}</h3>
        <div className='newsItem-image'>
            <img src={newsItem?.image} alt="" />
        </div>
        <div className='newsItem-content'>
            <h4>{newsItem?.content.subtitle}</h4>
            {
                newsItem?.content.text && newsItem?.content.text.map((paragraph: string) => (
                    <p>{paragraph}</p>
                ))
            }
            <div className='newsItem-content-html'>
                {
                    newsItem?.content.contentHTML ? newsItem?.content.contentHTML : (
                        <div></div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default NewItem