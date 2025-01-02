// src/App.tsx
import React from 'react';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import LandingPage from './pages/LandingPage'; // Import the LandingPage component

const App: React.FC = () => {
  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <LandingPage /> {/* Render the LandingPage component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default App;
