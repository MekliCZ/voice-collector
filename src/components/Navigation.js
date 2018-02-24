import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return(
            <nav>
                <NavLink activeClassName="active" to="/submit">Submit</NavLink>
                <NavLink activeClassName="active" to="/cherrypick">Cherry pick</NavLink>
                <NavLink activeClassName="active" className="link-login" to="/login">Log in with GitHub</NavLink>
            </nav>
        );
    }
}