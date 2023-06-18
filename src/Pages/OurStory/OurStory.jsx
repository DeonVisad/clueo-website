import React from 'react';
import './OurStoryStyles.css';
import VideoBanner from '../../components/VideoBanner/VideoBanner';
import OurStoryBanner from '../../components/OurStoryBanner/OurStoryBanner';
import OurStoryInfo from '../../components/OurStoryInfo/OurStoryInfo';
import Footer from '../../components/Footer/Footer';

function OurStory() {
  return (
    <div className='ourStory-container'>
      <VideoBanner />
      <OurStoryBanner />
      <OurStoryInfo />
      <Footer />
    </div>
  )
}

export default OurStory;