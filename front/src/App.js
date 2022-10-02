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
import SignUpForm from './pages/signup';
import Char from './pages/Char';
import CollectionView from './pages/collection-page';
import Profile from './pages/my-profile';
import ListView from './pages/collection-list';
import Card from './pages/image';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/imgtest' element = {<Card/>}/>
        <Route path = '/' element={<Home />} />
        <Route path = '/test' element={<Test />} />
        <Route path = '/login' element={<LoginForm />} />
        <Route path = '/profile' element={<Profile />} />
        <Route path = '/collection-page' element={<CollectionView />} />
        <Route path = '/signup' element={<SignUpForm />} />
        <Route path = '/Char' element={<Char />} />
        <Route path = '/list' element={<ListView />} />
      </Routes>
    </Router>

  );
}

export default App;
