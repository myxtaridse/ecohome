import React from 'react'
import logo from '../assets/icons/favicon/logo.svg'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Select from '../components/Select'

const UserIn = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = React.useState(false)
  return (
    <div className={['userIn', location && location.pathname === '/auth' ? 'userIn-auth' : ''].join(" ")}>
        <div className='userIn-logo'>
            <img src={logo} alt='logo' />
        </div>
        <div className='userIn-close'
          onClick={() => {
            navigate('/')
          }}
        >
            <svg viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.584 35.4169L35.2079 14.793" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.584 14.584L35.2079 35.2079" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <h1>
            {
              location && location.pathname === '/login' ? 'Авторизация' : 'Регистрация'
            }
        </h1>
        <div className='userIn-form'>
          <Outlet />
            <div>
                <input type="text" placeholder='E-mail / Телефон' />
            </div>
            <div className='userIn-form-password'>
                <input type="text" placeholder='Пароль' />
                <div onClick={() => setIsShowPassword(!isShowPassword)}>
                    {
                      isShowPassword ? (
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8327 12.0004C21.9402 15.5766 17.2 19.0002 12.9991 19.0002C8.79819 19.0002 4.05801 15.5766 2.16602 12" stroke="#CF4E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M23.8327 12.0002C21.9402 8.42398 17.2007 5 12.9999 5C8.79894 5 4.05801 8.42314 2.16602 11.9998" stroke="#CF4E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.25 12C16.25 13.6569 14.795 15 13 15C11.205 15 9.75 13.6569 9.75 12C9.75 10.3431 11.205 9 13 9C14.795 9 16.25 10.3431 16.25 12Z" stroke="#CF4E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.0006 12.0005C19.2536 15.5764 15.8779 17.9998 12 17.9998M12 17.9998C8.12204 17.9998 4.7463 15.5764 2.99977 12M12 17.9998V20.9998M19.4218 14.4216L21.4999 16.4998M16.2304 16.9685L17.5 19.4998M4.57812 14.4216L2.5 16.4998M7.76953 16.9685L6.5 19.4998" stroke="#CF4E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      )
                    } 
                </div>
            </div>
            
            {
              location && location.pathname === '/auth' && (
                <div className='userIn-sale'>
                    <Select />
                    <p>Получать <span>предложения о скидках и акциях</span></p>
                </div>
              )
            }
            <p>
            При входе и регистрации вы соглашаетесь <span>с политикой обработки персональных данных, условиями использования сайта</span> и <span>правилами программы лояльности</span>
            </p>

            <button>
              {
                location && location.pathname === '/login' ? 'Войти' : 'Создать аккаунт'
              }
            </button>
            <h4>
              {
                location && location.pathname === '/login' ? 'Вы еще не зарегистрированы?' : 'У вас уже есть аккаунт?'
              }
            </h4>
            <h4 className='userIn-link'>
              {
                location && location.pathname === '/login' ? 'Зарегистрироваться' : 'Войти в аккаунт'
              }
            </h4>
        </div>
        
    </div>
  )
}

export default UserIn