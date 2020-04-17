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
                <div className="aboutMe_description" align="justify">I am an extremely motivated individual, always ready to learn new things.
                My passion is coding therefore I've decided to give up my previous career to become a professional web/app developer.
          <br></br><br></br>Over the last year I've been broadening my coding skills studying on my own, pairing with others during the coding bootcamp and attending various coding meet ups across London.
                    Looking for a front end position in a fast developing, future focused company.
          </div>
            </div>
            <div className="box v"></div>
        </React.Fragment>
    );
}