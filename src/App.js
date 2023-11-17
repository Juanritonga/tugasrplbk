// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Store authentication status in localStorage
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Remove authentication status from localStorage
    localStorage.removeItem('isLoggedIn');
    // Refresh the page after logout
    window.location.reload();
  };

  useEffect(() => {
    // Check if the user is logged in on application start
    if (localStorage.getItem('isLoggedIn') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="container">
        {/* Display Navigation only if the user is authenticated */}
        {isLoggedIn && <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
        <Routes>
          {/* Public routes */}
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/login" replace /> : <LoginPage onLogin={handleLogin} isLoggedIn={isLoggedIn} />
            }
          />
          <Route path="/404" element={<NotFoundPage />} />

          {/* Protected routes (accessible only when authenticated) */}
          {isLoggedIn ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BookListPage />} />
              <Route path="/books/:id" element={<BookDetailPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </>
          ) : (
            // Redirect to login if not authenticated
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
