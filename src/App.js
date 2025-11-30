import React from 'react';
import Weather from "./Weather";
import Footer from "./Footer";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container app-box">
          <Weather defaultCity="Belo Horizonte"/>
        <hr />
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};