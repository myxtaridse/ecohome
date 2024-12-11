import React from 'react'
import Arrow from '../components/Arrow'
import Price from '../components/Sorted/Price'
import Brand from '../components/Sorted/Brand'
import Color from '../components/Sorted/Color'
import { useAppDispatch } from '../redux/store'
import { fetchGoods } from '../redux/goodsSlice/asyncActions'
import { useSelector } from 'react-redux'
import { selectGoods } from '../redux/goodsSlice/selectorGoods'
import GoodSection from '../components/GoodSection/GoodSection'
import { Link } from 'react-router-dom'
import { CustomContextMain } from '../context/MainContext'
import ListGoodsPopupLayout from './ListGoodsPopupLayout'
import { category } from '../const/category'
import { material } from '../const/material'
import { brand } from '../const/brand'


const character = [
    {
        id: 1,
        title: 'Катeгория',
        component: <ListGoodsPopupLayout list={category} title='Катeгория' />
    },
    {
        id: 2,
        title: 'Цена',
        component: <Price />
    },
    {
        id: 3,
        title: 'Бренд',
        component: <Brand list={brand} title={'Бренд'} />
    },
    {
        id: 4,
        title: 'Материал',
        component: <ListGoodsPopupLayout list={material} title='Материал' />
    },
    {
        id: 5,
        title: 'Цвет',
        component: <Color />
    }
]

