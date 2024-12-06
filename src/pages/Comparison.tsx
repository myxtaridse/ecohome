import React from 'react'
import { CustomContextMain } from '../context/MainContext';
import ComparisonGoods from '../components/UserStorage/Comparison/ComparisonGoods';
import { useSelector } from 'react-redux';
import { selectGoods } from '../redux/goodsSlice/selectorGoods';
// import { useAppDispatch } from '../redux/store';
// import { fetchGoods } from '../redux/goodsSlice/asyncActions';
import { Link } from 'react-router-dom';
import LoaderComparison from '../components/Loader/LoaderComparison';

const Comparison = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [characterAll, setCharacterAll] = React.useState<any>(['Артикул']);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setPathValue, pathFavorite}: any = React.useContext(CustomContextMain);
  const {goods} = useSelector(selectGoods);
  const [categories, setCategories] = React.useState<string[]>()
  // const dispatch = useAppDispatch();
  
console.log(categories);


  // React.useEffect(() => {
  //   if (dispatch) {
  //     dispatch(fetchGoods())
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  React.useEffect(() => {
    
    if (pathFavorite && pathFavorite.includes('/goods/')) {
      const path = pathFavorite.split('/goods/').join(" ");
    
      setPathValue(['Главная', path, 'Сравнение товаров'])
    } else {
      setPathValue(['Главная', 'Сравнение товаров'])
    }
  }, [setPathValue, pathFavorite]);

  React.useEffect(() => {
      if (goods) {

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const categoriesAll = goods.flatMap((itemData: any) => itemData.categoryChildren);
        const newCategories: string[] = Array.from(new Set(categoriesAll));
        if (newCategories) {
          setCategories(newCategories)
        }
      }
        
  }, [goods])

  React.useEffect(() => {
    if (goods) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const getParameter = goods.flatMap((itemGood: any) => itemGood.parameter || []).map((parameterGood: any) => {
        if (parameterGood.titleParameter !== 'Вес с упаковкой (кг)' && parameterGood.titleParameter !== 'Высота предмета' && parameterGood.titleParameter !== 'Ширина предмета' && parameterGood.titleParameter !== 'Глубина предмета') {
        return parameterGood.titleParameter;
        }
      }).filter((itemFilter: string) => itemFilter !== undefined);
      
      
      setCharacterAll(Array.from(new Set(getParameter)))
      
    }
  }, [goods]);

  
  
  

  return (
    <div>
      <div className='comparison'>
      {/* <div className='myFavorite-head'>
      <div className='cart-title-main'>
        <div>
        <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path>
            </svg>
        </div>
        <h1>Сравнение товаров</h1>
      </div>
        <div className='myFavorite-head-flex'>
          
          <div className="myFavorite-sort">
            <p className='myFavorite-sort-title'>Категория:</p>
            <div className="comparison-sort-selector" 
            ref={widthSelector}
            onClick={() => setIsSelector(!isSelector)}
              onMouseMove={() => setIsSelector(true)}  
            >
              <p>{categories ? categories[0] : 'Не выбрана'}</p>
              <div>
                <Arrow />
              </div>
            </div>
            {
              isSelector && 
              <div 
              style={{width: widthSelector.current ? `${widthSelector.current.clientWidth + 1}px` : 'max-content'}}
              className='comparison-sort-selector-popup' onMouseLeave={() => setIsSelector(false)}  >
                {
                  categories?.map((categoriesItem) => <p>{categoriesItem}</p>)
                }
              </div>
            }
          </div>
          
        </div>
      </div> */}

      

      <div className='myFavorite-goods comparison-goods'>
        {/* <div className='comparison-goods-sorted'>
          <div className="cart-main-delete-block comparison-delete-block">
              
              <div className="cart-main-delete">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>
                  </div>
                  <p>Удалить список</p>
              </div>
          </div>
          <Sorted />
        </div> */}
        {
          
          goods && goods.length && (1 + 2 === 4) ? <ComparisonGoods goods={goods} characterAll={characterAll}  /> : 
          <div className='cart-loader'>
            <LoaderComparison />
            <h4>Добавьте товары в избранное, чтобы не потерять лучшее!</h4>
            <div className='cartMobile-total-block'>
                  <Link to='/catalog'>
                      <button>Перейти в каталог</button>
                  </Link>
            </div>
          </div>
        }
       
      </div>

    
    </div>
    </div>
  )
}

export default Comparison

