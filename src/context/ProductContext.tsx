import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGoods } from '../redux/goodsSlice/selectorGoods';
import { fetchGoods } from '../redux/goodsSlice/asyncActions';
import { useAppDispatch } from '../redux/store';

// eslint-disable-next-line react-refresh/only-export-components
export const CustomContextProductItem = React.createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductContext = ({children}: any) => {
  const [good, setGood] = React.useState(null);

  const location = useLocation();
  const articleLocation = location.pathname.split('/goods/').join("");
  const {goods} = useSelector(selectGoods);
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (dispatch) {
      dispatch(fetchGoods())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  React.useEffect(() => {
     if (articleLocation && goods) {
        const find = goods.find((goodItem) => goodItem.article === articleLocation);
        if (find) {
          setGood(find)
        }  
     }
   
  }, [articleLocation, goods]);
  


  return (
    <CustomContextProductItem.Provider value={good}>
       {children}
    </CustomContextProductItem.Provider>
  )
}

export default ProductContext;