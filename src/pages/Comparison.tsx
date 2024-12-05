import React from 'react'
import { CustomContextMain } from '../context/MainContext';
import ComparisonGoods from '../components/UserStorage/Comparison/ComparisonGoods';
import { useSelector } from 'react-redux';
import { selectGoods } from '../redux/goodsSlice/selectorGoods';
import { useAppDispatch } from '../redux/store';
import { fetchGoods } from '../redux/goodsSlice/asyncActions';

const Comparison = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [characterAll, setCharacterAll] = React.useState<any>(['Артикул']);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setPathValue, pathFavorite}: any = React.useContext(CustomContextMain);
  const {goods} = useSelector(selectGoods);
  const [categories, setCategories] = React.useState<string[]>()
  const dispatch = useAppDispatch();

  console.log(categories);
  

  React.useEffect(() => {
    if (dispatch) {
      dispatch(fetchGoods())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          
          goods && goods.length ? <ComparisonGoods goods={goods} characterAll={characterAll}  /> : 
          <div className='myFavorite-goods-notFound comparison-goods-notFound'>
            <div className='myFavorite-goods-notFound-flex'>
            <p>Ничего не найдено</p>
            <div>
              <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></path> <path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"></path> <path d="M33 20C33 21.1046 32.1046 22 31 22C29.8954 22 29 21.1046 29 20C29 18.8954 29.8954 18 31 18C32.1046 18 33 18.8954 33 20Z"></path> <path fillRule="evenodd" clipRule="evenodd" d="M18.5673 33.8235L18.5691 33.8223L18.5872 33.8101C18.6045 33.7986 18.6323 33.7803 18.6699 33.7563C18.7451 33.7082 18.8591 33.6371 19.0069 33.5507C19.303 33.3775 19.7307 33.1448 20.2485 32.9122C21.2987 32.4403 22.6508 32 24 32C25.3491 32 26.7012 32.4403 27.7514 32.9122C28.2693 33.1448 28.6969 33.3775 28.9931 33.5507C29.1408 33.6371 29.2549 33.7082 29.33 33.7563C29.3676 33.7803 29.3954 33.7986 29.4127 33.8101L29.4308 33.8223L29.4327 33.8235C29.4325 33.8234 29.4328 33.8236 29.4327 33.8235M29.4327 33.8235C29.4329 33.8237 29.4335 33.8241 29.4338 33.8243C29.8885 34.1366 30.5104 34.0217 30.8235 33.5673C31.1368 33.1125 31.0221 32.4898 30.5673 32.1765L30.0333 32.9516C30.5673 32.1765 30.5675 32.1766 30.5673 32.1765L30.5651 32.175L30.5619 32.1728L30.5523 32.1663L30.5205 32.1449C30.4938 32.1272 30.4562 32.1025 30.4083 32.0718C30.3126 32.0106 30.1757 31.9254 30.0028 31.8243C29.6578 31.6225 29.1662 31.3552 28.5711 31.0878C27.3955 30.5597 25.7476 30 24 30C22.2523 30 20.6045 30.5597 19.4289 31.0878C18.8338 31.3552 18.3421 31.6225 17.9971 31.8243C17.8243 31.9254 17.6873 32.0106 17.5916 32.0718C17.5438 32.1025 17.5062 32.1272 17.4795 32.1449L17.4476 32.1663L17.438 32.1728L17.4348 32.175L17.4336 32.1758C17.4334 32.176 17.4327 32.1765 18 33L17.4327 32.1765C16.9779 32.4898 16.8631 33.1125 17.1765 33.5673C17.4897 34.022 18.1125 34.1365 18.5673 33.8235"></path> </g></svg>
            </div>
            </div>
            <button>Перейти в каталог 
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
              </div>
            </button>
          </div>
        }
       
      </div>

    
    </div>
    </div>
  )
}

export default Comparison