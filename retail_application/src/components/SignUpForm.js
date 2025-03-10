// src/components/SignUpForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const schema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      toast.success('Registration successful!', { position: 'top-center', autoClose: 3000 });
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      toast.error(error || 'Email already registered!', { position: 'top-center', autoClose: 3000 });
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username')} placeholder="Username" />
        {errors.username && <p className="error">{errors.username.message}</p>}

        <input {...register('email')} placeholder="Email" />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" {...register('password')} placeholder="Password" />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <input type="password" {...register('confirmPassword')} placeholder="Confirm Password" />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

        <button type="submit">Sign Up</button>
      </form>
      <p className="bottom-text">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
};

export default SignUpForm;
