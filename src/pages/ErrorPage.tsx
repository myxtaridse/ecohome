// import React from 'react'
import errorImg from '../assets/images-site/error-page.svg';
import errorStar from '../assets/images-site/error-page-star.svg';
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error-block'>
        <img src={errorImg} />
        <img className='error-star error-star-1' src={errorStar} />
        <img className='error-star  error-star-2' src={errorStar} />
        <div className='error-text'>
            <h1>404</h1>
            <h1>Страница не найдена!</h1>
            <p>К сожалению, запрошенная вами страница не найдена. Пожалуйста, вернитесь на главную страницу!</p>
            <Link to='/'>
                <button>Вернуться на главную</button>
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage