import logo from './logo.svg';
import './App.css';
import Game from "./Game.js";
import React, { useEffect, useState, useRef } from 'react';
import './Game.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
