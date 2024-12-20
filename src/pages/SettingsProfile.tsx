// import React from 'react'
import avatar from '../assets/icons-user/women.svg';

const inputs = [
    {
        id: 1,
        title: 'Фамилия Имя Отчество'
    },
    {
        id: 1,
        title: 'Номер телефона'
    },
    {
        id: 1,
        title: 'E-mail'
    },
    {
        id: 1,
        title: 'Пол'
    },
    {
        id: 1,
        title: 'Дата рождения'
    },
    {
        id: 1,
        title: 'Способы оплаты'
    },
    {
        id: 1,
        title: 'Сменить пароль'
    },
]

const SettingsProfile = () => {
  return (
    <div className='settings'>
        <div className='settings-head'>
            <div>
                <svg viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM33 13L2 13V17L33 17V13Z" fill="#565656"/>
                </svg>
            </div>
            <h4>Настройки профиля</h4>
        </div>
        <div className='settings-avatar'>
            <div className='user-profile-avatar'>
                    <img src={avatar} alt="avatar" />
            </div>
            <div className='settings-avatar-add'>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5 33.25C38.5 36.1495 36.1495 38.5 33.25 38.5H8.75C5.85051 38.5 3.5 36.1495 3.5 33.25V8.75C3.5 5.85051 5.85051 3.5 8.75 3.5H15.7509C16.7169 3.5 17.5 4.28311 17.5 5.24913C17.5 6.2152 16.7169 6.99841 15.7509 6.9986L8.75 7C7.7835 7 7 7.7835 7 8.75V31.9865L14.326 21.7328C14.8753 20.9638 15.9241 20.779 16.6972 21.2782L16.8703 21.4056L25.8737 28.9065L28.2939 25.2793C28.8656 24.4217 30.0363 24.2524 30.8247 24.8685L30.9874 25.0126L35 29.0237V26.25C35 25.2835 35.7835 24.5 36.75 24.5C37.7165 24.5 38.5 25.2835 38.5 26.25V33.25ZM16.0773 25.3015L9.149 35H33.25C34.0006 35 34.6408 34.5275 34.8894 33.8636L30.0213 28.9975L27.7061 32.4707C27.1675 33.2786 26.0861 33.4841 25.2946 32.9664L25.1297 32.8444L16.0773 25.3015ZM29.75 3.5C30.7165 3.5 31.5 4.2835 31.5 5.25V10.5H36.75C37.7165 10.5 38.5 11.2835 38.5 12.25C38.5 13.2165 37.7165 14 36.75 14H31.5V19.25C31.5 20.2165 30.7165 21 29.75 21C28.7835 21 28 20.2165 28 19.25V14H22.75C21.7835 14 21 13.2165 21 12.25C21 11.2835 21.7835 10.5 22.75 10.5H28V5.25C28 4.2835 28.7835 3.5 29.75 3.5ZM14 10.5C15.933 10.5 17.5 12.067 17.5 14C17.5 15.933 15.933 17.5 14 17.5C12.067 17.5 10.5 15.933 10.5 14C10.5 12.067 12.067 10.5 14 10.5Z" fill="white"/>
                </svg>
            </div>
        </div>
        <div className='settings-form'>
            {
                inputs.map((input) => (
                    <div className='settings-input'>
                        <input type="text" placeholder={input.title} />
                    </div>
                ))
            }
            <button>
                Выйти из профиля
                <div>
                    <svg viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.4142 13.5858C33.1953 14.3668 33.1953 15.6332 32.4142 16.4142L19.6863 29.1421C18.9052 29.9232 17.6389 29.9232 16.8579 29.1421C16.0768 28.3611 16.0768 27.0948 16.8579 26.3137L28.1716 15L16.8579 3.68629C16.0768 2.90524 16.0768 1.63891 16.8579 0.857864C17.6389 0.0768156 18.9052 0.0768156 19.6863 0.857864L32.4142 13.5858ZM0 13L31 13V17L0 17L0 13Z" fill="#898989"/>
                    </svg>
                </div>
            </button>
            <button className='settings-delete'>Удалить профиль</button>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            className="truck-icon"
        >
            <circle cx="7" cy="17" r="2" className="wheel front-wheel" />
            <circle cx="17" cy="17" r="2" className="wheel back-wheel" />
            <rect x="1" y="10" width="15" height="7" className="body" />
            <rect x="16" y="10" width="7" height="5" className="cabin" />
        </svg>
    </div>
  )
}

export default SettingsProfile