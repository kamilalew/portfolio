import React from 'react';
import './Projects.scss';

export default function Projects() {
    return (
        <React.Fragment>
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
            <div className="box m"><a href="https://my-weather-app.now.sh"
                alt="weatherApp" target="_blank" rel="noopener noreferrer">
                <div className="weatherApp_image"></div>
                <div className="weatherApp_description">Wheather <br />App</div>
            </a></div>
            <div className="box n"><a href=""
                alt="WePair" target="_blank" rel="noopener noreferrer">
                <div className="wePair_description">WePair <br /> <span className="comingSoon">Coming soon</span></div>
            </a></div>
            <div className="box w"></div>
        </React.Fragment>
    );
}