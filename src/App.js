import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Event from './pages/events';
import Home from './pages/leaderboards';
import './App.css';



function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Event/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
