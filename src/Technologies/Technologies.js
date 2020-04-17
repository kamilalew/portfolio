import React from 'react';
import './Technologies.scss';
import html5 from '../images/html5.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.png'
import node from '../images/node.png'


export default function Technologies() {
    return (
        <React.Fragment>
            <div className="box c">Technologies I use</div>
            <div className="box d"><img className="technologies" src={html5} alt="html5" /></div>
            <div className="box e"><img className="technologies" src={css} alt="css" /></div>
            <div className="box f"><img className="technologies" src={js} alt="js" /></div>
            <div className="box g"><img className="technologies" src={react} alt="react" /></div>
            <div className="box p"><img className="technologies" src={node} alt="node" /></div>
        </React.Fragment>
    );
}