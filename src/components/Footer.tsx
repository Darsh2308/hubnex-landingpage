import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Bottombar from '../assets/BottomBar.png'; // Import the PNG image as Bottombar
import FooterImage from '../assets/footer1.png'; // Import the PNG image as FooterImage
import FooterImage2 from '../assets/footer2.2.png'; // Import the new image as FooterImage2

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer1">
        <img src={FooterImage} alt="Footer 1" className="footer1-image" />
        <div className="footer2">
          <h2 className="footer2-title">Increase your sales revenue by 32% using Hubnex Labs.</h2>        
          <h2 className="footer2-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Ornare non sed est cursus. Vel hac convallis ipsum, facilisi <br/>odio pellentesque bibendum viverra tempus.”</h2>
          <img src={FooterImage2} alt="Footer 2 Image" className="footer2-image" />
          <button className="button1">Join Us</button>
          <button className="button2">Contact Us</button>
        </div>
      </div>

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
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">For Partners</a></li>
              </ul>
            </div>

            {/* Placeholder for other columns */}
            <div className="footer-column-2">
              <h3 className="column-title">Help</h3>
              <ul className="column-items">
                <li><a href="#">Grievance Redressal Policy</a></li>
                <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li> {/* Updated link to redirect to Terms & Conditions page */}
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="footer-column-3">
              <h3 className="column-title">Resources</h3>
              <ul className="column-items">
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Insights</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Smaller section at the bottom */}
        <div className="footer-segment">
          <img src={Bottombar} alt="Bottom Bar" className="footer-image" />
        </div>
      </div>
    </>
  );
};

export default Footer;
