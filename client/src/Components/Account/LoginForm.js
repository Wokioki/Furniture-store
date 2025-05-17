import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ setMessage, setUser }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email: form.email.toLowerCase(),
        password: form.password.trim()
      });
      setMessage({ type: 'success', text: res.data.message });
      setUser(res.data.user);
      localStorage.setItem('userId', res.data.user.id);
      setForm({ email: '', password: '' });
    } catch (err) {
      const msg = err.response?.data?.message || 'Login error';
      setMessage({ type: 'error', text: msg });
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
      <button type="submit">Login</button>
    </form>
  );
}