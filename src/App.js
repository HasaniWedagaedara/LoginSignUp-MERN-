import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './frontend/login';
import SignUpPage from './frontend/signup';
import Home from './frontend/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/Home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;