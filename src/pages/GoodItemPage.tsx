import GoodItem from '../components/GoodItem/GoodItem'
import ProductContext from '../context/ProductContext';

const GoodItemPage = () => {
  
  return (
    <>
    
    <ProductContext>
      <div>123</div>
        <GoodItem />
    </ProductContext>
    </>
  )
}

export default GoodItemPage
