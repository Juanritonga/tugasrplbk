// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ isLoggedIn, onLogout }) => {
  const handleLogout = () => {
    onLogout();
    // Refresh the page after logout
    window.location.reload();
  };
  return (
    <nav className="navigation-container">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/books" className="navigation-link">
            <FontAwesomeIcon icon={faBook} /> Book List
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/profile" className="navigation-link">
            <FontAwesomeIcon icon={faUser} /> Profile
          </Link>
        </li>
        {isLoggedIn ? (
          <li className="navigation-item" onClick={handleLogout}>
          <Link to="/login" className="navigation-link">
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </Link>
          </li>
        ) : (
          <li><Link to="/login" className="navigation-link">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;