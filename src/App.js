import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Robots from './tutors/Robots'
function App() {
    return (
        <div className='App'>
            <Header />
            <Robots/>
        </div>
    );
}

export default App;
