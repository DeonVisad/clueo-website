import React from 'react';
import './ProductsStyles.css';
// import productItems from './ProductsDATA';
import { useSelector, useDispatch } from 'react-redux';
import { allProducts } from '../../redux/features/allProductsSlice';
import { addToCart } from '../../redux/features/addToCartSlice.js';

function Products() {
    const productItems = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
  
    
  return (
    <div className='shopAll-container'>
      <h1 className='shop-title'>SHOP ALL</h1>
      <div className='shopProducts-container'>
        {productItems.map(product => {
          return (
            <div className='shopProduct-card'>
              <img src={require('../../Assets/' + product.image + '.jpg')} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.ingredients}</p>
              <p className='shopProduct-price'>{product.price}</p>
              <button key={product.id} id='product-btn' className='shopProduct-btn' onClick={() => dispatch(addToCart(product))} >ADD TO CART</button>
              
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Products