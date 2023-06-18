import React from 'react';
import './VideoBannerStyles.css';


import mountains from '../../Assets/mountains.mp4';

function VideoBanner() {
  return (
    <div className='videoBanner-container'>
        <div className='video-container'>
            <h1 className='videoBanner-title'>/klu.e.o:/ Clean, pure, to be spoken of.</h1>
            <video className='fillwidth' autoPlay muted loop src={mountains} />
            
        </div>
    </div>
    
  )
}

export default VideoBanner