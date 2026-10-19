import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/base.css';

// Load every screen's mobile stylesheet
import.meta.glob('./styles/mobile/*.css', { eager: true });

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
