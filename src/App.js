import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hits from './components/Hits.js';

function App() {
    return ( 
        <div className="App">
            <header className = "App-header">
                <Hits/>
            </header>
        </div>
    );
}

export default App;