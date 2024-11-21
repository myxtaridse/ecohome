import React from 'react';
import Arrow from '../components/Arrow';
import SliderPrice from '../components/UserStorage/SliderPrice';
import { CustomContextMain } from '../context/MainContext';
import { reqProduct } from '../api/fetchProducts';
import UserStorageGood from '../components/UserStorage/UserStorageGood';

const MyFavorite = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setPathValue, pathFavorite, storageFavorite}: any = React.useContext(CustomContextMain);
  const [isListLine, setIsListLine] = React.useState(false);
  const [isSelector, setIsSelector] = React.useState(false);
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [goods, setGoods] = React.useState<any>([]);

  React.useEffect(() => {
    console.log(setMinPrice, setMaxPrice);
    
    if (pathFavorite && pathFavorite.includes('/goods/')) {
      const path = pathFavorite.split('/goods/').join(" ");
    
      setPathValue(['Главная', path, 'Избранное'])
    } else {
      setPathValue(['Главная', 'Избранное'])
    }
  }, [setPathValue, pathFavorite]);

  React.useEffect(() => {
    if (storageFavorite && storageFavorite.length) {
      reqProduct().then((data) => {
       for (let i = 0; i < storageFavorite.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newData = data.filter((itemData: any) => itemData.article === storageFavorite[i]);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const isNewData = goods.findIndex((itemGood: any) => itemGood === newData);
        if (isNewData === -1) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setGoods((prevGoods: any) => [...prevGoods, newData[0]]);
        }
       }
      }).catch((error) => {
        console.log(error);
        setGoods([])
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageFavorite])
 
  React.useEffect(() => {
    if (goods.length) {
      // max & min Price
    }
  }, [goods])


  return (
    <div className='myFavorite'>
      <div className='myFavorite-head'>
      <div className='cart-title'>
        <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.2426 4.75736C20.705 6.2228 21.2547 8.25005 20.8924 10.1368C21.4614 10.2972 21.9987 10.6002 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L13.978 18.5L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736ZM12.962 12.4646C12.346 13.0761 12.346 14.0615 12.962 14.673L17 18.6818L21.038 14.673C21.654 14.0615 21.654 13.0761 21.038 12.4646C20.414 11.8451 19.3962 11.8451 18.77 12.4668L16.9979 14.2206L15.591 12.825L15.2278 12.4646C14.6038 11.8451 13.586 11.8451 12.962 12.4646ZM4.17157 6.17157C2.68183 7.66131 2.60704 10.0473 3.97993 11.6232L10.9999 18.6543L12.559 17.092L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453C17.7877 10.6238 18.2921 10.3297 18.828 10.1632C19.2436 8.79577 18.9058 7.25122 17.827 6.1701C16.3279 4.66794 13.9076 4.60701 12.337 6.01687L11.0019 7.21524L9.66605 6.01781C8.09098 4.60597 5.67506 4.66808 4.17157 6.17157Z"></path>
          </svg>
        </div>
        <h1>Избранные товары</h1>
      </div>
        <div className='myFavorite-head-flex'>
        <h2>Найдено 2 товара</h2>
          
          <div className="myFavorite-sort myFavorite-sort-left">
            <p className='myFavorite-sort-title'>Сортировать по:</p>
            <div className="myFavorite-sort-selector" onClick={() => setIsSelector(!isSelector)}
              onMouseMove={() => setIsSelector(true)}  
            >
              <p>По категории</p>
              <div>
                <Arrow />
              </div>
            </div>
            {
              isSelector && 
              <div className='myFavorite-sort-selector-popup' onMouseLeave={() => setIsSelector(false)}  >
                <p>По поплярности</p>
                <p>По категории</p>
                <p>По наименованию</p>
                <p>По дате</p>
                <p>По возрастанию цены</p>
                <p>По уменьшению цены</p>
              </div>
            }
          </div>
          <div className="myFavorite-sort">
          <div onClick={() => setIsListLine(true)} className={['myFavorite-sort-line', isListLine ? 'myFavorite-sort-active' : ''].join(" ")}>
          <svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.6667 13.333H70V19.9997H36.6667V13.333ZM36.6667 26.6663H56.6667V33.333H36.6667V26.6663ZM36.6667 46.6663H70V53.333H36.6667V46.6663ZM36.6667 59.9997H56.6667V66.6663H36.6667V59.9997ZM10 13.333H30V33.333H10V13.333ZM16.6667 19.9997V26.6663H23.3333V19.9997H16.6667ZM10 46.6663H30V66.6663H10V46.6663ZM16.6667 53.333V59.9997H23.3333V53.333H16.6667Z"/>
          </svg>

          </div>
          <div onClick={() => setIsListLine(false)} className={['myFavorite-sort-block', isListLine ? '' : 'myFavorite-sort-active'].join(" ")}>
          <svg viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.667 13.333H32.667V33.333H12.667V13.333ZM19.3337 19.9997V26.6663H26.0003V19.9997H19.3337ZM12.667 46.6663H32.667V66.6663H12.667V46.6663ZM19.3337 53.333V59.9997H26.0003V53.333H19.3337Z"/>
            <path d="M48.0003 13.333H68.0003V33.333H48.0003V13.333ZM54.667 19.9997V26.6663H61.3337V19.9997H54.667ZM48.0003 46.6663H68.0003V66.6663H48.0003V46.6663ZM54.667 53.333V59.9997H61.3337V53.333H54.667Z"/>
          </svg>

          </div>
          </div>
        </div>
      </div>
      <div className='myFavorite-filter'>
        <h3>Цена, руб.</h3>
        <div className='myFavorite-filter-input'>
          <input placeholder={`от ${minPrice}`} value={minPrice ? `от ${0}` : ''} />
          <input placeholder={`до ${maxPrice}`} value={maxPrice ? `от ${0}` : ''} />
        </div>
        <SliderPrice />
      </div>
      <div className='myFavorite-goods' style={{gridTemplateColumns: isListLine ? "repeat(1, 1fr)" : "repeat(4, 1fr)", 
        gap: isListLine ? "20px" : "30px", display: goods && goods.length ? 'grid' : 'block'}}>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          goods && goods.length ? goods.map((item: any) => <UserStorageGood key={item.id} item={item} />) : 
          <div className='myFavorite-goods-notFound'>
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
  )
}

export default MyFavorite