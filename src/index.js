import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './shared/styles.css'
import { BrowserRouter } from 'react-router-dom'
 const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Economic_Analytics_Hub'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