const ListGoodsLayout = () => {
    const dispatch = useAppDispatch()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {setIsMore, setChildrenPopup}: any = React.useContext(CustomContextMain);
  
    React.useEffect(() => {
        if (dispatch) {
        dispatch(fetchGoods())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  const {goods} = useSelector(selectGoods);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const morePopupFn = (component: any) => {
      setIsMore(true)
      setChildrenPopup(
          component
      )
  }

  return (
    <>
      <div className='myFavorite-head'>
            <div className='cart-title-main'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path>
                    </svg>
                </div>
                <h1>Акции</h1>
            </div>
            <div className='listGoods-sort-flex'>
                <div className='listGoods-sort-icon'>
                    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M45.9751 32.4745L37.017 41.473C37.0149 41.4751 37.0125 41.4768 37.0104 41.479C36.9706 41.5185 36.9291 41.5562 36.8859 41.592C36.8651 41.6091 36.8431 41.6241 36.8218 41.6401C36.7963 41.6593 36.7714 41.6791 36.7449 41.697C36.7195 41.714 36.6933 41.7286 36.6673 41.7443C36.6432 41.7588 36.6194 41.774 36.5946 41.7874C36.5682 41.8016 36.541 41.8136 36.5141 41.8265C36.4879 41.8387 36.4623 41.8519 36.4356 41.8629C36.4095 41.8738 36.3828 41.8826 36.3562 41.8922C36.3277 41.9024 36.2994 41.9135 36.2701 41.9225C36.2436 41.9305 36.2168 41.9363 36.1901 41.9431C36.1601 41.9507 36.1306 41.9591 36.1001 41.9653C36.0691 41.9714 36.0378 41.975 36.0065 41.9795C35.98 41.9833 35.9538 41.9884 35.927 41.991C35.8682 41.9968 35.8092 42 35.7502 42C35.6912 42 35.6322 41.9968 35.5734 41.991C35.5468 41.9884 35.521 41.9834 35.4947 41.9796C35.4632 41.9751 35.4316 41.9714 35.4001 41.9651C35.3701 41.9591 35.341 41.9509 35.3115 41.9434C35.2843 41.9365 35.2569 41.9306 35.2301 41.9223C35.2012 41.9136 35.1735 41.9027 35.1452 41.8926C35.1184 41.8829 35.0911 41.8739 35.0645 41.8629C35.0384 41.852 35.0135 41.8393 34.988 41.8272C34.9604 41.8141 34.9326 41.8018 34.9054 41.7872C34.8815 41.7744 34.8588 41.7597 34.8356 41.7458C34.8087 41.7296 34.7814 41.7142 34.7551 41.6967C34.7299 41.6798 34.7063 41.6609 34.682 41.6428C34.6593 41.6259 34.6363 41.6099 34.6142 41.5918C34.575 41.5594 34.5378 41.5249 34.5015 41.4894C34.4956 41.4837 34.4891 41.4787 34.4833 41.473L25.5249 32.473C25.1889 32.1354 25.0001 31.6774 25.0001 31.2001C25.0001 30.7226 25.1889 30.2648 25.5249 29.9272C25.8609 29.5896 26.3167 29.4 26.7918 29.4C27.2671 29.3999 27.7228 29.5896 28.0588 29.9271L33.9585 35.8544V18.6001C33.9585 18.1226 34.1473 17.6648 34.4833 17.3272C34.8193 16.9897 35.2751 16.8001 35.7502 16.8001C36.2254 16.8001 36.6811 16.9897 37.0171 17.3272C37.3531 17.6648 37.5419 18.1226 37.5419 18.6001V35.855L43.4416 29.9287C43.7776 29.5912 44.2334 29.4015 44.7085 29.4016C45.1837 29.4016 45.6394 29.5913 45.9754 29.9289C46.3113 30.2665 46.5001 30.7243 46.5 31.2017C46.5 31.6791 46.3112 32.1369 45.9751 32.4745ZM21.4166 20.4H5.29168C4.81652 20.4 4.36081 20.5897 4.02478 20.9272C3.68875 21.2648 3.5 21.7226 3.5 22.2C3.5 22.6774 3.68875 23.1353 4.02478 23.4729C4.36081 23.8104 4.81652 24 5.29168 24H21.4166C21.8918 24 22.3475 23.8104 22.6835 23.4729C23.0194 23.1353 23.2083 22.6774 23.2083 22.2C23.2083 21.7226 23.0194 21.2648 22.6835 20.9272C22.3475 20.5897 21.8918 20.4 21.4166 20.4ZM5.29168 9.6H35.7499C36.2252 9.6 36.6809 9.41037 37.0169 9.07287C37.3529 8.73528 37.5416 8.27745 37.5416 7.8C37.5416 7.32264 37.3529 6.86481 37.0169 6.52722C36.6809 6.18972 36.2252 6 35.7499 6H5.29168C4.81652 6 4.36081 6.18972 4.02478 6.52722C3.68875 6.86481 3.5 7.32264 3.5 7.8C3.5 8.27745 3.68875 8.73528 4.02478 9.07287C4.36081 9.41037 4.81652 9.6 5.29168 9.6ZM17.8334 34.8H5.29168C4.81652 34.8 4.36081 34.9897 4.02478 35.3272C3.68875 35.6648 3.5 36.1226 3.5 36.6C3.5 37.0774 3.68875 37.5353 4.02478 37.8729C4.36081 38.2104 4.81652 38.4 5.29168 38.4H17.8334C18.3086 38.4 18.7643 38.2104 19.1003 37.8729C19.4363 37.5353 19.6251 37.0774 19.6251 36.6C19.6251 36.1226 19.4363 35.6648 19.1003 35.3272C18.7643 34.9897 18.3086 34.8 17.8334 34.8Z" fill="#565656"/>
                    </svg>
                </div>
                <div className='listGoods-sort-icon'>
                    <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7987 31.5C11.5194 29.4609 13.4641 28 15.75 28C18.0359 28 19.9806 29.4609 20.7013 31.5H38.5V35H20.7013C19.9806 37.0391 18.0359 38.5 15.75 38.5C13.4641 38.5 11.5194 37.0391 10.7987 35H3.5V31.5H10.7987ZM21.2987 19.25C22.0194 17.2109 23.9641 15.75 26.25 15.75C28.5359 15.75 30.4806 17.2109 31.2013 19.25H38.5V22.75H31.2013C30.4806 24.7891 28.5359 26.25 26.25 26.25C23.9641 26.25 22.0194 24.7891 21.2987 22.75H3.5V19.25H21.2987ZM10.7987 7C11.5194 4.96092 13.4641 3.5 15.75 3.5C18.0359 3.5 19.9806 4.96092 20.7013 7H38.5V10.5H20.7013C19.9806 12.5391 18.0359 14 15.75 14C13.4641 14 11.5194 12.5391 10.7987 10.5H3.5V7H10.7987ZM15.75 10.5C16.7165 10.5 17.5 9.71649 17.5 8.75C17.5 7.78351 16.7165 7 15.75 7C14.7835 7 14 7.78351 14 8.75C14 9.71649 14.7835 10.5 15.75 10.5ZM26.25 22.75C27.2165 22.75 28 21.9665 28 21C28 20.0335 27.2165 19.25 26.25 19.25C25.2835 19.25 24.5 20.0335 24.5 21C24.5 21.9665 25.2835 22.75 26.25 22.75ZM15.75 35C16.7165 35 17.5 34.2165 17.5 33.25C17.5 32.2835 16.7165 31.5 15.75 31.5C14.7835 31.5 14 32.2835 14 33.25C14 34.2165 14.7835 35 15.75 35Z" fill="#565656"/>
                    </svg>
                </div>
                {
                    character.map((item) => (
                        <div className='listGoods-sort-character' onClick={() => morePopupFn(item.component)}>
                            <h6>{item.title}</h6>
                            <Arrow />
                        </div>
                    ))
                }
            </div>
      </div>
      <div className="mainGoods-list">
        {goods.map((item) => (
          
           <Link to={`/item/${item.article}`}>
               <GoodSection {...item} />
           </Link>
          
        ))}
      </div>

      {/* {
        windowRef > 500 && <div className='myFavorite-filter'>
        <h3>Цена, руб.</h3>
        <div className='myFavorite-filter-input'>
          <input placeholder={`от ${minPrice}`} value={minPrice ? `от ${0}` : ''} />
          <input placeholder={`до ${maxPrice}`} value={maxPrice ? `от ${0}` : ''} />
        </div>
        <SliderPrice />
        
      </div>
      } */}
      {/* <Outlet /> */}
    </>
  )
}

export default ListGoodsLayout