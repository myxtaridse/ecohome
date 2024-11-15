// import React from 'react'
// import { CustomContextMain } from '../context/MainContext';
// // import Loading from '../components/Loading/Loading';
// import { reqProduct } from '../api/fetchProducts';

import { useLocation } from "react-router-dom"

const MyFavorite = () => {
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const { setPathValue, storageFavorite, pathFavorite }: any = React.useContext(CustomContextMain);
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [valueGood, setValueGood] = React.useState<any>(null);

  // React.useEffect(() => {
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   reqProduct().then((data: any) => {
  //     console.log(pathFavorite, data);
  //   })
  //   if (pathFavorite === '/') {
  //     setPathValue(['Главная', 'Плита печная цельная'])
  //   } 
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [setPathValue]);

  const location = useLocation();
  console.log(location);
  

  // // React.useEffect(() => {
  // //   if (storageFavorite) {
      
  // //     if (storageFavorite.length) {
        
  // //       reqProduct().then((data) => {
  // //        // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // //        const isArticle = data.filter((item: any) => {
  // //         // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // //         const storageArticle = data.filter((itemStorage: any) => itemStorage === item.article);
  // //         if (storageArticle) {
  // //           return item
  // //         }
        
  // //         return null
  // //        })
         
         
  // //        if (isArticle) {
  // //         setValueGood(isArticle)
  // //        }
  // //     }).catch((err) => 
  // //     {
  // //       console.log(err);
  // //       if (valueGood) {
  // //         setValueGood(null)
  // //       }
  // //     }
        
  // //     )
       
  // //     }
  // //   }
  // // // eslint-disable-next-line react-hooks/exhaustive-deps
  // // }, [storageFavorite]);
  
  // console.log(valueGood);
  
// if (!valueGood) return <Loading />
  return (
    <div className='myFavorite'>
      <div className='myFavorite-head'>
        <h1>Избранное</h1>
        <div className='myFavorite-head-flex'>
          <p>Найдено <b>2</b> товара</p>
          <div className="myFavorite-sort">
            <p>Сортировать по:</p>
            <div className="myFavorite-sort-selector">
              <p>По категории</p>
              <div></div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='myFavorite-filter'></div>
      <div className='myFavorite-goods'></div>

    {/* {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      valueGood.map((itemGood: any) => <div key={itemGood.id}>
      <h1>{itemGood.titleGood}</h1>
    </div>)
    } */}
    </div>
  )
}

export default MyFavorite