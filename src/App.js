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
            <div className='left_into_container_text'>
              <div className='left_intro_text_1'>Hello</div>
              <div className='left_intro_text_2'>My name is Kamila</div>
              <div className='left_intro_text_3'>I'm a Front End Web Developer</div>
            </div>
          </div>
          <div className='right_intro_container'></div>
        </div>
        <div className='about_me_container'>
          <div className='about_me_description'>Hi this is me</div>
          <div className='about_me_photo'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
