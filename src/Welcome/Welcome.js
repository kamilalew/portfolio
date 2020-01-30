import React from 'react';
import './Welcome.css';

export default function Welcome() {
    return (
        <div className='Welcome-wrapper introduction_container'>
          <div className='welcome-message'>Welcome</div>
          <div className='left_intro_container'>
            <div className='left_intro_container_text'>
              <div className='left_intro_text_1'>Hello</div>
              <div className='left_intro_text_2'>My name is Kamila</div>
              <div className='left_intro_text_3'>I'm a Front End Web Developer</div>
            </div>
          </div>
          <div className='right_intro_container'></div>
        </div>
    )
}