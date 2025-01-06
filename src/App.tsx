// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import LandingPage from './pages/LandingPage'; // Import the LandingPage component
import TermsAndConditions from './pages/Terms&Conditions'; // Import the Terms and Conditions page

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Render the Header component */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Render the LandingPage component at the root */}
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> {/* Add the route for Terms & Conditions page */}
        </Routes>
        <Footer /> {/* Render the Footer component */}
      </div>
    </Router>
  );
};

export default App;
