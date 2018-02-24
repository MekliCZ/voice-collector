import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Submit from './pages/Submit';
import {Route} from 'react-router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Common Voice Collector</h1>
                <div className="logo">mozilla<span className="logo-suffix">.cz</span></div>
                <Navigation/>
                <Route path="/submit" component={Submit}/>
            </div>
        );
    }
}

export default App;
