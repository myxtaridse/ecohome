import GoodItem from '../components/GoodItem/GoodItem'
import ProductContext from '../context/ProductContext';

const GoodItemPage = () => {
  
  return (
    <ProductContext>
      <GoodItem />
    </ProductContext>
  )
}

export default GoodItemPage
