// Login.js

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Contoh pengaturan username dan password
    const validUsername = 'kelompok7';
    const validPassword = 'kelompok7';

    // Validasi kredensial
    if (username === validUsername && password === validPassword) {
      // Jika kredensial valid, panggil onLogin dengan status true
      onLogin(true);
    } else {
      // Jika kredensial tidak valid, panggil onLogin dengan status false
      onLogin(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
