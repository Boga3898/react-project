import React from 'react';
import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <li style={{color:"orangered"}}>Logo</li>
      </header>
      <Clock/>
    </div>
  );
}

export default App;
