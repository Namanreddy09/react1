// src/components/LoginForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data);
      toast.success('Login successful!', { position: 'top-center', autoClose: 3000 });
      setTimeout(() => navigate('/dashboard'), 3000);
    } catch (error) {
      toast.error(error || 'Invalid credentials!', { position: 'top-center', autoClose: 3000 });
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" {...register('password')} placeholder="Password" />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Log In</button>
      </form>
      <p className="bottom-text">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;
