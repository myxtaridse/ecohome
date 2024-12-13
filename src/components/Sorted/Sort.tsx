import React from 'react'

const Sort = () => {
    const [active, setActive] = React.useState(0);
  return (
    <div className='sortGoods'>
        <h3>Сортировка</h3>
        <div className='sortGoods-list'>
            {
                ['Популярные', 'Низкая цена', 'Высокая цена', 'Высокий рейтинг', 'Высокий рейтинг'].map((item, id) => (
                    <div className={['sortGoods-item', id === active ? 'sortGoods-item-active' : ''].join(" ")} 
                        onClick={() => setActive(id)}
                    >
                        <div>
                            {
                                id === 1 || id === 4 ? (
                                    <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M21.0833 22.9987L5.75 22.9987M21.0833 30.6654H5.75M21.0833 15.332H5.75M34.5 32.582V13.4154M34.5 13.4154L40.25 19.1654M34.5 13.4154L28.75 19.1654" stroke="#565656" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M24.9167 23.0013H40.25M24.9167 15.3346H40.25M24.9167 30.668H40.25M11.5 13.418V32.5846M11.5 32.5846L5.75 26.8346M11.5 32.5846L17.25 26.8346" stroke="#565656" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                )
                            }
                        </div>
                        <p>{item}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Sort