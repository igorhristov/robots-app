import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Monsters from './tutors/Monsters'
function App() {
    return (
        <div className='App'>
            <Header />
            <Monsters/>
        </div>
    );
}

export default App;
