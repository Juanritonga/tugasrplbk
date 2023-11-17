// ProfilePage.js
import React, { useState } from 'react';
import Profile from '../components/Profile';
import './ProfilePage.css';

const ProfilePage = () => {
  const members = [
    {
      photo: process.env.PUBLIC_URL + '/images/juan.jpg',
      name: 'Juanda Ritonga',
      nim: '21120120140150',
    },
    {
      photo: process.env.PUBLIC_URL + '/images/Beluga.jpg',
      name: 'Rafif Sadid Hamdani',
      nim: '21120120140137',
    },
    {
      photo: process.env.PUBLIC_URL + '/images/ScemerPic.webp',
      name: 'Maulana Yusuf Suraddin',
      nim: '21120120140051',
    },
    {
      photo: process.env.PUBLIC_URL + '/images/Heckercat.webp',
      name: 'Hammam Faiz',
      nim: '21120120140076',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === members.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? members.length - 1 : prevIndex - 1));
  };

  return (
    <div className="profile-page-container">
      <h2 className="profile-header">ANGGOTA KELOMPOK 07</h2>
      <div className="profile-cards-container">
        <Profile {...members[currentIndex]} />
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrev} className="nav-button">
           Prev
        </button>
        <button onClick={handleNext} className="nav-button">
          Next 
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
