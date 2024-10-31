import React, { useState } from 'react';
import { signup } from '../services/authService';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup({ email, password });
      alert("Signup successful!");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
