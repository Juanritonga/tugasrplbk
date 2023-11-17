import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header-container">
        <h1 className="main-title">Welcome to the Book List App!</h1>
        <p className="subtitle">Discover a world of knowledge through our vast collection of books.</p>
      </div>
      <div className="cta-container">
        <p className="ready-text">Ready to dive in?</p>
        <Link to="/books" className="explore-link">
          Explore Book List
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
