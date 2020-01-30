import React from 'react';
import './App.css';
import reactIcon from './images/react.svg';
import cssIcon from './images/css.svg';
import html5Icon from './images/html5.svg';
import jsIcon from './images/js.png';
import Header from './Header/Header.js';
import Welcome from './Welcome/Welcome.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
        <div className='about_me_container'>
          <div className='about_me_description'>Junior Front End Web developer looking for my first role.
          For many years I've managed multiple international research projects. Now it's time to code !
          </div>
          <div className='about_me_photo'></div>
        </div>
        <div className='technologies_container'>
          <div className='technologies_box'>
            <div className='forFlex'>
              <img className='reactIcon' src={reactIcon} alt='react icon' />
            </div>
            <div className='forFlex'>
              <img className='reactIcon' src={cssIcon} alt='react icon' />
            </div>
            <div className='forFlex'>
              <img className='reactIcon' src={html5Icon} alt='react icon' />
            </div>
            <div className='forFlex'>
              <img className='reactIcon' src={jsIcon} alt='react icon' />
            </div>
          </div>
          <div className='technologies_known'>These are the technologies that I've learnt through completing various courses.
        I've used self-teaching sources like freecodecamp, W3schools and in-house training via Kodiri bootcamp</div>
        </div>
        <div className='projects'>My projects</div>
      </div>
  );
}

export default App;
