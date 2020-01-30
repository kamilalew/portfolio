import React from 'react';
import './Header.css'
import github_logo from '../images/github.svg';
import linkedin_logo from '../images/linkedin.svg';
import gmail_logo from '../images/gmail.svg';

export default function Header() {
        return (
            <div className='Header-wrapper'>
                <div className='Header-name'>Kamila Lewicka - Junior Front End Developer
                </div>
                <ul className='header_information'>
                    <li><a href='https://github.com/kamilalew' target='_blank' rel="noopener noreferrer"><img className='Technology_logo' src={github_logo} alt='Github logo'/></a></li>
                    <li><a href='https://www.linkedin.com/in/kamila-m-lewicka/' target='_blank' rel="noopener noreferrer"><img className='Technology_logo' src={linkedin_logo} alt='LinkedIn logo'/></a></li>
                </ul>
            </div >
        )
    }