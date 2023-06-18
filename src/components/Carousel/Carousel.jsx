import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './CarouselStyles.css';
import { Link } from 'react-router-dom';

// IMAGES
import candle1 from '../../Assets/candle_lantern.jpg';
import candle2 from '../../Assets/candle_relax.jpg';
import beach from '../../Assets/beach.jpg';




function Carousel() {


  return (
    <Splide aria-label="Clueo Events">
        <SplideSlide>
            <div className='image-container background1'>
                <div className='text-container'>
                    <h1>Summer Scent Sale</h1>
                    <h1>Buy 3 Get 1 Free!</h1>
                    <button className='shopNow-btn'><Link to='/shop' className='shopNow-link'>SHOP NOW</Link></button>
                </div>
                <img src={candle1} alt="A lantern lit by a candle in the woods"/>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div className='image-container background2'>
                <img src={beach} alt="a sunset beach"/>
                <div className='text-container'>
                    <h1>Summer Scent Sale</h1>
                    <h1>Buy 3 Get 1 Free!</h1>
                    <button className='shopNow-btn'><Link to='/shop' className='shopNow-link'>SHOP NOW</Link></button>
                </div>
            </div>
        </SplideSlide>
    </Splide>
  )
}

export default Carousel