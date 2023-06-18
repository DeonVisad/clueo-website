import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import productItems from '../Products/ProductsDATA';

import './NavbarStyles.css';



import clueoImg from '../../Assets/CLUEO HUGE.png';

// REACT ICONS
import { AiOutlineShopping } from 'react-icons/ai';
import CartModal from '../CartModal/CartModal';

function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  // function handleAddProduct(product) {
  //   const productExist = cartItems.find((item) => item.id === product.id);
  //   if(productExist){
  //     setCartItems(
  //       cartItems.map((item) => 
  //       item.id === product.id
  //       ? {...productExist, quantity: productExist.quantity + 1}
  //       : item)
  //       );
  //       } else {
  //         setCartItems([...cartItems, {...product, quantity: 1}]);
  //       }
  // }

  return (
    <div className='modalNav-container'>
      <CartModal open={openModal} onClose={() => setOpenModal(false)} />
      <div className='navbar-container'>
        <img className='logo' alt='clueo' src={clueoImg} />
        <div className='link-container'>
          <ul>
            <Link className='nav-link' to="/ourstory">Our Story</Link>
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/shop">Shop</Link>
          </ul>
        </div>
        <div className='secondary-container'>
          
          <div className='icon-container' id='cartIcon-container' onClick={() => setOpenModal(true)}>
          <AiOutlineShopping className='icon' /> <span>Cart</span>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Navbar;