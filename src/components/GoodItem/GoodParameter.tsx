// import React from 'react';

const parametereGood = [
  {
    id: '1',
    title: 'Артикул',
    valueParametere: '80164116'
  },
  {
    id: '2',
    title: 'Количество предметов в упаковке',
    valueParametere: '1'
  },
  {
    id: '3',
    title: 'Материал изделия',
    valueParametere: 'чугун'
  },
  {
    id: '4',
    title: 'Страна производства',
    valueParametere: 'Россия'
  },
  {
    id: '5',
    title: 'Комплектация',
    valueParametere: 'Колосник чугунный - 1 шт.'
  },
  {
    id: '6',
    title: 'Высота предмета',
    valueParametere: '2 см'
  },
  {
    id: '7',
    title: 'Ширина предмета',
    valueParametere: '30 см'
  },
  {
    id: '8',
    title: 'Глубина предмета',
    valueParametere: '20 см'
  },
  {
    id: '9',
    title: 'Вес с упаковкой (кг)',
    valueParametere: '5.5 кг'
  }
]

const GoodParameter = () => {
  return (
    <div className='goodItem-parameter'>
      <div>
      <div className='goodItem-main-article-reviews goodItem-parameter-reviews-show'>
        <p className='goodItem-main-article'>Код товара: 161616</p>
        <div className='goodItem-main-reviews'>
          <div className="goodItem-main-stars">
          {Array(5)
            .fill("")
            .map(() => (
              <div className="goodItem-main-starItem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path>
                </svg>
              </div>
            ))}
          </div>
          <p>96 отзывов</p>
        </div>
      </div>
      <div className='goodItem-parameter-exchange'>
        
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM15.0049 7.00275L18.5049 10.0027L15.0049 13.0027V11.0027H11.0049V9.00275H15.0049V7.00275ZM9.00488 17.0027L5.50488 14.0027L9.00488 11.0027V13.0027H13.0049V15.0027H9.00488V17.0027Z"></path></svg>
        </div>
        <p>Обмен и возврат 10 дней</p>
      </div>
      </div>
      
      <h2>Характеристики:</h2>
      <div className='goodItem-parameter-block'>
        {
          parametereGood.map((item) => 
          <div key={item.id} className='goodItem-parameter-item'>
            <p>{item.title}</p>
            <div className='goodItem-parameter-item-line'></div>
            <p>{item.valueParametere}</p>
          </div>
        )
        }
        <div className='goodItem-parameter-link'>
          <p>Все характеристики</p>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoodParameter
