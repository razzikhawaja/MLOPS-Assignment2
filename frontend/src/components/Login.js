import React, { useState } from 'react';
import { login } from '../services/authService';
import { setToken } from '../utils/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      setToken(response.data.token);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
