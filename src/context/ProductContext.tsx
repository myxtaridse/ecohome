import React from 'react'
import db from '../../db.json';
import { reqProduct } from '../api/fetchProducts';
import { useLocation } from 'react-router-dom';

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
      
      
        if (articleLocation) {
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const product = data.filter((item: any) => item.article === articleLocation);
        
        if (product.length) {
         setValue(product)
        }
        
      }
       
     
      
        
    }).catch((err) => 
    {
      console.log(err);
      if (valueGood) {
        setValue(valueGood)
      }
    }
      
    )
    
}, [valueGood, articleLocation]);




  return (
    <CustomContextProductItem.Provider value={value}>
       {children}
    </CustomContextProductItem.Provider>
  )
}

export default ProductContext;