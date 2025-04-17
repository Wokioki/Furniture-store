import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './AccountPopup.css';

export default function AccountPopup({ onClose }) {
  const [activeTab, setActiveTab] = useState('login');
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);


  if (user) {
    const initial = user.name ? user.name.charAt(0).toUpperCase() : '?';
  
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content account-box" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={onClose}>×</button>
          <div className="avatar-circle">{initial}</div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className="logout-btn" onClick={() => setUser(null)}>Logout</button>
        </div>
      </div>
    );
  }


  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>

        <div className="tab-buttons">
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        {message && (
          <p className={`popup-message ${message.type}`}>
            {message.text}
          </p>
        )}

          {activeTab === 'login' ? (
            <LoginForm setMessage={setMessage} setUser={setUser} />
          ) : (
            <RegisterForm setMessage={setMessage} />
        )}
      </div>
    </div>
  );
}