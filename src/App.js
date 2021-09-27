import logo from './logo.svg';
import './App.css';
import MouseTracker from './components/MouseTracker';
import { useState } from 'react';
import { useEffect } from 'react';
import WithMouse from './components/WithMouse';
import Cat from './components/Cat';
import Dog from './components/Dog';

function App() {

  return (
    <div className="App">
        <MouseTracker/>
        <WithMouse render={ mouse => <Cat mouse={mouse} /> } />
        <WithMouse render={ mouse => <Dog mouse={mouse} /> } />
    </div>
  );
}

export default App;
