// import React from 'react'
import { Link } from 'react-router-dom'
import { news } from '../../const/news'


const NewsMain = () => {
  return (
   <>
     
    <div className='news'>
    <div className="mainGoods-title">
            <h1>Блоги</h1>
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
        {/* <div className='news-arrow'>
            <Arrow />
        </div> */}
    </div>
   </>
  )
}

export default NewsMain