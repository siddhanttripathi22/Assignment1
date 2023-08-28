import product1 from '../assests/product1.svg'
import './productCard.css'



const ProductCard = ({productDetails}) => {
  return <div className='product-card'>
    <img className='product-img' src={productDetails?.image}/>
    <p className='product-name'> {productDetails?.title}</p>
    <p className='product-details'> {productDetails?.description}</p>
    <p className='product-price'>${productDetails?.price}</p>
  </div>;
};
export default ProductCard;
