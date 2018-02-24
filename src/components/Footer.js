import React, {Component} from 'react';
import './Footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="mainIcon">
                    <a href="https://www.mozilla.cz"><img className="icon" src="/logo.svg" /></a>
                </div>
            </footer>
        );
    }
}