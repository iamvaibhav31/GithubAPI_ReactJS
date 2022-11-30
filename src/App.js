import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Profiledetail from './Pages/Profiledetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='user' element={<Profiledetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
