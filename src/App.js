import React from 'react';
import { Routes, Route } from 'react-router-dom';
import hathaway from './assets/hathaway.jpg';
import './App.css';
import NavBar from './NavBar';
import Details from './pages/Details';
import Industry from './features/Industry';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hathaway} className="App-logo" alt="logo" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Industry" element={<Industry />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
