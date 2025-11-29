import React from 'react';
import Weather from "./Weather";
import MainInfo from "./MainInfo";
import Footer from "./Footer";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container app-box">
        <header>
          <Weather />
        </header>
        <hr />
        <main>
          <MainInfo />
        </main>
        <hr />
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};