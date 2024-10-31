import React, { useState } from 'react';
import { forgotPassword } from '../services/authService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      alert("Password reset link sent to your email");
    } catch (error) {
      alert("Failed to send reset link");
    }
  };

  return (
    <form onSubmit={handleForgotPassword}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPassword;
