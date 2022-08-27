// import { Router } from 'express';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Test from './pages/test';
import LoginForm from './pages/login'
import './pages/login.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/test' element={<Test />} />
        <Route path = '/login' element={<LoginForm />} />
      </Routes>
    </Router>

  );
}

export default App;
