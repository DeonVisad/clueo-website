import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import OurStory from './Pages/OurStory/OurStory';
import Error from './Pages/Error/Error';
import Shop from './Pages/Shop/Shop';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route element={<Home />} path='/' />
        <Route path='/ourstory' element={<OurStory />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='*' element={<Error />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
