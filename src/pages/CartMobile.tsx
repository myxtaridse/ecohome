import React from 'react'
import CartGoods from '../components/UserStorage/Cart/CartGoods'
import GoodSection from '../components/GoodSection/GoodSection'
import { Link } from 'react-router-dom'
import { selectGoods } from '../redux/goodsSlice/selectorGoods'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/store'
import { fetchGoods } from '../redux/goodsSlice/asyncActions'

const CartMobile = () => {

  const {goods} = useSelector(selectGoods);
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (dispatch) {
      dispatch(fetchGoods())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='cart-block'>
      <div className='cart-title-main'>
        <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
          </svg>
        </div>
        <h1>Корзина</h1>
      </div>
      <div className='cart'>
            <div className='cart-main'>
                    <div className='cart-main-goods'>
                        <h2 className='cart-title'> Проверьте товары в заказе</h2>
                        <CartGoods />
                    </div>
            </div>
      </div>
      <div className='cartMobile-total-block'>
            <div className='cartMobile-total-count'>
                <h5>3 товара</h5>
                <h4>3 500 Р</h4>
            </div>
            <div className='cartMobile-total-discount'>
                <h5>Общая скидка</h5>
                <h4>-500 Р</h4>
            </div>
            <Link to='/checkout'>
                <button>Перейти к оформлению</button>
            </Link>
      </div>

      <div className='cartMobile-recommend'>
        <h2 className='cart-title'>Рекомендуем вам</h2>
        <div className='cartMobile-recommend-goods'>
            {
                goods.length && goods.map((good) => <GoodSection key={good.id} {...good} />)
            }
        </div>
      </div>

    </div>
        
  )
}

export default CartMobile