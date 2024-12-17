// import React from 'react'
import image1 from '../../assets/images-news/1.jpg'
import image2 from '../../assets/images-news/2.webp'
import Arrow from '../../components/Arrow'

const news = [
  {
      id: 1,
      image: image1,
      title: 'Летнее изобилие зимой',
      link: ''
  },
  {
      id: 2,
      image: image2,
      title: 'Идеальная форма для запекания',
      link: ''
  },
]

const NewsMain = () => {
  return (
    <div className='news'>
        <div className='news-list'>
            {news &&
                news.map((item) => (
                    <div className='newsItem-border'>
                        <div className='newsItem'>
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                            <h6>{item.title}</h6>
                        </div>
                    </div>
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