import React from 'react';
import HubnexLogo from '../assets/HubnexLogo.png';
import ButtonImage from '../assets/Nav items.png';
import ArrowIcon from '../assets/arrow_back_ios_new.png'; // Importing the arrow icon

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <img src={HubnexLogo} alt="Hubnex Logo" />
        </div>

        {/* Menu Container */}
        <div className="menu">
          <div className="option1">
            Explore Services
            <img className="arrow-icon" src={ArrowIcon} alt="Arrow Icon" />
          </div>
          <div className="option2">
            Resources
            <img className="arrow-icon" src={ArrowIcon} alt="Arrow Icon" />
          </div>
          <div className="option3">
            Community
            <img className="arrow-icon" src={ArrowIcon} alt="Arrow Icon" />
          </div>
          <div className="option4">About</div>
        </div>

        {/* Button Image */}
        <div className="button-image">
          <img src={ButtonImage} alt="Button Image" />
        </div>
      </div>
    </header>
  );
};

export default Header;