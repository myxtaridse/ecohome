import React from 'react'
import { CustomContextMain } from '../context/MainContext';

const MyFavorite = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { setPathValue }: any = React.useContext(CustomContextMain);

  React.useEffect(() => {
    setPathValue(['Главная', 'Плита печная цельная'])
  }, [setPathValue]);

  const storage = +localStorage.getItem('myFavorite')!;
  console.log(storage);
  

  return (
    <div>MyFavorite</div>
  )
}

export default MyFavorite