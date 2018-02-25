import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Submit from './pages/Submit';
import CherryPick from './pages/CherryPick';
import {Route} from 'react-router';
import fontawesome from '@fortawesome/fontawesome';
import {NavLink} from 'react-router-dom';
import { faCheck, faTimes } from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faCheck, faTimes);

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <NavLink to="/"><h1>Common Voice <span className="h1-small">Sentence Collector</span></h1></NavLink>
                    <div className="logo"><span className="h1-small">by</span>mozilla<span className="logo-suffix">.cz</span></div>
                </header>
                <Navigation />
                <Route path="/submit" component={Submit}/>
                <Route path="/cherrypick" component={CherryPick}/>
                <Route exactPath="/" component={Home}/>
                <Footer />
            </div>
        );
    }
}

export default App;
