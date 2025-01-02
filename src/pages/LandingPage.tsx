//import React from 'react';
import circle8 from '../assets/Circle8.png'; // Import the Circle8 image
import circle9 from '../assets/Circle9.png'; // Import the Circle9 image
import company from '../assets/Companies.png'; // Import the Company image
import button2 from '../assets/Button2.png'; // Import the Button2 image
import button1 from '../assets/Button1.png'; // Import the Button1 image
import benefits from '../assets/benefits.png'; // Import the Benefits image
import frame24 from '../assets/Frame 24.png'; // Import the Frame24 image
import '../pages.css'; // Import the CSS file for LandingPage styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-container">
        <div className="title-container">
          <p>High-performing remote teams.<br />The future of work.</p>
        </div>
        <div className="subtitle-container">
          <p>
            Powerful, self-serve team engagement tools and analytics.<br />
            Supercharge your managers & keep employees engaged from anywhere.
          </p>
        </div>
        <div className="review-container">
          <p>⭐⭐⭐⭐⭐ 4.5 (from 200+ reviews)</p>
        </div>
      </div>
      <div className="company-image-container">
        <img src={company} alt="Company" className="company-image" />
      </div>

      {/* Benefits image added below the company image */}
      <div className="benefits-image-container">
        <img src={benefits} alt="Benefits" className="benefits-image" />
      </div>

      {/* New Frame24 image added below the benefits image */}
      <div className="frame24-image-container">
        <img src={frame24} alt="Frame 24" className="frame24-image" />
      </div>
      

      <img src={circle8} alt="Circle 8" className="circle8" />
      <img src={circle9} alt="Circle 9" className="circle9" />

      {/* New button images below the review section */}
      <div className="button-container">
        <div className="button2-container">
          <img src={button2} alt="Button 2" className="button2" />
        </div>

        <div className="button1-container">
          <img src={button1} alt="Button 1" className="button1" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
