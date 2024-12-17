// import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../components/Arrow'
import { news } from '../../const/news'


const NewsMain = () => {
  return (
    <div className='news'>
        <div className='news-list'>
            {news &&
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                news.map((item: any) => (
                    <Link to={`/news/${item.link}`}>
                      <div className='newsMain-item-border'>
                          <div className='newsMain-item'>
                              <div>
                                  <img src={item.image} alt="" />
                              </div>
                              <h6>{item.title}</h6>
                          </div>
                      </div>
                    </Link>
                ))
            }
        </div>
        <div className='news-arrow'>
            <Arrow />
        </div>
    </div>
  )
}

export default NewsMain