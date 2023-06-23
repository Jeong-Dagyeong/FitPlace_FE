import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
