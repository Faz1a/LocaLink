// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-blue text-font flex font-urbanist">
      <header className="w-full max-w-6xl mx-auto flex p-4">
        <svg 
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.3112 7.94355C30.0614 3.20234 24.6056 0.0920105 18.4233 0.0920105C8.46189 0.0920105 0.386536 8.16736 0.386536 18.1288C0.386536 19.5781 0.557464 20.9874 0.880246 22.3377L10.0653 13.1527C10.9458 12.2722 12.3733 12.2722 13.2538 13.1527L20.6779 20.5768L33.3112 7.94355Z"
            fill="#EF2A82"
          />
          <path
            d="M35.455 12.1768L22.2722 25.3596C21.3917 26.24 19.9642 26.24 19.0837 25.3596L11.6595 17.9354L2.67196 26.923C5.75744 32.4376 11.655 36.1656 18.4233 36.1656C28.3848 36.1656 36.4602 28.0903 36.4602 18.1288C36.4602 16.0432 36.1061 14.0402 35.455 12.1768Z"
            fill="#EF2A82"
          />
        </svg>

        <div className="text-2xl font-bold uppercase mx-5 mt-1">LocaLink</div>
        <nav className="flex space-x-14 ml-72 text-nav p-2">
          
        <Link to="/" className="hover:text-pink">
            Home
          </Link>
          <Link to="/feed" className="hover:text-pink">
            Reports
          </Link>
          <a href="#instructions" className="hover:text-pink">
            Instructions
          </a>
          <a href="#faq" className="hover:text-pink">
            FAQ
          </a>
        
          <div className="space-x-4">
            <Link to="/signin" className="hover:text-pink">
              Sign in
            </Link>
            <Link to="/signup" className="bg-transparent hover:bg-pink hover:text-blue rounded-2xl border-solid border-2 border-nav px-8 py-1">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;