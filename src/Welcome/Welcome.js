import React from 'react';
import './Welcome.css';

export default function Welcome() {
    return (
        <div className='Welcome-wrapper introduction_container'>
          <div className='Welcome-message'>Welcome</div>
          <div className='Welcome-details-wrapper'>
            <div className='Welcome-myDetails-wrapper'>
              <div className='Welcome-myDetails-details'>Hello</div>
              <div className='Welcome-myDetails-details'>My name is Kamila</div>
              <div className='Welcome-myDetails-details'>I'm a Front End Web Developer</div>
            </div>
          </div>
          <div className='Welcome-details-wrapper-dummy'></div>
        </div>
    )
}