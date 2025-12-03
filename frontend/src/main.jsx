// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// //import ShopContextProvider from './contexts/ShopContext.jsx'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>

//      <App />

//   </BrowserRouter>
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './contexts/ShopContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
     <App />

  </ShopContextProvider>
   
  </BrowserRouter>
);

