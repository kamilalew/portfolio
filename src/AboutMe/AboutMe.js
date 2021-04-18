import React from 'react';
import './AboutMe.scss';


export default function AboutMe() {
    return (
        <React.Fragment>
            <div className="box j">About Me</div>
            <div className="box b">
                <div className='myPhoto'></div>
            </div>
            <div className="box o">
                <div className="aboutMe_description">I am an extremely motivated self-taught frontend web developer, always ready to learn new things.
                <br/>

                My passion is coding therefore I've decided to give up my previous career to become a professional web/app developer
                <br /> <br />
                I currently work for well known international company, building powerful web applications with JavaScript (ES6+), UIkit, Vue.js and Nuxt.js
          </div>
            </div>
            <div className="box v"></div>
        </React.Fragment>
    );
}