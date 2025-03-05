import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Example login credentials
    const validUsername = 'Naman';
    const validPassword = 'Naman@123';

    if (username === validUsername && password === validPassword) {
      setMessage('Login successful!');
      setMessageType('success');
    } else {
      setMessage('Invalid username or password');
      setMessageType('error');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter username" 
            required 
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password" 
            required 
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      {message && (
        <p className={`message ${messageType}`}>{message}</p>
      )}
    </div>
  );
}

export default App;
