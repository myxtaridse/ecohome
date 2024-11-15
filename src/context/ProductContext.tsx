import React from 'react'
import db from '../../db.json';
// import { reqProduct } from '../api/fetchProducts';
import { useLocation } from 'react-router-dom';
import { reqProduct } from '../api/fetchProducts';

export const CustomContextProductItem = React.createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductContext = ({children}: any) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const valueGood: any = db.goods;


  const [value, setValue] = React.useState(null);

  const location = useLocation();
  const articleLocation = location.pathname.split('/goods/').join("");
  

  React.useEffect(() => {
    reqProduct().then((data) => {
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const product = data.filter((item: any) => item.article === articleLocation);
      console.log(product, 'api');
      
      
    }).catch((error) => {
      console.log(error);
      
      if (valueGood) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const product = valueGood.filter((item: any) => item.article === articleLocation);
        console.log(product, 'local');
        
        setValue(valueGood);
      }
    })
   
  }, [valueGood, articleLocation]);


  return (
    <CustomContextProductItem.Provider value={value}>
       {children}
    </CustomContextProductItem.Provider>
  )
}

export default ProductContext;