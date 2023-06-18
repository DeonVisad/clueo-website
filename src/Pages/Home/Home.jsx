import React, {useState} from 'react';
import './HomeStyles.css';
import Carousel from '../../components/Carousel/Carousel';
import ShippingBanner from '../../components/ShippingBanner/ShippingBanner';
import BestSellers from '../../components/BestSellers/BestSellers';
import InfoBanner from '../../components/InfoBanner/InfoBanner';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className='home-container'>
        <Carousel />
        <ShippingBanner />
        <BestSellers />
        <InfoBanner />
        <Footer />
    </div>
  )
}

export default Home;