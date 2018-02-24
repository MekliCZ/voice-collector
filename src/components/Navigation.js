import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return(
            <nav>
                <NavLink activeClassName="active" to="/submit">Submit sentences</NavLink>
                <NavLink activeClassName="active" to="/cherrypick">Cherry pick</NavLink>
            </nav>
        );
    }
}