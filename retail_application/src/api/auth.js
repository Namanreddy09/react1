// src/api/auth.js
import axios from 'axios';

const USE_LOCAL_STORAGE = true;  // Change to false if you want API-based authentication
const API_URL = 'https://your-api-endpoint.com';

export const registerUser = async (data) => {
  try {
    if (USE_LOCAL_STORAGE) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.some(user => user.email === data.email)) {
        throw new Error('Email already registered!');
      }
      users.push({ username: data.username, email: data.email, password: data.password });
      localStorage.setItem('users', JSON.stringify(users));
      return data;
    } else {
      const response = await axios.post(`${API_URL}/register`, data);
      return response.data;
    }
  } catch (error) {
    throw error.message || 'Registration failed!';
  }
};

export const loginUser = async (data) => {
  try {
    if (USE_LOCAL_STORAGE) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(user => user.email === data.email && user.password === data.password);
      if (!user) throw new Error('Invalid email or password');
      return user;
    } else {
      const response = await axios.post(`${API_URL}/login`, data);
      return response.data;
    }
  } catch (error) {
    throw error.message || 'Login failed!';
  }
};
