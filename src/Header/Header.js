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
                    <li><img className='Technology_logo' src={github_logo} alt='Github logo'/></li>
                    <li><img className='Technology_logo' src={linkedin_logo} alt='LinkedIn logo'/></li>
                    <li><img className='Technology_logo' src={gmail_logo} alt='Gmail logo'/></li>
                </ul>
            </div >
        )
    }