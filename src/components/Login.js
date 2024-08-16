import React, { useState } from 'react';

function Login({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to authenticate the user
    console.log('Login submitted', { email, password });
    // For now, we'll just close the modal
    onClose();
  };

  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>Login / Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button">Login</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Login;