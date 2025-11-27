import React from 'react';
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        <a href='https://github.com/ayscd/react-weather-app' target='_blank' rel="noreferrer">Open-source code</a>, by <a href='www.linkedin.com/in/ayeskaasc' target='_blank' rel="noreferrer">Ayeska</a> from <a href='https://www.instagram.com/asc.arquitetura/' target='_blank' rel='noreferrer' >ASCENÇÃO ARQUITETURA</a>
      </footer>
    </div>
  );
}

export default App;
