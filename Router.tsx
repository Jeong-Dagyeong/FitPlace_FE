import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './src/components/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Main />}></Route> */}
        {/* <Route path='/signup' element={<Sign />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
