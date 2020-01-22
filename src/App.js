import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main_container'>
        <header>Kamila Lewicka - Junior Front End Developer</header>
        <div className='introduction_container'>
          <div className='welcome'>Welcome</div>
          <div className='left_intro_container'>
            <div className='left_intro_container_text'>
              <div className='left_intro_text_1'>Hello</div>
              <div className='left_intro_text_2'>My name is Kamila</div>
              <div className='left_intro_text_3'>I'm a Front End Web Developer</div>
            </div>
          </div>
          <div className='right_intro_container'></div>
        </div>
        <div className='about_me_container'>
          <div className='about_me_description'>Junior Front End Web developer looking for my first role.
          For many years I've managed multiple international research projects. Now it's time to code !
          </div>
          <div className='about_me_photo'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
