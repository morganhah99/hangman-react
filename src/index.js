import React from 'react';
import App from './App';
import REACTDOM from 'react-dom';


REACTDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);