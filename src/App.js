// src/App.js

import React from 'react';
import Particles from 'react-tsparticles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componet/Login';
import Signup from './componet/Signup';
import Nav from './componet/Nav';
import Dashboard from './componet/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"><Particles
        options={
          {
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            opacity: { value: 0.7 },
            color: { value: "#ffffff" },
          },
        }
      }
      />
      <Nav />
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
