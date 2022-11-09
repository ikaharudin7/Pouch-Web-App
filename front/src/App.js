import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import LoginForm from './pages/login'
import './pages/login.css'
import SignUpForm from './pages/signup';
import CollectionView from './pages/collection-page';
import Profile from './pages/my-profile';
import CollectionOne from './pages/example_collections/collection_one';
import CollectionSoccer from './pages/example_collections/collection_soccer';
import CollectionFooty from './pages/example_collections/collection_footy';
import CollectionBasketball from './pages/example_collections/collection_basketball';
import Browse from './pages/browse-users';
import UserCollection from './pages/user-collection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/browse-users' element = {<Browse />} />
        <Route path = '/collection_1' element= {<CollectionOne/>} />
        <Route path = '/collection_2' element= {<CollectionSoccer/>} />
        <Route path = '/collection_3' element= {<CollectionFooty/>} />
        <Route path = '/collection_4' element= {<CollectionBasketball/>} />
        <Route path = '/' element={<Home />} />
        <Route path = '/login' element={<LoginForm />} />
        <Route path = '/profile' element={<Profile />} />
        <Route path = '/collection-page' element={<CollectionView />} />
        <Route path = '/signup' element={<SignUpForm />} />
        <Route path = '/user-collection/:username' element={<UserCollection/>} />
      </Routes>
    </Router>

  );
  
}

export default App;
