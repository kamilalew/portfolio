import React from 'react';
import './App.scss';
import Header from './Header/Header.js'
import AboutMe from './AboutMe/AboutMe.js'
import Technologies from './Technologies/Technologies.js'
import Projects from './Projects/Projects.js'


export default function App() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <Technologies />
      <Projects/>
    </div>
  );
}