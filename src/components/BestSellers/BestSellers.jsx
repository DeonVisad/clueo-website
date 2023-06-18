import React from 'react';
import './BestSellersStyles.css';
import { useSelector } from 'react-redux';
// import productItems from '../Products/ProductsDATA';

function BestSellers() {

  const productItems = useSelector((state) => state.allProducts.products);
  
  return (
    <div className='bestSellers-container'>
        <h2>Best Sellers</h2>
        <div className='products-container'>
                {productItems.map((item, index) => {
                   if(index < 3) { return (
                        <div key={item.id} className='product-card'>
                            <img className='product-image' src={require('../../Assets/' + item.image + '.jpg')} alt={item.title}/>
                            <h3>{item.title}</h3>
                            <h3 className='ingredients'>{item.ingredients}</h3>
                            <h4 className='price'>{item.price}</h4>

                        </div>
                    )
                }})}
        </div>
    </div>
  )
}

export default BestSellers