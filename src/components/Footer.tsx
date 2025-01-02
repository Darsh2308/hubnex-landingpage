import React from 'react';
import Bottombar from '../assets/bottombar.png'; // Import the PNG image as Bottombar

const Footer: React.FC = () => {
  return (
    <div className="footer">


      {/* Larger section above */}
      <div className="footer-top">
        {/* Footer About Section (on the left) */}
        <div className="footer-about">
          <h3 className="footer-about-title">About Hubnex Labs</h3>
          <p className="footer-about-info">
            We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape.
          </p>
        </div>

        {/* Footer Menu Section */}
        <div className="footer-menu">
          {/* First Column: Company */}
          <div className="footer-column-1">
            <h3 className="column-title">Company</h3>
            <ul className="column-items">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>For Partners</li>
            </ul>
          </div>

          {/* Placeholder for other columns */}
          <div className="footer-column-2">
            <h3 className="column-title">Help</h3>
            <ul className="column-items">
              <li>Grievance Redressal Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-column-3">
            <h3 className="column-title">Resources</h3>
            <ul className="column-items">
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Insights</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Smaller section at the bottom */}
      <div className="footer-segment">
        <img src={Bottombar} alt="Bottom Bar" className="footer-image" />
      </div>
    </div>
  );
};

export default Footer;
