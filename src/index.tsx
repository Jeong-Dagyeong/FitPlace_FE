// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import './index.tsx';
// // import App from './App';
// import { BrowserRouter, Router } from 'react-router-dom';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement,
// );
// root.render(
//   <BrowserRouter>
//       <Router/>
//   </BrowserRouter>

// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
