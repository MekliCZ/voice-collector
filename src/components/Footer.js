import React, {Component} from 'react';
import './Footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub} from '@fortawesome/fontawesome-free-brands';

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="mainIcon">
                    <a href="https://www.mozilla.cz"><img className="icon" src="/logo.svg" /></a>
                </div>
                <div className="icons">
                    <a href="https://github.com/MozillaCZ/"><FontAwesomeIcon className="icon" icon={faGithub}/></a>
                    <a href="https://github.com/MozillaCZ/"><FontAwesomeIcon className="icon" icon={faFacebook}/></a>
                </div>
            </footer>
        );
    }
}