import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';


function App() {
    return ( 
        <div className="App">
            <header className = "App-header">
                <Menu/>
            </header>
        </div>
    );
}
export default App;