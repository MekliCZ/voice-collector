import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Submit from './pages/Submit';
import CherryPick from './pages/CherryPick';
import {Route} from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <h1>Common Voice <span className="h1-small">Sentence Collector</span></h1>
                    <div className="logo"><span className="h1-small">by</span>mozilla<span className="logo-suffix">.cz</span></div>
                </header>
                <Navigation />
                <Route path="/submit" component={Submit}/>
                <Route path="/cherrypick" component={CherryPick}/>
                <Footer />
            </div>
        );
    }
}

export default App;
