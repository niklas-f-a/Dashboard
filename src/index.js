import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import registerSW from './registerSw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
   </React.StrictMode>
);

registerSW()
