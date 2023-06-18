import React from 'react';
import './InfoBannerStyles.css';
import natural from '../../Assets/leaf.png';
import candle from '../../Assets/candle_icon.png';
import chemicals from '../../Assets/noChemicals.png';
import jar from '../../Assets/jar.png';

function InfoBanner() {
  return (
    <div className='banner-container'>
        <h1 className='banner-title'>Clean Candles Perfect For Everyone! </h1>
        <h2 className='banner-secondaryTitle'>Our candles are cruelty-free, non-toxic and contain no lead, plastics, paraben,<br /> phthalates  or synthetic dyes and are made with a natural soy wax blend.</h2>
        <div className='icons-row'>
            <div className='icons'>
                <img className='description-icon' src={chemicals} alt='icon' />
                <h4 className='subtitle'>Toxin-Free</h4>
            </div>
            <div className='icons'>
                <img className='description-icon' src={candle} alt='icon' />
                <h4 className='subtitle'>Custom Scents</h4>
            </div>
            <div className='icons'>
                <img className='description-icon' src={natural} alt='icon' />
                <h4 className='subtitle'>All-Natural</h4>
            </div>
            <div className='icons'>
                <img className='description-icon' src={jar} alt='icon' />
                <h4 className='subtitle'>Reusable Glass Jars</h4>
            </div>
        </div>
        
    </div>
  )
}

export default InfoBanner;