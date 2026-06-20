import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { MetasProvider } from './context/MetasContext';
import './index.css';
import App from './App';

// Punto de entrada de React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render principal
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MetasProvider>
        <App />
      </MetasProvider>
    </BrowserRouter>
  </React.StrictMode>
);