import React from 'react';
import './HeadBG.css'

const HeadBG = () => {
  return (
    <section className='headBG'>
      <div className='headBG__img'>
      </div>
      <div className='headBG__content'>
        <h1>Your Best Knitting Blog</h1>
        <p>Share your knitting ideas</p>
        <a className='headBG__register btn style-white hover-opacity'>
          <i className='fa fa-lock'></i>
          SIGN UP NOW</a>
      </div>
    </section>
  );
}

export default HeadBG;