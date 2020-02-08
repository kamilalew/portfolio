import React from 'react';
import './App.scss';
import github from './images/github.svg'
import linkedIn from './images/linkedin.png'
import html5 from './images/html5.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import node from './images/node.png'


function App() {
  return (
    <div className="container">
      <div className="box a">
        <h3 className="initials typewriter">K<span>amila</span> L<span>ewicka</span>
        </h3>
      </div>
      <div className="box z">
        <div className="aboutMe">Junior Front End Web Developer <br /><br /> London based</div>
      </div>
      <div className="box x">
        <div className="myLinks_wrap">
          <a href='https://github.com/kamilalew' target='_blank' rel="noopener noreferrer"><img className="myLinks myLinks1" src={github} alt="github" /></a>
          <a href='https://www.linkedin.com/in/kamila-m-lewicka/' target='_blank' rel="noopener noreferrer"><img className="myLinks" src={linkedIn} alt="LinkedIn" /></a>
        </div>
        <p className="email">kamila.m.lewicka@gmail.com</p>
      </div>
      <div className="box j">About Me</div>
      <div className="box b">
        <div className='myPhoto'></div>
      </div>
      <div className="box o">
        <div className="aboutMe_description">Lorem ipsum dolor sit amet, consectetur adipiscvitae tempor tempus, dapibus nec nisi. Integer pellentesque ultricies ante. Ut tellus turpis, pretium nec tempus s eu interdum. Suspendisse sed maximus nunc. Praesent vitae sapien ante. Phasellus at ex augue. Integer malesuada odio aliquam lectus mollis eleifend. Suspendisse potenti. Curabitur molestie lorem vel aliquam viverra. Nullam sagittis rhoncus dolor, vitae volutpat diam rhoncus non.</div>
      </div>
      <div className="box v"></div>
      <div className="box c">Technologies I use</div>
      <div className="box d"><img className="technologies" src={html5} alt="html5" /></div>
      <div className="box e"><img className="technologies" src={css} alt="css" /></div>
      <div className="box f"><img className="technologies" src={js} alt="js" /></div>
      <div className="box g"><img className="technologies" src={react} alt="react" /></div>
      <div className="box p"><img className="technologies" src={node} alt="node" /></div>
      <div className="box h">
        <div className="projects">My Projects</div>
      </div>
      <div className="box k"><a href="https://london-sites.now.sh"
        alt="london_sites" target="_blank" rel="noopener noreferrer">
        <div className="londonSites_image"></div>
        <div className="LondonSites_description">London <br />Sites</div>
      </a></div>
      <div className="box l"><a href="https://kodflix-kamilalew.herokuapp.com"
        alt="kodflix" target="_blank" rel="noopener noreferrer">
        <div className="kodflix_image"></div>
        <div className="kodflix_description">Kodflix</div>
      </a></div>
      <div className="box m"><a href="https://cat-adoption.now.sh/"
        alt="catAdoption" target="_blank" rel="noopener noreferrer">
        <div className="catAdoption_image"></div>
        <div className="catAdoption_description">Cat <br />Adoption</div>
      </a></div>
      <div className="box n"><a href=""
      alt="WePair" target="_blank" rel="noopener noreferrer">
      <div className="wePair_description">WePair <br/> <span className="comingSoon">Coming soon</span></div>
    </a></div>
      <div className="box o">10</div>
      <div className="box q">10</div>
      <div className="box r">10</div>
      <div className="box s">10</div>
      <div className="box t">10</div>
      <div className="box u">10</div>
      <div className="box w">10</div>
      <div className="box y">10</div>
    </div>
  );
}

export default App;
