import React from 'react';
import { CustomContextMain } from '../context/MainContext';
import SliderPrice from '../components/UserStorage/SliderPrice';
import GoodSectionLine from '../components/GoodSection/GoodSectionLine';
import GoodSection from '../components/GoodSection/GoodSection';
import { useSelector } from 'react-redux';
import { selectGoods } from '../redux/goodsSlice/selectorGoods';
// import { useAppDispatch } from '../redux/store';
// import { fetchGoods } from '../redux/goodsSlice/asyncActions';
import { Link } from 'react-router-dom';
import LoaderFavorite from '../components/Loader/LoaderFavorite';

const MyFavorite = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setPathValue, pathFavorite, windowRef}: any = React.useContext(CustomContextMain);
  const [isListLine, setIsListLine] = React.useState(false);
  // const [minPrice, setMinPrice] = React.useState(0);
  // const [maxPrice, setMaxPrice] = React.useState(0);
  const {goods} = useSelector(selectGoods)
  // const dispatch = useAppDispatch();

  console.log(setIsListLine);
  

  // React.useEffect(() => {
  //   if (dispatch) {
  //     dispatch(fetchGoods())
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  React.useEffect(() => {
    
    if (pathFavorite && pathFavorite.includes('/goods/')) {
      const path = pathFavorite.split('/goods/').join(" ");
    
      setPathValue(['Главная', path, 'Избранное'])
    } else {
      setPathValue(['Главная', 'Избранное'])
    }
  }, [setPathValue, pathFavorite]);
  

  // React.useEffect(() => {
    
      
  //      for (let i = 0; i < storageFavorite.length; i++) {
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       const newData = goods.filter((itemData: any) => itemData.article === storageFavorite[i]);
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       // const isNewData = goods.findIndex((itemGood: any) => itemGood === newData);
  //       // if (isNewData === -1) {
  //       //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       //   setGoods((prevGoods: any) => [...prevGoods, newData[0]]);
  //       // }
       
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [storageFavorite])

  // console.log(storageFavorite, setMaxPrice, setMinPrice);
  
//
  return (
    <div className='myFavorite'>
      
      {
        windowRef > 500 && <div className='myFavorite-filter'>
        <h3>Цена, руб.</h3>
        {/* <div className='myFavorite-filter-input'>
          <input placeholder={`от ${minPrice}`} value={minPrice ? `от ${0}` : ''} />
          <input placeholder={`до ${maxPrice}`} value={maxPrice ? `от ${0}` : ''} />
        </div> */}
        <SliderPrice />
        
      </div>
      }


      <div
      style={{backgroundColor: goods && goods.length && (1 + 2 === 4) ? '#F3F5F9' : '#fff'}}
      className={[
        'myFavorite-goods', goods.length ? (isListLine ? 'myFavorite-goods-line' : 'myFavorite-goods-block') : 'myFavorite-notFound'].join(" ")}>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          goods && goods.length && (1 + 2 === 4) ? goods.map((item: any) => windowRef.current > 500 && item ? isListLine ? <GoodSectionLine {...item} key={item.id} /> : <GoodSection {...item} key={item.id} /> : <GoodSectionLine {...item} key={item.id} />) : 
          <div className='cart-loader'>
            <LoaderFavorite />
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
  )
}

export default MyFavorite
