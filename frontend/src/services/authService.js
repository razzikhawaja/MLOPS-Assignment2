import axios from 'axios';

export const signup = async (userData) => axios.post('/api/auth/signup', userData);
export const login = async (userData) => axios.post('/api/auth/login', userData);
export const forgotPassword = async (email) => axios.post('/api/auth/forgot-password', { email });
