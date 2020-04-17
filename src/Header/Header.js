import React from 'react';
import './Header.scss';
import github from '../images/github.svg';
import linkedIn from '../images/linkedin.png';

export default function Header() {
    return (
        <React.Fragment>
            <div className="box a">
                <div>
                    <h3 className="initials typewriter">K<span>amila</span> L<span>ewicka</span>
                    </h3>
                </div>
            </div>
            <div className="box z">
                <div className="aboutMe">Front End Developer <br /><br /> London based</div>
            </div>
            <div className="box x">
                <div className="myLinks_wrap">
                    <a href='https://github.com/kamilalew' target='_blank' rel="noopener noreferrer"><img className="myLinks myLinks1" src={github} alt="github" /></a>
                    <a href='https://www.linkedin.com/in/kamila-m-lewicka/' target='_blank' rel="noopener noreferrer"><img className="myLinks" src={linkedIn} alt="LinkedIn" /></a>
                </div>
                <a className="email" href="mailto:kamila.m.lewicka@gmail.com" rel="noopener noreferrer"><p>kamila.m.lewicka@gmail.com</p></a>
            </div>
        </React.Fragment>
    );
}