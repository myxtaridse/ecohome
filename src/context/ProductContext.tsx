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
      console.log(data);
      
    }).catch((error) => {
      console.log(error);
      console.log(valueGood, articleLocation);
      if (valueGood) {
        setValue(valueGood)
      }
    })
   
  }, [valueGood, articleLocation])

// React.useEffect(() => {
//     reqProduct().then((data) => {
      
      
//         if (articleLocation) {
//         console.log(articleLocation);
        
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         const product = data.filter((item: any) => item.article === articleLocation); 
//         if (product.length) {
//           console.log(product);
          
//          setValue(product)
//         } 
        
//       }
        
//     }).catch((err) => 
//     {
//       console.log(err);
//       if (valueGood) {
//         console.log(valueGood);
        
//         if (articleLocation) {
//           console.log(articleLocation);

          
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           const product = valueGood.filter((item: any) => item.article === articleLocation); 

//           if (product.length) {
//             console.log(product);
            
//             setValue(product);
//           }
//         }
        
        
        
//       }
//     }
      
//     )
    
// }, [valueGood, articleLocation]);




  return (
    <CustomContextProductItem.Provider value={value}>
       {children}
    </CustomContextProductItem.Provider>
  )
}

export default ProductContext;