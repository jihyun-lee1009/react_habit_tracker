import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './components/test';
import '@fortawesome/fontawesome-free/js/all.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
