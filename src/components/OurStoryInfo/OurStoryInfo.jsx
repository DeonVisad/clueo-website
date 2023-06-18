import React from 'react';
import './OurStoryInfoStyles.css';

import bath from '../../Assets/bath-candles.jpg';
import like from '../../Assets/likeyou.jpg';
import clean from '../../Assets/clean-candle.jpg';


function OurStoryInfo() {
  return (
    <div className='info-container'>
        <div className='infoSegment'>
            <img className='info-img' src={bath} alt='something'/>
            <div className='infotext-container'>
              <h2>Our Formula</h2>            
              <p>All of our candles are made with 100% Natural Soy Wax, free from carcinogens, mutagens, and reproductive toxins and are formulated without phthalates.</p>
            </div>
        </div>
        <div className='infoSegment'>
            <div className='infotext-container'>
              <h2>Community & Charity</h2>
              <p>Our mission is to cultivate a world where friendliness flourishes, creating a ripple effect of kindness and warmth in every interaction. We are committed to fostering inclusive and compassionate communities, where individuals feel valued, respected, and supported.</p>
            </div>
            <img className='info-img' src={like} alt='something 2'/>
        </div>
        <div className='infoSegment'>
            <img className='info-img' src={clean} alt='something 3'/>
            <div className="infotext-container">
              <h2>Our Mission</h2>
              <p>We are committed to crafting candles using sustainable materials and employing environmentally conscious practices throughout our production process. Our dedication to quality ensures that our candles emit clean and non-toxic fragrances, free from harmful chemicals, while maintaining a long-lasting and delightful scent experience. By prioritizing the health and safety of our customers and the environment, we strive to illuminate homes with eco-friendly warmth, creating a harmonious balance between nature, comfort, and tranquility.</p>
            </div>
        </div>
    </div>
  )
}

export default OurStoryInfo;