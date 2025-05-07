import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm({ setMessage }) {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.post('http://localhost:5000/api/register', {
          name: form.name,
          email: form.email.toLowerCase(),
          password: form.password
        });
        setMessage({ type: 'success', text: res.data.message });
        setForm({ name: '', email: '', password: '' });
      } catch (err) {
        const msg = err.response?.data?.message || 'Error during registration';
        setMessage({ type: 'error', text: msg });
      }
    };
  
    return (
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    );
  }