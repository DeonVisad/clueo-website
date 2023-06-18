import React from 'react'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Products/Products'
import './ShopStyles.css';

function Shop() {
  return (
    <div className='shop-container'>
        <h1 className='shop-title'>SHOP ALL</h1>
        <Products/>
        <Footer />
    </div>
  )
}

export default Shop