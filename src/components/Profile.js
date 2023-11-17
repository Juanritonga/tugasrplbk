// components/Profile.js
import React from 'react';
import './Profile.css'; // Import file CSS yang akan Anda buat

const Profile = ({ photo, name, nim }) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
      <img
          src={photo}
          alt={`Foto ${name}`}
          style={{
            width: '250px',
            height: '320px',
            borderRadius: '10px', // Atur nilai sesuai keinginan Anda
          }}
        />
        <h3>{name}</h3>
        <p>NIM: {nim}</p>
      </div>
    </div>
  );
};

export default Profile;
