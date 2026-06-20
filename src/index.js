import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router';
import { MetasProvider } from './context/MetasContext';
import './index.css';
import App from './App';

// Punto de entrada de React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render principal de la aplicación
root.render(
  <React.StrictMode>
    {/* Router para GitHub Pages */}
    <HashRouter>
      {/* Estado global de metas */}
      <MetasProvider>
        {/* Componente principal */}
        <App />
      </MetasProvider>
    </HashRouter>
  </React.StrictMode>
);