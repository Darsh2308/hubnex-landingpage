// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot API
import './index.css'; // Import global styles if any
import './pages.css'; // Import pages.css for the styles of LandingPage and other pages
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement; // Get the root element

const root = ReactDOM.createRoot(rootElement); // Create the root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); // Render the App component
