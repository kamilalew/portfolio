import React from 'react';
import './App.css';
import github from './images/github.svg'
import linkedIn from './images/linkedin.svg'
import html5 from './images/html5.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import arrow from './images/arrow.jpg'


function App() {
  return (
    <div className="container">
      <div className="box a">
        <h3 className="initials typewriter">K<span>amila</span> L<span>ewicka</span>
        </h3>
      </div>
      <div className="box z">
        <div className="aboutMe">JUNIOR FRONT END WEB DEVELOPER LOOKING FOR MY FIRST ROLE. <br /><br />
          FOR MANY YEARS I'VE MANAGED MULTIPLE INTERNATIONAL RESEARCH PROJECTS. <br /><br /> NOW IT'S TIME TO CODE !</div>
      </div>
      <div className="box b">
        <div className='myPhoto'></div>
      </div>
      <div className="box x">
      <a href='https://github.com/kamilalew' target='_blank' rel="noopener noreferrer"><img className="myLinks" src={github} alt="github" /></a>
      </div>
      <div className="box xx">
      <a href='https://www.linkedin.com/in/kamila-m-lewicka/' target='_blank' rel="noopener noreferrer"><img className="myLinks" src={linkedIn} alt="LinkedIn" /></a>
      </div>
      <div className="box c">Technologies</div>
      <div className="box d"><img className="technologies" src={html5} alt="html5" /></div>
      <div className="box e"><img className="technologies" src={css} alt="css" /></div>
      <div className="box f"><img className="technologies" src={js} alt="js" /></div>
      <div className="box g"><img className="technologies" src={react} alt="react" /></div>
      <div className="box h"><img className="arrow" src={arrow} alt="arrow" />My Projects</div>
      <div className="box i">9</div>
      <div className="box j">10</div>
      <div className="box k">10</div>
      <div className="box l">10</div>
      <div className="box m">10</div>
      <div className="box n">10</div>
      <div className="box o">10</div>
      <div className="box p">10</div>
      <div className="box q">10</div>
      <div className="box r">10</div>
      <div className="box s">10</div>
      <div className="box t">10</div>
      <div className="box u">10</div>
      <div className="box v">10</div>
      <div className="box w">10</div>
      <div className="box y">10</div>
    </div>
  );
}

export default App;
