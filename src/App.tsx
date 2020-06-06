import React from 'react';
import './App.css';
import {FiSearch} from "react-icons/all";

const App = () => {
    return (
        <div className="App">
            <h1>PHOTO SEARCH FROM GIPHY</h1>
            <div>
                <input type="text" placeholder="Key Words"/>
                <button><FiSearch className="icon"/></button>
            </div>
        </div>
    );
}

export default App;
